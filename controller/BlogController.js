const Blogs = require("../models/BlogModel");

//Create Blogs
exports.CreateBlog = async (req, res) => {
  const { title, description } = req.body;
  const blog = await Blogs.create({ title, description });
  res.status(200).json({
    success: true,
    blog,
  });
};

//Get All Blogs
exports.AllBlogs = async (req, res) => {
  const Blogs = await Blogs.find();
  res.status(200).json({
    success: true,
    Blogs,
  });
};

// Update Blog
exports.UpdateBlog = async (req, res) => {
  let blog = await Blogs.findById(req.params.id);
  if (!blog) {
    return res.status(401).json({
      success: false,
      message: "Blog not found",
    });
  }

  blog = await Blogs.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    blog,
  });
};

//Delete Blog
exports.DeleteBlog = async (req, res) => {
  const blog = await Blogs.findById(req.params.id);
  if (!blog)
    return res.json({
      success: false,
      message: "Blog not found",
    });
  await Blogs.deleteOne();
  res.status(200).json({
    success: true,
    message: "Blog deleted successfully",
  });
};
