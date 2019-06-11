const express = require("express")
const app = express()
<<<<<<< HEAD
<<<<<<< HEAD
// const mongoose = require()
// require('./db/db')
=======
const mongoose = require()
=======
const mongoose = require('mongoose')
>>>>>>> master
require('./db/db')
>>>>>>> master


app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(3010, () => {
    console.log('port:', 3010)
})
