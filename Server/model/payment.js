const express = require('express');
const mongodb = require("../config/DB");
const { default: mongoose } = require('mongoose');

const paymentSchema = new mongoose.Schema({
    Bankname:String,
    account:String,
    Number:Number,
    currency:String
});

const paymentModel = mongoose.model("payment", paymentSchema);

module.exports = paymentModel();