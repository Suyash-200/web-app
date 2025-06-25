import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="relative">
        <div className="w-28 h-28 border-2 border-indigo-700 border-t-transparent rounded-full animate-spin"></div>

        <div className="absolute inset-0 flex items-center justify-center shadow-lg rounded-full">
          <p to="/" className="text-md font-bold text-indigo-600">
            ShopNow
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
