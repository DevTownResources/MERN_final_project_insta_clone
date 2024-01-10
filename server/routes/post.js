const express = require("express");
const { body } = require("express-validator");
const { createPost } = require("../controller/post");
const uploader = require("../utils/uploader");

const router = express.Router();

router.post("/", uploader.single("image"), createPost);

module.exports = router;
