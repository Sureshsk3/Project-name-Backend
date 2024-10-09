import mongoose from "./indexModel.js";
import { validatePhone, validateEmail } from "../utils/validation.js";
const bookingSchema = new mongoose.Schema(
  {
    serviceName: {
      type: String,
      required: [true, "ServiceName Required"],
    },
    userName: {
      type: String,
      required: [true, "UserName Required"],
    },
    userEmail: {
      type: String,
      required: [true, "UserName Required"],
      validate: {
        validator: validateEmail,
        message: (props) => `${props.value} is not a valid Email`,
      },
    },
    userPhone: {
      type: String,
      required: [true, "UserName Required"],
      validate: {
        validator: validatePhone,
        message: (props) => `${props.value} is not a valid PhoneNumber`,
      },
    },
    userId: {
      type: String,
      required: [true, "UserId is Required"],
    },
    carModel: {
      type: String,
      required: [true, "Car Model is Required"],
    },
    selectMake: {
      type: String,
      required: [true, "Car Make is Required"],
    },
    date: {
      type: String,
      required: [true, "Date is Required"],
    },
    address: {
      type: String,
      required: [true, "Address is Required"],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    status: {
      type: String,
      enum: ["Pending", "Rejected", "Approved"],
      default: "Pending",
    },
  },
  {
    versionKey: false,
  }
);
export default new mongoose.model("booking", bookingSchema);
