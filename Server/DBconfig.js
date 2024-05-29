
// config.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;


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


