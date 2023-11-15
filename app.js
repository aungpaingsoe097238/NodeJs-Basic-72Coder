require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const userRoute = require("./routes/user");
const postRoute = require("./routes/post");

app.use("/users", userRoute);
app.use("/posts", postRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at Port ${process.env.PORT}`);
});
