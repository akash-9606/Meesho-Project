
import React from 'react';
import { Link } from 'react-router-dom';

const FooterSection = () => {
  return (
    <>
      <footer className="bg-dark text-white pt-5 pb-4">
        <div className="container text-center text-md-start">
          <div className="row">
            {/* <!-- First Column: Company Info --> */}
            <div className="col-md-3 col-lg-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold">About Meesho</h5>
              <p>
                Discover a wide variety of high-quality products at competitive prices. 
                Shop conveniently and have everything delivered right to your doorstep.
              </p>
            </div>

            {/* <!-- Second Column: Quick Links --> */}
            <div className="col-md-2 col-lg-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4">Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link to="#" className="text-white text-decoration-none">Become a Supplier</Link></li>
                <li><Link to="#" className="text-white text-decoration-none">Hall of Fame</Link></li>
                <li><Link to="#" className="text-white text-decoration-none">Sitemap</Link></li>
                <li><Link to="#" className="text-white text-decoration-none">Careers</Link></li>
              </ul>
            </div>

            {/* <!-- Third Column: Resources --> */}
            <div className="col-md-3 col-lg-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4">Resources</h5>
              <ul className="list-unstyled">
                <li><Link to="#" className="text-white text-decoration-none">Legal & Policies</Link></li>
                <li><Link to="#" className="text-white text-decoration-none">Tech Blog</Link></li>
                <li><Link to="#" className="text-white text-decoration-none">Returns & Refunds</Link></li>
                <li><Link to="#" className="text-white text-decoration-none">Help Center</Link></li>
              </ul>
            </div>

            {/* <!-- Fourth Column: Social Media & Contact --> */}
            <div className="col-md-3 col-lg-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4">Follow Us</h5>
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <Link to="#" className="text-white"><i className="fab fa-facebook-f"></i></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="text-white"><i className="fab fa-twitter"></i></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="text-white"><i className="fab fa-instagram"></i></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="text-white"><i className="fab fa-linkedin"></i></Link>
                </li>
              </ul>
            </div>

            {/* <!-- Fifth Column: Contact Info & Subscription --> */}
            <div className="col-md-4 col-lg-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold">Contact Us</h5>
              <p><i className="fas fa-home me-2"></i> Bangalore, India</p>
              <p><i className="fas fa-envelope me-2"></i> support@meesho.com</p>
              <p><i className="fas fa-phone me-2"></i> +91 98765 43210</p>

            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-12 text-center">
              <p>&copy; {new Date().getFullYear()} Meesho. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
