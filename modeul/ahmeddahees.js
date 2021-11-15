const mongoose = require('mongoose');
const { Schema } = mongoose;





const detial = new Schema({
    title: String,
    photo: String,
    klam: String,

});

const detials = mongoose.model("detials", detial);
module.exports = detials;