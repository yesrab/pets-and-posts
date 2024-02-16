const mongoose = require("mongoose");
const comments = mongoose.Schema({
  user: {
    type: String,
    required: [true, "Please enter Your name"],
  },
  comment: {
    type: String,
    required: [true, "Please enter comment"],
    trim: true,
  },
});
const Comment = mongoose.model("comment", comments);
module.exports = Comment;
