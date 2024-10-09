import { Router } from "express";
import services from "../service/service.js";
import verify from "../middleware/verifyUser.js";
import verifyAdmin from "../middleware/verifyAdmin.js";

const servicingRouter = Router();

servicingRouter.get("/",  services.getAllServices);
servicingRouter.get("/:id", verify, verifyAdmin, services.getOneService);
servicingRouter.post("/", verify, verifyAdmin, services.createService);
servicingRouter.put("/:id", verify, verifyAdmin, services.updateService);
servicingRouter.delete("/:id", verify, verifyAdmin, services.deleteService);

export default servicingRouter;
