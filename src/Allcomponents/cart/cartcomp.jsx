import React, { useContext } from 'react';
import { CartContext } from '../context/contextcomp';
import { Link } from 'react-router-dom';
import './cartcomp.css';

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart, handletotal } = useContext(CartContext);

  const handleQuantityChange = (id, value) => {
    // Handle quantity change if necessary
  };

  return (
    <div className="container mt-4">
   
      <h2 className="my-2">YOUR CART</h2>
      <p className="my-2">TOTAL [{cart.length} items]</p>
      <p className="my-2">
        Items in your bag are not reserved — check out now to make them yours.
      </p>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            {cart.map((item, index) => (
              <div key={index} className="col-md-10 col-11 mx-auto">
                <div className="row mt-5 gx-3">
                  <div className="col-md-12 col-lg-12 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
                    <div className="card p-4">
                      <h2 className="py-4 font-weight-bold">Cart items</h2>
                      <div className="row">
                        <div className="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
                          <img src={item.image} className="img-fluid" alt="cart img" />
                        </div>
                        <div className="col-md-7 col-11 mx-auto px-4 mt-2">
                          <div className="row">
                            <div className="col-6 card-title">
                              <h1 className="mb-4 product_name">{item.title}</h1>
                              <p className="mb-2">{item.category}</p>
                              <p className="mb-2">COLOR: BLUE</p>
                              <p className="mb-3">SIZE: M</p>
                              <p className="mb-3">BRAND : LINEN</p>
                            </div>
                            <div className="col-6">
                              <ul className="pagination justify-content-end set_quantity">
                                <li className="page-item">
                                  <button className="page-link" onClick={() => decrementQuantity(item.id)}>
                                    <i className="bi bi-dash"></i>
                                  </button>
                                </li>
                                <li className="page-item">
                                  <input
                                    type="text"
                                    name=""
                                    className="page-link"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                    id="textbox"
                                  />
                                </li>
                                <li className="page-item">
                                  <button className="page-link" onClick={() => incrementQuantity(item.id)}>
                                    <i className="bi bi-plus-lg"></i>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-8 d-flex justify-content-between remove_wish">
                              <p onClick={() => removeFromCart(item.id)} style={{ cursor: 'pointer' }}>
                                <i className="bi bi-trash"></i> REMOVE ITEM
                              </p>
                              <p>
                                <i className="bi bi-heart"></i> MOVE TO WISH LIST
                              </p>
                            </div>
                            <div className="col-4 d-flex justify-content-end price_money">
                            <h3>₹{(item.quantity * item.price).toFixed(2)}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-4 p-5">
          
           <div className="border border-3 border-beige p-3">
             <h5 className="mb-4">ORDER SUMMARY</h5>
             <div className="d-flex">
               <div className="mx-2 my-4">
                 <p>ORIGINAL PRICE:</p>
                 <p> ITEMS :</p>
             
                 <p>TOTAL :</p>
                 
               </div>
               <div className="mx-2 my-4">
                 <p>
                   <del>₹.00</del>
                 </p>
               
                 <p> {cart.length}</p>
               
        
                 
                 <p>₹{handletotal}</p>
               </div>
             </div>
         
           </div>
           <Link
           to={{
             pathname: `/checkout`,
             search: `?type=cartcomp`, 
     
           }}
         >
         <button
         className="btn btn-dark"
         style={{
           border: "3px solid beige",
           fontWeight: "bold",
           padding: "1.5rem 2rem",
           width: "100%",
         }}
       
       >
       checkout
       </button>           </Link>
        </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
