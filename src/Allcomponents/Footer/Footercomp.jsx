import React from 'react';
import './Footercomp.css'; // Assuming you have a CSS file for styles

const Footercomp = () => {
  return (
    <div className="footbg">
      <div className="containerfluid">
        <div className="container footertop">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <img className="logoimage" src="../assets/Images/MSLOGO.png" alt="Master Sports Logo" />
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before the final copy is available.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-12 col-sm-12">
              <h3 className="text-white font-weight-bold">Find It Fast</h3>
              <div className="links pt-3">
                <a href="#" className="text-white text-decoration-none">__ About Us</a>
                <a href="#" className="text-white text-decoration-none">__ Category</a>
                <a href="#" className="text-white text-decoration-none">__ Products</a>
                <a href="#" className="text-white text-decoration-none">__ Contact US</a>
                <a href="#" className="text-white text-decoration-none">__ Testimonials</a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 adresssection pb-3">
              <h3 className="text-white font-weight-bold">ADDRESS</h3>
              <div className="row pt-3">
                <div className="contact-item">
                  <i className="fas fa-phone orange-icon"></i>
                  <span>1234567</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope orange-icon"></i>
                  <span>saiabbi03@gmail.com</span>
                </div>
                <div className="contact-item-location">
                  <i className="fas fa-map-marker-alt orange-icon"></i>
                  <span>The products will be quality and fully meet your expectationsThe products will be quality and fully meet your expectations The</span>
                </div>
              </div>
            </div>
            <hr style={{ width: '100%', margin: 'auto', borderTop: '3px solid white' }} />
            <div className="qwe text-center pt-3 pb-3">
              Copyright: @Master Sports All Rights Reserved Pvt Ltd.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footercomp;
