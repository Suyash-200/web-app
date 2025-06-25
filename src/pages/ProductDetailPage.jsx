
import { useParams } from 'react-router-dom';
import { useProductQuery } from '../utils/api';
import ProductDetail from '../components/ProductDetail';
import Loader from '../loader/Loader';

const ProductDetailPage = ({ addToCart }) => {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useProductQuery(id);

  const handleAddToCart = () => {
    addToCart(product);
  };

  if (isLoading) {
    return <Loader/>
  }

  if (isError) {
    return <div className="text-center py-8">Error loading product</div>;
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