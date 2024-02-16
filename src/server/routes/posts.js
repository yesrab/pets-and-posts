const express = require("express");
const router = express.Router();
const { getPosts, addPost } = require("../controllers/post");

router.route("/post").get(getPosts).post(addPost);

module.exports = router;
