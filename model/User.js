const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  user: {type:String, require:true}
})

module.exports = mongoose.model('User', UserSchema);
