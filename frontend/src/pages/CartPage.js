import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from '../components/Navbar';
import { setCurrentProduct } from '../actions/setCurrentProduct';
import { updateCartCount } from "../actions/CartActions";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  let handleRemove = (id, size) => {
    fetch('http://localhost:3001/api/cart/removeFromCart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: JSON.parse(localStorage.getItem('loggedInUser'))._id,
        productId: id,
        size: size
      })
    }).then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          setCartItems(data.cart.items);
          setTotalPrice(data.cart.totalPrice);
          dispatch(updateCartCount(data.cart.items.length));
          alert("Item removed from cart");
        } else {
          alert(data.message);
        }
      }).catch((err) => console.log(err));
  };

  const handleCheckout = () => {
    navigate('/billingPage');
  };

  const handleImageClick = async (productId) => {
    fetch('http://localhost:3001/api/products/getProductById', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: productId })
    }).then(res => res.json()).then((data) => {
      if (data.success) {
        dispatch(setCurrentProduct(data.product));
        navigate(`/details/`);
      } else {
        alert(data.message);
      }
    }).catch((err) => console.log(err));
  };

  const handleIncrement = (id) => {
    fetch('http://localhost:3001/api/cart/incrementItem', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: JSON.parse(localStorage.getItem('loggedInUser'))._id,
        productId: id,
      })
    }).then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          setCartItems(data.cart.items);
          setTotalPrice(data.cart.totalPrice);
          dispatch(updateCartCount(data.cart.items.length));
          alert("quantity increased");
        } else {
          alert(data.message);
        }
      }).catch((err) => console.log(err));
  };

  const handleDecrement = (id) => {
    fetch('http://localhost:3001/api/cart/decrementItem', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: JSON.parse(localStorage.getItem('loggedInUser'))._id,
        productId: id,
      })
    }).then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          setCartItems(data.cart.items);
          setTotalPrice(data.cart.totalPrice);
          dispatch(updateCartCount(data.cart.items.length));
          alert('quantity decreased');
        } else {
          alert(data.message);
        }
      }).catch((err) => console.log(err));
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
      alert("User is not logged in");
      navigate('/signin');
      return;
    }
    const userId = JSON.parse(loggedInUser)._id;

    fetch('http://localhost:3001/api/cart/fetchCart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: userId }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          setCartItems(data.cart.items);
          setTotalPrice(data.cart.totalPrice);
          dispatch(updateCartCount(data.cart.items.length));
        } else {
          alert(data.message);
        }
      })
      .catch((err) => console.log(err));
  }, [dispatch, navigate]);

  return (
    <>
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            background-color: #f8f9fa;
          }
          .container {
            margin-top: 50px;
            padding: 20px;
          }
          h3 {
            color: #333;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
            margin-bottom: 30px;
          }
          h4, h5 {
            color: #555;
          }
          .col-md-8 {
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 15px;
            background-color: #ffffff;
          }
          .col-md-4 {
            padding: 15px;
          }
          .d-flex.align-items-center {
            display: flex;
            align-items: center;
          }
          img {
            border-radius: 5px;
            margin-right: 10px;
          }
          img:hover {
            opacity: 0.9;
            cursor: pointer;
          }
          button.btn-link.text-danger {
            color: #dc3545;
            font-size: 0.9rem;
          }
          button.btn-link.text-danger:hover {
            color: #a71d2a;
            text-decoration: underline;
          }
          button.btn-outline-secondary.btn-sm {
            font-size: 0.8rem;
            border-radius: 50%;
            padding: 5px 10px;
          }
          span.mx-2 {
            font-weight: bold;
          }
          .col-md-4 .shadow {
            background-color: #fff;
            border-radius: 5px;
            padding: 20px;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          }
          .col-md-4 p {
            font-size: 1rem;
            color: #555;
            margin-bottom: 10px;
          }
          .btn-primary {
            width: 100%;
            padding: 10px;
            font-size: 1.1rem;
            background-color: #007bff;
            border: none;
            border-radius: 5px;
            transition: background-color 0.3s;
          }
          .btn-primary:hover {
            background-color: #0056b3;
            color: #fff;
          }
          .col-md-12.text-end h5 {
            font-size: 1.2rem;
            color: #333;
            margin-top: 20px;
          }
          @media (max-width: 768px) {
            .row {
              flex-direction: column;
            }
          }
        `}
      </style>
      <Navbar />
      <div className="container">
        <h3>Shopping Cart</h3>
        {cartItems.length === 0 ? (
          <h4>No items in the cart</h4>
        ) : (
          <div className="row">
            <div className="col-md-8">
              <div className="row border-bottom py-2">
                <div className='col-md-8'><h6>Product</h6></div>
                <div className='col-md-2 text-end'><h6>Price</h6></div>
                <div className='col-md-1 text-end'><h6>Qty</h6></div>
                <div className='col-md-1 text-end'><h6>Total</h6></div>
              </div>
              {cartItems.map((item) => (
                <div className="row border-bottom py-3 align-items-center" key={item._id}>
                  <div className='col-md-8 d-flex align-items-center'>
                    <div className='d-flex flex-column align-items-start'>
                      <img
                        src={item.details.image}
                        alt={item.title}
                        style={{ width: "40px", height: "40px", cursor: "pointer" }}
                        onClick={() => handleImageClick(item.productId)}
                      />
                      <button onClick={() => handleRemove(item.id, item.size)} className='btn btn-link text-danger p-0 mt-2'>
                        Remove
                      </button>
                    </div>
                    <h6 className='ps-3'>{item.details.name}</h6>
                  </div>
                  <div className='col-md-2 text-end'>{item.price.toFixed(1)}</div>
                  <div className='col-md-1 text-end'>
                    <div className="d-flex justify-content-center align-items-center">
                      <button onClick={() => handleDecrement(item._id)} className="btn btn-outline-secondary btn-sm px-2" disabled={item.qty <= 1}>-</button>
                      <span className="mx-2">{item.quantity || 1}</span>
                      <button onClick={() => handleIncrement(item._id)} className="btn btn-outline-secondary btn-sm px-2">+</button>
                    </div>
                  </div>
                  <div className='col-md-1 text-end'>{(item.price * (item.quantity || 1)).toFixed(1)}</div>
                </div>
              ))}
              <div className="row py-3">
                <div className='col-md-12 text-end'><h5>Total: {totalPrice.toFixed(2)}</h5></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="shadow p-4">
                <p>Subtotal: {totalPrice.toFixed(2)}</p>
                <p>Delivery Charges: Free</p>
                <p>Total: {totalPrice.toFixed(2)}</p>
                <button className="btn btn-primary" onClick={handleCheckout}>Proceed to Checkout</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
