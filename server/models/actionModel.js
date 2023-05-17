const mongoose = require("mongoose");


const actionSchema = mongoose.Schema({  


    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },

    endpoint: {
        type: String,
        required: true
    },

    group: String,

    default: [ String]



}, {
    timestamps: true
})

module.exports = mongoose.model("Action", actionSchema);