const User = require("../models/User");

module.exports = function (req, res) {
  const { name, email, password } = req.body;

  User.create({ name, email, password })
    .then((newUser) => {
      res.send(newUser);
      console.log("create new user successfully.", newUser);
    })
    .catch((error) => console.log(error));
};
