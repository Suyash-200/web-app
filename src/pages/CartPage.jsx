import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <Cart
        cartItems={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  );
};

export default CartPage;