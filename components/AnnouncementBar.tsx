import Link from 'next/link'
import React from 'react'


const AnnouncementBar = () => {
  return (
    <div className='bg-black text-white p-2 flex justify-center'>
        <p>
            Sign up and get 20% off your first order. <Link href='sign-in'><u>Sign up Now</u></Link>
        </p>
    </div>
  )
}

export default AnnouncementBar