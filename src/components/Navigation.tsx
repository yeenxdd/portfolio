import React, { useState, useEffect } from "react";

// Navigation items extracted to a variable
const NAV_ITEMS = [
  "home",
  "about",
  "experience",
  "projects",
  "skills",
  "languages",
  "contact",
];

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Check if the page is scrolled on initial load
    setIsScrolled(window.scrollY > 50);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const handleMenuClick = (item: string) => {
    scrollToSection(item);
    setMenuOpen(false);
    setMenuClosing(false);
  };

  const handleCloseMenu = () => {
    setMenuClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setMenuClosing(false);
    }, 200); // match animation duration
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            TAI YE EN
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize hover:text-purple-400 transition-colors ${activeSection === item ? "text-purple-400" : ""}`}
              >
                {item}
              </button>
            ))}
          </div>
          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-7 h-7 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {(menuOpen || menuClosing) && (
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-full bg-slate-900/95 backdrop-blur-md z-50 flex flex-col items-center pt-24 animate-slide-down-out ${menuClosing ? "animate-slide-up" : "animate-slide-down"}`}
        >
          <button
            aria-label="Close menu"
            onClick={handleCloseMenu}
            className="absolute top-6 right-6 text-3xl text-purple-400 focus:outline-none"
          >
            &times;
          </button>
          <ul className="space-y-8 text-2xl flex flex-col items-center justify-center w-full">
            {NAV_ITEMS.map((item) => (
              <li key={item} className="w-full flex justify-center">
                <button
                  onClick={() => handleMenuClick(item)}
                  className={`capitalize hover:text-pink-400 transition-colors ${activeSection === item ? "text-purple-400" : "text-white"}`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <style jsx>{`
        @keyframes slide-down {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slide-up {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(-100%);
            opacity: 0;
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-in;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
