'use client'

import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { IoMdClose } from 'react-icons/io';

const Header = () => {
   // State to manage the mobile menu visibility
   const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

   // Function to toggle mobile menu visibility
   const toggleMobileMenu = () => {
      setMobileMenuVisible(!mobileMenuVisible);
   };

   const menuItems = [
      { name: 'About', url: '#aboutMe' },
      { name: 'Experience', url: '#experience' },
      { name: 'Projects', url: '#projects' },
      { name: 'Contact', url: '#contact' },
   ];

   return (
      <main className="w-full flex justify-between  items-center fixed top-0  bg-opacity-10 backdrop-blur-md shadow-lg h-16 z-20">
         <div className="flex w-full p-4 px-8 justify-between items-center  shadow-custom">
            {/* <div className=" pr-2">Logo</div> */}
            <Link href="/">
               <Image src='/images/logo.jpg' width={30} height={20} alt='logo' />
            </Link>
            {/* <div className="flex space-x-5 justify-center items-center">
               {menuItems.map((menu) => (
                  <div key={menu.name}>
                     <Link href={menu.url} className="text-gray-500">
                        {menu.name}
                     </Link>
                  </div>
               ))}
            </div> */}
                 {/* Mobile menu */}
               {mobileMenuVisible ? (
                  <div className="lg:hidden flex flex-col  space-y-2 bg-[#fff] p-4  absolute top-14 right-0 w-48 shadow-2xl">
                     {menuItems.map((menu) => (
                        <div key={menu.name}>
                           <Link href={menu.url} className="text-[#201f54]">
                              {menu.name}
                           </Link>
                        </div>
                     ))}
             
                  </div>
               ) : (
                  <>
                     <div className="hidden lg:flex space-x-5 justify-center items-center">
                        {menuItems.map((menu) => (
                           <div key={menu.name}>
                              <Link href={menu.url} className="text-[#201f54]">
                                 {menu.name}
                              </Link>
                           </div>
                        ))}
                 

              
                     </div>
                  </>
            )}
               <button
                  className=" lg:hidden text-gray-500 focus:outline-none"
                  onClick={toggleMobileMenu}
               >
                  {mobileMenuVisible ? <IoMdClose /> : <TiThMenu />}
               </button>
         </div>
      </main>
   );
};

export default Header;
