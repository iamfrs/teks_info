import mongoose from "mongoose";
import bodyParser from "body-parser";
import { envValidator } from "node_custom_utils";
import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import adminRouter from "./app/roots/admin";
//─────────────────────────────── oms ───────────────────────────────
const app = express();
app.use(fileUpload());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const PORT = 3000;
//─────────────────────────────── oms ───────────────────────────────

mongoose
  .connect("mongodb://localhost:27017/teks_info")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

//─────────────────────────────── oms ───────────────────────────────

import http from "http";

import { Server, Socket } from "socket.io";

const server = http.createServer(app);
const io = new Server(server);

declare module "socket.io" {
  interface Socket {
    group?: string | undefined;
  }
}

io.on("connection", (socket: Socket) => {
  console.log("A new client connected");

  socket.emit("join", `you joined`);
  socket.broadcast.emit("join", `${socket.id} joined`);
  io.to(`${socket.handshake.headers.group}`).emit("join");

  console.log(`a user connected  ${socket.id}`);
  socket.on("chat-message", (msg: string) => {
    io.emit("chat-message", { msg, id: socket.id });
  });

  socket.on("disconnect", () => {
    io.to(`${socket.handshake.headers.group}`).emit("close");
    io.emit("close", `${socket.id} closed`);
  });
});

export { io };

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
//─────────────────────────────── oms ───────────────────────────────
app.use("/admin", adminRouter);
//─────────────────────────────── oms ───────────────────────────────

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
