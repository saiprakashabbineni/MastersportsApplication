import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './FilteredProductsComp.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/contextcomp';
const FilteredProductsComp = () => {
    const [productsData, setProductsData] = useState([]);
    const [filteredProductsData, setFilteredProductsData] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(4); // Number of initially visible products
    const [currentCategory, setCurrentCategory] = useState('ALL'); // State to track current category filter
    const { addToCart } = useContext(CartContext); // Use the context

    const navigate = useNavigate();

    const loadMorebtn = () => {
      navigate('/allproducts');
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                setProductsData(response.data);
                filterProducts(currentCategory, response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); 
    const filterProducts = (category, data) => {
        setCurrentCategory(category); 
        if (category === 'ALL') {
            setFilteredProductsData(data.slice(0, visibleProducts));
        } else {
            const filtered = data.filter(product => product.category.toLowerCase() === category.toLowerCase());
            setFilteredProductsData(filtered.slice(0, visibleProducts));
        }
    };

    const truncateTitle = (title, maxLength) => {
        if (title.length > maxLength) {
            return title.substring(0, maxLength) + '...';
        } else {
            return title;
        }
    };

   
    const renderProducts = () => {
        return filteredProductsData.map(product => (
            
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="product-item">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="product-image"
                    />
                    <h6 className="product-title ">{truncateTitle(product.title, 50)}</h6> 
                   
                </div>
            </div>
        ));
    };

    return (
        <div className="container-fluid">
            <div className="container">
            <div>
            <div className="productsheading position-relative">
              <h2 className="text-center position-absolute w-100 shadowtext">EXPLORE OUR PRODUCTS</h2>
              <h2 className="text-center " style={{ fontSize: '41px',fontWeight:700 }}>EXPLORE OUR PRODUCTS</h2>
              <p className="text-center p-0">
                <span className="highlight">The products will be quality and fully meet your expectations.</span>
              </p>
            </div>
          </div>
                <div className="row mb-4 justify-content-center">
                    <button className=" category-button" onClick={() => filterProducts('ALL', productsData)}>ALL</button>
                    <button className=" category-button" onClick={() => filterProducts("men's clothing", productsData)}>Mens</button>
                    <button className=" category-button" onClick={() => filterProducts("women's clothing", productsData)}>Womens</button>
                    <button className=" category-button" onClick={() => filterProducts('electronics', productsData)}>Electronics</button>
                    <button className=" category-button" onClick={() => filterProducts('jewelery', productsData)}>Jewelry</button>
                </div>
                <div className="row justify-content-center">
        <div className="col-lg-10">
            <div className="row">
                {renderProducts()}
            </div>
        </div>
    </div>
                <div className="row justify-content-center">
              
                <button className=" loadmorebutton" onClick={loadMorebtn}>Load more</button>
             
               
              </div>
              
            </div>
        </div>
    );
};

export default FilteredProductsComp;



   