const commentRouter = require("express").Router();
const commentController = require("../controller/comment-controller")

commentRouter.post("/", commentController.createComment);

module.exports = commentRouter;
