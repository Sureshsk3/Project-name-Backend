import mongoose from "./indexModel.js";

const serviceSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: [true, "Service Name is Required"],
  },
  amount: {
    type: Number,
    required: [true, "Amount is Required"],
  },
  description: {
    type: String,
    required: [true, "Description is Required"],
  },
  image: {
    type: String,
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
},
{
versionKey:false
});

export default new mongoose.model("services", serviceSchema);
