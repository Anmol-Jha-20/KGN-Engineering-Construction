import { useState, useEffect } from "react";

export default function ConstructionHeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentBadge, setCurrentBadge] = useState(0);

  const badges = [
    "Expertise And Experience",
    "Commitment To Quality",
    "Safety First",
  ];

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentBadge((prev) => (prev + 1) % badges.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-amber-200 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-yellow-300 rounded-full opacity-25 animate-ping"></div>

      {/* Main container */}
      <div className="container mx-auto px-4 py-8 lg:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left side - Curved image container */}
          <div
            className={`flex-1 relative transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <div className="relative">
              {/* Main curved container */}
              <div className="bg-white rounded-[3rem] lg:rounded-[4rem] p-8 lg:p-12 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 items-center">
                  {/* First circular image */}
                  <div className="relative group">
                    <div className="w-32 h-32 lg:w-52 lg:h-52 rounded-full overflow-hidden shadow-xl transform group-hover:rotate-6 transition-transform duration-500">
                      <img
                        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center"
                        alt="Interior construction detail"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400 to-amber-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>

                  {/* Second circular image */}
                  <div className="relative group">
                    <div className="w-32 h-32 lg:w-52 lg:h-52 rounded-full overflow-hidden shadow-xl transform group-hover:-rotate-6 transition-transform duration-500">
                      <img
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=400&fit=crop&crop=center"
                        alt="Construction site progress"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400 to-amber-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-amber-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div
            className={`flex-1 text-center lg:text-left transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            {/* Top badge */}
            <div className="inline-block mb-4">
              <span className="text-orange-500 font-semibold text-sm lg:text-base tracking-wider uppercase animate-fade-in">
                Best Interior Design
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              <span className="inline-block animate-slide-up">KGN</span>{" "}
              <span className="inline-block animate-slide-up delay-100">
                Engineering
              </span>{" "}
              <span className="inline-block animate-slide-up delay-200">
                Construction?
              </span>
            </h1>

            {/* Animated badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
              {badges.map((badge, index) => (
                <span
                  key={badge}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 transform ${
                    index === currentBadge
                      ? "bg-orange-500 text-white scale-105 shadow-lg"
                      : index === 0
                      ? "bg-orange-100 text-orange-700 hover:bg-orange-200"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up delay-500">
              With Years Of Experience In The Construction Industry, Our Team Of
              Skilled Professionals Brings Unmatched Expertise To Every Project.
            </p>

            {/* CTA Button */}
            <div className="mt-8 animate-fade-in-up delay-700">
              <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 group">
                Get Started Today
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom help section */}
      <div
        className={`fixed bottom-8 left-8 transform transition-all duration-1000 delay-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        {/* <div className="bg-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold group-hover:rotate-12 transition-transform duration-300">
              ?
            </div>
            <span className="text-gray-700 font-medium">Need Help ?</span>
          </div>
        </div> */}
      </div>

      {/* Custom CSS for additional animations */}
      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
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

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
