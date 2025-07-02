// import React, { useState } from "react";
// import { ChevronDown, Menu, X } from "lucide-react";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const NavItem = ({ children, hasDropdown = false }) => (
//     <div className="relative group">
//       <button className="flex items-center space-x-1 px-4 py-2 text-black hover:text-white transition-colors duration-300 font-medium">
//         <span>{children}</span>
//         {hasDropdown && <ChevronDown className="w-4 h-4" />}
//       </button>
//       {hasDropdown && (
//         <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
//           <div className="py-2">
//             <a
//               href="#"
//               className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
//             >
//               Subpage 1
//             </a>
//             <a
//               href="#"
//               className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
//             >
//               Subpage 2
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
//   return (
//     <>
//       <div className="bg-blue-900 text-white text-sm py-2">
//         <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
//           <div className="flex items-center space-x-4 mb-2 md:mb-0">
//             <span className="flex items-center space-x-2">
//               <span>We help the world growing since 1983</span>
//             </span>
//           </div>
//           <div className="flex items-center space-x-6">
//             <a href="#" className="hover:text-yellow-400 transition-colors">
//               Career
//             </a>
//             <a href="#" className="hover:text-yellow-400 transition-colors">
//               Give Feedback
//             </a>
//             <a href="#" className="hover:text-yellow-400 transition-colors">
//               Contact Us
//             </a>
//             <div className="flex space-x-3 ml-4">
//               <FaFacebook className="w-4 h-4 hover:text-yellow-400 cursor-pointer transition-colors" />
//               <FaTwitter className="w-4 h-4 hover:text-yellow-400 cursor-pointer transition-colors" />
//               <FaInstagram className="w-4 h-4 hover:text-yellow-400 cursor-pointer transition-colors" />
//               <FaLinkedinIn className="w-4 h-4 hover:text-yellow-400 cursor-pointer transition-colors" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Header */}
//       <header className="bg-yellow-400 shadow-lg relative z-40">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between py-4">
//             {/* Logo */}
//             {/* <div className="flex items-center space-x-3">
//               <div className="bg-blue-900 p-2 rounded">
//                 <div className="text-white font-bold text-xl">W</div>
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold text-blue-900">WALLS</h1>
//                 <p className="text-xs text-blue-800 uppercase tracking-wider">
//                   CONSTRUCTION
//                 </p>
//               </div>
//             </div> */}

//             <div className="max-w-[150px] flex items-center space-x-3">
//               <img
//                 src="https://www.kgnengineeringconstruction.com/assets/images/logo-dark.png"
//                 alt="logo"
//               />
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex items-center space-x-1">
//               <NavItem hasDropdown>HOME</NavItem>
//               <NavItem hasDropdown>ABOUT US</NavItem>
//               <NavItem hasDropdown>SERVICES</NavItem>
//               <NavItem hasDropdown>PROJECTS</NavItem>
//               <NavItem hasDropdown>BLOG</NavItem>
//               <NavItem hasDropdown>PAGES</NavItem>
//               <NavItem hasDropdown>SHOP</NavItem>
//               <NavItem>CONTACT</NavItem>
//             </nav>

//             {/* Mobile Menu Button */}
//             <button
//               className="lg:hidden text-blue-900 p-2"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden absolute top-full left-0 w-full bg-yellow-400 shadow-lg z-50">
//             <nav className="py-4">
//               <div className="flex flex-col space-y-2 px-4">
//                 <a
//                   href="#"
//                   className="text-blue-900 font-medium py-2 hover:text-blue-700"
//                 >
//                   HOME
//                 </a>
//                 <a
//                   href="#"
//                   className="text-blue-900 font-medium py-2 hover:text-blue-700"
//                 >
//                   ABOUT US
//                 </a>
//                 <a
//                   href="#"
//                   className="text-blue-900 font-medium py-2 hover:text-blue-700"
//                 >
//                   SERVICES
//                 </a>
//                 <a
//                   href="#"
//                   className="text-blue-900 font-medium py-2 hover:text-blue-700"
//                 >
//                   PROJECTS
//                 </a>
//                 <a
//                   href="#"
//                   className="text-blue-900 font-medium py-2 hover:text-blue-700"
//                 >
//                   BLOG
//                 </a>
//                 <a
//                   href="#"
//                   className="text-blue-900 font-medium py-2 hover:text-blue-700"
//                 >
//                   PAGES
//                 </a>
//                 <a
//                   href="#"
//                   className="text-blue-900 font-medium py-2 hover:text-blue-700"
//                 >
//                   SHOP
//                 </a>
//                 <a
//                   href="#"
//                   className="text-blue-900 font-medium py-2 hover:text-blue-700"
//                 >
//                   CONTACT
//                 </a>
//               </div>
//             </nav>
//           </div>
//         )}
//       </header>
//     </>
//   );
// }

