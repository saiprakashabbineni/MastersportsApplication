import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./Singleproductcomp.css"; // Import your CSS file for additional styling
import Navbarcomp from "../Navbar/Navbarcomp";
import { CartContext } from "../context/contextcomp";

const Singleproductcomp = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext); // Use the context
  const navigate = useNavigate();

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

  useEffect(() => {
    const fetchRecommendedProducts = async () => {
      if (product) {
        try {
          const response = await axios.get(`https://fakestoreapi.com/products/category/${product.category}`);
          setRecommendedProducts(response.data.filter((item) => item.id !== product.id)); 
        } catch (error) {
          console.error("Error fetching recommended products:", error);
        }
      }
    };

    fetchRecommendedProducts();
  }, [product]);

  if (loading) {
    return <div className="loading-text">Loading...</div>;
  }

  if (!product) {
    return <div className="error-text">Product not found</div>;
  }

  const handleProceedToBuy = (product) => {
    navigate("/checkout", { state: { product } });
  };

  return (
    <div>
      <div className="singlecompnavbar">
        <Navbarcomp />
      </div>
      <div className="container-fluid singleproduct">
        <div className="row">
          <div className="left-column col-lg-4">
            <img src={product.image} alt={product.title} className="img-fluid active singleimage" />
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
              <button className="btn btn-secondary" onClick={() => handleProceedToBuy(product)}>Proceed to Buy</button>
            </div>
          </div>
        </div>
        <div className="recommended-products mt-5">
          <h3>Recommended Products</h3>
          <div className="row">
            {recommendedProducts.map((item) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={item.id}>
                <div className="card">
                  <img src={item.image} alt={item.title} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">${item.price}</p>
                    <button className="btn btn-primary" onClick={() => addToCart(item)}>Add to Cart</button>
                    <button className="btn btn-secondary" onClick={() => handleProceedToBuy(item)}>Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproductcomp;
