const uploadManager = require("../utils/uploadManager");
const Post = require("../models/post");
const User = require("../models/user");

const createPost = async (req, res) => {
  try {
    const { fileUrl, filePath } = await uploadManager.upload({
      data: req.file.buffer,
      originalFileName: req.file.originalname,
      type: req.file.mimetype,
    });

    const post = await Post.create({
      user: req.userId,
      caption: req.body.caption,
      image: {
        url: fileUrl,
        path: filePath,
      },
    });

    const user = await User.findById(req.userId);
    user.posts.push(post._id);
    const updatedUser = await user.save();

    res.status(201).json({
      status: "success",
      msg: "Post created",
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      msg: "Internal server error",
      data: null,
    });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({ deletedAt: null })
      .populate("user", "username")
      .populate("likes", "username");

    res.status(200).json({
      status: "success",
      msg: "Posts retrieved",
      data: posts,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      msg: "Internal server error",
      data: null,
    });
  }
};

const likePost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);
    post.likes.push(req.userId);

    const updatedPost = await post.save();

    res.status(200).json({
      status: "success",
      msg: "Post liked",
      data: updatedPost,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      msg: "Internal server error",
      data: null,
    });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  likePost,
};
