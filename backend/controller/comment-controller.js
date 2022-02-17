const commentSchema = require("../models/comment-model");

async function createComment(req, res) {
  const { author, product, text } = req.body;

  const newcomment = commentSchema({
    text: text,
    author: author,
    product: product,
  });
  try {
    const comment = await newcomment.save();
    res.json({ newComment: comment });
  } catch (error) {
    res.json(error);
  }
}
exports.createComment = createComment