const express = require("express");
const router = express.Router();
const { addComment } = require("../controllers/comment");

router.route("/comment").patch(addComment);

module.exports = router;
