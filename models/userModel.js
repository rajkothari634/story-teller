const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    validator: [validator.isEmail, "please provide a valid email"],
  },
  story: [
    {
      imagepath: String,
      imagecontent: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
