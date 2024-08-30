import { Router } from "express";
import userRouter from "./UserRouter.js";
import loginRouter from "./loginRouter.js";
import bookingRouter from "./bookingRouter.js";
import servicingRouter from "./servicingRouter.js";
const router = Router();
router.get("/", (req, res) => {
  try {
    res.status(200).send({
      message: "Welcome to backend Express",
    });
  } catch (error) {
    res.status(400).send({
      message: "Bad Request",
    });
  }
});
router.use("/login", loginRouter);
router.use("/user", userRouter);
router.use("/booking", bookingRouter);
router.use("/service", servicingRouter);

export default router;
