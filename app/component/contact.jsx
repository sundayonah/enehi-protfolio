import Link from 'next/link';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
   //    const projects = [
   //       { image: '/images/monie2.jpg', url: 'http://localhost:3000/' },
   //       { image: '/images/monie2.jpg', url: 'http://localhost:3000/' },
   //       { image: '/images/monie2.jpg', url: 'http://localhost:3000/' },
   //    ];

   return (
      <div className="mx-auto max-w-7xl pb-12 pt-6 text-center sm:pl-32 lg:px-8">
         <span className="text-xs text-gray-500">Get in Touch</span>
         <h1 className="text-2xl">Contact Me</h1>
         <div className="flex justify-center items-center space-x-8 mt-4">
            <ul className="flex py-1 px-3 border rounded-md space-x-3">
               <li>
                  <a href="https://www.linkedin.com/in/onah-sunday-0b783921a/">
                     <FaLinkedin />
                  </a>
               </li>
               <li>
                  <a href="https://www.google.com/">
                     <MdEmail />
                  </a>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Contact;
