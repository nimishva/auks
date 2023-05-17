const expressAsyncHandler = require("express-async-handler")
const Studio = require("../models/studioModel")
const studioValidation = require("../validations/studioValidation")

const createStudio = expressAsyncHandler(async (req, res) => {
    const { error, value } = studioValidation.validate(req.body);
    const newStudio = await Studio.create(req.body)
    res.status(201).json(newStudio)

})

const getStudio = expressAsyncHandler(async (req, res) => {

    console.log(req.originalUrl);
    res.json('okkkk')
    // if (req.params) {
    //     const { id } = req.params

    //     // let studio = await Studio.findOne({ id })

    // } else {

    // }
})

const updateStudio = expressAsyncHandler(async (req, res) => {

})

const deleteStudio = expressAsyncHandler(async (req, res) => {

})



module.exports = { createStudio, getStudio, updateStudio, deleteStudio };