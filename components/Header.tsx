"use client";

import React from 'react'
import Link from "next/link";
import { UserButton, useUser } from '@clerk/nextjs';


const Header = () => {
    const {isSignedIn} = useUser();

  return (
    <>
        <nav className='bg-gray-200 py-4 px-6 flex items-center justify-between'>
            <div className='flex items-center'>
                <Link href="/">
                    <div className='text-2xl font-black'>
                        VASRA.CO
                    </div>
                </Link>
            </div>
            <div className='text-white flex items-center'>
                {!isSignedIn && (
                    <>
                        <Link href = '/pages/sign-in' className='text-black hover:text-gray-500 mr-4'>
                            Sign In
                        </Link>
                        <Link href = '/pages/sign-up' className='text-black hover:text-gray-500 mr-4'>
                            Sign Up
                        </Link>
                    </>)}
                <div>
                    <UserButton />
                </div>
            
            </div>
        </nav>
    </>
  )
}

export default Header