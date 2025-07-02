import React, { useEffect, useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Header from "../components/Header/Header.jsx";
import Leading from "../components/Leading/Leading.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      title: "Make Your Best Future",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      image:
        "https://images.unsplash.com/photo-1711733050507-f3bd06c4c3f5?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Building Dreams Together",
      subtitle:
        "Professional construction services with quality and reliability since 1983",
      image:
        "https://walls-wp.themegum.com/wp-content/uploads/2017/07/slide-2-1.jpg",
    },
    {
      title: "Expert Construction Solutions",
      subtitle:
        "From residential to commercial projects, we deliver excellence",
      image:
        "https://walls-wp.themegum.com/wp-content/uploads/2017/07/slide-1-1.jpg",
    },
  ];
  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAutoPlaying(true), 3000); // Resume auto-play after 3 seconds
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAutoPlaying(true), 3000); // Resume auto-play after 3 seconds
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
    setTimeout(() => setIsAutoPlaying(true), 3000); // Resume auto-play after 3 seconds
  };

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % slides.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  // };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={slides[currentSlide].image}
            alt="Construction team"
            className="w-full h-full object-cover scale-105 md:scale-110"
          />
          <div className="absolute inset-0 bg-opacity-50"></div>
        </div>
        <Header />
        {/* Hero Content */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center text-white z-10 px-4 max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {slides[currentSlide].title}
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-yellow-400 text-blue-900 px-8 py-2 cursor-pointer rounded-sm font-bold text-lg hover:bg-yellow-500 transition-colors duration-300 transform hover:scale-105">
                Learn More
              </button>
              <button className="bg-blue-900 text-white px-8 py-2 cursor-pointer rounded-sm font-bold text-lg hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 z-30"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 z-30"
        >
          <ArrowRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-yellow-400"
                  : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div> */}
      </section>

      {/* Contact Widget */}
      {/* <div className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 h-36 text-blue-900 p-4 rounded-l-lg shadow-lg z-50 hidden lg:block">
        <div className="transform -rotate-90 origin-center whitespace-nowrap">
          <span className="font-bold text-lg">Contact</span>
        </div>
      </div> */}

      {/* Services Preview Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Construction Service 1"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Residential Construction
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Building quality homes with attention to detail and
                    craftsmanship.
                  </p>
                  <button className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Construction Service 2"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Commercial Projects
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Professional commercial construction for businesses and
                    institutions.
                  </p>
                  <button className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Construction Service 3"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Renovation Services
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Transform existing spaces with our expert renovation
                    services.
                  </p>
                  <button className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="py-20 bg-gray-50">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1506092309076-af15fb0051e3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Residential Construction"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Residential Construction
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Building quality homes with attention to detail and
                    craftsmanship.
                  </p>
                  <button className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors group-hover:translate-x-2 transform duration-300 inline-flex items-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Commercial Projects"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Commercial Projects
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Professional commercial construction for businesses and
                    institutions.
                  </p>
                  <button className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors group-hover:translate-x-2 transform duration-300 inline-flex items-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Renovation Services"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Renovation Services
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Transform existing spaces with our expert renovation
                    services.
                  </p>
                  <button className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors group-hover:translate-x-2 transform duration-300 inline-flex items-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Leading />
      <Projects />
      {/* <Footer /> */}
    </div>
  );
}
