const express = require('express')
const path = require('path')
const bcrypt = require('bcryptjs')
//const connectDB = require("./DBconfig")


const PORT = 4000

const app = express()

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Server is fucking!');
  });
  
  // Connect to the database
  //connectDB();
// User registration route
app.post("/localhost:4000", async (req, res) => {
    const { name, age, email, password, address } = req.body;

    try {
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            age,
            email,
            password: hashedPassword,
            address,
        });

        const savedUser = await newUser.create();
        res.status(201).json(savedUser);
        console.log(savedUser)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.listen(PORT, () => console.log(`server is fuking on ${PORT}`))