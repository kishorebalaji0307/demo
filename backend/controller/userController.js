const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {

    try {

        const {
            name,
            email,
            password,
            role,
            allowedPages
        } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User Already Exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role,
            allowedPages
        });

        await newUser.save();

        res.status(201).json({
            message: "User Registered Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(404).json({
                message: "User Not Found"
            });

        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {

            return res.status(400).json({
                message: "Invalid Password"
            });

        }

        const token = jwt.sign(

            {
                id: user._id,
                role: user.role
            },

            process.env.JWT_SECRET,

            {
                expiresIn: "1d"
            }

        );

        res.status(200).json({

            message: "Login Success",

            token,

            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                allowedPages: user.allowedPages
            }

        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
const getAllUsers = async (req, res) => {

    try {

        const users = await User.find();

        res.status(200).json(users);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
const updateUser = async (req, res) => {

    try {

        const { id } = req.params;

        const updatedUser = await User.findByIdAndUpdate(

            id,

            req.body,

            {
                new: true
            }

        );

        res.status(200).json({

            message: "User Updated Successfully",

            updatedUser

        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    updateUser
};