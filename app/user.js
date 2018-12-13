var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model('User', new Schema({
    username: {
        type:String,
        unique:true,
		index:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    register_time:{
        type:String,
        required:true
    },
    register_type:{
        type:String,
        required:true
    },
    latitude:{
        type:String,
        required:true
    },
    longitude:{
        type:String,
        required:true
    },
    verification_status:{
        type:String,
        required:true
    },
    prefer_language:{
        type:String,
        required:true
    }
}));