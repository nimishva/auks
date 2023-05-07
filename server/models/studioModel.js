const mongoose = require("mongoose");


const studioSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },


    services: [],

    website: {
        type: String,
    },

    phone_number : {
        type: Number
    },

    address1: {
        type: String,
        required: true

    },

    address2: {
        type: String,
        required: true

    },

    landmark: {
        type: String,
        required: true
    },


    area: {
        type: String,
        required: true
    },


    city: {
        type: String,
        required: true
    },


    pincode: {
        type: Number,
        required: true
    },

    state: {
        type: String,
        default: 'Kerala',
        required: true
    },

    country: {
        type: String,
        default: 'India',
        required: true
    },




    management_users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],

    location_map: {
        type: String,
        required: true
    }


}, {
    timestamps: true
})

module.exports = mongoose.model("Studio", studioSchema);