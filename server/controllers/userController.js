const mongoose = require('mongoose')
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const Studio = require('../models/studioModel');
const joi = require('joi');
const userValidation = require('../validations/userValidation');




//  BASE ROUTE: /api/users

const registerUser = asyncHandler(async (req, res) => {

    console.log(req.body);
    const userData = req.body;

    
    
    const { error, value } = userValidation.validate(userData)
    if (error) { res.status(401); throw new Error(error) }
    
    
    
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;
    const newUser = await User.create(userData)


    res.status(201).json(newUser)




    // const hashedPassword = bcrypt
    // // const user = User.create({name, email,})




})

const loginUser = asyncHandler(async (req, res) => {

    const { email,phone,  password } = req.body;

    if (!(email || phone) && password ){
        res.status(400)
        throw new Error("All fields are mandatory")
    }

    const user = await User.findOne({$or:[ {email,phone} )



    if (user && (await bcrypt.compare(password, user.password))) {

        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            }
        },
            process.env.ACCESS_TOKEN_SECRET, { expiresIn: '50min' }
        )


        res.status(200).json({ accessToken })
    } else {

        res.status(401)
        throw new Error('Email or Password not valid')
    }





})


const logoutUser = (req, res) => { }



module.exports = { registerUser, loginUser, logoutUser };




