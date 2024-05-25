require('dotenv').config()
const mongoose = require('mongoose')

async function connectionToDb(){
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("connection to DB")
    } catch (error) {
        console.error(error)
        resizeBy.send("unable to connect DB")
    }
    
}

module.exports = {connectionToDb}