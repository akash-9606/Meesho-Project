let Cart = require('../models/cart');
const Order = require('../models/orders');
const mongoose=require("mongoose")
let stripe = require('stripe')(process.env.STRIPE_KEY);



let cartAdd = async (req, res) => {
    try {
        const { userId, productId, quantity, size, product, price } = req.body;

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({
                userId,
                items: [{ productId, quantity, price, size, details: { image: product.images[0], name: product.title } }],
                totalPrice: quantity * product.price 
            });
        } else {
            const existingProductIndex = cart.items.findIndex(item => item.productId.toString() === productId && item.size === size);
            if (existingProductIndex >= 0) {
                cart.items[existingProductIndex].quantity += quantity;
                cart.items[existingProductIndex].price = price;
            } else {
                cart.items.push({ productId, quantity, price, size, details: { image: product.images[0], name: product.title } });
            }
            cart.totalPrice = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        }

        await cart.save();

        res.send({ status: 'success', message: 'Item added to cart successfully', cart });
    } catch (error) {
        res.send({ status: 'failed', message: error.message });
    }
};

let fetchCart = async (req, res) => {
    try {
        const { userId } = req.body;

        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: "Cart is empty" });
        }

        res.status(200).json({ status: 'success', message: 'Cart fetched successfully', cart });
    } catch (error) {
        console.error('Error fetching cart:', error);
        res.status(500).json({ message: "Failed to fetch cart" });
    }
};

let fetchCartById = async (req, res) => {
    try {
        let { cartId } = req.body;
        let cart;
        if(typeof cartId == 'string'){
             cart = await Cart.findOne({ _id: cartId });
        }else if (Array.isArray(cartId)){
            cartId = cartId.map(id => new mongoose.Types.ObjectId(id));
             cart = await Cart.find({ _id: { $in:cartId } });
        }
        if (!cart) {
            return res.status(404).json({ message: "Cart is empty" });
        }

        res.status(200).json({ status: 'success', message: 'Cart saved successufully', cart });
    } catch (error) {
        console.error('Error fetching cart:', error);
        res.status(500).json({ message: "Failed to fetch cart" });
    }
}

let incrementItem = async (req, res) => {
    try {
        const { userId, productId } = req.body;

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        const existingProductIndex = cart.items.findIndex(item => item._id.toString() === productId);

        if (existingProductIndex >= 0) {
            cart.items[existingProductIndex].quantity += 1;
        } else {
            return res.status(404).json({ message: "Item not found in cart" });
        }

        // Recalculate the total price without delivery charge
        cart.totalPrice = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);

        await cart.save();
        res.status(200).json({ status: 'success', message: 'Item quantity incremented', cart });
    } catch (error) {
        res.status(500).json({ status: 'failed', message: error.message });
    }
};

let decrementItem = async (req, res) => {
    try {
        const { userId, productId } = req.body;

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        const existingProductIndex = cart.items.findIndex(item => item._id.toString() === productId);

        if (existingProductIndex >= 0) {
            if (cart.items[existingProductIndex].quantity > 1) {
                cart.items[existingProductIndex].quantity -= 1;
            } else {
                return res.status(400).json({ message: "Cannot decrement. Minimum quantity reached." });
            }
        } else {
            return res.status(404).json({ message: "Item not found in cart" });
        }

        // Recalculate the total price without delivery charge
        cart.totalPrice = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);

        await cart.save();
        res.status(200).json({ status: 'success', message: 'Item quantity decremented', cart });
    } catch (error) {
        res.status(500).json({ status: 'failed', message: error.message });
    }
};

let removeFromCart = async (req, res) => {
    try {
        const { userId, productId } = req.body;

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        const existingProductIndex = cart.items.findIndex(item => item._id.toString() === productId);

        if (existingProductIndex < 0) {
            cart.items.splice(existingProductIndex, 1); // Remove the item
        } else {
            return res.status(404).json({ message: "Item not found in cart" });
        }

        if (cart.items.length === 0) {
            cart.totalPrice = 0; // If the cart is empty, set the total price to 0
        } else {
            // Recalculate the total price without delivery charge
            cart.totalPrice = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        }

        await cart.save();
        res.status(200).json({ status: 'success', message: 'Item removed from cart', cart });
    } catch (error) {
        res.status(500).json({ status: 'failed', message: error.message });
    }
};

let makePayment = async (req,res) =>{
    const { cart, address, email, city, pincode, fullname, userId,modeOfPayment } = req.body;


    try {
        const existingOrder = await Order.findOne({ cart_id: cart._id });
        if (!existingOrder) {
            let order = new Order({
                address,
                email,
                modeOfPayment: 'stripe',
                fullname: fullname,
                city,
                pincode,
                userId,
                cart_id: cart._id
            })

            await order.save()
        }

        const lineItems = cart.items.map((item)=>({
            price_data:{
                currency:"inr",
                product_data:{
                    name:item.details.name,
                },
                unit_amount:item.price*100,
            },
            quantity:item.quantity
        }));

        const shippingCharge = {
            price_data: {
                currency: "inr",
                product_data: {
                    name: "Shipping Charge",
                },
                unit_amount: 50 *100,
            },
            quantity: 1,
        };
        
        
        lineItems.push(shippingCharge);

    const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: lineItems,
    success_url: `http://localhost:3000/success/`,
    cancel_url: `http://localhost:3000/cancel`,
  },{apiKey: process.env.STRIPE_KEY})
      
        res.json({ id: session.id });
      } catch (error) {
        console.error('Error creating Stripe session:', error.message);
        res.status(500).json({ error: 'An error occurred, please try again later.', error });
      }
      

}
module.exports = { cartAdd, fetchCart, removeFromCart, decrementItem, incrementItem, makePayment, fetchCartById };
