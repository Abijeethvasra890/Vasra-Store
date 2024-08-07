"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { UserButton, useUser } from '@clerk/nextjs';
import MenuItem from './MenuItem';
import Search from './Search';
import useScreenWidth from '../hooks/useScreenWidth';
import DropDownMenuItem from './DropDownMenuItem';

const Header = () => {
  const { isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 const width = useScreenWidth();
//   const [width, setWidth] = useState<number | null>(null);

//   useEffect(() => {
//     setWidth(useScreenWidth());
//   }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-6 flex items-center justify-between md:justify-around relative">
      {width !=null && width < 768 && (
        <button
          onClick={toggleMenu}
          className="md:hidden text-black focus:outline-none"
        >
          <img src="/hamburger_icon.png" alt="Menu" className="w-8 h-8" />
        </button>
      )}
      <Link href="/">
        <div className="text-2xl font-black mx-5">VASRA.CO</div>
      </Link>
      {width != null && width >= 768 && (
        <div className="flex items-center">
          <DropDownMenuItem text={"Shop"} />
          <MenuItem text={"On Sale"} link={"/sale"} />
          <MenuItem text={"New Arrival"} link={"/new"} />
          <MenuItem text={"Brand"} link={"/brand"} />
        </div>
      )}
      <div className="flex items-center">
        {width !== null && width >= 1048 ? (
          <Search />
        ) : (
          <Link href="/search">
            <img src="/search_icon.png" alt="Search" className="w-8 h-8" />
          </Link>
        )}
        <Link href="/cart">
          <img src="/cart_button.png" alt="Cart" className="w-8 h-8 mx-2" />
        </Link>
        {!isSignedIn ? (
          <Link href="/pages/sign-in">
            <img src="/profile_button.png" alt="Profile" className="w-8 h-8 mx-2" />
          </Link>
        ) : (
          <UserButton />
        )}
      </div>
      {isMenuOpen && width !== null && width < 768 && (
        <div className="absolute top-16 left-0 w-full bg-white z-10 flex flex-col items-center shadow-lg">
          <DropDownMenuItem text={"Shop"} />
          <MenuItem text={"On Sale"} link={"/sale"} />
          <MenuItem text={"New Arrival"} link={"/new"} />
          <MenuItem text={"Brand"} link={"/brand"} />
        </div>
      )}
    </nav>
  );
};

export default Header;
