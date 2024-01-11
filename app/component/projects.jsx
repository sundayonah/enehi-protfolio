import Link from 'next/link';
import React from 'react';

const Projects = () => {
   const projects = [
      { image: '/images/monie2.jpg', url: 'http://localhost:3000/' },
      { image: '/images/monie2.jpg', url: 'http://localhost:3000/' },
      { image: '/images/monie2.jpg', url: 'http://localhost:3000/' },
   ];

   return (
      <div className="mx-auto max-w-7xl pb-12 pt-6 text-center sm:pl-32 lg:px-8">
         <span className="text-xs text-gray-500">Browse My Recent</span>
         <h1 className="text-2xl">Projects</h1>
         <div className="flex justify-center items-center space-x-8 mt-4">
            {projects.map((projects, index) => (
               <div
                  key={index}
                  className="p-2 border border-blue-300 rounded-lg"
               >
                  <div className="border mb-2">
                     <img
                        src={projects.image}
                        width={150}
                        height={50}
                        alt="projects"
                     />
                  </div>
                  <Link
                     href={projects.url}
                     className="p-1 border  border-blue-300 rounded-md"
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
