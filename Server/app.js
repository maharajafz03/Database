const express = require('express')
const path = require('path')


const PORT = 4000

const app = express()


// app.get('/',(req, res) => {
//     res.sendFile(path.join(__dirname, 'Client', 'build', 'index.html'))
// })


app.listen(PORT, () => console.log(`server is working on ${PORT}`))