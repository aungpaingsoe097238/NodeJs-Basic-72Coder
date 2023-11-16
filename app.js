require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const userRoute = require("./routes/user");
const postRoute = require("./routes/post");

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


const isLogged = (req, res, next) => {
  if (1 + 1 == 2) {
    req.successMsg = "We are good to go";
    next();
  } else {
    next(new Error("You are not logged in"));
  }
};

const isAdmin = (req, res, next) => {
  if (4 == 4) {
    console.log(req.successMsg);
    req.warningMsg = "We are warning";
    next();
  } else {
    next(new Error("Only Admin can access this route."));
  }
};

const funky = (req, res, next) => {
  res.json({
    msg: "Comming with Get method",
    success: req.successMsg,
    warning: req.warningMsg
  });
};


app.get("/users", isLogged, isAdmin, funky);
// app.use("/users", userRoute);
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
