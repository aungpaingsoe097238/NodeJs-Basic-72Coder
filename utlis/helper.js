const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const msg = (res, msg = "success", result = []) => {
  res.status(200).json({
    con: true,
    msg,
    result,
  });
};

module.exports = {
  encode: (password) => bcrypt.hashSync(password),
  compare: (plain_password, hash_password) =>
    bcrypt.compareSync(plain_password, hash_password),
  generateToken: (payload) =>
    jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1h" }),
  msg,
};
