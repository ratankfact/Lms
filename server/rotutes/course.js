const express = require("express");
const router = express.Router();
const {createCourse} = require("../controller/createCourse")
router.post("/createcourse", createCourse);
module.exports = router;
