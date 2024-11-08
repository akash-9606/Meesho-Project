
let Order = require('../models/orders')

let Product = require('../models/product')
let Cart = require('../models/cart')

let orderAdd = async (req,res) =>{
    try {
        const { cart, fullname, address, email, city,pincode, modeOfPayment, userId } = req.body;
        const existingOrder = await Order.findOne({ cart_id: cart._id });
        // Create a new order document
        
        if(!existingOrder){
            const order = new Order({
                fullname,
                address,
                email,
                city,
                pincode,
                modeOfPayment : 'Cash on delivery',
                userId,
                cart_id: cart._id
            });

            await order.save();
        }

        await Cart.updateOne({_id:cart._id}, {$unset: {userId:1}})
  
        let productQuantityMap = {};

        cart.items.forEach(product => {
            productQuantityMap[product.productId] = product.quantity;
        });

        // update the quantity of the products in the database
        for (let i = 0; i <  cart.items.length; i++) {
            const product = cart.items[i];
            await Product.findByIdAndUpdate(
                { _id: product.productId },
                {
                    $inc: {
                        stock: -(productQuantityMap[product.productId])
                    }
                },
                { new: true }
            );
        }
        res.status(201).json({ status:'success', message: "Order created successfully",  });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
}

let fetchOrderByUserId = async (req,res) =>{
    try {
        let {userId} = req.body
        let order = await Order.find({userId})
        
        if(!order){
            res.status(400).json({message:"order is empty"})
        }else{
            res.status(200).json({ status: 'success', order });
        }   
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' }); 
    }
}
module.exports = {orderAdd,fetchOrderByUserId}

