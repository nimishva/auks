const mongoose = require("mongoose");
const actionsData = require('./initial_data/actions.json');
const servicesData = require('./initial_data/services.json')
const actions = require("../models/actionModel");
const services = require("../models/serviceModel");
// const { connection } = require("../config/dbConnection");


// console.log(actionsData);

const addInitialDataToDb = async () => {


    const collections = await mongoose.connection.db.listCollections().toArray();
    // console.log(collections);


    async function feedInitialDataToDb(collName, documents) {
        let collection;
        let indexOfCollection = collections.findIndex((data) => data.name == collName);
        if (indexOfCollection != -1) {
            collection = await eval(collName + ".find({})");
        }
        if (indexOfCollection == -1 || (collection.length == 0)) {
            const result = await eval(collName + ".insertMany(documents)")
            // console.log(result);
        }

    }
    feedInitialDataToDb("actions", actionsData);
    feedInitialDataToDb("services", servicesData);
};


module.exports = {
    addInitialDataToDb
};