import React from "react";
import Navbarcomp from "../../Allcomponents/Navbar/Navbarcomp";
import "./Homepage.css";
import Produtscomponent from "../../Allcomponents/Productrs/Productcomponent";
import FilteredProductsComp from "../../Allcomponents/Filteredsection/FilteredProductsComp";
import Aboutpage from "../About/Aboutpage";
import Overlaycomp from "../overlay/Overlaycomponent";
import Testimonalscomponent from "../../Allcomponents/Tesstimonals/Testimonalscomponent";
import Footercomp from "../../Allcomponents/Footer/Footercomp";

const Homepage = () => {
  return (
    <div className="Home">
      <div className="container-fluid" style={{ position: "relative" }}>
        <div className="row">
          <div className="col-lg-12">
          <div className="navbar">
          <Navbarcomp />
        </div>
          </div>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://img.freepik.com/free-psd/online-shopping-concept-banner-template_23-2148559464.jpg?w=1380&t=st=1720001653~exp=1720002253~hmac=aa4015601edfe789310c5b848b0d7d8e5c770206d9e1086c77c43a4ff4078bef"
                  className="d-block w-100"
                  alt="First slide"
                ></img>
                <div className="carousel-caption d-none d-md-block ">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.freepik.com/free-vector/online-shopping-banner-template_23-2148764706.jpg?t=st=1720001711~exp=1720005311~hmac=8aaa8965d60a897d1f302026ed27006394d2fba054ffcedae815e4ad79d4cae3&w=1060"
                  className="d-block w-100"
                  alt="Second slide"
                ></img>
                <div className="carousel-caption d-none d-md-block ">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.freepik.com/free-psd/special-sales-banner-template_23-2148975924.jpg?w=1380&t=st=1719666497~exp=1719667097~hmac=7ff8998781d5c9382f2a76236ca4d1c7b4d6f2cb5eb6fb5a309591da3fc61ee6"
                  className="d-block w-100"
                  alt="Third slide"
                ></img>
                <div className="carousel-caption d-none d-md-block ">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <Overlaycomp />
      </div>
      <div>
        <Produtscomponent />
      </div>
      <div>
        <Aboutpage />
      </div>
      <div>
        <FilteredProductsComp />
      </div>
      <div>
        <Testimonalscomponent />
      </div>
      <div>
        <Footercomp />
      </div>
    </div>
  );
};

export default Homepage;
