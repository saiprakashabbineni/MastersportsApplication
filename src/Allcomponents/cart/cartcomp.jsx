import React, { useContext } from 'react';
import { CartContext } from '../context/contextcomp';
import './cartcomp.css'
const Cart = () => {
    const { cart, incrementQuantity, decrementQuantity,removeFromCart } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h2>Cart Items</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="row">
          {cart.map((item, index) => (
            <div class="row">
            <div class="col-md-10 col-11 mx-auto">
              <div class="row mt-5 gx-3">
          
                <div
                  class="col-md-12 col-lg-12 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow"
                >
                  <div class="card p-4">
                    <h2 class="py-4 font-weight-bold">Cart items</h2>
                    <div class="row">
              
                      <div
                        class="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img"
                      >
                        <img
                          src={item.image}
                          class="img-fluid"
                          alt="cart img"
                        />
                      </div>
    
     
                      <div class="col-md-7 col-11 mx-auto px-4 mt-2">
                        <div class="row">
                
                          <div class="col-6 card-title">
                            <h1 class="mb-4 product_name">{item.title}</h1>
                            <p class="mb-2">{item.category}</p>
                            <p class="mb-2">COLOR: BLUE</p>
                            <p class="mb-3">SIZE: M</p>
                            <p class="mb-3">BRAND : LINEN</p>
    
                          </div>
                     
                          <div class="col-6">
                            <ul class="pagination justify-content-end set_quantity">
                              <li class="page-item">
                                <button
                                  class="page-link"
                                  onClick={() => decrementQuantity(item.id)}
                                >
                                <i class="bi bi-dash"></i>
                                </button>
                              </li>
                              <li class="page-item">
                                <input
                                  type="text"
                                  name=""
                                  class="page-link"
                                  value={item.quantity}
                                  id="textbox"
                                />
                              </li>
                              <li class="page-item">
                                <button
                                  class="page-link"
                                  onClick={() => incrementQuantity(item.id)}
                                >
                                <i class="bi bi-plus-lg"></i>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
              
                        <div class="row">
                          <div
                            class="col-8 d-flex justify-content-between remove_wish"
                          >
                            <p onClick={() => removeFromCart(item.id)} style={{cursor:'pointer'}}><i class="bi bi-trash"></i> REMOVE ITEM</p>
                            <p><i class="bi bi-heart"></i>MOVE TO WISH LIST</p>
                          </div>
                          <div class="col-4 d-flex justify-content-end price_money">
                            <h3>$<span id="itemval">{item.quantity * item.price } </span></h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  </div>
                  </div>
                  </div>
                  </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
