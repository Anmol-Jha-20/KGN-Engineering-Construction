import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Building Construction",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=300&fit=crop",
      description:
        "High-rise commercial and residential construction projects with modern techniques",
    },
    {
      id: 2,
      title: "Inside Renovation",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop",
      description: "Complete interior renovation and modernization services",
    },
    {
      id: 3,
      title: "Concrete Building",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&h=300&fit=crop",
      description:
        "Durable concrete structures for commercial and industrial use",
    },
    {
      id: 4,
      title: "Luxury Apartments",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=300&fit=crop",
      description: "Premium residential complexes with modern amenities",
    },
    {
      id: 5,
      title: "Office Complex",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
      description: "State-of-the-art office buildings for corporate clients",
    },
    {
      id: 6,
      title: "Urban Development",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop",
      description: "Large-scale urban development and infrastructure projects",
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoScrolling, projects.length]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 10000);
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

      {/* Contact Button */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-20">
        <button
          className="bg-yellow-500 hover:bg-yellow-400 text-black px-3 py-8 rounded-l-lg transition-all duration-300 hover:px-4 group"
          aria-label="Contact Us"
        >
          <div className="flex flex-col items-center space-y-2">
            <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold writing-mode-vertical-rl transform rotate-180">
              CONTACT
            </span>
          </div>
        </button>
      </div>

      {/* Main Content */}
      <div className="relative h-screen">
        {/* Header */}
        <header className="relative z-10 pt-8 pb-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wider">
              PROJECTS
            </h1>
            <div className="w-16 h-1 bg-yellow-500 mx-auto mt-2"></div>
          </div>
        </header>

        {/* Projects Container */}
        <div className="relative flex-1 px-4 md:px-8 lg:px-16">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 lg:left-16 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 flex items-center justify-center group"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 lg:right-16 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 flex items-center justify-center group"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Projects Slider */}
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            <div
              ref={scrollRef}
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / Math.min(4, projects.length))
                }%)`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="flex-none w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2"
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

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-yellow-500 scale-125"
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-scroll Indicator */}
          <div className="flex justify-center mt-4">
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <div
                className={`w-2 h-2 rounded-full ${
                  isAutoScrolling ? "bg-green-500 animate-pulse" : "bg-gray-500"
                }`}
              ></div>
              <span>{isAutoScrolling ? "Auto-scrolling" : "Manual mode"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500 opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500 opacity-3 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        .writing-mode-vertical-rl {
          writing-mode: vertical-rl;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @media (max-width: 768px) {
          .writing-mode-vertical-rl {
            writing-mode: initial;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
