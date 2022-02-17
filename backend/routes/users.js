const express = require("express");
const multer = require("multer");
const userRouter = express.Router();
const userController = require("../controller/user-controller");
const userImageStorage = require("../middleware/user-image-upload");

const uploadAvatar = multer({ storage: userImageStorage });

userRouter.post(
  "/",
  uploadAvatar.single("profilePic"),
  userController.createUser
);

module.exports = userRouter;
