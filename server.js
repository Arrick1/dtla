const express = require("express")
const app = express()
// const mongoose = require()
// require('./db/db')


app.get('/', (req, res) => {
    res.send('hello')
}) 

app.listen(3000, () => {
    console.log('port:', 3000)
})
