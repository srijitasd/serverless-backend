const handleCsrfError = (err, req, res, next) => {
  console.log(req.cookies);
  if (err.code !== "EBADCSRFTOKEN") return next(err);

  res.status(403).json({ message: "csrf token invalid" });
};

module.exports = { handleCsrfError };
