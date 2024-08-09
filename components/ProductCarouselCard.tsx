import { Product } from '@/types/productType';
import { calculateDiscount } from '@/utils/calculateDiscount'
import React from 'react'

type Props = {
  product: Product;
};

const ProductCarouselCard = ({product}: Props) => {
  const discount = calculateDiscount(232,212);
  //console.log("hi");
 console.log(product);

  return (
    <div className='flex flex-col'>
        <img src={product.image1} className='border-solid border-2 border-gray-400 rounded-2xl'/>
        <h1 className='mt-5 font-bold'>{product.name}</h1>
        <span>Product Ratings</span>
        <div className='flex gap-2'>
            <h1 className='text-xl font-bold'>${product.price}</h1>
            <h1 className='text-xl font-extrabold text-gray-400 line-through'>${product.price}</h1>
            <button className='bg-red-200 text-red-500 text-sm px-2 rounded-full'>-{discount}$</button>
        </div>
    </div>
  )
}

export default ProductCarouselCard