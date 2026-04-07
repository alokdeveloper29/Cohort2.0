require('dotenv').config()
const mongoose = require('mongoose')


function connectDb () {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connect MongoDb")
    })
}

module.exports = connectDb 