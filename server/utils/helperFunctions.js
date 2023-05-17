const mongoose = require("mongoose");
const actionsData = require('./initial_data/actions.json');
const servicesData = require('./initial_data/services.json')
const Action = require("../models/actionModel");
const Service = require("../models/serviceModel");
// const { connection } = require("../config/dbConnection");

const addInitialDataToDb = async () => {


    const collections = await mongoose.connection.db.listCollections().toArray();
    // console.log(collections);

    let indexOfActionCollection = collections.findIndex((data) => data.name == 'actions');

    // console.log(indexOfActionCollection);
    // console.log(Array.isArray(actionsData));


    if (indexOfActionCollection == -1) {
        const result = await Action.insertMany(actionsData)
        console.log(result);
    }



    let indexOfServiceCollection = collections.findIndex((data) => data.name == 'services');

    if (indexOfServiceCollection == -1) {
        const result = await Service.insertMany(servicesData)
        console.log(result);
    }

};


module.exports = {
    addInitialDataToDb
};