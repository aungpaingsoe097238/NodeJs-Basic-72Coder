const router = require("express").Router();
const { all, post, get, patch, drop } = require("../controllers/user");

router.get("/", all);
router.post("/", post);
router.route("/:id").get(get).patch(patch).delete(drop);

module.exports = router;
