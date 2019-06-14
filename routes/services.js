const express = require("express");
const router = express.Router();
require('../db/db')

const Services = require('../model/Services')
const User = require('../model/User')

router.post('/', async(req,res)=>{
  try{
    const findUser = await User.findById(req.session.userId || '5d02f07257abe8b85128d76c');
    const createService = await Services.create(req.body);
    findUser.services.push(createService);
    findUser.save();
    res.json({
      findUser,
      createService,
      success: true
    })
  }catch(err){
    res.json({
      message: "not created"
    })
  }
})

router.get('/' , async(req, res)=>{
  try{
    const findServices = await Services.find({})
    res.json({
      findServices
    })
  }catch(err){
    return err
  }
})

router.get('/shower', async(req, res)=>{
  try{
    const findServices = await Services.find({categories:'shower'})
    res.json({
      findServices,
      success: true
    })
  }catch(err){
    return err
  }
})

router.get('/food', async(req, res)=>{
  try{
    const findServices = await Services.find({categories:'food'})
    res.json({
      findServices,
      success: true
    })
  }catch(err){
    return err
  }
})

router.get('/selfParking', async(req, res)=>{
  try{
    const findServices = await Services.find({categories:'selfParking'})
    res.json({
      findServices,
      success: true
    })
  }catch(err){
    return err
  }
})

router.get('/jobs', async(req, res)=>{
  try{
    const findServices = await Services.find({categories:'jobs'})
    res.json({
      findServices,
      success: true
    })
  }catch(err){
    return err
  }
})

router.get('/all' , async(req, res)=>{
  try{
    const findServices = await Services.find({})
    res.json({
      findServices,
      success: true
    })
  }catch(err){
    return err
  }
})


module.exports = router;
