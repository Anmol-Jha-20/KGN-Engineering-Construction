// import React, { useState, useEffect } from "react";

// export default function Leading() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [imageLoaded, setImageLoaded] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 overflow-hidden">
//       {/* SEO Meta Content */}
//       <div className="sr-only">
//         <h1 className="text-xl">
//           Leading Construction Company - Industrial & Civil Engineering
//         </h1>
//         <p>
//           Professional construction services for industrial, oil & gas,
//           manufacturing, mechanical, power and energy, engineering &
//           multipurpose business solutions.
//         </p>
//       </div>

//       <div className="container mx-auto px-4 py-8 lg:py-16">
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
//           {/* Left Content Section */}
//           <div
//             className={`space-y-6 lg:space-y-8 transform transition-all duration-1000 ease-out ${
//               isVisible
//                 ? "translate-x-0 opacity-100"
//                 : "-translate-x-full opacity-0"
//             }`}
//           >
//             {/* Main Heading */}
//             <div className="space-y-1">
//               <h1 className="text-xl sm:text-xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
//                 <span className="inline-block transform hover:scale-105 transition-transform duration-300">
//                   LEADING THE WAY IN
//                 </span>
//                 <br />
//                 <span className="inline-block transform hover:scale-105 transition-transform duration-300 delay-100">
//                   BUILDING AND CIVIL
//                 </span>
//                 <br />
//                 <span className="inline-block transform hover:scale-105 transition-transform duration-300 delay-200 text-gray-800">
//                   CONSTRUCTION
//                 </span>
//               </h1>
//             </div>

//             {/* Description */}
//             <div className="space-y-4">
//               <p className="text-lg lg:text-xl text-gray-800 font-medium leading-relaxed">
//                 Walls WP is designed for industrial, oil and gas, manufacturing,
//                 mechanical, power and energy, engineering & Multipurpose
//                 Business.
//               </p>

//               <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 lg:p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/30">
//                 <p className="text-gray-800 leading-relaxed">
//                   Walls WP is designed for industrial, oil and gas,
//                   manufacturing, mechanical, power and energy, engineering &
//                   Multipurpose Business. This template has beautiful and unique
//                   design that will be best suited for your online web presence.
//                   It has 100% responsive design and tested on all major handheld
//                   devices, the theme also responsive and high quality in any
//                   browsers.
//                 </p>
//               </div>
//             </div>

//             {/* CTA Button */}
//             <div className="pt-4">
//               <button className="group relative bg-gray-800 hover:bg-gray-900 text-white font-semibold py-4 px-8 lg:px-12 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden">
//                 <span className="relative z-10 text-lg">Read More</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
//                 <span className="relative z-10 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   Read More
//                 </span>
//               </button>
//             </div>
//           </div>

//           {/* Right Image Section */}
//           <div
//             className={`relative transform transition-all duration-1000 ease-out delay-300 ${
//               isVisible
//                 ? "translate-x-0 opacity-100"
//                 : "translate-x-full opacity-0"
//             }`}
//           >
//             {/* Construction Images Layout */}
//             <div className="relative">
//               {/* Main Construction Tools Image */}
//               <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
//                 <div className="bg-white rounded-xl shadow-2xl p-4 hover:shadow-3xl transition-shadow duration-300">
//                   <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
//                     <div className="w-full h-full bg-gradient-to-br from-yellow-200 via-orange-200 to-red-200 flex items-center justify-center">
//                       <div className="text-center space-y-2">
//                         <div className="w-16 h-16 bg-yellow-600 rounded-lg mx-auto flex items-center justify-center">
//                           <svg
//                             className="w-8 h-8 text-white"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.78 0-2.678-2.153-1.415-3.414l5-5A2 2 0 009 9.172V5L8 4z"
//                             />
//                           </svg>
//                         </div>
//                         <p className="text-sm font-medium text-gray-700">
//                           Construction Tools
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Team Meeting Image */}
//               <div className="absolute -bottom-4 -right-4 z-20 transform hover:scale-105 transition-transform duration-500">
//                 <div className="bg-white rounded-xl shadow-2xl p-3 hover:shadow-3xl transition-shadow duration-300">
//                   <div className="aspect-[4/3] w-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden">
//                     <div className="w-full h-full bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 flex items-center justify-center">
//                       <div className="text-center space-y-2">
//                         <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto flex items-center justify-center">
//                           <svg
//                             className="w-6 h-6 text-white"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//                             />
//                           </svg>
//                         </div>
//                         <p className="text-xs font-medium text-gray-700">
//                           Team Meeting
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Elements */}
//               <div className="absolute -top-4 -left-4 z-30">
//                 <div className="animate-bounce">
//                   <div className="w-12 h-12 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center">
//                     <svg
//                       className="w-6 h-6 text-gray-800"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M13 10V3L4 14h7v7l9-11h-7z"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute top-1/2 -right-8 z-30">
//                 <div className="animate-pulse">
//                   <div className="w-8 h-8 bg-orange-400 rounded-full shadow-lg"></div>
//                 </div>
//               </div>

