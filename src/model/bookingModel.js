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
    StartTime: {
      type: Date,
      required: [true, "StartTime is Required"],
    },
    endTime: {
      type: Date,
      required: [true, "EndTime is Required"],
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
