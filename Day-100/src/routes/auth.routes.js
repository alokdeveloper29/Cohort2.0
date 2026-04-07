const express = require('express')
const authRouter = express.Router()
const userModel = require('../models/user.model')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')


authRouter.post('/register', async (req, res) => {
    const{name,email,password} = req.body

    const isUserExist = await userModel.findOne(email)

    if(isUserExist){
        return res.status(409).json({
            message: "Email is already exist"
        })
    }

    const user = await userModel.create({
        name,
        password: crypto.createHash('sha256').update(password).digest('hex'),
        email
    })

    const token = jwt.sign({
        id: user_id,
    },process.env.JWT_SECRET, {expressIn: '4h' })

    res.cookie("token", token)

    res.status(201).json({
        message: "user resgiter succefully",
        user: {
            name: user.name,
            email: user.email
        }
    })

})

module.exports = authRouter