require("dotenv").config();
const express = require("express");
const path = require("path");
const fileUpload = require("express-fileupload");
const userRoute = require("./routes/user");
const postRoute = require("./routes/post");
const { connect } = require("./db/connection");
const { saveFile, saveFiles, deleteFile } = require("./utlis/gallery");

const app = express();
app.use(express.json());
app.use(fileUpload());

// Database Connection
connect();

// Single File Upload Route
app.post("/gallery", saveFile, (req, res, next) => {
  res.status(200).json({ msg: "File Uploaded", filename: `${req.image}` });
});

// Multiple Files Upload Route
app.post("/galleries", saveFiles, (req, res, next) => {
  res.status(200).json({ msg: "Files Uploaded", filename: `${req.images}` });
});

// Delete File
app.post("/delete-gallery", async (req, res, next) => {
  await deleteFile(req.body.name);
  res.status(200).json({ msg: "File Deleted" });
});

// Preview File
app.use("/uploads", express.static(path.join(__dirname,'uploads')));

app.use("/users", userRoute);
app.use("/posts", postRoute);

// Error Handling
app.use((err, req, res, next) => {
  err.status = err.status || 200;
  res.status(err.status).json({
    con: false,
    msg: err.message,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at Port ${process.env.PORT}`);
});
