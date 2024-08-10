const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const post = require("./rotutes/post.js");
const course = require("./rotutes/course.js")


dotenv.config();
const port = 5000;
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error.message);
  });



app.use("/api/posts", post);
app.use("/api/course",course);




app.listen(port, () => {
  console.log(`App is listening at port ${port}`);
});
