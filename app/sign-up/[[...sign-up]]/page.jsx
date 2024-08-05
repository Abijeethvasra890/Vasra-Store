import React from 'react'
import {SignUp} from '@clerk/nextjs'

const page = () => {
  return (
    <div className='flex flex-col md:flex-row p-5 relative'>
    <img src='signup-image.png'/>
    <div className='absolute px-24 py-10'>
        <SignUp />
    </div>
</div>
  )
}

export default page