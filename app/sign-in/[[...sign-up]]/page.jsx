import React from 'react'
import {SignIn} from '@clerk/nextjs'

const page = () => {
  return (
    <div className='flex flex-col bg-gray-200 md:flex-row p-5 relative'>
        <img src='signup-image.png' className='flex opacity-0 md:opacity-100'/>
        <div className='md:absolute md:px-24 md:py-10'>
            <SignIn />
        </div>
    </div>
  )
}

export default page