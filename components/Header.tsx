"use client";

import React from 'react'
import Link from "next/link";
import { UserButton, useUser } from '@clerk/nextjs';
import MenuItem from './MenuItem';
import Search from './Search';
import DropDownMenuItem from './DropDownMenuItem';


const Header = () => {
    const {isSignedIn} = useUser();

  return (
    <>
        <nav className='py-4 px-6 flex items-center justify-around'>
            <div className='flex items-center'>
                <Link href="/">
                    <div className='text-2xl font-black mr-5'>
                        VASRA.CO
                    </div>
                </Link>
                <DropDownMenuItem text={"Shop"}/>
                <MenuItem text={"On Sale"} link={"#"} />
                <MenuItem text={"New Arrival"} link={"#"} />
                <MenuItem text={"Brand"} link={"#"} />
                <Search />
                
                <MenuItem img={"/cart_button.png"} link={"#"} />
                {!isSignedIn && (
                    <>
                        <MenuItem img={"/profile_button.png"} link={"/pages/sign-in"} />
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