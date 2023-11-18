const router = require("express").Router();
const { all, add } = require("../controllers/category");
const { saveFile } = require("../utlis/gallery");
const { Schema } = require("../utlis/Schema");
const { ValidateBody } = require("../utlis/validator");

router.get("/", all);
router.post("/", [saveFile, ValidateBody(Schema.addCategory), add]);

module.exports = router;
