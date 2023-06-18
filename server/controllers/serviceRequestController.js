const serviceRequestMail = require('../mailer/serviceRequestMailer');
const ServiceRequest = require('../models/serviceRequestModel')
const serviceRequestValidation = require("../validations/serviceRequestValidation");
const expressAsyncHandler = require('express-async-handler')


const createServiceRequest = expressAsyncHandler(async (req, res) => {

    req.body.status = "request created";
    let newServiceRequest = await ServiceRequest.create(req.body);

    await newServiceRequest.populate('to_studio', 'name  phone_number email')
    await newServiceRequest.populate('service', 'service_name service_charge')
    await newServiceRequest.populate('from_user', 'name phone whatsapp_number email')

    serviceRequestMail(newServiceRequest);

    console.log(newServiceRequest);

    res.status(201).json('service req created');

})



const getServiceRequest = expressAsyncHandler(async (req, res) => {

    if (req.params) {

        const { id } = req.params
        const result = await ServiceRequest.findOne({ id });
        console.log(result);

        res.status(200).json(result)
    } else if (req.body) {


        const result = await ServiceRequest.find(req.body);
        console.log(result);
        res.status(200).json(result);

    }


})


const updateServiceRequest = expressAsyncHandler(async (req, res) => {

    const { id } = req.params;

    const updatedServiceRequest = await ServiceRequest.updateOne({ id }, req.body)

    res.status(200).json(updatedServiceRequest);
})

module.exports = { createServiceRequest, updateServiceRequest, getServiceRequest };





