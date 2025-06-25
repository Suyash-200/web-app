import React from 'react';

const ProductDetail = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/2 p-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-contain"
          />
        </div>
        <div className="md:w-1/2 p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h1>
          <div className="flex items-center mb-4">
            <span className="text-yellow-400">★</span>
            <span className="text-gray-600 ml-1">
              {product.rating?.rate} ({product.rating?.count} reviews)
            </span>
          </div>
          <p className="text-xl font-bold text-indigo-600 mb-4">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button
            onClick={onAddToCart}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;