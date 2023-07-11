const mongoose = require("./connection.js")


const clientSchema = new mongoose.Schema({

    name:String,
    employed:Boolean,
    married:Boolean,
    email:String,
    phone:Number,
    notes:String
})

const ClientModel = mongoose.model("client", clientSchema)
module.exports = ClientModel