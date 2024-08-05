"use client";

import React from 'react'
import Link from "next/link";
import { UserButton, useUser } from '@clerk/nextjs';


const Header = () => {
    const {isSignedIn} = useUser();

  return (
    <>
        <nav className='bg-black py-4 px-6 flex items-center justify-between'>
            <div className='flex items-center'>
                <Link href="/">
                    <div className='text-lg uppercase font-bold text-white'>
                        Vasra Store
                    </div>
                </Link>
            </div>
            <div className='text-white flex items-center'>
                {!isSignedIn && (
                    <>
                        <Link href = 'sign-in' className='text-gray-300 hover:text-white mr-4'>
                            Sign In
                        </Link>
                        <Link href = 'sign-up' className='text-gray-300 hover:text-white mr-4'>
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