const express = require("express");
const router = express.Router();
const { model } = require("mongoose");
const {getCourses, createCourse, getCourse, updateCourse, deleteCourse} = require("../controllers/coursesController.js");

router.route("/").get(getCourses).post(createCourse);

router.route("/:id").get(getCourse).put(updateCourse).delete(deleteCourse);

module.exports = router;