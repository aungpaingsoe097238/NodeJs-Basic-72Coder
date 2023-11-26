const router = require("express").Router();
const {
  all,
  post,
  get,
  patch,
  drop,
  by_category,
  by_user,
  by_tag,
  paginate,
} = require("../controllers/post");
const { saveFile } = require("../utlis/gallery");
const { Schema } = require("../utlis/Schema");
const {
  ValidateToken,
  ValidateBody,
  ValidateParam,
} = require("../utlis/validator");

router.get("/", all);
router.post("/", [
  ValidateToken,
  saveFile,
  ValidateBody(Schema.PostSchema),
  post,
]);
router
  .route("/:id")
  .get(get)
  .patch([ValidateToken, patch])
  .delete([ValidateToken, drop]);
router.get("/by_category/:id", [ValidateToken, by_category]);
router.get("/by_user/:id", [ValidateToken, by_user]);
router.get("/by_tag/:id", [ValidateToken, by_tag]);
router.get(
  "/paginate/:page", [(ValidateParam(Schema.allSchema.page, "page"), paginate)]
);

module.exports = router;
