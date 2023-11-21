const { loginController, generateCsrfTokenController } = require("../controller/auth.controller");
const { loginRequestSchema } = require("../middlewares/request-validation/auth.validator");
const { catchValidationError } = require("../middlewares/request-validation/exception");

const router = require("express").Router();

router.get("/", generateCsrfTokenController);

router.post("/signin", loginRequestSchema, catchValidationError, loginController);

module.exports = router;
