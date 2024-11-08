import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import StripePage from "./StripePage";

const BillingPage = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMode, setPaymentMode] = useState('cod');
  const [cart, setCart] = useState({});

  const [fullname, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPinCode] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/cart/fetchCart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('userToken'),
      },
      body: JSON.stringify({
        userId: JSON.parse(localStorage.getItem('loggedInUser'))._id
      })
    }).then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          setTotalPrice(data.cart.totalPrice);
          setCart(data.cart);
        } else {
          alert(data.message);
        }
      }).catch((err) => console.log(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/order/orderAdd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullname: fullname,
          email: email,
          address: address,
          city: city,
          pincode: pincode,
          userId: JSON.parse(localStorage.getItem('loggedInUser'))._id,
          cart: cart
        })
      });

      const data = await response.json();

      if (data.status === 'success') {
        alert('Order successful');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
  }

  return (
    <>
      <div className="container mt-5">
        <Navbar />
        <h3 className="border-bottom py-2 mb-3">Billing & Payment</h3>
        <div className="row" style={{ marginTop: "50px" }}>
          <div className="col-md-6">
            <h4>Billing Details</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your full name"
                  value={fullname} onChange={(e) => setFullName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter your email "
                  value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <input type="text" className="form-control" placeholder="Enter your address"
                  value={address} onChange={(e) => setAddress(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">City</label>
                <input type="text" className="form-control" placeholder="Enter your city"
                  value={city} onChange={(e) => setCity(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Pin Code</label>
                <input type="text" className="form-control" placeholder="Enter your postal code"
                  value={pincode} onChange={(e) => setPinCode(e.target.value)} />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="col-md-6">
            <div className="shadow p-4">
              <h4>Order Summary</h4>
              <p>Subtotal: Rs {totalPrice}</p>
              <p>Delivery Charges: Free</p>
              <h5>Total: Rs {totalPrice}</h5>
              <div>
                {paymentMode === 'cod' ? (
                  <button className="btn btn-primary w-100 m-2" disabled={!fullname || !email || !address || !city || !pincode}>
                    Place order
                  </button>
                ) : (
                  <StripePage fullname={fullname} email={email} address={address} city={city} pincode={pincode} />
                )}
              </div>
            </div>
          </div>
        </div>
        <h5 className="mb-4">Payment methods</h5>

        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="checkoutForm1"
            checked={paymentMode === 'cod'} onChange={() => setPaymentMode('cod')} />
          <label className="form-check-label" htmlFor="checkoutForm1">
            Cash on delivery
          </label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="checkoutForm2"
            checked={paymentMode === 'stripe'} onChange={() => setPaymentMode('stripe')} />
          <label className="form-check-label" htmlFor="checkoutForm2">
            Stripe
          </label>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default BillingPage;
