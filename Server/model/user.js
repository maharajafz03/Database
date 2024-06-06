const express = require('express');
const mongodb = require("../config/DB");
const { default: mongoose } = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    Number:Number,
    adress: {
        state: String,
        city: String,
    }
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel();