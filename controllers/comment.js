const DB = require("../models/comment");
const { msg } = require("../utlis/helper");

const all = async (req, res, next) => {
  const commentByPost = await DB.find({ postId : req.params.id });
  msg(res,'succes',commentByPost)
};

const add = async (req, res, next) => {
  const comment = await new DB(req.body).save();
  msg(res, "success", comment);
};

const drop = async (req, res, next) => {
  const dbComment = await DB.findById(req.params.id);
  if (!dbComment) {
    next(new Error("comment not found"));
  } else {
    await DB.findByIdAndDelete(req.params.id);
    msg(res, "success");
  }
};

module.exports = { add, all, drop };
