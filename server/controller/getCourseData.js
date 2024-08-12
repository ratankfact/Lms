const courseModel = require("../model/corseModel");
const getCoursesData = async (req, res) => {
  try {
    const { id } = req.params;
    const coursedata = await courseModel.findById(id);
    if (!coursedata) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json(coursedata);
  } catch (e) {
    console.error("Error fetching the course data:", e);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getCoursesData };