// import React, { useState } from "react";
// import { ChevronDown, Menu, X, Search } from "lucide-react";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const NavItem = ({ children, hasDropdown = false, dropdownItems = [] }) => (
//     <div className="relative group">
//       <button
//         className="flex items-center space-x-1 px-4 py-2 text-white hover:text-yellow-300 transition-colors duration-300 font-medium uppercase text-sm tracking-wide"
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
//     SERVICES: ["Construction", "Architecture", "Interior Design", "Renovation"],
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
//       <header className="bg-yellow-400 shadow-lg relative z-40" role="banner">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between py-4">
//             {/* Logo */}
//             <div className="flex items-center space-x-3">
//               <div className="bg-blue-900 p-2 rounded">
//                 <div className="text-white font-bold text-xl">W</div>
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold text-blue-900">WALLS</h1>
//                 <p className="text-xs text-blue-800 uppercase tracking-wider">
//                   CONSTRUCTION
//                 </p>
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <nav
//               className="hidden lg:flex items-center space-x-1"
//               role="navigation"
//               aria-label="Main navigation"
//             >
//               <NavItem hasDropdown dropdownItems={dropdownData.HOME}>
//                 HOME
//               </NavItem>
//               <NavItem hasDropdown dropdownItems={dropdownData["ABOUT US"]}>
//                 ABOUT US
//               </NavItem>
//               <NavItem hasDropdown dropdownItems={dropdownData.SERVICES}>
//                 SERVICES
//               </NavItem>
//               <NavItem hasDropdown dropdownItems={dropdownData.PROJECTS}>
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
//               </NavItem>
//               <NavItem>CONTACT</NavItem>
//             </nav>

