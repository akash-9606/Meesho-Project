let mongoose = require('mongoose')
const cart=require("./cart")
let orderSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    modeOfPayment:{
        type:String,
        required:true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      cart_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart',
        required: true
    }
})

let Order = mongoose.model('Order',orderSchema)
module.exports = Order