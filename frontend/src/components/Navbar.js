import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import meeshoLogo from '../assets/image/messhoLogo.png';
import "../styles/Navbar.css";
import NavbarDropdown from './NavbarDropdown';
import { setSearchQuery, fetchProducts } from "../actions/productActions";
import { updateCartCount } from "../actions/CartActions"

const Navbar = () => {
  const cartCounter = useSelector(state => state.cart.cartCounter);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(query));

    if (query.trim() === "") {
      dispatch(fetchProducts());
    }
  };

  const handleLogoClick = () => {
    setQuery('');
    dispatch(setSearchQuery(''));
  };

  let handleLogout = async () => {
    try {
      localStorage.clear();
      await dispatch(updateCartCount(0));  // Ensure this completes if it's async
      navigate('/signin');
      alert('User logged off');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <>
      <div className="fixed-navbar-container">
        <nav className="navbar navbar-expand-lg border-bottom navbar-light mb-2">
          <div className="container-fluid d-flex align-items-center justify-content-between">
            {/* Logo */}
            <Link className="navbar-brand" to="/">
              <img src={meeshoLogo} alt="Meesho" onClick={handleLogoClick} className="navbar-logo" />
            </Link>

            {/* Search Bar for larger screens */}
            <div className="navbar-search d-none d-lg-block flex-grow-1 ">
              <form className="d-flex position-relative" onSubmit={handleSearch}>
                <input
                  className="form-control"
                  type="search"
                  placeholder="Try Saree, Kurti or Search by Product Code"
                  aria-label="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <i className="fas fa-search position-absolute search-icon"></i>
              </form>
            </div>

            {/* Toggler for small screens */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav1"
              aria-controls="navbarNav1"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav1">
              <ul className="navbar-nav align-items-center pe-3" style={{ fontSize: "14px" }}>
                <li className="nav-item dropdown">
                  <div className="nav-link dropdown-toggle" id="downloadAppDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa-solid fa-mobile me-1"></i> Download App
                  </div>
                  <ul className="dropdown-menu" aria-labelledby="downloadAppDropdown">
                    <li>
                      {/* Google Play Button */}
                      <a className="dropdown-item" href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pli=1">
                        <button className="app-button">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style={{ height: "40px" }} />
                        </button>
                      </a>
                    </li>
                    <li>
                      {/* App Store Button */}
                      <a className="dropdown-item" href="https://apps.apple.com/in/app/meesho/id1457958492">
                        <button className="app-button">
                          <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred_2x.png" alt="App Store" style={{ height: "40px" }} />
                        </button>
                      </a>
                    </li>
                  </ul>
                </li>
                <span className="vertical-separator"></span>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Become a Supplier</Link>
                </li>
                <span className="vertical-separator"></span>
                <li className="nav-item">
                  <Link className="nav-link" to="https://www.meesho.io/news">Newsroom</Link>
                </li>
                <span className="vertical-separator"></span>
              </ul>

              {/* Profile & Cart Icons */}
              <div className="navbar-icons d-flex align-items-center pe-4">
                <div className="icon-link position-relative profile-hover">
                  <div className="icon-container">
                    <i className="fa-regular fa-user icon"></i>
                    <span>Profile</span>
                  </div>

                  <div className="dropdown-menu profile-dropdown">
                    <Link to="/signin">Sign In</Link>
                    <Link to="/checkoutpage">My Orders</Link>
                    <Link onClick={handleLogout}>Logout</Link>
                  </div>
                </div>

                <Link to="/cartpage" className="icon-link">
                  <div className="icon-container position-relative">
                    <i className="fa fa-shopping-cart icon"></i>
                    <span>Cart</span>
                    {cartCounter ? (
                      <span className="badge rounded-pill bg-danger position-absolute" style={{ top: "-10px", right: "-10px" }}>
                        {cartCounter}
                      </span>
                    ) : null}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Search Bar */}
        <div className="navbar-search d-block d-lg-none">
          <form className="d-flex position-relative" onSubmit={handleSearch}>
            <input
              className="form-control"
              type="search"
              placeholder="Try Saree, Kurti or Search by Product Code"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <i className="fas fa-search position-absolute search-icon"></i>
          </form>
        </div>

        <NavbarDropdown />
      </div>
    </>
  );
};

export default Navbar;
