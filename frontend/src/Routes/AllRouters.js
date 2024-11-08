import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sarees from "../pages/Sarees"
import Bottomwear from '../pages/Bottomwear'
import Kurti from "../pages/Kurti"
import Topwear from "../pages/Topwear"
import TShirts from "../pages/TShirts"
import Details from '../pages/Details'
import LandingPage from "../pages/LandingPage"
import Jeans from "../pages/Jeans"
import Boys from "../pages/Boys"
import Girls from "../pages/Girls"
import Kitchen from "../pages/Kitchen"
import Makeup from "../pages/Makeup"
import Home from "../pages/Home"
import Skincare from "../pages/Skincare"
import Bags from "../pages/Bags"
import Footwear from "../pages/Footwear"
import CartPage from '../pages/CartPage'
import CheckoutPage from "../pages/CheckoutPage"
import BillingPage from '../pages/BillingPage'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import ForgotPassword from '../pages/ForgotPassword'
import ResetPassword from "../pages/ResetPassword"
import SellerDashboard from "../pages/SellerDashboard "
import SellerViewProduct from "../pages/SellerViewProduct"
import Success from '../pages/Success'
import Cancel from '../pages/cancel'
import Electronic from '../pages/Electronic'
const AllRouters = () => {
  return (<>
    <Routes>
      <Route path='/'>
        <Route index element={<LandingPage />} />
        <Route path='/Sarees' element={<Sarees />} />
        <Route path='/Kurti' element={<Kurti />} />
        <Route path='/Topwear' element={<Topwear />} />
        <Route path='/Bottomwear' element={<Bottomwear />} />
        <Route path='/tShirts' element={<TShirts />} />
        <Route path='/details' element={<Details />} />
        <Route path='/jeans' element={<Jeans />} />
        <Route path='/Boys' element={<Boys />} />
        <Route path='/Girls' element={<Girls />} />
        <Route path='/Kitchen' element={<Kitchen />} />
        <Route path='/Makeup' element={<Makeup />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Skincare' element={<Skincare />} />
        <Route path='/Bags' element={<Bags />} />
        <Route path='/Footwear' element={<Footwear />} />
        <Route path='/Electronic' element={<Electronic />} />
        <Route path='/cartpage' element={<CartPage />} />
        <Route path='/checkoutPage' element={<CheckoutPage />} />
        <Route path='/billingPage' element={<BillingPage />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/resetPassword/:token' element={<ResetPassword />} />
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route path="/sellerViewProduct" element={<SellerViewProduct />} />
        <Route path="/success" element={<Success/>} />
        <Route path="/cancel" element={<Cancel/>} />
      </Route>
    </Routes>
  </>)
}

export default AllRouters
