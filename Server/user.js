const mongoose = require('mongoose');

// const addressSchema = new mongoose.Schema(
//     {
//         street:String,
//         city:String
//     }
// )

const userSchema = new mongoose.Schema({
    name:String,
    age: Number,
    // password:String,
    
})


module.exports = mongoose.model("user", userSchema)
