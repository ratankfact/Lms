const Course = require("../model/courseModel");

const uploadVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, link, category, coursepdf } = req.body;

    const video = {
      title,
      link,
      category,
      coursepdf,
    };

    const course = await Course.findByIdAndUpdate(
      id,
      { $push: { videos: video } },
      { new: true }
    );

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({ message: "Video added successfully", course });
  } catch (error) {
    console.error("Error adding video:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { uploadVideo };
