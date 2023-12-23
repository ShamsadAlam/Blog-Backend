const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter title"],
    trim: true,
  },
  content: {
    type: String,
    required: [true, "Please enter content"],
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Blogs", BlogSchema);
