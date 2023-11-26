const router = require("express").Router();
const { all, add, get, patch, drop } = require("../controllers/tag");
const { saveFile } = require("../utlis/gallery");
const { Schema } = require("../utlis/Schema");
const {
  ValidateBody,
  ValidateParam,
  ValidateToken,
} = require("../utlis/validator");

router.get("/", all);
router.post("/", [
  ValidateToken,
  saveFile,
  ValidateBody(Schema.tagSchema),
  add,
]);
router
  .route("/:id")
  .get([ValidateToken, ValidateParam(Schema.allSchema.id, "id"), get])
  .patch([ValidateToken, ValidateParam(Schema.allSchema.id, "id"), patch])
  .delete([ValidateToken, ValidateParam(Schema.allSchema.id, "id"), drop]);

module.exports = router;
