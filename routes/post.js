const router = require("express").Router();
const { all, post, get, patch, drop } = require("../controllers/post");
const { saveFile } = require("../utlis/gallery");
const { Schema } = require("../utlis/Schema");
const { ValidateToken, ValidateBody } = require("../utlis/validator");

router.get("/", all);
router.post("/", [
  ValidateToken,
  saveFile,
  ValidateBody(Schema.PostSchema),
  post,
]);
router.route("/:id").get(get).patch(patch).delete(drop);

module.exports = router;
