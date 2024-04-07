import express from "express";
import { userLogin } from "../controllers/admin/login";
import { createUser } from "../controllers/admin/user_sign_up";
import { usersList } from "../controllers/admin/users_list";


const adminRouter = express.Router();

adminRouter.post("/login", userLogin);
adminRouter.post("/signup", createUser);
adminRouter.get("/list", usersList);

export default adminRouter;
