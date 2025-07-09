// import React from "react";
// import {
//   ChevronDown,
//   Menu,
//   X,
//   Phone,
//   Mail,
//   MapPin,
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   ArrowLeft,
//   ArrowRight,
// } from "lucide-react";

// function Service() {
//   return (
//     <>
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
//               Our Services
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               We provide comprehensive construction services with quality and
//               reliability since 1983
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="group">
//               <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
//                 <div className="overflow-hidden">
//                   <img
//                     src="https://www.kgnengineeringconstruction.com/media/product/WhatsApp%20Image%202025-06-11%20at%2011.24.49_936c0e15.jpg"
//                     alt="Residential Construction"
//                     style={{ backgroundRepeat: "no-repeat" }}
//                     className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-blue-900 mb-3">
//                     Residential Construction
//                   </h3>
//                   <p className="text-gray-600 mb-4">
//                     Building quality homes with attention to detail and
//                     craftsmanship.
//                   </p>
//                   <button className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors group-hover:translate-x-2 transform duration-300 inline-flex items-center">
//                     Learn More
//                     <ArrowRight className="w-4 h-4 ml-2" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="group">
//               <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
//                 <div className="overflow-hidden">
//                   <img
//                     src="https://www.kgnengineeringconstruction.com/media/product/project-1-6.jpg"
//                     alt="Commercial Projects"
//                     className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-500"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-blue-900 mb-3">
//                     Commercial Projects
//                   </h3>
//                   <p className="text-gray-600 mb-4">
//                     Professional commercial construction for businesses and
//                     institutions.
//                   </p>
//                   <button className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors group-hover:translate-x-2 transform duration-300 inline-flex items-center">
//                     Learn More
//                     <ArrowRight className="w-4 h-4 ml-2" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="group">
//               <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
//                 <div className="overflow-hidden">
//                   <img
//                     src="https://www.kgnengineeringconstruction.com/media/product/WhatsApp%20Image%202025-01-03%20at%2011.49.44_5862064e.jpg"
//                     alt="Renovation Services"
//                     className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-blue-900 mb-3">
//                     Renovation Services
//                   </h3>
//                   <p className="text-gray-600 mb-4">
//                     Transform existing spaces with our expert renovation
//                     services.
//                   </p>
//                   <button className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors group-hover:translate-x-2 transform duration-300 inline-flex items-center">
//                     Learn More
//                     <ArrowRight className="w-4 h-4 ml-2" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="group">
//               <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
//                 <div className="overflow-hidden">
//                   <img
//                     src="https://www.kgnengineeringconstruction.com/media/product/WhatsApp%20Image%202025-01-03%20at%2011.49.44_5862064e.jpg"
//                     alt="Renovation Services"
//                     className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-blue-900 mb-3">
//                     Renovation Services
//                   </h3>
//                   <p className="text-gray-600 mb-4">
//                     Transform existing spaces with our expert renovation
//                     services.
//                   </p>
//                   <button className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors group-hover:translate-x-2 transform duration-300 inline-flex items-center">
//                     Learn More
//                     <ArrowRight className="w-4 h-4 ml-2" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Service;

// import React from "react";
// import { ArrowRight } from "lucide-react";

// function Service() {
//   return (
//     <>
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
//               Our Services
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               We provide comprehensive construction services with quality and
//               reliability since 1983
//             </p>
//           </div>

//           {/* Horizontal Scrollable Services */}
//           <div className="flex overflow-x-auto gap-6 scroll-smooth px-2 py-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
//             {[...Array(4)].map((_, i) => (
//               <div
//                 key={i}
//                 className="min-w-[300px] md:min-w-[350px] flex-shrink-0 group"
//               >
//                 <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
//                   <div className="overflow-hidden">
//                     <img
//                       src={
//                         i === 0
//                           ? "https://www.kgnengineeringconstruction.com/media/product/WhatsApp%20Image%202025-06-11%20at%2011.24.49_936c0e15.jpg"
//                           : i === 1
//                           ? "https://www.kgnengineeringconstruction.com/media/product/project-1-6.jpg"
//                           : "https://www.kgnengineeringconstruction.com/media/product/WhatsApp%20Image%202025-01-03%20at%2011.49.44_5862064e.jpg"
//                       }
//                       alt="Service"
//                       className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold text-blue-900 mb-3">
//                       {i === 0
//                         ? "Residential Construction"
//                         : i === 1
//                         ? "Commercial Projects"
//                         : "Renovation Services"}
//                     </h3>
//                     <p className="text-gray-600 mb-4">
//                       {i === 0
//                         ? "Building quality homes with attention to detail and craftsmanship."
//                         : i === 1
//                         ? "Professional commercial construction for businesses and institutions."
//                         : "Transform existing spaces with our expert renovation services."}
//                     </p>
//                     <button className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors group-hover:translate-x-2 transform duration-300 inline-flex items-center">
//                       Learn More
//                       <ArrowRight className="w-4 h-4 ml-2" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Service;

import React from "react";
import { ArrowRight } from "lucide-react";
import kgnprojectImage6 from "../../assets/kgnProject6.png";
import kgnprojectImage from "../../assets/kgnProjectImage1.png";

function Service() {
  const services = [
    {
      title: "Industrial & Commercial Construction",
      description:
        "Industrial & commercial construction in plant and non-plant area.",
      img: kgnprojectImage6,
    },
    {
      title: "Silo construction in cement industry",
      description:
        "Storage silo and fly ash silo construction in Cement industry projects",
      img: kgnprojectImage,
    },
    {
      title: "RCC chimney, silo & intake well construction",
      description:
        "RCC chimney, silo and Intake well construction in industry projects",
      img: "https://www.kgnengineeringconstruction.com/media/product/WhatsApp%20Image%202025-01-03%20at%2011.49.44_5862064e.jpg",
    },
    {
      title: "OHBR, ELSR tanks & irrigation reservoirs",
      description:
        "OHBR, ELSR Water tank and All type of irrigation reservoir projects",
      img: "https://www.kgnengineeringconstruction.com/media/product/project-1-2.jpg",
    },
    {
      title: "Power plants industry",
      description: "Power plants industry",
      img: "https://www.kgnengineeringconstruction.com/media/product/project-1-3.jpg",
    },
    {
      title: "High-rise work with slip-form system",
      description: "High rise structure work with slip-form system ",
      img: "https://www.kgnengineeringconstruction.com/media/product/project-1-4.jpg",
    },
  ];

  return (
    <>
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive construction services with quality and
              reliability since 1983
            </p>
          </div>

          {/* Horizontal Auto-Scrolling Service Cards */}
          <div className="relative">
            <div className="flex w-max gap-6 animate-scroll-horizontal">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="min-w-[300px] md:min-w-[350px] flex-shrink-0 group"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="overflow-hidden">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <button className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors group-hover:translate-x-2 transform duration-300 inline-flex items-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Auto Scroll Animation Style */}
        <style>{`
          @keyframes scroll-horizontal {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll-horizontal {
            animation: scroll-horizontal 30s linear infinite;
          }
        `}</style>
      </section>
    </>
  );
}

export default Service;
