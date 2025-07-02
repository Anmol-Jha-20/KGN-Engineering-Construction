import React from "react";
import { MessageCircle, HelpCircle } from "lucide-react";

export default function MissionVisionValues() {
  return (
    <div className="min-h-screen bg-gray-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-7xl mt-24 mx-auto">
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Mission Card */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-orange-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                At KGN Engineering Construction, our mission is to deliver
                exceptional construction and refractory installation services
                that exceed client expectations. We are committed to achieving
                excellence through innovation, quality craftsmanship, and a
                steadfast dedication to safety and sustainability.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-orange-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Our vision is to become a leading name in the construction and
                refractory industry, recognized for our unwavering commitment to
                quality, reliability, and client satisfaction. We aim to expand
                our reach, continually improving our services and embracing
                cutting-edge technologies to meet the evolving needs of the
                industry.
              </p>
            </div>

            {/* Values Card */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-orange-200 md:col-span-2 lg:col-span-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Our Value
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                We are dedicated to providing products that meet the highest
                standards of quality, ensuring durability and satisfaction for
                our customers. We conduct our business with honesty and
                transparency, building trust with our clients and partners. We
                conduct our business with transparency, honesty, and respect for
                our clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Help Button */}
      {/* <div className="fixed bottom-6 left-6 z-20">
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
          aria-label="Need Help"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div> */}

      {/* Need Help Text */}
      {/* <div className="fixed bottom-6 left-20 sm:left-24 z-20">
        <div className="bg-white text-gray-900 px-3 py-2 rounded-lg shadow-lg text-sm font-medium border">
          Need Help ?
        </div>
      </div> */}

      {/* Right Side Decorative Elements */}
      {/* <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-3 h-3 bg-orange-400 rounded-full opacity-60"></div>
          <div className="w-2 h-16 bg-orange-400 opacity-40"></div>
          <div className="w-3 h-3 bg-orange-400 rounded-full opacity-60"></div>
        </div>
      </div> */}

      {/* SEO Elements */}
      <div className="sr-only">
        <h1>KGN Engineering Construction - Mission, Vision & Values</h1>
        <p>
          Leading construction and refractory installation services with
          commitment to quality, innovation, and client satisfaction.
        </p>
      </div>
    </div>
  );
}
