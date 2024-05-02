// src/App.js

import React, { useState } from 'react';
import ShoppingCart from './ShoppingCart';
import image1 from "./dress3.jpeg";
import image2 from "./dress4.jpeg"
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 10, image: image1 },
    { id: 2, name: 'Product 2', price: 20, image: image2 },
    // Add more products as needed
  ]);

  // Add item to cart
  const addItemToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Remove item from cart
  const removeItemFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <div className="App">
      <h1>Shopping Cart Application</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addItemToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <ShoppingCart
        cartItems={cartItems}
        removeItemFromCart={removeItemFromCart}
      />
    </div>
  );
};

export default App;




