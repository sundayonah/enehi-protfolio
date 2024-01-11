import React from 'react';
import AboutMe from './aboutMe';
import Experince from './experience';
import Projects from './projects';
import Contact from './contact';
import Footer from './footer';

const Hero = () => {
   return (
      <>
         <div className="mx-auto max-w-7xl  pb-12 pt-6 text-center sm:pl-32 lg:px-8">
            <div className="">
               <span className="text-sm ">Hello, {`i'm`}</span>
               <p className="text-gray-500 text-xl pb-1">
                  Ojedapo Oluwakemi Elizabeth
               </p>
               <p className="text-xs">
                  A passionate{' '}
                  <span className="text-blue-700">UI/UX Designer,</span>{' '}
                  crafting exceptional digital experiences.
               </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:pt-2 items-center justify-center space-x-0 sm:space-x-12 mt-4">
               <div className="flex flex-col bg-blue-800 py-1 px-6 rounded-md space-y-3 sm:space-y-0 sm:flex-row sm:space-x-3">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth="1.5"
                     stroke="currentColor"
                     className="w-6 h-6 text-white"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                     />
                  </svg>
                  <button className="text-white text-sm">View my Work</button>
               </div>
               <div className="flex flex-col py-1 px-6 rounded-md border border-blue-300 space-y-3 sm:space-y-0 sm:flex-row sm:space-x-3">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth="1.5"
                     stroke="currentColor"
                     className="w-5 h-5 text-blue-800"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                     />
                  </svg>
                  <button className="text-blue-800 text-sm">
                     Contact Info
                  </button>
               </div>
            </div>
            {/* <div className=" flex items-center justify-center space-x-12 mt-4 ">
               <div className="flex bg-blue-800 py-1 px-6 rounded-md space-x-3 ">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     class="w-6 h-6 text-white"
                  >
                     <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                     />
                  </svg>

                  <button className="text-white text-sm">View my Work</button>
               </div>
               <div className=" flex py-1 px-6 rounded-md border border-blue-300  space-x-3 ">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     class="w-5 h-5 text-blue-800"
                  >
                     <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                     />
                  </svg>

                  <button className="text-blue-800 text-sm">
                     Contact Info
                  </button>
               </div>
            </div> */}
         </div>
         <div>
            <AboutMe />
            <Experince />
            <Projects />
            <Contact />
            <Footer />
         </div>
      </>
   );
};

export default Hero;
