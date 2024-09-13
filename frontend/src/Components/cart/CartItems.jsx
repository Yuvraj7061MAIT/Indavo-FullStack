import React, { useContext, useState, useEffect } from 'react';
import './Cart.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../../assets/Assets/Frontend_Assets/cart_cross_icon.png';

const CartItems = () => {
  const { all_product, cartItem, removeFromCart, calculateTotal } = useContext(ShopContext);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  // Function to handle promo code application
  const applyPromoCode = () => {
    const total = calculateTotal();
    if (promoCode === 'DISCOUNT10') {
      setDiscount(total * 0.10); // 10% discount
    } else {
      setDiscount(0);
    }
  };

  // Calculate total price after discount
  const totalPrice = calculateTotal() - discount;

  // Update the discount when promoCode or cartItem changes
  useEffect(() => {
    applyPromoCode();
  }, [promoCode, cartItem]);

  return (
    <div className='cartItems'>
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e, index) => {
        if (cartItem[index] > 0) {
          return (
            <div key={e.id}>
              <div className="cartItems-format">
                <img src={e.image} alt={e.name} className='cartItems-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price.toFixed(2)}</p>
                <button className='cartItems-quantity'>{cartItem[index]}</button>
                <p>${(e.new_price * cartItem[index]).toFixed(2)}</p>
                <img
                  src={remove_icon}
                  alt="Remove"
                  className="cartItems-remove-icon"
                  onClick={() => {
                    removeFromCart(index); // Remove item
                    // Ensure the discount is recalculated when an item is removed
                    setDiscount(prevDiscount => {
                      const newTotal = calculateTotal() - e.new_price * cartItem[index];
                      return promoCode === 'DISCOUNT10' ? newTotal * 0.10 : 0;
                    });
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null; // Ensures map returns a value
      })}
      <div className="cartItems-summary">
        <div className="cartItems-summary-total">
          <p>Total Price:</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        <div className="cartItems-summary-promo">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter promo code"
          />
          <button onClick={applyPromoCode}>Apply</button>
        </div>
        <button className='cartItems-checkout-button'>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartItems;