//               <div className="absolute bottom-1/4 -left-6 z-30">
//                 <div className="animate-ping">
//                   <div className="w-6 h-6 bg-red-400 rounded-full shadow-lg"></div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Info Card */}
//             <div className="absolute top-4 right-4 z-40 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/50 transform hover:scale-105 transition-transform duration-300">
//               <div className="text-right">
//                 <p className="text-xs font-semibold text-gray-600">CONTACT</p>
//                 <p className="text-sm font-bold text-gray-800">
//                   +1 234 567 890
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Background Decorative Elements */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
//         <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
//         <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-bounce"></div>
//       </div>

//       {/* Bottom Gradient Overlay */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

export default function Leading() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 overflow-hidden">
      {/* SEO Meta Content */}
      <div className="sr-only">
        <h1>Leading Construction Company - Industrial & Civil Engineering</h1>
        <p>
          Professional construction services for industrial, oil & gas,
          manufacturing, mechanical, power and energy, engineering &
          multipurpose business solutions.
        </p>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content Section */}
          <div
            className={`space-y-6 lg:space-y-8 transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                  LEADING THE WAY IN
                </span>
                <br />
                <span className="inline-block transform hover:scale-105 transition-transform duration-300 delay-100">
                  BUILDING AND CIVIL
                </span>
                <br />
                <span className="inline-block transform hover:scale-105 transition-transform duration-300 delay-200 text-gray-800">
                  CONSTRUCTION
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg lg:text-xl text-gray-800 font-medium leading-relaxed">
                Walls WP is designed for industrial, oil and gas, manufacturing,
                mechanical, power and energy, engineering & Multipurpose
                Business.
              </p>

              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 lg:p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/30">
                <p className="text-gray-800 leading-relaxed">
                  Walls WP is designed for industrial, oil and gas,
                  manufacturing, mechanical, power and energy, engineering &
                  Multipurpose Business. This template has beautiful and unique
                  design that will be best suited for your online web presence.
                  It has 100% responsive design and tested on all major handheld
                  devices, the theme also responsive and high quality in any
                  browsers.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group relative bg-gray-800 hover:bg-gray-900 text-white font-semibold py-4 px-8 lg:px-12 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden">
                <span className="relative z-10 text-lg">Read More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="relative z-10 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div
            className={`relative transform transition-all duration-1000 ease-out delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            {/* Construction Images Layout */}
            <div className="relative">
              {/* Main Construction Tools Image */}
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <div className="bg-white rounded-xl shadow-2xl p-4 hover:shadow-3xl transition-shadow duration-300">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="https://walls-wp.themegum.com/wp-content/uploads/2017/06/about-img-1.jpg"
                      alt=""
                      className="object-cover"
                    />
                    {/* <div className="w-full h-full bg-gradient-to-br from-yellow-200 via-orange-200 to-red-200 flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <div className="w-16 h-16 bg-yellow-600 rounded-lg mx-auto flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.78 0-2.678-2.153-1.415-3.414l5-5A2 2 0 009 9.172V5L8 4z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-gray-700">
                          Construction Tools
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Team Meeting Image */}
              <div className="absolute -bottom-4 -right-4 z-20 transform hover:scale-105 transition-transform duration-500">
                <div className="bg-white rounded-xl shadow-2xl p-3 hover:shadow-3xl transition-shadow duration-300">
                  <div className="aspect-[4/3] w-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden">
                    <img
                      src="https://walls-wp.themegum.com/wp-content/uploads/2017/07/slide-2-1-300x200.jpg"
                      alt=""
                      className="object-cover"
                    />
                    {/* <div className="w-full h-full bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                        <p className="text-xs font-medium text-gray-700">
                          Team Meeting
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              {/* <div className="absolute -top-4 -left-4 z-30">
                <div className="animate-bounce">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div> */}

              <div className="absolute top-1/2 -right-8 z-30">
                <div className="animate-pulse">
                  <div className="w-8 h-8 bg-orange-400 rounded-full shadow-lg"></div>
                </div>
              </div>

              <div className="absolute bottom-1/4 -left-6 z-30">
                <div className="animate-ping">
                  <div className="w-6 h-6 bg-red-400 rounded-full shadow-lg"></div>
                </div>
              </div>
            </div>

            {/* Contact Info Card */}
            {/* <div className="absolute top-4 right-4 z-40 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/50 transform hover:scale-105 transition-transform duration-300">
              <div className="text-right">
                <p className="text-xs font-semibold text-gray-600">CONTACT</p>
                <p className="text-sm font-bold text-gray-800">
                  +1 234 567 890
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-bounce"></div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
    </div>
  );
}
