const { validationResult } = require("express-validator");

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

module.exports = { validate };
