const jwt = require("jsonwebtoken");
const userDB = require("../models/user");

module.exports = {
  ValidateBody: (schema) => {
    return (req, res, next) => {
      const result = schema.validate(req.body);
      console.log( result );
      if (result.error) {
        next(new Error(result.error.details[0].message));
      } else {
        next();
      }
    };
  },
  ValidateParam: (schema, name) => {
    return (req, res, next) => {
      let obj = {};
      obj[`${name}`] = req.params[`${name}`];
      let result = schema.validate(obj);
      if (result.error) {
        next(new Error(result.error.details[0].message));
      } else {
        next();
      }
    };
  },
  ValidateToken: async (req, res, next) => {
    let token = req.headers.authorization;
    if (token) {
      let decodeUser = jwt.decode(token.split(" ")[1]);
      let user = await userDB.findById(decodeUser._id);
      if (user) {
        req.body.user = user;
        next();
      } else {
        next(new Error("unauthorized"));
      }
    } else {
      next(new Error("unauthorized"));
    }
  },
};
