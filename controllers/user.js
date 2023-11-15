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
  res.json({
    msg: `Get User ${req.params.id}`,
  });
};

const patch = async (req, res, next) => {
  res.json({
    msg: `Update User ${req.params.id}`,
    data: req.body,
  });
};

const drop = async (req, res, next) => {
  res.json({
    msg: `Delete User ${req.params.id}`,
  });
};

module.exports = {
  all,
  post,
  get,
  patch,
  drop,
};
