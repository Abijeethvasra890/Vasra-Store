import { calculateDiscount } from '@/utils/calculateDiscount'
import React from 'react'

const ProductCarouselCard = () => {
    const discount = calculateDiscount(232,212);
  return (
    <div className='flex flex-col'>
        <img src='/img_ph.png' className='border-solid border-2 border-gray-400 rounded-2xl'/>
        <h1 className='mt-5 font-bold'>Product Title</h1>
        <span>Product Ratings</span>
        <div className='flex gap-2'>
            <h1 className='text-xl font-bold'>$212</h1>
            <h1 className='text-xl font-extrabold text-gray-400 line-through'>$232</h1>
            <button className='bg-red-200 text-red-500 text-sm px-2 rounded-full'>-{discount}$</button>
        </div>
    </div>
  )
}

export default ProductCarouselCard