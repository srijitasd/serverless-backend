const { validationResult } = require("express-validator");

const errorFormatter = ({ type, value, msg, path, nestedErrors }) => {
  // console.log(type, value, msg, path, nestedErrors);
  return {
    msg,
    path,
  };
};

const catchValidationError = (req, res, next) => {
  const errors = validationResult(req).formatWith(errorFormatter);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array()[0].msg, status: 0 });
  }
  next();
  // handle the request as usual
};

module.exports = { catchValidationError };
