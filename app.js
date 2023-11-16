require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());

// MongoDB Url
const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.45swmim.mongodb.net/${process.env.DB_NAME}`;

// Check MongoDB Connections
const connect = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};

connect();

const userRoute = require("./routes/user");
const postRoute = require("./routes/post");

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
