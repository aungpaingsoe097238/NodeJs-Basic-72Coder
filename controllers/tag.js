const DB = require("../models/tag");
const { msg } = require("../utlis/helper");

const all = async (req, res, next) => {
  const tags = await DB.find();
  msg(res, "success", tags);
};

const add = async (req, res, next) => {
  let dbTag = await DB.findOne({ name: req.body.name });
  if (dbTag) {
    next(new Error("Same Record."));
  } else {
    const tag = await new DB(req.body).save();
    msg(res, "success", tag);
  }
};

const get = async (req, res, next) => {
  let tag = await DB.findById(req.params.id);
  if (!tag) {
    next(new Error("Tag not found"));
  } else {
    msg(res, "success", tag);
  }
};

const patch = async (req, res, next) => {
  let tag = await DB.findById(req.params.id);
  if (!tag) {
    next(new Error("Tag not found"));
  } else {
    const result = await DB.findByIdAndUpdate(tag._id, req.body);
    let updateTag = await DB.findById(result._id);
    msg(res, "success", updateTag);
  }
};

const drop = async (req, res, next) => {
  let tag = await DB.findById(req.params.id);
  if (!tag) {
    next(new Error("Tag not found"));
  } else {
    await DB.findByIdAndDelete(tag._id);
    msg(res, "success");
  }
};

module.exports = {
  all,
  add,
  get,
  patch,
  drop,
};
