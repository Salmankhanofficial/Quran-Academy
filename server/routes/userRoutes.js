const express = require("express");
const { registerUser, loginUser, currentUser, getUsers } = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.get("/users", getUsers);

// router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

router.post("/register",registerUser);

router.post("/login",loginUser);

router.get("/current",validateToken, currentUser);

module.exports = router;