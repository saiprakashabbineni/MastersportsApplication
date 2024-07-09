import React, { useState } from 'react';

const Dropdowncomp = () => {
  const [products, setProducts] = useState([]);

  const handleFilter = (priceFilter) => {
    fetch(`http://localhost:3000/products?price=${encodeURIComponent(JSON.stringify(priceFilter))}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  };

  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sort by
        </button>
        <ul className="dropdown-menu">
          <li>
            <button className="dropdown-item" onClick={() => handleFilter({ lessThan: 50 })}>
              Price less than 50
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => handleFilter({ lessThan: 100 })}>
              Price less than 100
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => handleFilter({ between: [10, 60] })}>
              Price between 10 and 60
            </button>
          </li>
        </ul>
      </div>
      <div>
        <h2>Filtered Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.product_name}: ${product.product_price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdowncomp;
