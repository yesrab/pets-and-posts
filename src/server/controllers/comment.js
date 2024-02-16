const PostData = require("../model/posts");
const addComment = async (req, res) => {
  const { comment, postId, user } = req.body;
  const post = await PostData.findById(postId).exec();
  post.comments.push({ comment, user });
  post.save();
  res.json(post);
};
module.exports = { addComment };
