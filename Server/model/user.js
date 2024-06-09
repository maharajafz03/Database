const express = require('express');
const mongodb = require("../config/DB");
const { default: mongoose } = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    Number:Number,
    adress: useraddSchema
});

const useraddSchema = new mongoose.Schema({
    state: String,
    city: String,
    pincode: Number,
})

const userModel = mongoose.model("user", userSchema);
const useraddModel = mongoose.model("useraddress", useraddSchema)

// module.exports = userModel();
// module.exports = useraddModel();

module.exports = {
    userModel: mongoose.model("user", userSchema),
    useraddModel: mongoose.model("useraddress", useraddSchema)
};
