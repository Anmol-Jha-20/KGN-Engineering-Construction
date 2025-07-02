import React, { useState, useEffect } from "react";
// import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* SEO Meta Content */}
      <div className="sr-only">
        <h1>Mohammad Kalam - Industrial Construction Expert</h1>
        <p>
          13 years of expertise in industrial construction excellence.
          Professional construction services including factories, warehouses,
          and specialized industrial facilities.
        </p>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 max-w-7xl mx-auto">
          {/* Left Side - Profile Image */}
          <div
            className={`w-full lg:w-1/2 flex justify-center lg:justify-start transition-all duration-1000 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="relative group">
              {/* Decorative background circle */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

              {/* Profile image container */}
              <div className="relative w-80 h-96 lg:w-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
                <img
                  src="https://www.kgnengineeringconstruction.com/assets/images/about/about-3-3.jpg"
                  alt="Mohammad Kalam - Industrial Construction Expert"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> */}
              </div>

              {/* Floating badge */}
              {/* <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                13+ Years
              </div> */}
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {/* Name */}
            <h1 className="text-4xl lg:text-6xl font-bold text-orange-500 mb-4 lg:mb-6 text-center lg:text-left">
              <span className="inline-block animate-fade-in-up">Mohammad</span>{" "}
              <span className="inline-block animate-fade-in-up animation-delay-200">
                Kalam
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-6 lg:mb-8 leading-tight text-center lg:text-left">
              <span className="inline-block animate-fade-in-up animation-delay-400">
                13 Years of Expertise in
              </span>
              <br />
              <span className="inline-block animate-fade-in-up animation-delay-600">
                Industrial Construction
              </span>
              <br />
              <span className="inline-block animate-fade-in-up animation-delay-800 text-orange-500">
                Excellence.
              </span>
            </h2>

            {/* Description */}
            <div
              className={`text-gray-600 text-base lg:text-lg leading-relaxed space-y-4 text-center lg:text-left transition-all duration-1000 delay-1000 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              <p>
                With over 13 years of dedicated experience in the industrial
                construction sector, Mohammad Kalam has built a reputation for
                delivering exceptional quality and reliability. Our services
                encompass the design and construction of factories, warehouses,
                and specialized industrial facilities, tailored to meet the
                unique demands of each project.
              </p>

              <p>
                We prioritize precision engineering, robust materials, and
                innovative methodologies to ensure every structure is not just
                functional but also future-ready. From project inception to
                completion, our team is committed to maintaining the highest
                professional standards, ensuring timely delivery and
                unparalleled client satisfaction.
              </p>
            </div>

            {/* CTA Buttons */}
            {/* <div
              className={`flex flex-col sm:flex-row gap-4 mt-8 lg:mt-12 justify-center lg:justify-start transition-all duration-1000 delay-1200 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                View Projects
              </button>
              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Get Quote
              </button>
            </div> */}

            {/* Stats */}
            {/* <div
              className={`grid grid-cols-3 gap-6 mt-8 lg:mt-12 transition-all duration-1000 delay-1400 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              <div className="text-center lg:text-left">
                <div
                  className="text-2xl lg:text-3xl font-bold text-orange-500 counter"
                  data-target="150"
                >
                  150+
                </div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-orange-500">
                  13
                </div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-orange-500">
                  100%
                </div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Help Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => setIsHelpOpen(!isHelpOpen)}
          className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-bounce"
          aria-label="Need Help?"
        >
          <FaWhatsapp size={24} />
        </button>

        {isHelpOpen && (
          <div className="absolute bottom-16 left-0 bg-white p-4 rounded-lg shadow-xl border animate-fade-in">
            <p className="text-sm text-gray-700 whitespace-nowrap">
              Need Help ?
            </p>
            <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white transform rotate-45 border-b border-r"></div>
          </div>
        )}
      </div>

      {/* Top Navigation Indicator */}
      {/* <div className="fixed top-8 right-8 z-50">
        <div className="bg-orange-500 text-white px-3 py-1 text-xs rounded-full transform -rotate-90 origin-center">
          TOP
        </div>
      </div> */}

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </div>
  );
}
