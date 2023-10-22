const asyncHandler = require("express-async-handler");
const { findById } = require("../models/blogsModel");
const Blogs = require("../models/blogsModel");

//@desc get all Blogs
//@route GET /Blogs
//@access pubic

const getBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blogs.find();
    res.status(200).json(Blogs);
});

//@ create a new Blog
//@route POST /Blogs
//@access pubic

const createBlog = asyncHandler(async (req, res) => {
    console.log("The blogs:", req.body)
    const { title, description } = req.body;
    if (!title || !description) {
        res.status(400);
        throw new Error("All field are mendatory");

    }
    const blog = await Blogs.create({
        title,
        description
    });
    res.status(200).json(blog);
});

//@desc get a Blog by id
//@route GET /Blog
//@access pubic

const getBlog = asyncHandler(async (req, res) => {
    const blog = await Blogs.findById(req.params.id);
    if(!blog){
        res.status(404);
        throw new Error("Blog not fount");
    }
    res.status(200).json(blog);
});

//@desc update blog by id
//@route PUT /Blogs :id
//@access pubic

const updateBlog = asyncHandler(async (req, res) => {
    const blog = await Blogs.findById(req.params.id);
    if(!course){
        res.status(404);
        throw new Error("BLog not fount");
    }
    const updatedBlog  = await Blogs.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedBlog);
});

//@desc delete blog by id
//@route DELETE /blog/:id
//@access pubic

const deleteBlog = asyncHandler(async (req, res) => {
    const blog = await Blogs.findById(req.params.id);
    if(!course){
        res.status(404);
        throw new Error("Blog not fount");
    }
    await Blogs.findByIdAndRemove(req.params.id);
    res.status(200).json(blog);
});

module.exports = { getBlog, createBlog, getBlogs, updateBlog, deleteBlog };