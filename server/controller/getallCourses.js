const courseModel = require("../model/corseModel");

const getAllCourses = async (req, res) => {
  try {
    const courses = await courseModel.find({});
    res.status(200).json({courses});
  } catch (e) {
    console.log("found error", e);
  }
};

module.exports = { getAllCourses };
