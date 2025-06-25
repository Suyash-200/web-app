import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartItemCount }) => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          ShopNow
        </Link>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link to="/" className="text-gray-600 hover:text-indigo-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/cart" className="text-gray-600 hover:text-indigo-600 flex items-center">
                Cart
                {cartItemCount > 0 && (
                  <span className="ml-1 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;