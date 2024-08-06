"use client"

import Link from 'next/link'
import React, { useState } from 'react'

const AnnouncementBar = () => {
  const [view, setView] = useState(true);

  const handleCloseAnnouncementBar = () => {
    setView(false);
  }

  return (
    view && (
      <div className='bg-black text-white p-2 flex justify-center items-center'>
        <p className='mr-2'>
          Sign up and get 20% off your first order. <Link href='/pages/sign-in'><u>Sign up Now</u></Link>
        </p>
        <button onClick={handleCloseAnnouncementBar} className='ml-2 p-2 md:p-0'>
          <img src='/close_button.png' alt='Close' className='h-4 w-4' />
        </button>
      </div>
    )
  );
}

export default AnnouncementBar;
