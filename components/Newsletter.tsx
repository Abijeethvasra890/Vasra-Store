import React from 'react'

const Newsletter = () => {
  return (
    <div className='z-10 bg-black flex flex-col justify-between md:flex-row rounded-3xl pt-10 p-10 mx-10 mt-10'>
        <div className='md:w-6/12'>
             <h1 className='text-white text-4xl font-black uppercase'>Stay upto date about our latest offers</h1>
        </div>
        <div className='flex flex-col gap-3 mt-10 md:mt-0 md:w-4/12'>
                <div className="relative bg-white rounded-full md:m-2">
                    <input type="email" name="email" 
                        placeholder="Enter your email address" 
                        className="ml-5 text-gray-800 bg-white rounded-full h-12 px-5 md:pr-10
                            text-sm focus:outline-none" />
                    <button type="submit" className="absolute left-0 ml-3 mt-4">
                        <img src='/email_icon.png' className='w-5'></img>
                    </button>
                </div>
            <button className='bg-white rounded-full px-6 md:px-16 py-2 md:py-3 mx-2 font-bold'>Subscribe to Newsletter</button>
        </div>
    </div>
  )
}

export default Newsletter

// <div className="relative  bg-gray-200 w-[500px] rounded-full m-2">
//         <input type="search" name="search" 
//             placeholder="Search for products..." 
//             className="ml-5 text-gray-800 bg-gray-200 h-10 px-5 pr-10 
//                 text-sm focus:outline-none w-[400px]" />
//         <button type="submit" className="absolute left-0 ml-3 mt-2">
//             <img src='/search_button.png' className='w-5'></img>
//         </button>
//     </div>