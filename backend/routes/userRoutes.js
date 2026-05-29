const express = require("express");

const router = express.Router();

const {
    registerUser,
    loginUser,
    getAllUsers,
    updateUser
} = require("../controller/userController.js");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/users", getAllUsers);

router.put("/users/:id", updateUser);

module.exports = router;