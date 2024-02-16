const mongoose = require("mongoose");
const post = mongoose.Schema({
  Name: {
    type: String,
    required: [true, "Please enter Your name"],
    trim: true,
  },
  Email: {
    type: String,
    required: [true, "Please enter Email"],
  },
  Post: {
    type: String,
    required: [true, "Please make a post"],
  },
  Breed: {
    type: String,
    required: [true, "please select your breed"],
    enum: {
      values: ["Cat", "Dog"],
      message: "{VALUE} is not supported",
    },
  },
  comments: [
    {
      user: {
        type: String,
        required: true,
        default: "Anonymous",
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
});
const PostData = mongoose.model("Post", post);
module.exports = PostData;
