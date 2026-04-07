const express = require("express")
const app = express()

app.get('/',(req,res)=>{
    res.send('okdkdkkd')
})

app.get('/home',(req,res)=>{
    res.send('hello from home')
})

app.get('/about',(req,res)=>{
    res.send('hello from about')
})

app.listen(3000)
