import React from 'react';
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JS bundle
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbarcomp from "./Allcomponents/Navbar/Navbarcomp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Allpages/Home/Homepage";
import Productscomponent from "./Allcomponents/Productrs/Productcomponent"; // Corrected import
import Dropdowncomp from "./Allcomponents/dropdown/Dropdowncomp";
import Products from './Allcomponents/Allproducts/Products';
import FilteredProductsComp from './Allcomponents/Filteredsection/FilteredProductsComp';
import Overlaycomp from './Allpages/overlay/Overlaycomponent';
import Newaboutcomp from './Allcomponents/Newabout/Newaboutcomp';
import Singleproductcomp from './Allcomponents/SingleProduct/Singleproductcomp';
import { CartProvider } from './Allcomponents/context/contextcomp'; // Ensure the path is correct and points to .jsx
import Cart from './Allcomponents/cart/cartcomp';
const App = () => {
  return (
    <CartProvider>
      <Router>
       
        <Routes>
        
          <Route path="/navbar" element={<Navbarcomp />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Productscomponent />} /> {/* Corrected path */}
          <Route path="/dropdown" element={<Dropdowncomp />} />
          <Route path="/allproducts" element={<Products />} />
          <Route path="/filterproducts" element={<FilteredProductsComp />} />
          <Route path="/overlay" element={<Overlaycomp />} />
          <Route path="/aboutcomp" element={<Newaboutcomp />} />
          <Route path="/singleproduct/:id" element={<Singleproductcomp />} />
          <Route path="/cartpage" element={<Cart />} />

        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
