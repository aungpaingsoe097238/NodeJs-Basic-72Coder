const router = require("express").Router();
const { all, add, get, patch, drop } = require("../controllers/category");
const { saveFile } = require("../utlis/gallery");
const { Schema } = require("../utlis/Schema");
const { ValidateBody, ValidateParam } = require("../utlis/validator");

router.get("/", all);
router.post("/", [saveFile, ValidateBody(Schema.addCategory), add]);
router
  .route("/:id")
  .get([ValidateParam(Schema.allSchema.id, "id"), get])
  .patch([
    ValidateParam(Schema.allSchema.id, "id"),
    saveFile,
    ValidateBody(Schema.allSchema.image),
    patch,
  ])
  .delete([ValidateParam(Schema.allSchema.id, "id"), drop]);

module.exports = router;
