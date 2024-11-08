import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState('')


  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usertype: usertype,
          name: name,
          email: email,
          password: password,
        }),
      });

      const data = await response.json();


      // Handle successful or failed login attempt
      if (data.status === 'success') {
        alert("Registration Successful!")
        setTimeout(() => {
          navigate("/signin")
        }, 1000);

      } else {
        alert(data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error('Error registering:', error);
    }

  }

  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: "150px", height: "90%" }}>
        <div className="wrapper d-flex align-items-center justify-content-center h-100">
          <div className="card register-form">
            <div className="card-body">
              <h5 className="card-title text-center">Sign Up</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="usertype" className="form-label">Sign up as</label>
                  <select
                    id="usertype"
                    className="form-select"
                    value={usertype}
                    onChange={(e) => setUsertype(e.target.value)}
                  >
                    <option value="" disabled>UserType</option>
                    <option value="user">User</option>
                    <option value="seller">Seller</option>
                  </select>

                </div>

                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}>Sign Up</button>

                <div className="sign-up mt-4">
                  Already have an account? <Link to="/signin">Sign in here</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
