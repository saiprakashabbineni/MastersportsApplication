import React, { createContext, useState, useEffect, useMemo } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [selectedProduct, setSelectedProduct] = useState(null); // Placeholder for future use

  useEffect(() => {
    console.log('Saving cart to localStorage:', cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Memoize the total calculation for performance optimization
  const handletotal = useMemo(() => {
    const total = cart.reduce((accumulator, item) => {
      return accumulator + item.quantity * item.price;
    }, 0);
    return total.toFixed(2);
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const incrementQuantity = (productId) => {
    setCart((prevCart) => 
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCart((prevCart) => 
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      incrementQuantity,
      decrementQuantity,
      removeFromCart,
      handletotal,
      selectedProduct,
      setSelectedProduct
    }}>
      {children}
    </CartContext.Provider>
  );
};
