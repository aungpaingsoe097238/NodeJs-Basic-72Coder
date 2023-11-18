const mongoose = require("mongoose");

// MongoDB Url
const url = process.env.DB_URL;

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
