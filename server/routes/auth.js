const express = require("express");
const { body } = require("express-validator");
const { signup, login } = require("../controller/auth");
const { validate } = require("../middlewares");

const router = express.Router();

router.post(
  "/signup",
  body("email").trim().isEmail(),
  body("username").notEmpty(),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  validate,
  signup
);

router.post("/login", login);

module.exports = router;
