const mongoose = require("mongoose");


const roleSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    permissions: [{}],

},
    {
        timestamps: true
    })

module.exports = mongoose.model("Role", roleSchema);