const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = (req, res) => {
  const { email, password } = req.body;
  //write code here to login

  if (!email || !password) {
    res.status(400).json({ message: "Email and password is required." });
  }
  const user = User.findOne({ email });

  user
    .then((user) => {
      if (user) {
        bcrypt.compare(password, user.password).then((same) => {
          if (same) {
            res.json(user);
          } else {
            res.status(400).json({ message: "Password is incorrect." });
          }
        });
      } else {
        res.status(400).json({ message: "User not exist" });
      }
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Server error. Please try again later." });
    });
};
