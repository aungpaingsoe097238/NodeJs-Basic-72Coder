const DB = require("../models/category");
const { msg } = require("../utlis/helper");

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

module.exports = {
  all,
  add,
  get,
};
