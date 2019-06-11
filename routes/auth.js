const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs")

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
            user: createdUser,
            logged: req.session.logged,
            success: true
        })
    } catch (err) {
        res.json({err})
        
    }
})

module.exports = router;