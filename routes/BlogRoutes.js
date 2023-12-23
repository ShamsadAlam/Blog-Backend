const express = require("express");
const AuthenticateUser = require("../middleware/authMiddleware");
const router = express.Router();
const {
  AllBlogs,
  CreateBlog,
  UpdateBlog,
  DeleteBlog,
} = require("../controller/BlogController");

router.route("/").get(AllBlogs).post(AuthenticateUser, CreateBlog);

router
  .route("/:id")
  .put(AuthenticateUser, UpdateBlog)
  .delete(AuthenticateUser, DeleteBlog);

module.exports = router;
