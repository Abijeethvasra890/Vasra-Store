"use client"

import React from 'react'
import ProductCarouselCard from './ProductCarouselCard';
import useScreenWidth from '@/hooks/useScreenWidth';

type props = {
    title: String;
}

const ProductCarousel = ({title}: props) => {
    const width = useScreenWidth();
    if (width === null) return null;
  return (
    <div className='flex flex-col justify-center items-center p-5'>
        <h1 className='text-4xl uppercase font-black mt-5'>{title}</h1>
        <div className='flex flex-col md:flex-row gap-5 m-5 p-2'>
            <div className='flex gap-5'>
                <ProductCarouselCard />
                <ProductCarouselCard />
            </div>
            {width !== null && width >= 768 && (<div className='flex gap-5'>
                <ProductCarouselCard />
                <ProductCarouselCard />
            </div>)}
        </div>
        <button className='border-solid border-2 border-gray-400 m-5 px-12 py-2 rounded-full'>View All</button>
    </div>
  )
}

export default ProductCarousel