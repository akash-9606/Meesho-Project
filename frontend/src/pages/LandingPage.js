import React from 'react'
import Navbar from '../components/Navbar'
import bannerPage from "../assets/image/baner.png"
import bannerPage1 from "../assets/image/banner1.png"
import FooterSection from '../components/FooterSection'
import ProductSection from '../components/ProductSection'
const LandingPage = () => {
  return (<>

    <Navbar />



    {/*// it is a banner page */}
    <div className='content-container' style={{ marginTop: "160px" }}>
      <div className='container '>
        <div className="card border-0 text-white my-3 ">
          <img
            src={bannerPage}
            style={{ maxHeight: "350px" }}
            className="card-img d-block w-100"
            alt="..."
          />
        </div>
      </div>

      <div className='container '>
        <div className="card border-0 text-white my-3 ">
          <img
            src={bannerPage1}
            style={{ maxHeight: "800px" }}
            className="card-img d-block w-100"
            alt="..."
          />
        </div>
      </div>
    </div>




    <di ><h3 className="ps-3">Products For You</h3></di>
    <ProductSection />


    <FooterSection />




  </>)
}

export default LandingPage
