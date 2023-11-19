require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const userRoute = require("./routes/user");
const categoryRoute = require("./routes/category");
const postRoute = require("./routes/post");
const { connect } = require("./models/connection");

const app = express();
app.use(express.json());
app.use(fileUpload());

// Database Connection
connect();

app.use("/", userRoute);
app.use("/categories", categoryRoute);
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
