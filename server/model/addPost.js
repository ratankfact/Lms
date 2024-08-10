const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const addPostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const addPost = model("addPost", addPostSchema);
module.exports = addPost;
