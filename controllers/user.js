const DB = require("../models/user");
const { msg, encode, compare, generateToken } = require("../utlis/helper");

const register = async (req, res, next) => {
  const findName = await DB.findOne({ name: req.body.name });
  if (findName) {
    next(new Error("Name is already exit."));
    return;
  }

  const findEmail = await DB.findOne({ email: req.body.email });
  if (findEmail) {
    next(new Error("Email is alerady exit."));
    return;
  }

  const findPhone = await DB.findOne({ phone: req.body.phone });
  if (findPhone) {
    next(new Error("Phone is alerady exit"));
    return;
  }

  req.body.password = encode(req.body.password);
  const user = await new DB(req.body).save();
  msg(res, "success", user);
};

const login = async (req, res, next) => {
  const user = await DB.findOne({ phone : req.body.phone }).select("-__v");
  if(!user){
    next(new Error("Invalid Credential."));
    return ;
  }
  const comparePassword = compare( req.body.password, user.password )  
  if(!comparePassword){
    next(new Error("Invalid Credential."));
    return;
  } else {
    let loginUser = user.toObject();
    delete loginUser.password;
    loginUser.token  = generateToken(loginUser);
    msg(res,'success',loginUser);
  }
};

module.exports = {
  register,
  login,
};
