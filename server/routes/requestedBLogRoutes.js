const express = require("express");
const router = express.Router();
const { model } = require("mongoose");

const {createRequestedBlog, getRequestedBlog, updateRequestedBlog, deleteRequestedBlog} = require("../controllers/requestedblogController.js");


router.route("/").post(createRequestedBlog);

router.route("/:id").get(getRequestedBlog).put(updateRequestedBlog).delete(deleteRequestedBlog);

module.exports = router;