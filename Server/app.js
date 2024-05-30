const express = require('express')
const path = require('path')
//const connectDB = require("./DBconfig")


const PORT = 4000

const app = express()


app.get('/', (req, res) => {
    res.send('Server is fucking!');
  });
  
  // Connect to the database
  //connectDB();


app.listen(PORT, () => console.log(`server is fuking on ${PORT}`))