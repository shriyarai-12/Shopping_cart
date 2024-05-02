// src/components/ShoppingCart.js

import React from 'react';
import CartItem from './CartItem';

const ShoppingCart = ({ cartItems, removeItemFromCart }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} removeItemFromCart={removeItemFromCart} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;

