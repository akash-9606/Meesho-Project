import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useEffect, useState} from "react";

const stripePromise = loadStripe('pk_test_51QFISBF4EHZ1XPSP7behUzGAYtRdNtBMeJVAU97MtRSEB2FETru3RKHzZuXaPu6Cyj4zoaKeuccO6FjKuGEvCtV700IdlCGch2');
function StripePage({fullname,email,address,city, pincode}) {

  const [cart,setCart] = useState([])

  useEffect(() =>{
    fetch('http://localhost:3001/api/cart/fetchCart',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':localStorage.getItem('userToken'),
        },
        body:JSON.stringify({
            userId:JSON.parse(localStorage.getItem('loggedInUser'))._id
        })
    }).then((res) => res.json())
    .then((data) => {
        if(data.status === 'success'){
         
            setCart(data.cart)
          
            
        }else{
            alert(data.message)
        }
    }).catch((err) => console.log(err))
 
},[])

  const handleCheckout = async () => {
    const stripe = await stripePromise;

  
    const response = await fetch('http://localhost:3001/api/cart/makePayment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
        'Authorization':localStorage.getItem('userToken')
       },
      body: JSON.stringify({ 
        cart,
        fullname,
        email,
        address,
        city,
        pincode,
        userId:JSON.parse(localStorage.getItem('loggedInUser'))._id

      }) 
    });

    const { id: sessionId } = await response.json();

    
    const { error } = await stripe.redirectToCheckout({ sessionId });

    if (error) {
      console.error("Error redirecting to Stripe Checkout:", error);
    }
  };



  return (
    <button onClick={handleCheckout} disabled={!fullname || !email || !address || !city || !pincode} className='btn btn-primary w-100 m-2'>
      Checkout with Stripe
    </button>
  );
}
 
export default StripePage;