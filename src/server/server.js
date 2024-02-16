const express = require("express");
require("dotenv").config();
require("express-async-errors");
const connectDB = require("./db/connect");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
const postRoute = require("./routes/posts");
const commentRoute = require("./routes/comments");
app.use("/api/v1/job/", postRoute);
app.use("/api/v1/userComments", commentRoute);

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.DB);
    console.log("Connected to DataBase");
    app.listen(PORT, () => console.log(`Server is listening port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
