import serviceModel from "../model/serviceModel.js";

const getAllServices = async (req, res) => {
  try {
    const services = await serviceModel.find({},{_id:0,status:0});
    res.status(200).send({
      message: "Services Fetched Successfull",
      data:services,
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};
const getOneService = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await serviceModel.findOne({ _id: id });
    if(service){
      res.status(200).send({
        message: "Booking Data Fetched Successfull",
        service,
      });
    }else{
      res.status(400).send({
        message: "Service Not Available",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};
const createService = async (req, res) => {
  try {
    const availService = await serviceModel.findOne({
      serviceName: req.body.serviceName,
    });
    if (!availService) {
      const service = await serviceModel.create(req.body);
      res.status(201).send({
        message: "Booking Created Successfull",
        service
      });
    }else{
      res.status(400).send({
        message: "Service is Already Exisits",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};
const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await serviceModel.findOne({ _id: id });
    if (service) {
      service._id;
      service.serviceName = req.body.serviceName;
      service.amount = req.body.amount;
      service.description = req.body.description;
      service.image = req.body.description;
      await serviceModel.updateOne(req.body);
      res.status(200).send({
        message: "Booking Updated Successfull",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};
const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await serviceModel.deleteOne({ _id: id });
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
  deleteService,
  updateService,
  createService,
  getOneService,
  getAllServices,
};
