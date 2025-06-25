import React from 'react';

const SortOptions = ({ sortOption, onSortChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="sort" className="mr-2 font-semibold">Sort by:</label>
      <select
        id="sort"
        value={sortOption}
        onChange={onSortChange}
        className="border rounded px-3 py-1"
      >
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
        <option value="name-desc">Name: Z to A</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default SortOptions;