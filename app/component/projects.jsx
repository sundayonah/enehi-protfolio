import Link from 'next/link';
import React from 'react';

const Projects = () => {
   const projects = [
      { image: '/images/dashboard.jpg', url: 'https://www.behance.net/gallery/180249645/Business-Management-App-Dashboard' },
      { image: '/images/monie2.jpg', url: 'https://www.behance.net/gallery/189424951/Staking' },
      { image: '/images/KCtoken.jpg', url: 'http://localhost:3000/' },
      { image: '/images/stake.jpg', url: 'https://www.behance.net/gallery/189002943/Staking-DApp' },
      { image: '/images/wow.jpg', url: 'https://www.behance.net/gallery/166140033/FINDMYDOC-APP'},
   ];

   return (
      <div className="mx-auto max-w-5xl pb-12 pt-6 text-center sm:px-16 px-8 lg:px-8">
         <span className="text-xs text-gray-500">Browse My Recent</span>
         <h1 className="text-2xl">Projects</h1>
         {/* <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-12 sm:space-y-0 space-y-5  mt-4"> */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-4">
            {projects.map((projects, index) => (
               <div
                  key={index}
                  className=" p-2 shadow-2xl rounded-lg transition-all duration-500 transform hover:translate-y-[-5px]"
               >
                  <div className="border mb-2">
                     <img src={projects.image} className="w-full h-40 object-cover rounded-md" alt="projects" />

                     {/* <img
                        src={projects.image}
                        // width={150}
                        // height={50}
                        alt="projects"
                     /> */}
                  </div>
                  <Link
                     href={projects.url}
                     className="p-1 shadow-xl rounded-md"
                  >
                     <span className="text-sm"> Learn More</span>
                  </Link>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Projects;
