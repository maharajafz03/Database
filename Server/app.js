const express = require('express')
//const path = require('path')
//const bcrypt = require('bcryptjs')
//const cors = require('cors'); // Import cors
const connectDB = require("./DBconfig")

const PORT = 4000
const app = express()

//app.use(cors());

// Middleware to parse JSON and URL-encoded data
//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

app.get('/user', async (req, res) => {
    const userData = await userModel.find()
    res.json(userData)
  });
  

app.listen(PORT, () => console.log(`server is fuking on ${PORT}`))