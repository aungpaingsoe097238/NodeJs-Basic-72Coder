const router = require("express").Router();
const { all, add, drop } = require("../controllers/comment");
const { Schema } = require("../utlis/Schema");
const {
  ValidateBody,
  ValidateToken,
  ValidateParam,
} = require("../utlis/validator");

router.get("/:id", all);
router.post("/", [ValidateToken, ValidateBody(Schema.commentSchema), add]);
router.delete("/:id", [
  ValidateParam(Schema.allSchema.id, "id"),
  ValidateToken,
  drop,
]);

module.exports = router;
