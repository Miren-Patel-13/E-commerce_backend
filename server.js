const express = require('express')
const app = express()
const Port = 5000

app.use(express.json())

app.listen(Port, () => {
    console.log("Server Started...")
})
