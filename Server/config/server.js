const express = require("express")
const {connectDB} = require("./DB")

const PORT = 3000

const app = express();



app.get("/payment", (req, res) => {
    res.send("your data is here")
})

app.post("/payment", (req, res) => {
    res.send("your data is here")
})

app.put("/payment", (req, res) => {
    res.send("your data is here")
})

app.delete("/payment", (req, res) => {
    res.send("your data is here")
})

app.listen(PORT, (
    console.log(`server is running  on ${PORT}`)
))
