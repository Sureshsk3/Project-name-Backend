import mongoose from "./indexModel.js";
import { validateEmail, validatePhone } from "../utils/validation.js";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Name is Required"],
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
      validate: {
        validator: validateEmail,
        message: (props) => `${props.value} is not a valid Email`,
      },
    },
    phone: {
      type: Number,
      required: [true, "Phone Number is Required"],
      validate: {
        validator: validatePhone,
        message: (props) => `${props.value} is not a valid PhoneNumber`,
      },
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
    },
    role: {
      type: String,
      enum: ["Employee", "Admin"],
      default: "Employee",
    },
    status: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

const userModel = new mongoose.model("users", userSchema);
export default userModel;
