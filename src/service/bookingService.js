import bookingModel from "../model/bookingModel.js";

const getAllBooking = async (req, res) => {
  try {
    const booking = await bookingModel.find();
    res.status(200).send({
      message: "Booking Data Fetched Successfull",
      data: booking,
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};
const getOneBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await bookingModel.find({ userId: id });
    res.status(200).send({
      message: "Booking Data Fetched Successfull",
      data: booking,
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};
const createBooking = async (req, res) => {
  try {
       
     const createBooking =  await bookingModel.create(req.body);
      res.status(201).send({
        message: "Booking Created Successfull",
      });
  
  } catch (error) {
    console.log(error);

    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};
const updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await bookingModel.findOne({ _id: id });
    if (booking) {
      booking._id;
      booking.serviceId = req.body.serviceId;
      booking.userId = req.body.userId;
      booking.Date = req.body.Date;
      booking.Time = req.body.Time;
      await bookingModel.updateOne(req.body);
      res.status(200).send({
        message: "Booking Update Successfull",
      });
    } else {
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};
const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await bookingModel.deleteOne({ _id: id });
    res.status(200).send({
      message: "Booking Deleted Successfull",
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};
export default {
  deleteBooking,
  updateBooking,
  createBooking,
  getOneBooking,
  getAllBooking,
};
