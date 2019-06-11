const express = require("express")
const app = express()
const mongoose = require('mongoose')
require('./db/db')


app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(3010, () => {
    console.log('port:', 3010)
})
