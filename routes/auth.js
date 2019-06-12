const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs")
require('../db/db')



const User = require('../model/User')


/* <------- Register User Route--------> */
router.post('/', async (req, res) =>{
    try {
        const createdUser = await User.create(req.body);
        console.log(createdUser)
        if(createdUser){
            req.session.logged = true;
            req.session.userId = createdUser._id
            console.log(req.session.userId, "<<<<<<<<<<<<<<<<userId")

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
        if(foundUser){
            if(foundUser.validPassword(req.body.password)){
                req.session.userId = foundUser._id;
                req.session.logged = true
                console.log(req.session.userId, "<<<<<<<<<<<<<<<<userId")
                res.json({
                    data: foundUser,
                    success: foundUser ? true : false
                })
            }else {
                res.json({error: "problem logging in"})
            }
        }
    } catch (err) {
        res.json(err)
    }
})


/* <------- Logout User Route--------> */
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
      if(err){
        res.json({err});
      } else {
        res.json({
          success: true,
          message: "logged out!"
        });
      }
    })
  })




  router.get('/', async(req,res)=>{
      try{
          const getUser = await User.find({})
          res.json({getUser})
      }catch(err){
          return err
      }
  })
/* <------- User Profile Route--------> */
router.get('/profile', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json({
            user,
            currentUser: req.session.userId,
            logged: req.session.logged
        })
    } catch (err) {
        res.send({err})
        console.log({err})

    }
})


module.exports = router;
