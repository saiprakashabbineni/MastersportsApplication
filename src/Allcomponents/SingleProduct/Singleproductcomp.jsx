import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Singleproductcomp.css"; // Import your CSS file for additional styling
import Navbarcomp from "../Navbar/Navbarcomp";
import { CartContext } from "../context/contextcomp";

const Singleproductcomp = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext); // Use the context

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="loading-text">Loading...</div>;
  }

  if (!product) {
    return <div className="error-text">Product not found</div>;
  }

  return (
    <div>
      <Navbarcomp />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="left-column col-lg-4">
            <img src={product.image} alt={product.title} className="img-fluid active" />
          </div>
          <div className="right-column col-lg-8">
            <div className="product-description">
              <span className="text-muted">{product.category}</span>
              <h1 className="mt-2">{product.title}</h1>
              <p>{product.description}</p>
            </div>
            <div className="product-configuration">
              <div className="product-color">
                <span className="fw-bold">Color</span>
                <div className="color-choose d-flex">
                  <div className="me-2">
                    <input data-image="red" type="radio" id="red" name="color" value="red" defaultChecked />
                    <label htmlFor="red"><span className="color-red"></span></label>
                  </div>
                  <div className="me-2">
                    <input data-image="blue" type="radio" id="blue" name="color" value="blue" />
                    <label htmlFor="blue"><span className="color-blue"></span></label>
                  </div>
                  <div className="me-2">
                    <input data-image="black" type="radio" id="black" name="color" value="black" />
                    <label htmlFor="black"><span className="color-black"></span></label>
                  </div>
                </div>
              </div>
              <div className="cable-config mt-3">
                <span className="fw-bold">Cable configuration</span>
                <div className="cable-choose d-flex">
                  <button className="btn btn-outline-secondary me-2">Straight</button>
                  <button className="btn btn-outline-secondary me-2">Coiled</button>
                  <button className="btn btn-outline-secondary">Long-coiled</button>
                </div>
              </div>
            </div>
            <div className="product-price mt-4">
              <span className="h4">${product.price}</span>
              <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproductcomp;
