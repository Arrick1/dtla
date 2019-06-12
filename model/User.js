const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")


const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String},
    password: {type: String, required: true},
    services: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Services'
    }]
})

UserSchema.methods.hashPassword = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

UserSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password)
}

UserSchema.pre("save", function(next){
    if(this.isModified("password")){
        this.password = this.hashPassword(this.password)
    }
    next()
})

module.exports = mongoose.model('User', UserSchema)
