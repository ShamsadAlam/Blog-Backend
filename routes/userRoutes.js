const express = require("express");
const router = express.Router();
const {
  RegisterUser,
  LoginUser,
  Logout,
} = require("../controller/userController");

// register route
router.route("/register").post(RegisterUser);

// login route
router.route("/login").post(LoginUser);

// Logout route
router.route("/logout").get(Logout);

module.exports = router;
