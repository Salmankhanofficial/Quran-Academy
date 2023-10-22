const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, "Please enter userName"]
    },
    email: {
        type: String,
        require: [true, "Please enter email address"],
        unique: [true, "Email address already taken"]
    },
    country: {
        type: String,
        require: [true, "Please enter your country name"]
    },
    city: {
        type: String,
        require: [true, "Please enter your country name"]
    },
    education: {
        type: String,
        require: [true, "Please education"]
    },
    
    password: {
        type: String,
        require: [true, "Please add the password"]
    }
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Teacher", teacherSchema);