const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: "error",
      msg: "Validation error",
      data: errors.array(),
    });
  }
  next();
};

const authMiddleware = async (req, res, next) => {
  try {
    // Authorization
    const token = req.cookies.access_token;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).redirect("/login");
  }
};

module.exports = { validate, authMiddleware };
