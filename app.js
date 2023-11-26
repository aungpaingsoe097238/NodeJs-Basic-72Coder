require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const userRoute = require("./routes/user");
const tagRoute = require("./routes/tag");
const categoryRoute = require("./routes/category");
const postRoute = require("./routes/post");
const commentRoute = require("./routes/comment");
const { connect } = require("./models/connection");

const app = express();
app.use(express.json());
app.use(fileUpload());

// Database Connection
connect();

app.use("/", userRoute);
app.use("/tags", tagRoute);
app.use("/categories", categoryRoute);
app.use("/posts", postRoute);
app.use("/comments", commentRoute);

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
