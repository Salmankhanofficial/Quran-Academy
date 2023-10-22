const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
//@desc Register user
//@route POST /api/user/register
//@access pubic


//get all users 

const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

//get user by id

const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if(!user){
        res.status(404);
        throw new Error("User not Found");
    }
    res.status(200).json(user);
});

const registerUser = asyncHandler(async (req, res) => {
    const { username, phone, countryname, city, email, profession, password, usertype } = req.body;
    if( !username || !email || !password ||!phone ||!countryname ||!city ){
        res.status(400);
        throw new Error("All fields are mendatory");
    }
    const userAvailable = await User.findOne({ email });
    if(userAvailable){
        res.status(400);
        throw new Error("User already Registered");
    }
    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        phone,
        countryname,
        city,
        profession,
        password: hashedPassword,
        usertype,
    });

    console.log(`user created ${user}`);
    if(user){
        res.status(201).json({ _id: user.id, email: user.email });
    }else{
        res.status(400);
        throw new Error("User data is not valid");
    }
    console.log("Hash Pasword", hashedPassword);
    res.json({ message: "Register User"});
});

//@desc Login user
//@route POST /api/user/login
//@access pubic

const loginUser = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) return res.status(400).json({ msg: "User does not exist. " });
    
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });
    
          const token = jwt.sign({ id: user._id }, process.env.ACCES_TOKEN_SECRET);
          delete user.password;
          res.status(200).json({ token, user });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    
});

//@desc Current user info
//@route POST /api/user/current
//@access private

const currentUser = asyncHandler(async (req, res) => {
    res.json({ message: "You are succesfully Login to the app"});
});

module.exports = { getUsers, registerUser, loginUser, currentUser};