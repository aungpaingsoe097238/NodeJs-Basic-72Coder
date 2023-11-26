const DB = require("../models/post");
const commentDB = require("../models/comment");
const { msg } = require("../utlis/helper");

const all = async (req, res, next) => {
  const posts = await DB.find().populate("user category", "-password -__v");
  msg(res, "success", posts);
};

const post = async (req, res, next) => {
  let userId = req.body.user._id;
  delete req.body.user;
  req.body.user = userId;
  let result = await new DB(req.body).save();
  msg(res, "success", result);
};

const get = async (req, res, next) => {
  let post = await DB.findById(req.params.id, "-__v").populate(
    "user",
    "-password -__v"
  );
  let comments =  await commentDB.find({ postId : post._id });
  post = post.toObject();
  post['comments'] = comments;
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

const by_category = async (req, res, next) => {
  const posts = await DB.find({
    category: req.params.id,
  }).populate("user category");
  msg(res, "success", posts);
};

const by_user = async (req, res, next) => {
  const posts = await DB.find({
    user: req.params.id,
  }).populate("user category");
  msg(res, "success", posts);
};

const by_tag = async (req, res, next) => {
  const posts = await DB.find({
    tag: req.params.id,
  }).populate("tag");
  msg(res, "success", posts);
};

const paginate = async (req, res, next) => {
  let page = req.params.page;
  page = page == 1 ? 0 : page - 1;
  let limit = Number(process.env.POST_LIMIT);
  let skipCount = limit * page;
  let posts = await DB.find().skip(skipCount).limit(limit);
  msg(res, "success", posts);
};

module.exports = {
  all,
  post,
  get,
  patch,
  drop,
  by_category,
  by_user,
  by_tag,
  paginate,
};
