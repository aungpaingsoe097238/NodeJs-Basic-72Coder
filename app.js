require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());

// MongoDb Url
const url = "mongodb+srv://admin:adminpass@cluster0.45swmim.mongodb.net/node-syntax?retryWrites=true&w=majority"

// Check MongoDb Connections
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

app.listen(process.env.PORT, () => {
  console.log(`Server is running at Port ${process.env.PORT}`);
});
