import React from 'react';

const FilterSidebar = ({ categories, selectedCategory, onCategoryChange, priceRange, onPriceChange }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-bold text-lg mb-4">Filters</h3>
      
      <div className="mb-6">
        <h4 className="font-semibold mb-2">Categories</h4>
        <ul>
          {categories.map(category => (
            <li key={category} className="mb-1">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedCategory === category}
                  onChange={() => onCategoryChange(category)}
                  className="mr-2"
                />
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="font-semibold mb-2">Price Range</h4>
        <div className="flex items-center mb-2">
          <span className="mr-2">$0</span>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange}
            onChange={onPriceChange}
            className="w-full"
          />
          <span className="ml-2">${priceRange}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;