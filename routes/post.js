const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    msg: "All Posts",
  });
});

router.post("/", (req, res) => {
  res.json({
    msg: "Post a Post",
  });
});

router
  .route("/:id")
  .get((req, res) => res.json(req.params.id))
  .patch((req, res) => res.json(req.params.id))
  .delete((req, res) => res.json(req.params.id))

// router.get("/:id", (req, res) => {
//   const id = req.params.id;
//   res.json({
//     msg: `Get Post id is ${id}`,
//   });
// });

// router.patch("/:id", (req, res) => {
//   const id = req.params.id;
//   const body = req.body;
//   res.json({
//     msg: `Update Post id is ${id}`,
//     data: body,
//   });
// });

// router.delete("/:id", (req, res) => {
//   const id = req.params.id;
//   res.json({
//     msg: `Delete Post id is ${id}`,
//   });
// });

module.exports = router;
