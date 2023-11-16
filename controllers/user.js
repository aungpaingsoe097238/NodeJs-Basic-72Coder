const DB = require("../db/user");
const { msg } = require("../utlis/helper");

const all = async (req, res, next) => {
  let users = await DB.find();
  msg(res, "success", users);
};

const post = async (req, res, next) => {
  const newUser = new DB(req.body);
  const result = await newUser.save();
  msg(res, "success", result);
};

const get = async (req, res, next) => {
  const user = await DB.findById(req.params.id);
  msg(res, "success", user);
};

const patch = async (req, res, next) => {
  const user = await DB.findById(req.params.id);
  if (user) {
    await DB.findByIdAndUpdate(user._id, req.body);
    let updateUser = await DB.findById(user._id);
    msg(res, "success", updateUser);
  } else {
    const error = new Error("User not found.");
    error.status = 500; // You can set the status code for the error
    next(error);
  }
};

const drop = async (req, res, next) => {
  await DB.findByIdAndDelete(req.params.id);
  msg(res, "success");
};

module.exports = {
  all,
  post,
  get,
  patch,
  drop,
};
