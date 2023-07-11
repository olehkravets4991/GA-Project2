const mongoose = require("./connection.js")
const clientData = require("./seedData.js")
const ClientModel = require("./client.js")

mongoose.connection.on("open", async()=>{

    const scrubbedData = clientData.map((v)=>{

        return{
            name: v.name,
            employed: v.employed,
            married: v.married,
            email: v.email,
            phone: v.phone,
            notes: v.notes
    
        }
    })
    await ClientModel.deleteMany({})
    await ClientModel.create(scrubbedData)
    mongoose.connection.close()

})


// name:String,
// employed:Boolean,
// married:Boolean,
// email:String,
// phone:Number,
// notes:String