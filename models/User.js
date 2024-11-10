const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    validate: {
      validator: function (v) {
        return v.length > 5;
      },
      message: (prop) => {
        console.log(prop);
        return `${prop.value} is too short. Minimum length is 6.`;
      },
    },
    required: [true, "Mật khẩu là bắt buộc."],
  },
});

userSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  try {
    const getSalt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, getSalt);
    next();
  } catch (error) {
    console.log(error);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
