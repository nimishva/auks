const expressAsyncHandler = require("express-async-handler");
const serviceValidation = require("../validations/serviceValidation");
const Service = require("../models/serviceModel");



const createService = expressAsyncHandler(async (req, res) => {
    const { error, value } = serviceValidation.validate(req.body);

    const newService = await Service.create(req.body)
    res.status(201).json(newService)

})

const getService = expressAsyncHandler(async (req, res) => {

    console.log(req.originalUrl);
    res.json('okkkk')
    // if (req.params) {
    //     const { id } = req.params

    //     // let studio = await Studio.findOne({ id })

    // } else {

    // }
})

const updateService = expressAsyncHandler(async (req, res) => {

})

const deleteService = expressAsyncHandler(async (req, res) => {

})



module.exports = { createService, getService, updateService, deleteService };