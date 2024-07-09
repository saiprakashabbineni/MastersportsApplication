import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Productcomponent.css";
import { CartContext } from "../context/contextcomp";
import { useContext } from "react";

const Productscomponent = () => {
  const [productsdata, setProductsData] = useState([]);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const sliderRef = useRef(null);
  const { addToCart } = useContext(CartContext); // Use the context

  const handleData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProductsData(response.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load products. Please try again later.");
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="container-fluid mt-4">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div
            className="col-lg-1 col-2 text-center"
            onClick={previousSlide}
            style={{ cursor: "pointer" }}
          >
            <div className="arrow-button">
              <i className="bi bi-arrow-left"></i>
            </div>
          </div>
          <div className="col-lg-10 col-8">
            <div className="products-heading position-relative">
              <h2 className="text-center position-absolute w-100 shadowtext">
                EXPLORE OUR PRODUCTS
              </h2>
              <h2 className="text-center productstitle" >
                EXPLORE OUR PRODUCTS
              </h2>
              <p className="text-center p-0">
                <span className="highlight">
                  The products will be quality and fully meet your expectations.
                </span>
              </p>
            </div>
            {error ? (
              <div className="error-message text-center">{error}</div>
            ) : (
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <Slider ref={sliderRef} {...settings}>
                    {productsdata.map((item) => (
                      <div className="carousel-item" key={item.id}>
                        <Link
                          to={`/singleproduct/${item.id}`}
                          className="carousel-link"
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          <img src={item.image} alt={item.title} className="carousel-image" />
                          <h6 className="carousel-title">{item.title}</h6>
                          <h6 className="carousel-price">$ {item.price}</h6>
                        </Link>
                        <div className="overlay">
                          <i className="bi bi-cart"></i>
                          <button onClick={() => addToCart(item)}>Add to Cart</button>
                          <i className="bi bi-eye-fill"></i>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            )}
          </div>
          <div
            className="col-lg-1 col-2 text-center"
            onClick={nextSlide}
            style={{ cursor: "pointer" }}
          >
            <div className="arrow-button">
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productscomponent;
