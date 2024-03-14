import React from 'react';

const AboutMe = () => {
   return (
      <div className="mx-auto max-w-4xl  pb-12 pt-6 text-center sm:px-32 px-28 lg:px-8">
         <span className="text-xs text-gray-500">Get to Know More</span>
         <h1 className="text-2xl">About Me</h1>
      
         <div className="">
            <p className="text-sm mt-5">
               {` I am a passionate UI/UX designer with 2 years of experience, dedicated to crafting visually appealing and user-friendly digital experiences. My portfolio showcases projects demonstrating seamless interfaces and engaging user experiences, each telling a unique story of overcoming design challenges. My approach blends creativity with problem-solving, focusing on understanding and meeting user needs. With a strong emphasis on user-centered design, my mission is to improve the digital world.`}
            </p>
     
         </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-12  mt-8">
            <div className="flex flex-col items-center py-3 px-20 sm:px-20  shadow-2xl  rounded-tr-lg rounded-bl-lg ">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
               >
                  <path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
               </svg>
               <h2>Experience</h2>
               <p>2 years</p>
               <span>UI/UX Design</span>
            </div>
            <div className="flex flex-col mt-4 sm:mt-0  items-center py-3 px-20 sm:px-20 shadow-2xl  rounded-tr-lg rounded-bl-lg ">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
               >
                  <path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
               </svg>

               <h2>Education</h2>
               <p>Federal University of Technology, Minna</p>
               <span className='font-bold text-gray-400'>Biochemistry</span>
            </div>
         </div>
      </div>
   );
};

export default AboutMe;
