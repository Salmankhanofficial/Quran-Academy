const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, "Please enter userName"]
    },
    email: {
        type: String,
        require: [true, "Please enter email address"],
        unique: [true, "Email address already taken"]
    },
    phone: {
        type: String,
        require:[true, "Please enter your phone number"],
        unique:[true, "Phone number already taken"]
    },
    countryname:{
        type: String,
        require: [true, "Please enter your country name"]
    },
    city:{
        type: String,
        require: [true, "Please enter your city name"]
    },
    profession:{
        type: String,
    },
    password: {
        type: String,
        require: [true, "Please add the password"]
    },
    usertype: {
        type: String,
        default: 'user'
      },
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);