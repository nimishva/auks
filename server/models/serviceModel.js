const mongoose = require("mongoose");


const serviceSchema = mongoose.Schema({

    service_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    service_charge: {
        type: Number,
        required: true
    },

    image : {
        type : String
    }

},
    {
        timestamps: true
    })

module.exports = mongoose.model("Service", serviceSchema);