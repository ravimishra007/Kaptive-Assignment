const mongoose = require('mongoose');

const blackListSchema = new mongoose.Schema({
    token : {type:"String"}
})

const blackListModel = mongoose.model("blackList",blackListSchema)

module.exports = {blackListModel}