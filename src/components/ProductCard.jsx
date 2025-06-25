import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-4"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
          {product.title}
        </h3>
        <div className="flex items-center mb-2">
          <span className="text-yellow-400">★</span>
          <span className="text-gray-600 ml-1">
            {product.rating?.rate || '4.5'}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-indigo-600">
            ${product.price}
          </span>
          <Link
            to={`/product/${product.id}`}
            className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;