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
  key: {
    type: String,
  },
  story: [
    {
      imagepath: String,
      imagecontent: String,
      date: Date,
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
