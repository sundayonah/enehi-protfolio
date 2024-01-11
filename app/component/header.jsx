import Link from 'next/link';
// import { useRouter } from 'next/router';
import React from 'react';

const Header = () => {
   // const { connectWallet, connect } = useContext(MinningContext);

   //    const router = useRouter();

   const menuItems = [
      { name: 'About', url: '#aboutMe' },
      { name: 'Experience', url: '#experience' },
      { name: 'Projects', url: '/projects' },
      { name: 'Contact', url: '/contact' },
   ];

   return (
      <main className="w-full flex justify-between  items-center fixed top-0  bg-opacity-10 backdrop-blur-md shadow-lg h-16 z-20">
         <div className="flex w-full p-4 px-8 justify-between items-center  shadow-custom">
            {/* <div className=" pr-2">Logo</div> */}
            <Link href="/">Logo</Link>
            <div className="flex space-x-5 justify-center items-center">
               {menuItems.map((menu) => (
                  <div key={menu.name}>
                     <Link href={menu.url} className="text-gray-500">
                        {menu.name}
                     </Link>
                  </div>
               ))}
            </div>
         </div>
      </main>
   );
};

export default Header;
