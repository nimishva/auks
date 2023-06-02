const mongoose = require("mongoose");


const roleSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    permissions: [{
        name: String,
        action_group: String,
        icon: String
    }],

},
    {
        timestamps: true
    })

module.exports = mongoose.model("Role", roleSchema);