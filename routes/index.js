const express = require("express");
const path = require("path");
const login = require("../controllers/login");
const createUser = require("../controllers/createUser");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../pages/index.html"));
});

router.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../pages/about.html"));
});

router.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../pages/contact.html"));
});

router.get("/post", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../pages/post.html"));
});

router.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../pages/login.html"));
});

router.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../pages/registration.html"));
});

router.post("/login", login);

router.post("/register", createUser);

module.exports = router;
