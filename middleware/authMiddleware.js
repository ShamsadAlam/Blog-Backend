const jwt = require("jsonwebtoken");
require("dotenv").config();

const AuthenticateUser = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  console.log("Token: ", token);

  jwt.verify(
    token.replace("Bearer ", ""),
    process.env.JWT_SECRET,
    (err, user) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      console.log("req.user: ", req.user);
      console.log("user: ", user);
      req.user = user;
      next();
    }
  );
};

module.exports = AuthenticateUser;
