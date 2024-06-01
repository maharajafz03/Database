
// config.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/data', {

      serverSelectionTimeoutMS: 30000, // 30 seconds
      socketTimeoutMS: 45000, // 45 seconds
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

connectDB()

module.exports = connectDB;


       // old config

// const express = require('express');
// const mongoose = require('mongoose'); 

// require('dotenv').config();

// const app = express();
// const PORT = 4000;
// const API = process.env.DB_API;

// // Connect to MongoDB
// mongoose.connect(API, {                   
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('Connected to MongoDB');
// }).catch(() => {
//     console.error('Error connecting to MongoDB');
// });

// // Example route
// // app.get('/', (req, res) => {
// //     res.send('Hello, MongoDB is connected!');
// // });
// // console.log(API)

// app.listen(PORT, () => console.log(`Server is working on port ${PORT}`));


