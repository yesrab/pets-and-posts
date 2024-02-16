const PostData = require("../model/posts");

const getPosts = async (req, res) => {
  const posts = await PostData.find();
  res.status(200).json(posts);
};
const addPost = async (req, res) => {
  const { Name, Email, Post, Breed } = req.body;
  const postResult = await PostData.create({
    Name,
    Email,
    Post,
    Breed,
  });
  res.status(200).json(postResult);
};
module.exports = { getPosts, addPost };
