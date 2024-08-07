
import useScreenWidth from '@/hooks/useScreenWidth';
import React from 'react'

const BrandsStrip = () => {
   // const width = useScreenWidth();
  return (
    
        
            <div className='bg-black flex flex-col gap-5 lg:flex-row md:gap-10 lg:gap-28 justify-center p-10'>
                <div className='flex gap-5 justify-center md:gap-10 lg:gap-28 '>
                    <img src="/versace_logo.png" className='w-24 h-10 md:w-28' />
                    <img src="/zara_logo.png" className='w-24 h-10 md:w-28' />
                    <img src="/gucci_logo.png" className='w-24 h-10 md:w-28'/>
                </div>
                    <div className='flex gap-5 justify-center md:gap-10 lg:gap-28 '>
                    <img src="/prada_logo.png" className='w-24 h-10 md:w-28' />
                    <img src="/ck_logo.png" className='w-24 h-10 md:w-28' />
                </div>
            </div>
        
   
  )
}

export default BrandsStrip