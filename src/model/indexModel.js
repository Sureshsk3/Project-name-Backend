import "dotenv/config.js";
import mongoose from "mongoose";

mongoose
  .connect(`${process.env.MONGODB_URL}/${process.env.MONGODB_DBName}`)
  .then((value) => console.log("Database Connected Successfull"))
  .catch((err) => console.log(err));

export default mongoose;
