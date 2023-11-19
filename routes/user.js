const router = require("express").Router();
const { register, login } = require("../controllers/user");
const { Schema } = require("../utlis/Schema");
const { ValidateBody } = require("../utlis/validator");

router.post("/login", [ValidateBody(Schema.LoginSchema), login]);
router.post("/register", [ValidateBody(Schema.RegisterSchema), register]);

module.exports = router;
