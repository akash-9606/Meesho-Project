import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import {updateCartCount} from "../actions/CartActions"
import { useDispatch } from "react-redux";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()

  

  let handleSubmit = async (e) =>{
    e.preventDefault(); 
    try {
        const response = await fetch('http://localhost:3001/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':localStorage.getItem('userToken'),
          },
          body: JSON.stringify({
            email: email,
            password: password
          }), 
        });
  
        const data = await response.json();
       
        if (data.status === 'success') {
            localStorage.setItem('loggedInUser', JSON.stringify(data.user))
            localStorage.setItem('userToken', data.token)
            alert("Login Successful!")
            if(data.UserCart){
              dispatch(updateCartCount(data.userCart?.items?.length))
          }
            setTimeout(() => {
                switch(data.user.usertype) {
                    case 'user':
                        navigate('/');
                        break;
                    case 'seller':
                        navigate('/seller/dashboard');
                        break;
                    default:
                        break;
                }
            }, 1000);
        } else {
          alert(data.message)
        }
      } catch (error) {
        console.error('Error logging in:', error);
        alert("Error logging in. Please try again.")
      }

 }

  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: "150px" }}>
        <div className="wrapper d-flex align-items-center justify-content-center h-100">
          <div className="card login-form">
            <div className="card-body">
              <h5 className="card-title text-center">Login</h5>
              <form onSubmit={handleSubmit}>
                {/* <div className="mb-3"> */}
                  {/* <label htmlFor="role" className="form-label">Sign in as</label>
                  <select
                    id="usertype"
                    className="form-select"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="user">User</option>
                    <option value="seller">Seller</option>
                  </select>
                </div> */}

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">Sign In</button>
                <Link to="/forgotPassword">Forgot Password?</Link>

                <div className="sign-up mt-4">
                  Don't have an account? <Link to="/signup">Create one</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
