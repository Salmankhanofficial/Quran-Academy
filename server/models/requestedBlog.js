const mongoose = require("mongoose")

// Requested blog schema
const requestedBLogSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    title: {
      type: String,
      required: [true, "Please add the blog title"],
    },
    description: {
      type: String,
      required: [true, "Please add the blog description"],
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Please add the cource Teacher"],
    },
  },
  {
    timestamps: true,
  }
  );

  module.exports = mongoose.model("RequestedBlog", requestedBLogSchema)