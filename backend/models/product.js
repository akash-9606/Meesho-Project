let mongoose = require('mongoose')

let productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    subCategory:{
        type:String,
        required:true
    },
    price: { 
        type: Number, 
        required: true 
    },
    images: {
         type: [String],
          required: true 
        },
    rating: {
         type: Number, 
         required: false 
        },
    reviews: {
        type: Number,
        required: false
    },
    description: {
         type: String, 
         required: true 
        },
    sizes: {
         type: [String],
          required: false 
        },
    colors: {
         type: String,
          required: false 
        },
    gender: {
            type:String,
            required: false
        },
    seller_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
})

let Product = mongoose.model('Product',productSchema)
module.exports = Product