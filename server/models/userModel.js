const mongoose = require("mongoose");


const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
        // match: [/^\S+@\S+\.\S+$/, 'Please fill a valid email address']

    },

    phone: {
        type: Number,
        required: true
    },

    whatsapp_number: {
        type: Number,
        // required
    },



    password: {
        type: String,
        required: true,

    },



    studio: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Studio'
    }],                                                           


    role: {

        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'

    },

    isActive: {
        type: Boolean,
        default: false
    }



}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)