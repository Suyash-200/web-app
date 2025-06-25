import React from 'react';

const Cart = ({ cartItems, onRemoveItem, onUpdateQuantity }) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center border-b pb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain mr-4"
                />
                <div className="flex-grow">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t">
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="w-full mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;