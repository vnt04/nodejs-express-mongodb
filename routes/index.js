const express = require("express");
const path = require("path");
const login = require("../controllers/login");
const register = require("../controllers/register");

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

router.get("/login", login);
router.get("/register", register);

module.exports = router;
