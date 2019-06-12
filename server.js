const express = require("express")
const app = express()
const mongoose = require('mongoose')
require('./db/db')
const User = require('./model/User')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', async(req, res) => {
  try{
    const getUser = await User.find({})
    res.json({getUser})
  }catch(err){
    return err
  }
})

app.post('/', async(req,res) => {
  try{
    const comment = await User.create(req.body)
    res.json({
      success:true,
      comment
    })
  }catch(err){
    res.json(err)
  }
})



app.listen(3010, () => {
    console.log('port:', 3010)
})
