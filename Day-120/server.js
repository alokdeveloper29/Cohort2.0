import dotenv from 'dotenv'
dotenv.config()
import app from "./src/app.js"
import connectDb from "./src/config/database.js"


app.listen(3000, () => {
    console.log("server is running on port 3000")
})

connectDb()