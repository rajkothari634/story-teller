const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.route("/create").post(userController.createUser);
router.route("/addstory").post(userController.addStory);

// router
//   .route('/:id')
//   .get(userController.getUser)
//   .patch(userController.updateUser);
module.exports = router;
