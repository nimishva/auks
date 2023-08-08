const expressAsyncHandler = require("express-async-handler")
const Studio = require("../models/studioModel")
const studioValidation = require("../validations/studioValidation")

const createStudio = expressAsyncHandler(async (req, res) => {
    // const { error, value } = studioValidation.validate(req.body);
    
    const newStudio = await Studio.create(req.body)
    res.status(201).json(newStudio);

})

const getStudio = expressAsyncHandler(async (req, res) => {

    // console.log(req.originalUrl);
    if (req.params) {
        const { id } = req.params

        const studio = await Studio.findOne({ id });

        if (!studio) {
            res.status(404)
            throw new Error("Studio Not Found");
        }

        res.status(200).json(studio)

    }
    else {
          const studios = await Studio.find({});
          res.status(200).json(studios) 
    }
})

const updateStudio = expressAsyncHandler(async (req, res) => {
    const { id } = req.params;

    const {data} = req.body;
    const updatedStudio = await Studio.updateOne({ _id : id }, data);
    res.status(200).json(updatedStudio);


});

const deleteStudio = expressAsyncHandler(async (req, res) => {

    const { id } = req.params;

    const deletedStudio = await Studio.deleteOne({ id });
    console.log(deletedStudio);
    res.status(200).json(deleteStudio);

})



module.exports = { createStudio, getStudio, updateStudio, deleteStudio };