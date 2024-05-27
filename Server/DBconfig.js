const express = require('express');
const mongoose = require('mongoose'); // Corrected the typo

require('dotenv').config();

const app = express();
const PORT = 4000;
const API = process.env.DB_API;

// Connect to MongoDB
mongoose.connect(API, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

// Example route
app.get('/', (req, res) => {
    res.send('Hello, MongoDB is connected!');
});

app.listen(PORT, () => console.log(`Server is working on port ${PORT}`));


//mongodb+srv://maharajafz1999:<password>@cluster0.izq6ewx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0