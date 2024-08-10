const express = require("express");
const router = express.Router();
const {createPost} = require("../controller/addPost.js");

router.post("/addPost", createPost);
module.exports = router;
