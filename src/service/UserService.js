import userModel from "../model/userModel.js";
import auth from "../utils/auth.js";

const getAllUser = async (req, res) => {
  try {
    const allUser = await userModel.find(
      {},
      { password: 0, confirmPassword: 0 }
    );
    res.status(200).send({
      message: "User Data Fetched Successfull",
      data: allUser,
    });
  } catch (error) {
    res.sendStatus(500);
  }
};
const userOne = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findOne(
      { _id: id },
      { password: 0, confirmPassword: 0, status: 0, createdAt: 0 }
    );
    if (user) {
      res.status(200).send({
        message: "User Data Fetched Successfull",
        data: user,
      });
    } else {
      res.status(200).send({
        message: "User Not Available",
      });
    }
  } catch (error) {
    console.log(error);

    res.sendStatus(500);
  }
};
const createUser = async (req, res) => {
  
  try {
    const user = await userModel.findOne({ email: req.body.email });
    
    if (!user) {
      (req.body.password = await auth.harshedItem(req.body.password)),
      await userModel.create(req.body);
      res.status(201).send({
        message: "User Created Successful",
      });
    } else {
      res.status(400).send({
        message: "User is Already Exisits",
      });
    }
  } catch (error) {    
    res.sendStatus(500);
  }
};
const updateUser = async (req, res) => {
  try {
  } catch (error) {
    res.sendStatus(500);
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await userModel.deleteOne({ _id: id });
    res.status(200).send({
      message: "User Deleted Successful",
    });
  } catch (error) {

    res.sendStatus(500);
  }
};

export default {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  userOne,
};
