import { Router } from "express";
import UserService from "../service/UserService.js";
import verifyUser from "../middleware/verifyUser.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
const userRouter = Router();

userRouter.get("/", verifyUser, verifyAdmin, UserService.getAllUser);
userRouter.get("/:id", verifyUser, UserService.userOne);
userRouter.post("/", UserService.createUser);
userRouter.put("/:id", verifyUser, UserService.updateUser);
userRouter.delete("/:id", verifyUser, UserService.deleteUser);

export default userRouter;
