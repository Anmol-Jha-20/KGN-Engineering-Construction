// import React, { useState } from "react";
// import { ChevronDown, Menu, X, Search } from "lucide-react";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const NavItem = ({ children, hasDropdown = false, dropdownItems = [] }) => (
//     <div className="relative group">
//       <button
//         className="flex items-center space-x-1 px-4 text-black hover:text-[#FFC31D] transition-colors duration-300 font-medium uppercase text-sm tracking-wide"
//         onMouseEnter={() => hasDropdown && setActiveDropdown(children)}
//         onMouseLeave={() => setActiveDropdown(null)}
//       >
//         <span>{children}</span>
//         {hasDropdown && <ChevronDown className="w-4 h-4 ml-1" />}
//       </button>
//       {hasDropdown && activeDropdown === children && (
//         <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-100 visible transition-all duration-300 z-50">
//           <div className="py-2">
//             {dropdownItems.map((item, index) => (
//               <a
//                 key={index}
//                 href="#"
//                 className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   const dropdownData = {
//     HOME: ["Home Default", "Home Creative", "Home Modern"],
//     "ABOUT US": ["About Company", "Our Team", "Our History"],
//     SERVICES: [
//       "Industrial & Commercial Construction",
//       "Silo construction in cement industry",
//       "RCC chimney, silo & intake well construction",
//       "OHBR, ELSR tanks & irrigation reservoirs",
//       "Power plants industry",
//       "High-rise work with slip-form system",
//     ],
//     PROJECTS: ["Recent Projects", "Residential", "Commercial", "Industrial"],
//     BLOG: ["Latest News", "Construction Tips", "Industry Updates"],
//     PAGES: ["FAQ", "Testimonials", "Pricing", "Gallery"],
//     SHOP: ["Equipment", "Materials", "Tools", "Safety Gear"],
//   };

//   return (
//     <>
//       {/* Top Bar */}
//       <div className="bg-blue-900 text-white text-sm py-2 hidden md:block">
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           <div className="flex items-center space-x-4">
//             <span className="flex items-center space-x-2">
//               <span>We help the world growing since 1983</span>
//             </span>
//           </div>
//           <div className="flex items-center space-x-6">
//             <a
//               href="#"
//               className="hover:text-yellow-400 transition-colors"
//               aria-label="Career opportunities"
//             >
//               Career
//             </a>
//             <a
//               href="#"
//               className="hover:text-yellow-400 transition-colors"
//               aria-label="Give feedback"
//             >
//               Give Feedback
//             </a>
//             <a
//               href="#"
//               className="hover:text-yellow-400 transition-colors"
//               aria-label="Contact us"
//             >
//               Contact Us
//             </a>
//             <div className="flex space-x-3 ml-4">
//               <a href="#" aria-label="Facebook">
//                 <FaFacebook className="w-4 h-4 hover:text-yellow-400 cursor-pointer transition-colors" />
//               </a>
//               <a href="#" aria-label="Twitter">
//                 <FaTwitter className="w-4 h-4 hover:text-yellow-400 cursor-pointer transition-colors" />
//               </a>
//               <a href="#" aria-label="Instagram">
//                 <FaInstagram className="w-4 h-4 hover:text-yellow-400 cursor-pointer transition-colors" />
//               </a>
//               <a href="#" aria-label="LinkedIn">
//                 <FaLinkedinIn className="w-4 h-4 hover:text-yellow-400 cursor-pointer transition-colors" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <header className="bg-transparent shadow-lg relative z-40" role="banner">
//         <div className="container flex mx-auto px-4">
//           {/* <div className="max-w-[150px] bg-white px-4 rounded-sm flex items-center space-x-3">
//             <img
//               src="https://www.kgnengineeringconstruction.com/assets/images/logo-dark.png"
//               alt="KGN Engineering Construction Logo"
//               className="h-auto w-full object-contain"
//             />
//           </div> */}
//           <div className="w-[120px] sm:w-[150px] bg-white px-2 py-2 rounded-sm flex items-center justify-center">
//             <img
//               src="https://www.kgnengineeringconstruction.com/assets/images/logo-dark.png"
//               alt="KGN Engineering Construction Logo"
//               className="w-full h-auto max-h-12 object-contain"
//             />
//           </div>

//           <div className="flex md:bg-white rounded-sm ml-52 items-center justify-between px-5">
//             {/* Logo */}

