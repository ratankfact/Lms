const express = require("express");
const router = express.Router();
const { createCourse } = require("../controller/createCourse");
const { getAllCourses } = require("../controller/getallCourses");
router.post("/createcourse", createCourse);
router.get("/getallcourses", getAllCourses);
module.exports = router;
