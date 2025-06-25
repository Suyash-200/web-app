import React, { useState, useEffect } from 'react';
import { fetchProducts, fetchCategories } from '../utils/api';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import SortOptions from '../components/SortOptions';
import Pagination from '../components/Pagination';
import Loader from '../loader/Loader';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState(1000);
  const [sortOption, setSortOption] = useState('price-asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const productsPerPage = 10;

  useEffect(() => {
    const loadData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          fetchProducts(),
          fetchCategories(),
        ]);
        setProducts(productsData);
        setFilteredProducts(productsData);
        setCategories(categoriesData);
        setLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Apply price filter
    result = result.filter(product => product.price <= priceRange);
    
    // Apply sorting
    result = sortProducts(result, sortOption);
    
    setFilteredProducts(result);
    setCurrentPage(1);
  }, [selectedCategory, priceRange, sortOption, products]);

  const sortProducts = (productsToSort, option) => {
    switch (option) {
      case 'price-asc':
        return [...productsToSort].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...productsToSort].sort((a, b) => b.price - a.price);
      case 'name-asc':
        return [...productsToSort].sort((a, b) => a.title.localeCompare(b.title));
      case 'name-desc':
        return [...productsToSort].sort((a, b) => b.title.localeCompare(a.title));
      case 'rating':
        return [...productsToSort].sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
      default:
        return productsToSort;
    }
  };

  const handleCategoryChange = category => {
    setSelectedCategory(prev => (prev === category ? '' : category));
  };

  const handlePriceChange = e => {
    setPriceRange(Number(e.target.value));
  };

  const handleSortChange = e => {
    setSortOption(e.target.value);
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  if (loading) {
    return <Loader/>
  }

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-1/4">
        <FilterSidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          priceRange={priceRange}
          onPriceChange={handlePriceChange}
        />
      </div>
      <div className="md:w-3/4">
        <SortOptions sortOption={sortOption} onSortChange={handleSortChange} />
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-8">No products found matching your filters.</div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;