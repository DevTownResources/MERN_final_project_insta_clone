const express = require("express");
const { body } = require("express-validator");
const { createPost, getAllPosts, likePost } = require("../controller/posts");
const uploader = require("../utils/uploader");
const { authMiddleware } = require("../middlewares");

const router = express.Router();

router.post("/", authMiddleware, uploader.single("image"), createPost);
router.get("/", authMiddleware, getAllPosts);
router.patch("/:id/like", authMiddleware, likePost);

module.exports = router;
