const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs")
require('../db/db')

const User = require('../model/User')


/* <------- Register User Route--------> */
router.post('/register', async (req, res) =>{
    try {
        const createdUser = await User.create(req.body);
        console.log(createdUser)
        if(createdUser){
            req.session.logged = true;
            req.session.userId = createdUser._id
        }
        res.json({
            data: createdUser,
            logged: req.session.logged,
            success: true
        })
    } catch (err) {
        console.log(err)
        res.json({err})
        
    }
})


/* <------- Login User Route-------> */
router.post('/login', async (req, res) =>{
    try {
        const foundUser = await User.findOne({username: req.body.username})
            console.log(foundUser,"<==== found user")
        
    } catch (err) {
        
    }
})


router.get('/', async(req,res)=>{
    try{
        const getUser = await User.find({})
        res.json({getUser})
    }catch(err){
        return err
    }
})

module.exports = router;