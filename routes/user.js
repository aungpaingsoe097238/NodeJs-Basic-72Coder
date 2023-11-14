const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    msg: "All Users",
  });
});

router.post("/", (req, res) => {
  res.json({
    msg: "Post a User",
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
//     msg: `Get User id is ${id}`,
//   });
// });

// router.patch("/:id", (req, res) => {
//   const id = req.params.id;
//   const body = req.body;
//   res.json({
//     msg: `Update User id is ${id}`,
//     data: body,
//   });
// });

// router.delete("/:id", (req, res) => {
//   const id = req.params.id;
//   res.json({
//     msg: `Delete User id is ${id}`,
//   });
// });

module.exports = router;
