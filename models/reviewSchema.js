const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
    name:String,
    review:String,
    image:String
})

module.exports = mongoose.model('User', reviewSchema);