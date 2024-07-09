import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Products.css';
import Navbarcomp from '../Navbar/Navbarcomp';
import { CartContext } from '../context/contextcomp';
const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [filters, setFilters] = useState({
    mens: false,
    womens: false,
    electronics: false,
    // Add more filters as needed
  });

  const { addToCart } = useContext(CartContext); // Use the context

  const handleChecked = (filterName) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName]
    }));
  };

  const handleData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProductsData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  

  const filteredProducts = productsData.filter(item => {
    // Apply filters based on selected checkboxes
    if (filters.mens && item.category === 'men\'s clothing') {
      return true;
    }
    if (filters.womens && item.category === 'women\'s clothing') {
      return true;
    }
    if (filters.electronics && item.category === 'electronics') {
      return true;
    }
    // Add more conditions for additional filters

    // If no filters selected, show all products
    return !filters.mens && !filters.womens && !filters.electronics;
  });

  return (
    <div className="containerproducts mt-4">
      <Navbarcomp />
      <div className="row pt-4">
        <div className="col-lg-2">
          <h3>Filters</h3>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="mens"
              name="mens"
              checked={filters.mens}
              onChange={() => handleChecked('mens')}
            />
            <label className="form-check-label" htmlFor="mens">Mens</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="womens"
              name="womens"
              checked={filters.womens}
              onChange={() => handleChecked('womens')}
            />
            <label className="form-check-label" htmlFor="womens">Womens</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="electronics"
              name="electronics"
              checked={filters.electronics}
              onChange={() => handleChecked('electronics')}
            />
            <label className="form-check-label" htmlFor="electronics">Electronics</label>
          </div>
          {/* Add more checkboxes for other filters */}
        </div>
        <div className="col-lg-10">
          <h3>Products</h3>
          <div className="row">
            {filteredProducts.map(item => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="card product-card h-100">
                  <Link to={`/singleproduct/${item.id}`} className="text-decoration-none">
                    <img src={item.image} className="card-img-top" alt={item.title} />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">${item.price}</p>
                    </div>
                  </Link>
                  <button className="btn btn-primary  mt-2" onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
