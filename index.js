const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

// middleware serve static file
app.use(express.static("public"));


//Routes
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/contact.html"));
});

app.get("/post", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/post.html"));
});

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
