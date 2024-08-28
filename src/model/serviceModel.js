import mongoose from "./indexModel.js";

const serviceSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: [true, "Service Name is Required"],
  },
  amount: {
    type: number,
    required: [true, "Amount is Required"],
  },
  description: {
    type: String,
    required: [true, "Description is Required"],
  },
  image: {
    type: String,
    required: [true, "Name is Required"],
    enum: [],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: Boolean,
    default: true,
  },
});
