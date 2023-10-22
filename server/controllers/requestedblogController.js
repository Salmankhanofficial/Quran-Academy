const asyncHandler = require("express-async-handler");
const { findById } = require("../models/requestedBlog");
const RequestedBlog = require("../models/requestedBlog");


//@ create a new Blog
//@route POST /Blogs
//@access pubic

const createRequestedBlog = asyncHandler(async (req, res) => {
    console.log("The blogs", req.body)
    const { title, description, createdBy } = req.body;
    if (!title || !description) {
        res.status(400);
        throw new Error("All field are mendatory");

    }
    const blog = await RequestedBlog.create({
        title,
        description,
        createdBy
    });
    res.status(200).json(blog);
});

//@desc get a Blog by id
//@route GET /Blog
//@access pubic

const getRequestedBlog = asyncHandler(async (req, res) => {
    const blog = await RequestedBlog.findById(req.params.id);
    if(!blog){
        res.status(404);
        throw new Error("Blog not fount");
    }
    res.status(200).json(blog);
});

//@desc update blog by id
//@route PUT /Blogs :id
//@access pubic

const updateRequestedBlog = asyncHandler(async (req, res) => {
    const blog = await RequestedBlog.findById(req.params.id);
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

const deleteRequestedBlog = asyncHandler(async (req, res) => {
    const blog = await RequestedBlog.findById(req.params.id);
    if(!course){
        res.status(404);
        throw new Error("Blog not fount");
    }
    await Blogs.findByIdAndRemove(req.params.id);
    res.status(200).json(blog);
});

module.exports = { getRequestedBlog, createRequestedBlog, updateRequestedBlog, deleteRequestedBlog };