//             {/* Desktop Navigation */}
//             <nav
//               className="hidden lg:flex items-center space-x-1"
//               role="navigation"
//               aria-label="Main navigation"
//             >
//               <NavItem>HOME</NavItem>
//               <NavItem hasDropdown dropdownItems={dropdownData["ABOUT US"]}>
//                 ABOUT US
//               </NavItem>
//               <Link to={"/projects"}>
//                 <NavItem hasDropdown dropdownItems={dropdownData.SERVICES}>
//                   PROJECTS
//                 </NavItem>
//               </Link>
//               {/* <NavItem hasDropdown dropdownItems={dropdownData.PROJECTS}>
//                 PROJECTS
//               </NavItem>
//               <NavItem hasDropdown dropdownItems={dropdownData.BLOG}>
//                 BLOG
//               </NavItem>
//               <NavItem hasDropdown dropdownItems={dropdownData.PAGES}>
//                 PAGES
//               </NavItem>
//               <NavItem hasDropdown dropdownItems={dropdownData.SHOP}>
//                 SHOP
//               </NavItem> */}
//               <NavItem>Gallery</NavItem>
//               <NavItem>Brochure</NavItem>
//               <NavItem>CONTACT</NavItem>
//             </nav>

//             {/* Search and Mobile Menu */}
//             <div className="flex items-center space-x-4">
//               {/* Search Icon */}
//               <button
//                 className="hidden lg:block text-black hover:text-yellow-400 transition-colors p-2"
//                 aria-label="Search"
//               >
//                 <Search className="w-5 h-5" />
//               </button>

//               {/* Mobile Menu Button */}
//               <button
//                 className="lg:hidden text-blue-900 p-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-opacity-50 rounded"
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 aria-label="Toggle mobile menu"
//                 aria-expanded={mobileMenuOpen}
//               >
//                 {mobileMenuOpen ? (
//                   <X className="w-6 h-6" />
//                 ) : (
//                   <Menu className="w-6 h-6" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden absolute top-full left-0 w-full bg-gray-100 shadow-lg z-50 border-t border-yellow-500">
//             <nav
//               className="py-4"
//               role="navigation"
//               aria-label="Mobile navigation"
//             >
//               <div className="flex flex-col space-y-2 px-4">
//                 <a
//                   href="#"
//                   className="text-blue-900 font-medium py-3 hover:text-blue-700 transition-colors border-b border-yellow-500/30 uppercase text-sm tracking-wide"
//                 >
//                   HOME
//                 </a>
//                 <a
//                   href="#"
//                   className="text-blue-900 font-medium py-3 hover:text-blue-700 transition-colors border-b border-yellow-500/30 uppercase text-sm tracking-wide"
//                 >
//                   ABOUT US
//                 </a>
//                 <a
//                   href="#"
//                   className="text-blue-900 font-medium py-3 hover:text-blue-700 transition-colors border-b border-yellow-500/30 uppercase text-sm tracking-wide"
//                 >
//                   SERVICES
//                 </a>
//                 <a
//                   href="#"
//                   className="text-blue-900 font-medium py-3 hover:text-blue-700 transition-colors border-b border-yellow-500/30 uppercase text-sm tracking-wide"
//                 >
//                   PROJECTS
//                 </a>
//                 {/* <a
//                   href="#"
//                   className="text-blue-900 font-medium py-3 hover:text-blue-700 transition-colors border-b border-yellow-500/30 uppercase text-sm tracking-wide"
//                 >
//                   BLOG
//                 </a>
//                 <a
//                   href="#"
//                   className="text-blue-900 font-medium py-3 hover:text-blue-700 transition-colors border-b border-yellow-500/30 uppercase text-sm tracking-wide"
//                 >
//                   PAGES
//                 </a>
//                 <a
//                   href="#"
//                   className="text-blue-900 font-medium py-3 hover:text-blue-700 transition-colors border-b border-yellow-500/30 uppercase text-sm tracking-wide"
//                 >
//                   SHOP
//                 </a> */}
//                 <a
//                   href="#"
//                   className="text-blue-900 font-medium py-3 hover:text-blue-700 transition-colors uppercase text-sm tracking-wide"
//                 >
//                   CONTACT
//                 </a>

//                 {/* Mobile Search */}
//                 <div className="pt-4 border-t border-yellow-500/30 mt-4">
//                   <button className="flex items-center space-x-2 text-blue-900 font-medium py-2 hover:text-blue-700 transition-colors">
//                     <Search className="w-4 h-4" />
//                     <span>Search</span>
//                   </button>
//                 </div>
//               </div>
//             </nav>
//           </div>
//         )}
//       </header>
//     </>
//   );
// }

