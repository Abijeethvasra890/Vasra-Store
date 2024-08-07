import React from 'react'
import { SignIn } from '@clerk/nextjs'
import Link from 'next/link'

const Page = () => {
  return (
    <div className='flex flex-col md:flex-row relative min-h-screen'>
      <img src='/signup_img.png' className='hidden lg:block rounded h-screen' />
      <div className='absolute top-5 left-5 text-2xl font-black italic'>
        <Link href="/">VASRA.CO</Link>
      </div>
      <div className='flex flex-1 justify-center items-center p-5'>
        <div className='w-full max-w-md'>
          <SignIn />
        </div>
      </div>
    </div>
  )
}

export default Page
