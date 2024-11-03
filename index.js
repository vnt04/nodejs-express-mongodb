const express = require("express");
const mongoose = require("mongoose");

const app = express();

// middleware serve static file
app.use(express.static("public"));

//Routes
const router = require("./routes");
app.use("/", router);

// connect to database
mongoose
  .connect("mongodb://localhost/blog_database")
  .then(() => {
    console.log("Database connected successfully.");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

//Port runs server
app.listen(8000, () => {
  console.log("App is running on port 8000");
});
