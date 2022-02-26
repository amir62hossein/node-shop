const express = require("express");
const multer = require("multer");
const userRouter = express.Router();
const userController = require("../controller/user-controller");
const userImageStorage = require("../middleware/user-image-upload");

const uploadAvatar = multer({ storage: userImageStorage });

userRouter.post(
  "/register",
  uploadAvatar.single("profilePic"),
  userController.createUser
);

userRouter.post("/login", userController.loginUser);

module.exports = userRouter;
