import { Router } from "express";
import userRouter from "./UserRouter.js";
import loginRouter from "./loginRouter.js";

const router = Router();

router.use("/login", loginRouter);
router.use("/user", userRouter);
// router.use("/bookings");

export default router;
