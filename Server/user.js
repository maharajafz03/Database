const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test');

const userSchema = new mongoose.Schema({
    name:String,
    age: Number,
    token:String
})


module.exports = mongoose.model("user", userSchema)
