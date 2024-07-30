import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/contextcomp";
import { Link, useLocation } from "react-router-dom";
import Razorpay from "razorpay";

const CheckOutPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get("type");

  const { cart: contextCart, handletotal, selectedProduct } = useContext(CartContext);
  const [cart, setCart] = useState(contextCart);
  const [quantity, setQuantity] = useState(1); // New state for quantity

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    locality: "",
    pinCode: "",
    state: "",
    country: "",
    email: "",
    mobile: "",
  });
const Validateform = () =>{
  const requiredfields = [
    "firstName",
    "lastName",
    "addressLine1",
    "locality",
    "pinCode",
    "state",
    "country",
    "email",
    "mobile",
  ]
    return requiredfields.every((field) => formData[field].trim() !== "")
}
  useEffect(() => {
    console.log("Location search:", location.search);
    console.log("Selected product:", selectedProduct);
  }, [location, selectedProduct]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Validateform()){
      openRazorpay();
      console.log("Form submitted!", formData);
    }else{
      alert("Please fill out all required fields.");
    }

  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const openRazorpay = () => {
    const amount = type === "cartcomp" ? parseInt(handletotal* 100) : selectedProduct.price * quantity * 100; // Amount in paise

    const options = {
      key:"rzp_test_VFQgur97u4Zs1l", // Replace with your Razorpay key ID
      amount: amount,
      currency: "INR",
      name: "Your Store master",
      description: "Test Transaction sports",
      handler: function (response) {
        alert("Payment successful");
        console.log(response);
      },
      prefill: {
        name: formData.firstName + " " + formData.lastName,
        email: formData.email,
        contact: formData.mobile,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <form className="p-5" onSubmit={handleSubmit}>
            <div className="mb-4">
              <h2 className="mb-4">
                Address<span style={{ color: "red" }}>*</span>
              </h2>
              <div className="d-flex mb-4">
                <input
                  onChange={handleChange}
                  type="text"
                  name="firstName"
                  className="form-control me-2"
                  placeholder="First Name*"
                  required
                />
                <input
                  onChange={handleChange}
                  type="text"
                  name="lastName"
                  className="form-control"
                  placeholder="Last Name*"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  onChange={handleChange}
                  type="text"
                  name="addressLine1"
                  className="form-control"
                  placeholder="Address Line 1*"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  onChange={handleChange}
                  type="text"
                  name="addressLine2"
                  className="form-control"
                  placeholder="Address Line 2"
                />
              </div>
              <div className="d-flex mb-4">
                <input
                  onChange={handleChange}
                  type="text"
                  name="locality"
                  className="form-control me-2"
                  placeholder="Town/City*"
                  required
                />
                <input
                  onChange={handleChange}
                  type="number"
                  name="pinCode"
                  className="form-control"
                  placeholder="Pin Code*"
                  required
                />
              </div>
              <div className="d-flex mb-4">
                <input
                  onChange={handleChange}
                  type="text"
                  name="state"
                  className="form-control me-2"
                  placeholder="State/Territory*"
                  required
                />
                <input
                  onChange={handleChange}
                  type="text"
                  name="country"
                  className="form-control"
                  placeholder="Country*"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <h2 className="mb-4">
                Contact<span style={{ color: "red" }}>*</span>
              </h2>
              <div className="mb-4">
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email*"
                  required
                />
              </div>
              <div>
                <input
                  onChange={handleChange}
                  type="tel"
                  name="mobile"
                  className="form-control"
                  placeholder="Mobile*"
                  required
                />
              </div>
            </div>
            <button
              className="btn btn-dark"
              style={{
                border: "3px solid beige",
                fontWeight: "bold",
                padding: "1.5rem 2rem",
                width: "100%",
          
              }}
              type="submit" 
             
            >
              PLACE ORDER
            </button>
          </form>
        </div>
        <div className="col-lg-4 p-5">
          <Link to="/cartpage">
            <button>Back to Cart</button>
          </Link>
          <div className="border border-3 border-beige p-3">
            <h3 className="mb-4" style={{ fontWeight: "900" }}>
              ORDER SUMMARY
            </h3>
            {type === "cartcomp" && (
              <div>
                <h5>Items in Cart:</h5>
                {cart.map((item) => (
                  <div key={item.id} className="mb-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "50px",
                        height: "50px",
                        marginRight: "10px",
                      }}
                    />
                    <p>{item.title}</p>
                    <span>Quantity: {item.quantity}</span>
                    <span>Price: ₹{item.price * item.quantity}</span>
                  </div>
                ))}
                <hr />
                <p>TOTAL ITEMS: {cart.length}</p>
                <p>TOTAL PRICE: ₹{handletotal}</p>
              </div>
            )}
            { type === "productscomp" &&  selectedProduct && (
              <>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  style={{
                    width: "50px",
                    height: "50px",
                    marginRight: "10px",
                  }}
                />
                <p>{selectedProduct.title}</p>
                <div className="mb-3">
                  <label htmlFor="quantity">Quantity:</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={quantity}
                    min="1"
                    onChange={handleQuantityChange}
                    className="form-control"
                    style={{ width: "70px" }}
                  />
                </div>
                <p>PRODUCT TOTAL PRICE: ₹{selectedProduct.price * quantity}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;


