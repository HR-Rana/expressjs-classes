

const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true,
    },
    name:{
        type: String,
        required: true
    },
    phone:{
       type: Number,
       required: true,
       unique: true
    },
    password:{
        type: String,
        required: true,
    },
    IsAdmin:{
        type: Boolean,
        default: false
    },
    IsBanned:{
        type: Boolean,
        default: false
    },
    CreatedOn:{
        type:Date,
        default: Date.now()
    }
})



module.exports = mongoose.model("user", UserSchema)