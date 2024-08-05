import React from 'react'
import {SignUp} from '@clerk/nextjs'

const page = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center pt-12 pb-12 bg-gray-200'>
        <SignUp />
        <img src='login_image.png' className='rounded-lg shadow-xl'/>
    </div>
  )
}

export default page