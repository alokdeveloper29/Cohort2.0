
const mongoose = require('mongoose')

function connectDb() {
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connect to Db")
    })
    .catch(err => {
        console.log("error connection to Db",err)
    })
}

module.exports = connectDb