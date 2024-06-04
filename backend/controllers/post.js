const Post = require("../models/post");

exports.createPost = async (req, res) => {
  try {
    const post = await new Post(req.body).save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Failed to create post" });
  }
};
