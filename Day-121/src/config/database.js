import mongoose from 'mongoose'

function connectDb () {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("mongose connected")
    })
    .catch((err) => {
        console.log("error"+ err)
    })
}

export default connectDb