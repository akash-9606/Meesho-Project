import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  filterSarees,
  filterKurti,
  filterTopwear, 
  filterBottomwear,
  filterTshirts,
  filterJeans,
  filterBoys,
  filterGirls,
  filterKitchen,
  filterMakeup,
  filterHome,
  filterSkincare,
  filterBags,
  filterFootwear,
  filterElectronic
} from '../actions/productActions';

const NavbarDropdown = () => {
  //All sareecClick
  let dispatch = useDispatch()
  let handleFilterSarees = () => {
    dispatch(filterSarees())
  }

  //silksareeClick
  let handleFilterKurti = () => {
    dispatch(filterKurti());
  }

  let handleFilterTopwear = () => {
    dispatch(filterTopwear())
  }

  let handleFilterBottomwear = () => {
    dispatch(filterBottomwear())
  }
  let handleFilterTshirts = () => {
    dispatch(filterTshirts())
  }
  let handleFilterJeans = () => {
    dispatch(filterJeans())
  }
  let handleFilterBoys = () => {
    dispatch(filterBoys())
  }
  let handleFilterGirls = () => {
    dispatch(filterGirls())
  }
  let handleFilterKitchen = () => {
    dispatch(filterKitchen())
  }
  let handleFilterMakeup = () => {
    dispatch(filterMakeup())
  }
  let handleFilterHome = () => {
    dispatch(filterHome())
  }
  let handleFilterSkincare = () => {
    dispatch(filterSkincare())
  }
  let handleFilterBags = () => {
    dispatch(filterBags())
  }
  let handleFilterFootwear = () => {
    dispatch(filterFootwear())
  }
  let handleFilterElectronic = () => {
    dispatch(filterElectronic())
  }

  return (<>
    <nav className="navbar navbar-expand-lg navbar-light border-bottom second-navbar mb-2">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mb-2" id="navbarNav">
          <ul className="navbar-nav d-flex justify-content-around w-100 mb-0" style={{ fontSize: "13px" }}>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Women Ethnic</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/Sarees/" onClick={handleFilterSarees}>All Sarees</Link></li>
                <li><Link className="dropdown-item" to="/Kurti/" onClick={handleFilterKurti}>Kurti</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Women Western</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/Topwear/" onClick={handleFilterTopwear}>Topwear</Link></li>
                <li><Link className="dropdown-item" to="/Bottomwear/" onClick={handleFilterBottomwear}>Bottomwear</Link></li>
              </ul>
            </li>
            {/* <!-- Add more dropdown items as needed --> */}
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Men</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/TShirts/" onClick={handleFilterTshirts}>T-Shirts & Shirts</Link></li>
                <li><Link className="dropdown-item" to="/jeans/" onClick={handleFilterJeans}>Jeans</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Kids</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/Boys/" onClick={handleFilterBoys}>Boy's Dress</Link></li>
                <li><Link className="dropdown-item" to="/Girls/" onClick={handleFilterGirls}>Girl's Dress</Link></li>
              </ul>
            </li><li className="nav-item dropdown">
              <Link className="nav-link" to="" >Home & Kitchen</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/Kitchen" onClick={handleFilterKitchen}>Kitchen Items</Link></li>
                <li><Link className="dropdown-item" to="/Home" onClick={handleFilterHome}>Home Items</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Beauty & Health</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/Makeup" onClick={handleFilterMakeup}>Makeup Items</Link></li>
                <li><Link className="dropdown-item" to="/Skincare" onClick={handleFilterSkincare}>Skincare</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Bags & Footwear</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/Bags" onClick={handleFilterBags}>All Bags</Link></li>
                <li><Link className="dropdown-item" to="/Footwear" onClick={handleFilterFootwear}>Footwear</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Electronics</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/Electronic" onClick={handleFilterElectronic}>All Electronic Items</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
  )
}

export default NavbarDropdown
