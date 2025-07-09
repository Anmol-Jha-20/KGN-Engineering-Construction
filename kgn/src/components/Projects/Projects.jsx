// import React, { useState, useEffect, useRef } from "react";
// import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
// import kgnprojectImage1 from "../../assets/kgnProject1.png";
// import kgnprojectImage2 from "../../assets/KgnProject2of2.png";
// import kgnprojectImage3 from "../../assets/KgnProject3.png";
// import kgnprojectImage4 from "../../assets/KgnProject4.png";

// const Projects = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoScrolling, setIsAutoScrolling] = useState(true);
//   const scrollRef = useRef(null);

//   const projects = [
//     {
//       id: 1,
//       title: "Chip Silo 20 m ID",
//       image: kgnprojectImage1,
//       description:
//         "High-rise commercial and residential construction projects with modern techniques",
//     },
//     {
//       id: 2,
//       title: "Construction of 70m high Straight RCC Chimney",
//       image: kgnprojectImage2,
//       description: "Complete interior renovation and modernization services",
//     },
//     {
//       id: 3,
//       title: "Construction of 60 Lack Ltr. Digester Tank",
//       image: kgnprojectImage3,
//       description:
//         "Durable concrete structures for commercial and industrial use",
//     },
//     {
//       id: 4,
//       title: "Luxury Apartments",
//       image: kgnprojectImage4,
//       description: "Premium residential complexes with modern amenities",
//     },
//     {
//       id: 5,
//       title: "Office Complex",
//       image:
//         "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
//       description: "State-of-the-art office buildings for corporate clients",
//     },
//     {
//       id: 6,
//       title: "Urban Development",
//       image:
//         "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop",
//       description: "Large-scale urban development and infrastructure projects",
//     },
//   ];

//   // Auto-scroll functionality
//   useEffect(() => {
//     if (!isAutoScrolling) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === projects.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [isAutoScrolling, projects.length]);

//   // Handle manual navigation
//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//     setIsAutoScrolling(false);
//     setTimeout(() => setIsAutoScrolling(true), 10000);
//   };

//   const nextSlide = () => {
//     const newIndex =
//       currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
//     goToSlide(newIndex);
//   };

//   const prevSlide = () => {
//     const newIndex =
//       currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
//     goToSlide(newIndex);
//   };

//   return (
//     <div className="min-h-screen bg-black text-white overflow-hidden">
//       {/* SEO Meta Information */}
//       <div className="sr-only">
//         <h1>Construction Projects Showcase - Building Excellence</h1>
//         <p>
//           Explore our portfolio of construction projects including building
//           construction, interior renovation, concrete structures, and luxury
//           apartments.
//         </p>
//       </div>

//       {/* Contact Button */}
//       <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-20">
//         <button
//           className="bg-yellow-500 hover:bg-yellow-400 text-black px-3 py-8 rounded-l-lg transition-all duration-300 hover:px-4 group"
//           aria-label="Contact Us"
//         >
//           <div className="flex flex-col items-center space-y-2">
//             <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
//             <span className="hidden md:block text-xs font-bold writing-mode-vertical-rl transform rotate-180">
//               CONTACT
//             </span>
//           </div>
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="relative h-screen">
//         {/* Header */}
//         <header className="relative z-10 pt-8 pb-4">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-6xl font-bold tracking-wider">
//               PROJECTS
//             </h1>
//             <div className="w-16 h-1 bg-yellow-500 mx-auto mt-2"></div>
//           </div>
//         </header>

//         {/* Projects Container */}
//         <div className="relative flex-1 px-4 md:px-8 lg:px-16">
//           {/* Navigation Arrows */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-4 md:left-8 lg:left-16 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 flex items-center justify-center group"
//             aria-label="Previous project"
//           >
//             <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute right-4 md:right-8 lg:right-16 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 flex items-center justify-center group"
//             aria-label="Next project"
//           >
//             <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
//           </button>

//           {/* Projects Slider */}
//           <div className="relative h-96 md:h-[500px] overflow-hidden">
//             <div
//               ref={scrollRef}
//               className="flex transition-transform duration-700 ease-in-out h-full"
//               style={{
//                 transform: `translateX(-${
//                   currentIndex * (100 / Math.min(4, projects.length))
//                 }%)`,
//               }}
//             >
//               {projects.map((project, index) => (
//                 <div
//                   key={project.id}
//                   className="flex-none w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2"
//                 >
//                   <div className="relative h-full group cursor-pointer">
//                     {/* Project Card */}
//                     <div className="relative h-full overflow-hidden rounded-lg shadow-2xl">
//                       <img
//                         src={project.image}
//                         alt={project.title}
//                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                         loading="lazy"
//                       />

