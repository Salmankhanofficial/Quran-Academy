const mongoose = require("mongoose");
// Course schema
const courseSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    title: {
      type: String,
      required: [true, "Please add the cource title"],
    },
    description: {
      type: String,
      required: [true, "Please add the cource description"],
    },
    
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Please add the cource Teacher"],
    },
    // students: [{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User',
    // }]
  },
  {
    timestamps: true,
  }
  );

  module.exports = mongoose.model("Cource", courseSchema)