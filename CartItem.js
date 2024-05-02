// src/components/CartItem.js

import React from 'react';

const CartItem = ({ item, removeItemFromCart }) => {
  const handleRemoveItem = () => {
    removeItemFromCart(item.id);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <span className="item-name">{item.name}</span>
        <span className="item-price">${item.price}</span>
        <div className="item-actions">
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => console.log('Quantity changed to:', e.target.value)}
          />
          <button onClick={handleRemoveItem}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

