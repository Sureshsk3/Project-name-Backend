import { Router } from "express";
import bookingService from "../service/bookingService.js";
import verify from "../middleware/verifyUser.js";
import verifyAdmin from "../middleware/verifyAdmin.js";

const bookingRouter = Router();

bookingRouter.get("/", verify, verifyAdmin, bookingService.getAllBooking);
bookingRouter.get("/:id", verify, bookingService.getOneBooking);
bookingRouter.post("/", verify, bookingService.createBooking);
bookingRouter.put("/:id", verify, bookingService.updateBooking);
bookingRouter.delete("/:id", verify, bookingService.deleteBooking);

export default bookingRouter;
