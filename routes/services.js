const express = require("express");
const router = express.Router();
require('../db/db')

const Services = require('../model/Services')
const User = require('../model/User')

router.post('/', async(req,res)=>{
  try{
    const findUser = await User.findById(req.session.realtorDbId || '5d0094cf0d6e3762ca0edb02');
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

router.get('/', async(req, res)=>{
  try{
    const findServices = await Services.find({})
    const findUser = await User.find({})
    res.json({
      findServices,
      findUser
    })
  }catch(err){
    return err
  }
})

router.get('')

module.exports = router;