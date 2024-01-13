const express = require("express");
const { body } = require("express-validator");
const {
  createPost,
  getAllPosts,
  likePost,
  getAllComments,
  createComment,
} = require("../controller/posts");
const uploader = require("../utils/uploader");
const { authMiddleware, validate } = require("../middlewares");

const router = express.Router();

router.post("/", authMiddleware, uploader.single("image"), createPost);
router.get("/", authMiddleware, getAllPosts);
router.patch("/:id/like", authMiddleware, likePost);
router.get("/:id/comments", authMiddleware, getAllComments);
router.post(
  "/:id/comments",
  body("commentText"),
  validate,
  authMiddleware,
  createComment
);

module.exports = router;
