const { checkSchema } = require("express-validator");

const loginRequestSchema = checkSchema(
  {
    rtrim: {
      options: ["-", "_", "#", "!", "@", ""],
    },
    ltrim: {
      options: [" -"],
    },
    isEmail: { bail: true, errorMessage: "please enter a valid email" },
  },
  ["body"]
);

module.exports = {
  loginRequestSchema,
};
