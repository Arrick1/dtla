const express = require("express")
const app = express()
<<<<<<< HEAD
// const mongoose = require()
// require('./db/db')
=======
const mongoose = require()
require('./db/db')
>>>>>>> master


app.get('/', (req, res) => {
    res.send('hello')
}) 

app.listen(3000, () => {
    console.log('port:', 3000)
})
