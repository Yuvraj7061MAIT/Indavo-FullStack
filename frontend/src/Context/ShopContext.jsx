import React, { createContext, useState } from 'react';
import all_product from "../assets/Assets/Frontend_Assets/all_product";

export const ShopContext = createContext(null);

// Function to initialize cart with default values
const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length; i++) {
    cart[i] = 0; // Initialize each product's cart count to 0
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItems] = useState(getDefaultCart());

  // Function to add an item to the cart
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const newCart = { ...prev, [itemId]: prev[itemId] + 1 };
      console.log(newCart); // Log updated cart
      return newCart;
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0), // Ensuring quantity doesn't go below 0
    }));
  };

  // Function to calculate the total amount in the cart
  const calculateTotal = () => {
    return all_product.reduce((total, product, index) => {
      return total + product.new_price * cartItem[index];
    }, 0);
  };

  // Function to calculate the total number of items in the cart
  const getTotalItems = () => {
    return Object.values(cartItem).reduce((total, quantity) => total + quantity, 0);
  };

  const contextValue = {
    all_product,
    cartItem,
    addToCart,
    removeFromCart,
    calculateTotal,
    getTotalItems, // Added getTotalItems to context
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
