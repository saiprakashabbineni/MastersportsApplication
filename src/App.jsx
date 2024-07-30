import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbarcomp from './Allcomponents/Navbar/Navbarcomp';
import Homepage from './Allpages/Home/Homepage';
import Productscomponent from './Allcomponents/Productrs/Productcomponent';
import Dropdowncomp from './Allcomponents/dropdown/Dropdowncomp';
import Products from './Allcomponents/Allproducts/Products';
import FilteredProductsComp from './Allcomponents/Filteredsection/FilteredProductsComp';
import Overlaycomp from './Allpages/overlay/Overlaycomponent';
import Newaboutcomp from './Allcomponents/Newabout/Newaboutcomp';
import Singleproductcomp from './Allcomponents/SingleProduct/Singleproductcomp';
import { CartProvider } from './Allcomponents/context/contextcomp';
import Cart from './Allcomponents/cart/cartcomp';
import Todo from '../backend/Todo';
import Checkoutpage from './Allcomponents/checkout/Checkoutpage';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/navbar" element={<Navbarcomp />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Productscomponent />} />
          <Route path="/dropdown" element={<Dropdowncomp />} />
          <Route path="/allproducts" element={<Products />} />
          <Route path="/filterproducts" element={<FilteredProductsComp />} />
          <Route path="/overlay" element={<Overlaycomp />} />
          <Route path="/aboutcomp" element={<Newaboutcomp />} />
          <Route path="/singleproduct/:id" element={<Singleproductcomp />} />
          <Route path="/cartpage" element={<Cart />} />
          <Route path="/todocomp" element={<Todo />} />
          <Route path="/checkout/:id" element={<Checkoutpage />} />
          <Route path="/checkout" element={<Checkoutpage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
