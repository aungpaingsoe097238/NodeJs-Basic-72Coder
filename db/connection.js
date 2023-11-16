const mongoose = require("mongoose");

// MongoDB Url
const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.45swmim.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

// Check MongoDB Connections
const connect = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connect };
