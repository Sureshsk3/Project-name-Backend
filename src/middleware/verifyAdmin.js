import auth from "../utils/auth.js";
import userModel from "../model/userModel.js";
const verifyAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (token) {
      const payload = await auth.decodetoken(token);
      const user = await userModel.findById(payload._id);
      if (user && payload.role === "Admin" && user.role === payload.role) {
        next();
      } else {
        res.status(401).send({
          message: "Unauthorized Access",
        });
      }
    } else {
      res.status(401).send({
        message: "Invalid token",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

export default verifyAdmin;
