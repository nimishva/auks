const mongoose = require("mongoose");


const userActionRefSchema = mongoose.Schema({

    user_id : mongoose.Schema.Types.ObjectId,       
    

     actions : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Action'

     }]   


}, {
    timestamps: true
})

module.exports = mongoose.model("UserActionRef", userActionRefSchema);