import React from 'react';

const Experience = () => {
   const hardSkils = [
      'Figma',
      'Adobe XD',
      'Sketch',
      'Miro',
      'Prototyping',
      'Wireframing',
   ];

   const softKills = [
      'Attention to Details',
      'Interpersonal Communication',
      'Flexible and Adaptability',
      'Teamwork and Collaboration',
      'Willingness to learn new things',
   ];

   return (
      <div className="mx-auto max-w-4xl  pb-12 pt-6 text-center sm:px-24 px-16 lg:px-8">
         <span className="text-xs text-gray-500">Explore My</span>
         <h1 className="text-2xl">Experience</h1>
         <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-12  mt-4">
            {/* <div className="flex justify-center items-center space-x-12 mt-4"> */}
            <div className="flex flex-col items-center py-3 px-12 shadow-xl rounded-tl-lg rounded-br-lg ">
               <h2>Hard Skills</h2>
               <div className="grid grid-cols-2 gap-2 ">
                  {hardSkils.map((skills, index) => (
                     <div key={index} className="flex items-center space-y-2 p-1 shadow-sm rounded-sm transition-all duration-500 transform hover:translate-y-[-5px]">
                        <span className="pt-2 pr-1">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-5 h-5"
                           >
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                              />
                           </svg>
                        </span>
                        <p>{skills}</p>
                     </div>
                  ))}
               </div>
            </div>
            <div className="flex flex-col items-start mt-6 sm:mt-0  py-3 px-12 shadow-2xl rounded-tl-lg rounded-br-lg ">
               <span className="">Soft Skills</span>
               <div></div>
               {softKills.map((skills, index) => (
                  <div
                     key={index}
                     className="flex justify-center items-center space-y-2 p-1 shadow-sm rounded-sm transition-all duration-500 transform hover:translate-y-[-5px]"
                  >
                     <span className="pt-2">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke-width="1.5"
                           stroke="currentColor"
                           class="w-5 h-5"
                        >
                           <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                           />
                        </svg>
                     </span>

                     <p className="text-sm text-left pl-1 text-gray-600">
                        {skills}
                        {/* P justify center center center */}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Experience;
