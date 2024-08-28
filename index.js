import express from "express";
import "dotenv/config.js";
import router from "./src/routes/indexRoutes.js";
import cors from "cors";
const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(router);
app.listen(PORT, () => console.log(`Server is listening port ${PORT}`));
