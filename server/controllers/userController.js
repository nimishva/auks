const mongoose = require('mongoose')
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const Studio = require('../models/studioModel');
const joi = require('joi');
const userValidation = require('../validations/userValidation');
const Role = require('../models/roleModel');




//  BASE ROUTE: /api/users
// Register User Method
const registerUser = asyncHandler(async (req, res) => {

    console.log(req.body);
    const userData = req.body;
    // const { error, value } = userValidation.validate(userData)
    if (error) { res.status(401); throw new Error(error) }
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;
    const newUser = await User.create(userData)
    res.status(201).json(newUser)

})

const loginUser = asyncHandler(async (req, res) => {

    const { email, phone, password } = req.body;


    if (!(email || phone) && password) {
        res.status(400)
        throw new Error("All fields are required")
    }
    // console.log(email, phone)
    let user = await User.findOne({ $or: [{ email }, { phone }] }).populate('role')
    // console.log(roles);

    if (user && (await bcrypt.compare(password, user.password))) {

        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            }
        },
            process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' }
        )

        user = user.toObject();
        delete user.password;
        // console.log(user);

        res.status(200).json({ accessToken })
    } else {

        res.status(401)
        throw new Error('Email or Password not valid')
    }
})


const updateUserName = asyncHandler(async (req, res) => {
    const { id } = req.params;
    // console.log(typeof id);

    let user = await User.findOne({ _id: id });

    // console.log(user);

    if (user) {


        const update = {
            $set: {
                name: req.body.name,
                email : req.body.email,
            },
        };

        const updatedUser = await User.updateOne({ _id: id }, update);

        res.status(200).json(user.name);   

    } 
    else {

        res.status(404).json({ message: "User Not Found" })
    }
}
)

const logoutUser = (req, res) => { }



module.exports = { registerUser, loginUser, updateUserName, logoutUser };




