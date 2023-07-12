const mongoose = require("./connection.js")


const clientSchema = new mongoose.Schema({

    name:String,
    email:String,
    phone:Number,
    employed:Boolean,
    married:Boolean,
    notes:String
})

const ClientModel = mongoose.model("client", clientSchema)
module.exports = ClientModel