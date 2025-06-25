import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../utils/api';
import ProductDetail from '../components/ProductDetail';
import Loader from '../loader/Loader';

const ProductDetailPage = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const productData = await fetchProduct(id);
        setProduct(productData);
        setLoading(false);
      } catch (error) {
        console.error('Error loading product:', error);
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  if (loading) {
    return <Loader/>
  }

  if (!product) {
    return <div className="text-center py-8">Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <ProductDetail product={product} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default ProductDetailPage;