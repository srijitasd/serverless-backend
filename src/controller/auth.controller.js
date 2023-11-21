const generateCsrfTokenController = (req, res) => {
  const token = req.csrfToken();
  res.cookie("x-csrf-token", token);
  res.json({ token: token });
};

const loginController = (req, res) => {
  res.send({ message: "You have successfully logged in." });
};

module.exports = { generateCsrfTokenController, loginController };
