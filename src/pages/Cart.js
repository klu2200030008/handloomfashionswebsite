import React, { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Add an item to the cart
  const addItem = (productId, productName, price, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.productId === productId);
      if (existingItem) {
        return prevCart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { productId, productName, price, quantity }];
      }
    });
  };

  // Remove an item from the cart
  const removeItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.productId !== productId));
  };

  // Update item quantity
  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.productId === productId
          ? { ...item, quantity: Math.max(quantity, 0) }
          : item
      )
    );
  };

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty!</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li key={item.productId} className="flex justify-between items-center py-4">
                <div>
                  <h2 className="font-semibold">{item.productName}</h2>
                  <p className="text-gray-600">
                    ${item.price} x {item.quantity} = $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    +
                  </button>
                  <button
                    onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    -
                  </button>
                  <button
                    onClick={() => removeItem(item.productId)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <h2 className="text-xl font-semibold mt-6">
          Total: <span className="text-green-600">${calculateTotal()}</span>
        </h2>
      </div>
    </div>
  );
};

export default Cart;