//                       {/* Gradient Overlay */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

//                       {/* Content Overlay */}
//                       <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
//                         <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
//                           {project.title}
//                         </h3>
//                         <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                           {project.description}
//                         </p>
//                       </div>

//                       {/* Hover Effect Border */}
//                       <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-500 transition-colors duration-300 rounded-lg"></div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Pagination Dots */}
//           <div className="flex justify-center space-x-2 mt-8">
//             {projects.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   index === currentIndex
//                     ? "bg-yellow-500 scale-125"
//                     : "bg-gray-600 hover:bg-gray-400"
//                 }`}
//                 aria-label={`Go to project ${index + 1}`}
//               />
//             ))}
//           </div>

//           {/* Auto-scroll Indicator */}
//           <div className="flex justify-center mt-4">
//             <div className="flex items-center space-x-2 text-xs text-gray-400">
//               <div
//                 className={`w-2 h-2 rounded-full ${
//                   isAutoScrolling ? "bg-green-500 animate-pulse" : "bg-gray-500"
//                 }`}
//               ></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Custom CSS for animations */}
//       <style>{`
//         .writing-mode-vertical-rl {
//           writing-mode: vertical-rl;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         @media (max-width: 768px) {
//           .writing-mode-vertical-rl {
//             writing-mode: initial;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Projects;

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import kgnprojectImage1 from "../../assets/kgnProject1.png";
import kgnprojectImage2 from "../../assets/KgnProject2of2.png";
import kgnprojectImage3 from "../../assets/KgnProject3.png";
import kgnprojectImage4 from "../../assets/KgnProject4.png";
import kgnprojectImage5 from "../../assets/KgnProject5.png";
import kgnprojectImage6 from "../../assets/kgnProject6.png";
import kgnprojectImage7 from "../../assets/kgnProject7.png";
import kgnprojectImage8 from "../../assets/KgnProject8.png";
import kgnprojectImage9 from "../../assets/kgnProject9.png";
import kgnprojectImage10 from "../../assets/Project10.png";
import kgnprojectImage11 from "../../assets/kgnProject11.png";
import kgnprojectImage12 from "../../assets/kgnProject12.png";
import kgnprojectImage13 from "../../assets/Project13.png";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);

  // Sample project data with placeholder images
  const projects = [
    {
      id: 1,
      title: "Chip Silo 20 m ID",
      image: kgnprojectImage1,
      description:
        "High-rise commercial and residential construction projects with modern techniques",
    },
    {
      id: 2,
      title: "Construction of 70m high Straight RCC Chimney",
      image: kgnprojectImage2,
      description: "Complete interior renovation and modernization services",
    },
    {
      id: 3,
      title: "Construction of 60 Lack Ltr. Digester Tank",
      image: kgnprojectImage3,
      description:
        "Durable concrete structures for commercial and industrial use",
    },
    {
      id: 4,
      title: "Construction of 80m high Straight RCC Chimney.",
      image: kgnprojectImage4,
      description: "Premium residential complexes with modern amenities",
    },
    {
      id: 5,
      title: "Construction of 80m high Tapered RCC Chimney.",
      image: kgnprojectImage5,
      description: "State-of-the-art office buildings for corporate clients",
    },
    {
      id: 6,
      title: "RCC chimney 60m height",
      image: kgnprojectImage6,
      description: "Large-scale urban development and infrastructure projects",
    },
    {
      id: 7,
      title: "Construction of 70m high Tapered RCC Chimney",
      image: kgnprojectImage7,
      description: "Large-scale urban development and infrastructure projects",
    },
    {
      id: 8,
      title: "Construction of 80m high Straight RCC Chimney.",
      image: kgnprojectImage8,
      description: "Construction of 80m high Straight RCC Chimney.",
    },
    {
      id: 9,
      title: "Jack well cum Intake Well",
      image: kgnprojectImage9,
      description: "Jack well cum Intake Well",
    },
    {
      id: 10,
      title: "Straight RCC Chimney, Ht. 72mtr",
      image: kgnprojectImage10,
      description: "Straight RCC Chimney, Ht. 72mtr",
    },
    {
      id: 11,
      title: "Digester Tank",
      image: kgnprojectImage11,
      description: "Digester Tank",
    },
    {
      id: 12,
      title: "Civil Work (60 KL OHBR)",
      image: kgnprojectImage12,
      description: "Civil Work (60 KL OHBR)",
    },
    {
      id: 13,
      title: "Intake well",
      image: kgnprojectImage13,
      description: "Intake well",
    },
  ];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-scroll functionality with mobile-optimized timing
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(
      () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
      },
      isMobile ? 5000 : 4000
    ); // Slower on mobile

    return () => clearInterval(interval);
  }, [isAutoScrolling, projects.length, isMobile]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), isMobile ? 15000 : 10000);
  };

  const nextSlide = () => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  // Calculate items per view based on screen size
  const getItemsPerView = () => {
    if (isMobile) return 1;
    if (window.innerWidth < 1024) return 2;
    if (window.innerWidth < 1280) return 3;
    return 4;
  };

  const itemsPerView = getItemsPerView();

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* SEO Meta Information */}
      <div className="sr-only">
        <h1>Construction Projects Showcase - Building Excellence</h1>
        <p>
          Explore our portfolio of construction projects including building
          construction, interior renovation, concrete structures, and luxury
          apartments.
        </p>
      </div>

      {/* Contact Button - Better mobile positioning */}
      <div className="fixed right-2 md:right-0 top-1/2 transform -translate-y-1/2 z-20">
        <button
          className="bg-yellow-500 hover:bg-yellow-400 text-black px-2 md:px-3 py-4 md:py-8 rounded-l-lg transition-all duration-300 hover:px-3 md:hover:px-4 group shadow-lg"
          aria-label="Contact Us"
        >
          <div className="flex flex-col items-center space-y-1 md:space-y-2">
            <Phone className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold writing-mode-vertical-rl transform rotate-180">
              CONTACT
            </span>
          </div>
        </button>
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen">
        {/* Header */}
        <header className="relative z-10 pt-4 md:pt-8 pb-4 md:pb-6">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-wider">
              PROJECTS
            </h1>
            <div className="w-12 md:w-16 h-1 bg-yellow-500 mx-auto mt-2"></div>
          </div>
        </header>

        {/* Projects Container */}
        <div className="relative flex-1 px-2 md:px-4 lg:px-8 xl:px-16">
          {/* Navigation Arrows - Better mobile positioning */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 lg:left-8 xl:left-16 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 flex items-center justify-center group shadow-lg"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 lg:right-8 xl:right-16 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 flex items-center justify-center group shadow-lg"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Projects Slider */}
          <div className="relative h-80 md:h-96 lg:h-[500px] overflow-hidden">
            <div
              ref={scrollRef}
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`flex-none px-1 md:px-2 ${
                    isMobile
                      ? "w-full"
                      : window.innerWidth < 1024
                      ? "w-1/2"
                      : window.innerWidth < 1280
                      ? "w-1/3"
                      : "w-1/4"
                  }`}
                >
                  <div className="relative h-full group cursor-pointer">
                    {/* Project Card */}
                    <div className="relative h-full overflow-hidden rounded-lg shadow-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                      {/* Content Overlay - Better mobile text sizing */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 md:mb-2 line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Hover Effect Border */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-500 transition-colors duration-300 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots - Better mobile spacing */}
          <div className="flex justify-center space-x-2 mt-4 md:mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-yellow-500 scale-125"
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-scroll Indicator */}
          <div className="flex justify-center mt-2 md:mt-4">
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <div
                className={`w-2 h-2 rounded-full ${
                  isAutoScrolling ? "bg-green-500 animate-pulse" : "bg-gray-500"
                }`}
              ></div>
              <span className="hidden md:inline">
                {isAutoScrolling ? "Auto-scrolling" : "Manual"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations and mobile improvements */}
      <style>{`
        .writing-mode-vertical-rl {
          writing-mode: vertical-rl;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @media (max-width: 768px) {
          .writing-mode-vertical-rl {
            writing-mode: initial;
            transform: none;
          }
        }
        
        /* Smooth touch scrolling on mobile */
        @media (max-width: 768px) {
          .overflow-hidden {
            -webkit-overflow-scrolling: touch;
          }
        }
        
        /* Better hover states for mobile */
        @media (hover: none) {
          .group:hover .group-hover\\:opacity-100 {
            opacity: 1;
          }
          .group:hover .group-hover\\:translate-y-0 {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
