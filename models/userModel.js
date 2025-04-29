const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:String,
    review:String,
    image:String
})

module.exports = mongoose.model('User', userSchema);