import auth from "../utils/auth.js";
import userModel from "../model/userModel.js";
const verifyAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];        
    if (token) {
      const payload = await auth.decodetoken(token);
      
      const user = await userModel.findOne({_id:payload._id});
      console.log(user);
      console.log(payload);
      
      
      
      
      
      if (user && payload.role === "Admin" && user.role === payload.role) {
        next();
        console.log("success");
        
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
