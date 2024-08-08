"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductsPage = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('/api/akeneo');
        setProducts(response.data);
        console.log(response);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        console.error('Error in GET /api/akeneo/products:', error);
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.identifier} className="product-item">
            <h2>{product.values.vasra_product_name[0].data}</h2>
            {/* <p>{product.values.description[0].data}</p> */}
            {/* <p>Price: {product.values.price.data[0].amount} {product.values.price.data[0].currency}</p> */}
            Add more product details as needed
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;


