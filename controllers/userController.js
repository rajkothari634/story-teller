const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      throw Error("either email or password is missing");
    } else {
      if (!req.body.story) {
        console.log("inside createUser");
        const newUser = await User.create(req.body);
        if (newUser) {
          res.status(200).json({
            status: 200,
            message: "account created",
            user: newUser,
          });
        } else {
          throw Error("unknown error");
        }
      } else {
        throw Error("story shouldn't be given at the time creating account");
      }
    }
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err,
    });
  }
};

exports.addStory = async (req, res) => {
  try {
    if (!req.email || !req.password || !req.story) {
      throw Error("attributes are missing");
    } else {
        
    }
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err,
    });
  }
};
