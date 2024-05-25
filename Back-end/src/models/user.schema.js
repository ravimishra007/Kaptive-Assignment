const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{type:String , requires:true},
    email:{type:String , requires:true,unique:true},
    password:{type:String , requires:true}
})

const userModel = mongoose.model("users",userSchema)

module.exports = {userModel}