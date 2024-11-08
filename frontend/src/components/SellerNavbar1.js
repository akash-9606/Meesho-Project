import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import meeshoLogo from '../assets/image/messhoLogo.png';
import "../styles/Navbar.css";

const SellerNavbar1 = () => {
let navigate=useNavigate()
  const handleLogout = () => {
    localStorage.clear('loggedInUser');
    setTimeout(() =>{
        navigate('/')
},1000)  
  };

  return (
    <nav className="navbar navbar-light bg-light border-bottom">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Logo */}
        <Link className="navbar-brand">
          <img src={meeshoLogo} alt="Meesho" className="navbar-logo"/>
        </Link>
        <Link className="btn btn-primary me-2" to='/seller/dashboard'>Add Products</Link>
        {/* Logout Button */}
        <button className="btn btn-outline-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default SellerNavbar1;
