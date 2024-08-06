import React from 'react'
import {SignUp} from '@clerk/nextjs'

const page = () => {
  return (
    <div className='flex flex-col md:flex-row relative'>
        <img src='/login_img.png' className='w-7/12'/>
        <div className='text-2xl font-black absolute max-w-24 p-5 italic'>
          VASRA.CO
        </div>
        <div className='pl-20 py-10'>
          <SignUp />
        </div>
    </div>
  )
}

export default page