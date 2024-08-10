const addPost = require("../model/addPost");
const courseModel = require("../model/corseModel");

const createCourse = async (req, res) => {
  try {
    const courseData = new courseModel(req.body);
    console.log(courseData);
    const addedCourse = courseData.save();
    res.status(200).json (addedCourse);
  } catch (e) {
    console.log("found error", e);
  }
};

module.exports = { createCourse };
