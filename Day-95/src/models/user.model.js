const { default: mongoose } = require("mongoose")
const monoooge = require("mongoose")

const userSchema = new monooge.Schema({
    name: String,
    email: String,
    password: String,
})

const userModel = mongoose.model("users", userSchema)
module.exports = userModel  