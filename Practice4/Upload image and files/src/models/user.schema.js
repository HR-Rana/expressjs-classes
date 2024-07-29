
const mongoose = require('mongoose');


const User = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter a name"]
    },
    phone: {
        type: String,
        required: [true, "please enter a phone number"]
    },
    password: {
        type: String,
        required: [true, "please enter a password"]
    },
    img:{
        type: String,
        required: [true, "please enter the image"]
    }
})




module.exports = mongoose.model("User", User)