import React, { useState } from "react";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const NavItem = ({
    children,
    hasDropdown = false,
    dropdownItems = [],
    activeDropdown,
    setActiveDropdown,
  }) => (
    <div
      className="relative group"
      onMouseEnter={() => hasDropdown && setActiveDropdown(children)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button className="flex items-center space-x-1 px-4 text-black hover:text-[#FFC31D] transition-colors duration-300 font-medium uppercase text-sm tracking-wide">
        <span>{children}</span>
        {hasDropdown && <ChevronDown className="w-4 h-4 ml-1" />}
      </button>
      {hasDropdown && activeDropdown === children && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-100 visible transition-all duration-300 z-50">
          <div className="py-2">
            {dropdownItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const dropdownData = {
    "ABOUT US": [
      { label: "About Company", href: "/about/company" },
      { label: "Our Team", href: "/about/team" },
      { label: "Our History", href: "/about/history" },
    ],
    SERVICES: [
      {
        label: "Industrial & Commercial Construction",
        href: "/services/industrial",
      },
      { label: "Silo construction in cement industry", href: "/services/silo" },
      {
        label: "RCC chimney, silo & intake well construction",
        href: "/services/rcc",
      },
      {
        label: "OHBR, ELSR tanks & irrigation reservoirs",
        href: "/services/ohbr",
      },
      { label: "Power plants industry", href: "/services/power" },
      {
        label: "High-rise work with slip-form system",
        href: "/services/highrise",
      },
    ],
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-sm py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>We help the world growing since 1983</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Career
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Give Feedback
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Contact Us
            </a>
            <div className="flex space-x-3 ml-4">
              <a href="#">
                <FaFacebook className="w-4 h-4 hover:text-yellow-400" />
              </a>
              <a href="#">
                <FaTwitter className="w-4 h-4 hover:text-yellow-400" />
              </a>
              <a href="#">
                <FaInstagram className="w-4 h-4 hover:text-yellow-400" />
              </a>
              <a href="#">
                <FaLinkedinIn className="w-4 h-4 hover:text-yellow-400" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-transparent shadow-lg relative z-40">
        <div className="container flex mx-auto px-4">
          <div className="w-[120px] sm:w-[150px] bg-white px-2 py-2 rounded-sm flex items-center justify-center">
            <img
              src="https://www.kgnengineeringconstruction.com/assets/images/logo-dark.png"
              alt="KGN Engineering Construction Logo"
              className="w-full h-auto max-h-12 object-contain"
            />
          </div>

          <div className="flex md:bg-white rounded-sm ml-52 items-center justify-between px-5">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link to="/">
                <NavItem
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
                >
                  HOME
                </NavItem>
              </Link>

              <NavItem
                hasDropdown
                dropdownItems={dropdownData["ABOUT US"]}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              >
                ABOUT US
              </NavItem>

              <NavItem
                hasDropdown
                dropdownItems={dropdownData.SERVICES}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              >
                SERVICES
              </NavItem>

              <Link to="/projects">
                <NavItem
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
                >
                  PROJECTS
                </NavItem>
              </Link>

              <NavItem
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              >
                Gallery
              </NavItem>
              <NavItem
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              >
                Brochure
              </NavItem>
              <NavItem
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              >
                CONTACT
              </NavItem>
            </nav>

            {/* Search & Mobile */}
            <div className="flex items-center space-x-4">
              <button className="hidden lg:block text-black hover:text-yellow-400 p-2">
                <Search className="w-5 h-5" />
              </button>
              <button
                className="lg:hidden text-blue-900 p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-gray-100 shadow-lg z-50 border-t border-yellow-500">
            <nav className="py-4">
              <div className="flex flex-col space-y-2 px-4">
                {["HOME", "ABOUT US", "SERVICES", "PROJECTS", "CONTACT"].map(
                  (label) => (
                    <a
                      key={label}
                      href="#"
                      className="text-blue-900 font-medium py-3 hover:text-blue-700 border-b border-yellow-500/30 uppercase text-sm tracking-wide"
                    >
                      {label}
                    </a>
                  )
                )}

                <div className="pt-4 border-t border-yellow-500/30 mt-4">
                  <button className="flex items-center space-x-2 text-blue-900 font-medium py-2 hover:text-blue-700">
                    <Search className="w-4 h-4" />
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
