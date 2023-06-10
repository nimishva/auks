const mongoose = require("mongoose");


const serviceRequestSchema = mongoose.Schema({

    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
    },

    from_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    to_studio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Studio'
    },

    status: String,

    qty: Number,

    image: String,

    mail: String,


},
    {
        timestamps: true
    })

module.exports = mongoose.model("ServiceRequest", serviceRequestSchema);