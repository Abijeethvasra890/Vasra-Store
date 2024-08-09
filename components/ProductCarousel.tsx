"use client"

import React, { useEffect } from 'react'
import ProductCarouselCard from './ProductCarouselCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/store/features/productSlice';
import { AppDispatch, RootState } from '@/store/store';

type props = {
    title: string;
    search: string;
}

const ProductCarousel = ({title, search}: props) => {
    

    const dispatch = useDispatch<AppDispatch>();
    const { products, status, error } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        if (status === 'idle') {
          dispatch(fetchProducts(search));
        }
      }, [status, dispatch]);
    
      if (status === 'loading') {
        return <div>Loading...</div>;
      }
    
      if (status === 'failed') {
        return <div>Error: {error}</div>;
      }

      console.log(products);
      
     

  return (
    <div className='flex flex-col justify-center items-center p-5'>
        <h1 className='text-4xl uppercase font-black mt-5'>{title}</h1>
        <div className='flex flex-col md:flex-row gap-5 m-5 p-2'>
           {Object.keys(products).map((gid) => {
                console.log(products[gid]);
                const product = products[gid];
                return <ProductCarouselCard key={gid} product={product} />;
            })}
        </div>
        <button className='border-solid border-2 border-gray-400 m-5 px-12 py-2 rounded-full'>View All</button>
    </div>
  )
}

export default ProductCarousel