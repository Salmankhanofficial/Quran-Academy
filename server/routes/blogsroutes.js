const express = require("express");
const router = express.Router();
const { model } = require("mongoose");

const {getBlogs, createBlog, getBlog, updateBlog, deleteBlog} = require("../controllers/blogsController.js");


router.route("/").get(getBlogs).post(createBlog);

router.route("/:id").get(getBlog).put(updateBlog).delete(deleteBlog);

module.exports = router;