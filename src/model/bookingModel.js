import mongoose from "./indexModel.js";

const bookingSchema = new mongoose.Schema(
  {
    serviceId: {
      type: String,
      required: [true, "ServiceId Required"],
    },
    userId: {
      type: String,
      required: [true, "UserId is Required"],
    },
    Date: {
      type: Date,
      required: [true, "Date is Required"],
    },
    Time: {
      type: String,
      required: [true, "Time is Required"],
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
  }
);
export default new mongoose.model("booking", bookingSchema);
