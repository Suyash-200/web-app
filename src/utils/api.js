import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const API_BASE = 'https://fakestoreapi.com';


const fetchProducts = async () => {
  const { data } = await axios.get(`${API_BASE}/products`);
  return data;
};

const fetchProduct = async (id) => {
  const { data } = await axios.get(`${API_BASE}/products/${id}`);
  return data;
};

const fetchCategories = async () => {
  const { data } = await axios.get(`${API_BASE}/products/categories`);
  return data;
};

export const useProductsQuery = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10, 
    select: (data) => data.map(product => ({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image
    }))
  });
};

export const useProductQuery = (id) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id),
    enabled: !!id,
    keepPreviousData: true
  });
};

export const useCategoriesQuery = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: 1000 * 60 * 10 // 10 mins
  });
};
