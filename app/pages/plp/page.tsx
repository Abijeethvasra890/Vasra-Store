"use client"

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/store/features/productSlice';
import { AppDispatch, RootState } from '@/store/store';

const ProductsPage = () => {
  // const [products, setProducts] = useState<any[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //      // const response = await axios.get('/api/akeneo');
  //       const response = await axios.get('/api/shopify');
  //       setProducts(response.data);
  //       console.log(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //       console.error('Error in GET /api/akeneo/products:', error);
  //       setLoading(false);
  //     }
  //   };

  //   getProducts();
  // }, []);

  const dispatch = useDispatch<AppDispatch>();
  const { products, status, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts("tag:vasra_ecom"));
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  // if (loading) return <div>Loading...</div>;
  console.log(products);
  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        
        
      </div>
    </div>
  );
};

export default ProductsPage;


