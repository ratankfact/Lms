const addPost = require("../model/addPost");

const createPost = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const postData = new addPost(req.body);
    console.log(postData);
    const addedPost = postData.save();
    res.status(200).json(addedPost);
  } catch (e) {
    console.log("found error", e);
  }
};

module.exports = { createPost };