//             {/* Search and Mobile Menu */}
//             <div className="flex items-center space-x-4">
//               {/* Search Icon */}
//               <button
//                 className="hidden lg:block text-white hover:text-yellow-300 transition-colors p-2"
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
//           <div className="lg:hidden absolute top-full left-0 w-full bg-yellow-400 shadow-lg z-50 border-t border-yellow-500">
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
//                 <a
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
//                 </a>
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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const NavItem = ({ children, hasDropdown = false, dropdownItems = [] }) => (
    <div className="relative group">
      <button
        className="flex items-center space-x-1 px-4 text-black hover:text-[#FFC31D] transition-colors duration-300 font-medium uppercase text-sm tracking-wide"
        onMouseEnter={() => hasDropdown && setActiveDropdown(children)}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <span>{children}</span>
        {hasDropdown && <ChevronDown className="w-4 h-4 ml-1" />}
      </button>
      {hasDropdown && activeDropdown === children && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-100 visible transition-all duration-300 z-50">
          <div className="py-2">
            {dropdownItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const dropdownData = {
    HOME: ["Home Default", "Home Creative", "Home Modern"],
    "ABOUT US": ["About Company", "Our Team", "Our History"],
    SERVICES: ["Construction", "Architecture", "Interior Design", "Renovation"],
    PROJECTS: ["Recent Projects", "Residential", "Commercial", "Industrial"],
    BLOG: ["Latest News", "Construction Tips", "Industry Updates"],
    PAGES: ["FAQ", "Testimonials", "Pricing", "Gallery"],
    SHOP: ["Equipment", "Materials", "Tools", "Safety Gear"],
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-sm py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-2">
              <span>We help the world growing since 1983</span>
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="hover:text-yellow-400 transition-colors"
              aria-label="Career opportunities"
            >
              Career
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition-colors"
              aria-label="Give feedback"
            >
              Give Feedback
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition-colors"
              aria-label="Contact us"
            >
              Contact Us
            </a>
            <div className="flex space-x-3 ml-4">
              <a href="#" aria-label="Facebook">
                <FaFacebook className="w-4 h-4 hover:text-yellow-400 cursor-pointer transition-colors" />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter className="w-4 h-4 hover:text-yellow-400 cursor-pointer transition-colors" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="w-4 h-4 hover:text-yellow-400 cursor-pointer transition-colors" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn className="w-4 h-4 hover:text-yellow-400 cursor-pointer transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-transparent shadow-lg relative z-40" role="banner">
        <div className="container flex mx-auto px-4">
          {/* <div className="max-w-[150px] bg-white px-4 rounded-sm flex items-center space-x-3">
            <img
              src="https://www.kgnengineeringconstruction.com/assets/images/logo-dark.png"
              alt="KGN Engineering Construction Logo"
              className="h-auto w-full object-contain"
            />
          </div> */}
          <div className="w-[120px] sm:w-[150px] bg-white px-2 py-2 rounded-sm flex items-center justify-center">
            <img
              src="https://www.kgnengineeringconstruction.com/assets/images/logo-dark.png"
              alt="KGN Engineering Construction Logo"
              className="w-full h-auto max-h-12 object-contain"
            />
          </div>

          <div className="flex md:bg-white rounded-sm ml-52 items-center justify-between px-5">
            {/* Logo */}

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center space-x-1"
              role="navigation"
              aria-label="Main navigation"
            >
              <NavItem>HOME</NavItem>
              <NavItem hasDropdown dropdownItems={dropdownData["ABOUT US"]}>
                ABOUT US
              </NavItem>
              <NavItem hasDropdown dropdownItems={dropdownData.SERVICES}>
                SERVICES
              </NavItem>
              {/* <NavItem hasDropdown dropdownItems={dropdownData.PROJECTS}>
                PROJECTS
              </NavItem>
              <NavItem hasDropdown dropdownItems={dropdownData.BLOG}>
                BLOG
              </NavItem>
              <NavItem hasDropdown dropdownItems={dropdownData.PAGES}>
                PAGES
              </NavItem>
              <NavItem hasDropdown dropdownItems={dropdownData.SHOP}>
                SHOP
              </NavItem> */}
              <NavItem>Gallery</NavItem>
              <NavItem>Brochure</NavItem>
              <NavItem>CONTACT</NavItem>
            </nav>

            {/* Search and Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Search Icon */}
              <button
                className="hidden lg:block text-black hover:text-yellow-400 transition-colors p-2"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-blue-900 p-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-opacity-50 rounded"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
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
            <nav
              className="py-4"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col space-y-2 px-4">
                <a
                  href="#"
                  className="text-blue-900 font-medium py-3 hover:text-blue-700 transition-colors border-b border-yellow-500/30 uppercase text-sm tracking-wide"
                >
                  HOME
                </a>
                <a
                  href="#"
                  className="text-blue-900 font-medium py-3 hover:text-blue-700 transition-colors border-b border-yellow-500/30 uppercase text-sm tracking-wide"
                >
                  ABOUT US
                </a>
                <a
                  href="#"
                  className="text-blue-900 font-medium py-3 hover:text-blue-700 transition-colors border-b border-yellow-500/30 uppercase text-sm tracking-wide"
                >
                  SERVICES
                </a>
                <a
                  href="#"
                  className="text-blue-900 font-medium py-3 hover:text-blue-700 transition-colors border-b border-yellow-500/30 uppercase text-sm tracking-wide"
                >
                  PROJECTS
                </a>
                {/* <a
                  href="#"
                  className="text-blue-900 font-medium py-3 hover:text-blue-700 transition-colors border-b border-yellow-500/30 uppercase text-sm tracking-wide"
                >
                  BLOG
                </a>
                <a
                  href="#"
                  className="text-blue-900 font-medium py-3 hover:text-blue-700 transition-colors border-b border-yellow-500/30 uppercase text-sm tracking-wide"
                >
                  PAGES
                </a>
                <a
                  href="#"
                  className="text-blue-900 font-medium py-3 hover:text-blue-700 transition-colors border-b border-yellow-500/30 uppercase text-sm tracking-wide"
                >
                  SHOP
                </a> */}
                <a
                  href="#"
                  className="text-blue-900 font-medium py-3 hover:text-blue-700 transition-colors uppercase text-sm tracking-wide"
                >
                  CONTACT
                </a>

                {/* Mobile Search */}
                <div className="pt-4 border-t border-yellow-500/30 mt-4">
                  <button className="flex items-center space-x-2 text-blue-900 font-medium py-2 hover:text-blue-700 transition-colors">
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
