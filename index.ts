


import mongoose, { Types } from "mongoose";
import express from "express";
import http from "http";
import { hasData } from "node_custom_utils";
import { Server, Socket } from "socket.io";
import adminRouter from "./app/roots/admin";
import fileUpload from "express-fileupload";
import cors from "cors";
import { tokenDecode } from "./utils/jwt_utils";
import { Request, Response } from "express";
import { errorResponse, toJson } from "node_custom_utils";
import { User } from "./app/models/user/user_model";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

declare module "socket.io" {
  interface Socket {
    group?: string | undefined;
  }
}
app.use(fileUpload());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/", (req, res) => {
  res.sendFile("you are in home");
});
mongoose
  .connect("mongodb://localhost:27017/teks_info")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/admin", adminRouter);

app.get("/verify", async (req: Request, res: Response) => {
  try {
    const decryptedMessage = tokenDecode(atob(req.query.d as string));

    if (decryptedMessage.error) {
      throw new Error("Verification failed");
    }

    const upUser = await User.findOneAndUpdate(
      new Types.ObjectId(decryptedMessage.value.data.uid as string),
      { active: true },
      { new: true } // This option ensures that you get the updated user in the result
    );

    return res.status(200).send("Verification successful.");
  } catch (error: any) {
    return res.status(200).send(error.toString());
  }
});

export { io };

io.on("connection", (socket: Socket) => {
  console.log(socket.handshake.headers.group);

  if (socket.handshake.headers.group) {
    socket.join(`${socket.handshake.headers.group}`);
  }
  socket.emit("join", `you joined`);
  socket.broadcast.emit("join", `${socket.id} joined`);
  io.to(`${socket.handshake.headers.group}`).emit(
    "join",
    `${socket.id} joined in ${socket.handshake.headers.group}`
  );

  console.log(`a user connected  ${socket.id}`);
  socket.on("chat-message", (msg: string) => {
    io.emit("chat-message", { msg, id: socket.id });
  });
  socket.on("like", (data: any) => {
    io.emit("like", data);
    if (!hasData(data.id)) {
    }
    console.log(`${data.id}`);
  });

  socket.on("disconnect", () => {
    io.to(`${socket.handshake.headers.group}`).emit(
      "close",
      `${socket.id} closed in ${socket.handshake.headers.group}`
    );
    socket.leave(`${socket.handshake.headers.group}`);
    io.emit("close", `${socket.id} closed`);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
