const asyncHandler = require("express-async-handler");
const { findById } = require("../models/courseModel");
const Course = require("../models/courseModel");

//@desc get all courses
//@route GET /courses
//@access pubic

const getCourses = asyncHandler(async (req, res) => {
    const courses = await Course.find();
    res.status(200).json(courses);
});

//@ create a new course
//@route POST /courses
//@access pubic

const createCourse = asyncHandler(async (req, res) => {
    console.log("the courses:", req.body)
    const { title, description } = req.body;
    if (!title || !description) {
        res.status(400);
        throw new Error("All field are mendatory");

    }
    const course = await Course.create({
        title,
        description
    });
    res.status(200).json(course);
});

//@desc get a course by id
//@route GET /course
//@access pubic

const getCourse = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id);
    if(!course){
        res.status(404);
        throw new Error("Course not fount");
    }
    res.status(200).json(course);
});

//@desc update course by id
//@route PUT /courses :id
//@access pubic

const updateCourse = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id);
    if(!course){
        res.status(404);
        throw new Error("Course not fount");
    }
    const updatedCourse  = await Course.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedCourse);
});

//@desc delete course by id
//@route DELETE /course/:id
//@access pubic

const deleteCourse = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id);
    if(!course){
        res.status(404);
        throw new Error("Course not fount");
    }
    await Course.findByIdAndRemove(req.params.id);
    res.status(200).json(course);
});

module.exports = { getCourse, createCourse, getCourses, updateCourse, deleteCourse };