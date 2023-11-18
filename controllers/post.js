const DB = require("../models/post");
const { msg } = require("../utlis/helper");

const all = async (req, res, next) => {
  const posts = await DB.find().populate("user","-password -__v");
  msg(res, "success", posts);
};

const post = async (req, res, next) => {
  const newPost = new DB(req.body);
  const result = await newPost.save();
  msg(res, "success", result);
};

const get = async (req, res, next) => {
  const post = await DB.findById(req.params.id,"-__v").populate("user","-password -__v");
  msg(res, "success", post);
};

const patch = async (req, res, next) => {
  const post = await DB.findById(req.params.id);
  if (post) {
    await DB.findByIdAndUpdate(post._id, req.body);
    let updatePost = await DB.findById(post._id);
    msg(res, "success", updatePost);
  } else {
    const error = new Error("Post not found.");
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
