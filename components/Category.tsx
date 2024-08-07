import React from 'react'

const Category = () => {
  return (
    <div className='bg-gray-200 rounded-3xl pt-10 p-10 uppercase flex gap-5 flex-col justify-center items-center m-10'>
        <h1 className='font-black text-4xl '>Browse By Dress Style</h1>
        <div className='flex flex-col md:flex-row gap-5 mt-10'>
            <img src="/Casual.png" />
            <img src="/Formal.png" />
        </div>
        <div className='flex flex-col md:flex-row gap-5'>
            <img src="/Gym.png" />
            <img src="/Party.png" />
        </div>
    </div>
  )
}

export default Category