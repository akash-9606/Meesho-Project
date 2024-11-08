const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      details: {
        name: {
          type: String,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
      },
      quantity: {
        type: Number,
        required: true,
        min: 1
      },
      size: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
    }
  ],
  totalPrice: {
    type: Number,
    required: true,
    default: 0
  },
}, {timestamps: true});

module.exports = mongoose.model('Cart', cartSchema);
