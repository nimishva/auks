const mongoose = require('mongoose')
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const Studio = require('../models/studioModel');
const joi = require('joi');
const userValidation = require('../validations/userValidation');
const Role = require('../models/roleModel');




//  BASE ROUTE: /api/user
// Register User Method
const registerUser = async (req, res) => {
    try {


        console.log(req.body);
        let userData = req.body;
        const { error, value } = userValidation.validate(req.body)

        if (error) {
            console.error(error);

            return res.status(401).json({ error })

        }


        const hashedPassword = await bcrypt.hash(value.password, 10);
        value.password = hashedPassword;
        const newUser = await User.create(value)


        return res.status(201).json({ success: 'User created successfully' })

    } catch (error) {
        console.error(error);
        return res.json({ error })
    }

}

const loginUser = async (req, res) => {
    try {

        console.log('inside loginuser*****');
        const { email, phoneNumber, password } = req.body;

        console.log(email, phoneNumber, password);

        if (!(email || phoneNumber) && password) {
            res.status(400)
            throw new Error("All fields are required")
        }
        // console.log(email, phone)
        let user = await User.findOne({ $or: [{ email }, { phoneNumber }] }).populate('role')
        console.log(user);

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

            res.status(200).json({ message: 'success', accessToken })
        } else {

            console.error('Email or Password not valid');

            res.status(401).json({ message: 'Error, Email or Password not valid' })

        }

    } catch (error) {
        console.error(error)
        return res.json(error)
    }

}


const updateUserName = asyncHandler(async (req, res) => {
    const { id } = req.params;
    // console.log(typeof id);

    let user = await User.findOne({ _id: id });

    // console.log(user);

    if (user) {




        const updatedUser = await User.updateOne({ _id: id }, req.body);

        res.status(200).json(user);

    }
    else {

        res.status(404).json({ message: "User Not Found" })
    }
}
)

const logoutUser = (req, res) => { }



module.exports = { registerUser, loginUser, updateUserName, logoutUser };




