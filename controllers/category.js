const DB = require("../models/category");
const { msg } = require("../utlis/helper");
const { deleteFile } = require("../utlis/gallery");

const all = async (req, res, next) => {
  const categories = await DB.find();
  msg(res, "success", categories);
};

const add = async (req, res, next) => {
  const findCategory = await DB.findOne({ name: req.body.name });
  if (findCategory) {
    next(new Error("This category is already exit"));
    return;
  }
  const category = await new DB(req.body).save();
  msg(res, "success", category);
};

const get = async (req, res, next) => {
  const category = await DB.findById(req.params.id);
  if (!category) {
    next(new Error("Can't find category."));
    return;
  }
  msg(res, "success", category);
};

const patch = async (req, res, next) => {
  const category = await DB.findById(req.params.id);
  if (!category) {
    next(new Error("Can't find category."));
    return;
  }
  await DB.findByIdAndUpdate(category._id, req.body);
  let result = await DB.findById(req.params.id);
  msg(res, "success", result);
};

const drop = async (req, res, next) => {
  const category = await DB.findById(req.params.id);
  if (!category) {
    next(new Error("Can't find category."));
    return;
  }
  await DB.findByIdAndDelete(category._id);
  if(category.image){
    deleteFile(category.image);
  }
  res.json({ con: true, msg: "Category Delete Successfully." });
};

module.exports = {
  all,
  add,
  get,
  patch,
  drop
};
