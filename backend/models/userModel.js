let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({

    usertype:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
},
{timestamps:true})

let User = mongoose.model('User',userSchema)
module.exports = User