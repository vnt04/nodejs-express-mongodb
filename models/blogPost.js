const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  body: String,
});

const blogPost = mongoose.model("blogPost", blogPostSchema);

module.exports = blogPost;
