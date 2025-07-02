import React, { useState } from "react";
import {
  Facebook,
  MessageCircle,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert("Thank you for subscribing!");
      setEmail("");
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-gray-100 p-2 rounded mr-3">
                {/* <div className="w-6 h-6 bg-white rounded-sm"></div> */}
                <img
                  src="https://www.kgnengineeringconstruction.com/assets/images/favicons/favicon-32x32.png"
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-xl font-bold">KGN</h2>
                <p className="text-sm text-gray-300">
                  ENGINEERING CONSTRUCTION
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              KGN Engineering Construction is a leading service provider
              specializing in comprehensive construction solutions and expert
              refractory installation services. With a commitment to excellence
              and precision.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-gray-700 hover:bg-yellow-500 p-2 rounded transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-gray-700 hover:bg-yellow-500 p-2 rounded transition-colors duration-300"
                aria-label="Google"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-gray-700 hover:bg-yellow-500 p-2 rounded transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-gray-700 hover:bg-yellow-500 p-2 rounded transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-gray-700 hover:bg-yellow-500 p-2 rounded transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 relative">
              Recent Post
              <div className="absolute bottom-[-8px] left-0 w-8 h-1 bg-yellow-500"></div>
            </h3>

            <div className="space-y-6">
              <article>
                <h4 className="text-white hover:text-yellow-500 cursor-pointer transition-colors duration-300 mb-2">
                  Best in dolor sit amet consectetur adipisicing
                </h4>
                <time className="text-gray-400 text-sm flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  June 14, 2017
                </time>
              </article>

              <article>
                <h4 className="text-white hover:text-yellow-500 cursor-pointer transition-colors duration-300 mb-2">
                  Suspendisse vel egestas arcu. Pellentesque habitant morbi
                  tristique senectus et netus et malesuada fames ac turpis
                  egestas
                </h4>
                <time className="text-gray-400 text-sm flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  June 14, 2017
                </time>
              </article>
            </div>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 relative">
              Our Services
              <div className="absolute bottom-[-8px] left-0 w-8 h-1 bg-yellow-500"></div>
            </h3>

            <nav>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-400 transition-colors duration-300"
                  >
                    Construction Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-400 transition-colors duration-300"
                  >
                    Refractory Lining Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-400 transition-colors duration-300"
                  >
                    Acid Resistant Lining Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-400 transition-colors duration-300"
                  >
                    Refractory Installation Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-400 transition-colors duration-300"
                  >
                    Rotary Furnace Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-400 transition-colors duration-300"
                  >
                    Refractory Installation Service
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Subscribe Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 relative">
              Subscribe
              <div className="absolute bottom-[-8px] left-0 w-8 h-1 bg-yellow-500"></div>
            </h3>

            <p className="text-gray-300 text-sm mb-6">
              Lit sed The Best in dolor sit amet consectetur adipisicing elit
              sedconsectetur adipisicing
            </p>

            <div className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors duration-300"
                />
                <button
                  onClick={handleSubscribe}
                  className="bg-yellow-500 hover:bg-yellow-600 px-4 py-3 transition-colors duration-300"
                  aria-label="Subscribe"
                >
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>

            <p className="text-gray-300 text-sm">
              Get latest updates and offers.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2017 Walls WP, The Awesome Theme. All right reserved.
            </p>

            {/* Contact Buttons */}
            <div className="flex space-x-2">
              <button className="bg-yellow-500 hover:bg-yellow-600 p-3 rounded transition-colors duration-300 group">
                <Phone className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-600 p-3 rounded transition-colors duration-300 group">
                <Mail className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Tab (Fixed Position) */}
      {/* <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-8 rounded-l-lg shadow-lg transition-all duration-300 hover:px-6 group">
          <div className="transform -rotate-90 whitespace-nowrap font-semibold tracking-wider">
            CONTACT
          </div>
        </button>
      </div> */}
    </footer>
  );
}
