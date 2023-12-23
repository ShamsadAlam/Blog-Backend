// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

const AuthenticateUser = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, "secret", (err, user) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = user;
    next();
  });
};

module.exports = AuthenticateUser;
