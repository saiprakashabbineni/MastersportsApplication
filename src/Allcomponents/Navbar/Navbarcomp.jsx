import React from "react";
import { Link } from "react-router-dom";
import "./Navbarcomp.css"; // Assuming you have a CSS file
import { CartContext } from "../context/contextcomp";
import { useContext } from "react";
const Navbarcomp = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="">
      <div className="container-fluid ">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 col-sm-6 col-xs-6">
              <h4 className="maintext1">
                WELCOME TO <span className="maintext2">MASTER SPORTS</span>
              </h4>
            </div>
            <div className="col-lg-6 col-md-6  col-sm-6 col-xs-6 socialicons text-end">
              <span className="box">A+</span>
              <span className="box">A</span>
              <span className="box">A-</span>
              <a href="#" className="social-link">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-link">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-link">
                <i className="bi bi-facebook"></i>
              </a>
              <Link to="/login" className="square-button">
                LOGIN
              </Link>
            </div>
          </div>
          <div className="col-12">
          <div className="row bg-light pt-4">
            <div className="col-lg-2 col-sm-12 logoclass">
              <img
                className="logoimage"
                src="https://logowiki.net/wp-content/uploads/imgp/Master-Sport-Logo-1-9948.png"
                alt="Master Sports Logo"
              />
            </div>
            <div className="col-lg-10 col-sm-10">
              <div className="col-12">
                <div className="row">
                  <div className="col-lg-8 col-sm-12">
                    <form>
                      <input
                        type="text"
                        name="search"
                        placeholder="Enter Keyword Search.."
                        className="searchbox"
                      />
                    </form>
                  </div>
                  <div className="col-lg-4 col-sm-12 d-flex justify-content-end align-items-center">
                  <div className="circlecall">
                      <i className="bi bi-telephone-fill" style={{ color: '#ff0303' }}></i>
                    </div>
                    <span className="contactnum">+91 1234567890</span>
                  </div>
                  <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 pt-4 pb-2 mainnavbar">
                  <Link to="/">HOME</Link>
                    <Link to="/aboutcomp">ABOUT US</Link>
                    <Link to="/allproducts">PRODUCTS</Link>
                    <div className="dropdown">
                      <Link to="/demosubcategory" className="dropbtn">CATEGORY <i className="bi bi-caret-down"></i></Link>
                      <div className="dropdown-content">
                        <Link to="/products">T-SHIRTS</Link>
                        <Link to="/products">ALL KITS</Link>
                        <Link to="/products">TRAGS</Link>
                      </div>
                    </div>
                    <Link to="/contactus">CONTACT US</Link>
                  </div>
                  <div className="col-lg-2 col-md-12 col-sm-12 text-end pt-4 pb-2">
                  <Link to="/cartpage" className="circlecart position-relative">
                    <i className="bi bi-cart-fill"></i>
                    <span className="cartbadge">{cart.length}</span>
                  </Link>
                </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbarcomp;
