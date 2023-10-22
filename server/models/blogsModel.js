const mongoose = require("mongoose")

// BLog schema
const blogSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    title: {
      type: String,
      required: [true, "Please add the blog title"],
    },
    description: {
      type: String,
      required: [true, "Please add the blog description"],
    },
    likes: {
        type: Map,
        of: Boolean,
    },
    views: {
        type: Map,
        of: Boolean,
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

  module.exports = mongoose.model("Blogs", blogSchema)