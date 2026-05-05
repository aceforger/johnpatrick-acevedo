import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaImages, FaPlay, FaBars, FaCalendarAlt, FaNewspaper, FaBook, FaStar } from 'react-icons/fa';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    
    // If we're already on the home page
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page first, then scroll to section
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const navigateToHome = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation - Bronze/Sky Theme */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50 hidden md:block border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex justify-between items-center py-3">
            {/* Logo Section */}
            <div 
              onClick={navigateToHome}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="relative">
                <img 
                  src="/images/john-logo.png" 
                  alt="John Patrick Acevedo" 
                  className="h-12 w-12 rounded-full object-cover border-2 border-amber-400 group-hover:border-sky-400 transition-all duration-300"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-sky-400 rounded-full opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-300 -z-10"></div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 font-serif">
                  John Patrick <span className="bg-gradient-to-r from-amber-600 to-sky-600 bg-clip-text text-transparent">Acevedo</span>
                </h2>
                <p className="text-xs text-amber-500">Poet • Publisher • Performer</p>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="flex space-x-6">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-amber-600 transition-all duration-300 flex items-center gap-2 group"
              >
                <FaHome className="text-sm group-hover:scale-110 transition-transform" /> 
                <span className="relative">
                  Home
                  <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-sky-500 group-hover:w-full transition-all duration-300"></span>
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-amber-600 transition-all duration-300 flex items-center gap-2 group"
              >
                <FaUser className="text-sm group-hover:scale-110 transition-transform" />
                <span className="relative">
                  About
                  <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-sky-500 group-hover:w-full transition-all duration-300"></span>
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('press')}
                className="text-gray-700 hover:text-amber-600 transition-all duration-300 flex items-center gap-2 group"
              >
                <FaNewspaper className="text-sm group-hover:scale-110 transition-transform" />
                <span className="relative">
                  Press
                  <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-sky-500 group-hover:w-full transition-all duration-300"></span>
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="text-gray-700 hover:text-amber-600 transition-all duration-300 flex items-center gap-2 group"
              >
                <FaCalendarAlt className="text-sm group-hover:scale-110 transition-transform" />
                <span className="relative">
                  Videos & Media
                  <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-sky-500 group-hover:w-full transition-all duration-300"></span>
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-amber-600 transition-all duration-300 flex items-center gap-2 group"
              >
                <FaImages className="text-sm group-hover:scale-110 transition-transform" />
                <span className="relative">
                  Gallery
                  <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-sky-500 group-hover:w-full transition-all duration-300"></span>
                </span>
              </button>
            </div>
            
            {/* CTA Button */}
            <button 
              onClick={() => navigate('/home')}
              className="px-4 py-2 bg-gradient-to-r from-amber-600 to-sky-600 text-white rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <FaBook size={12} />
              Explore Books
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Bronze/Sky Theme */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-gradient-to-r from-amber-500 to-sky-500 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <FaBars className="text-white" />
        </button>
        
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"
              onClick={() => setIsMenuOpen(false)}
            ></div>
            
            {/* Menu */}
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl py-3 border border-amber-100 animate-slideDown">
              {/* Logo in mobile menu */}
              <div className="px-4 py-3 border-b border-amber-100 mb-2">
                <div className="flex items-center gap-3">
                  <img 
                    src="/images/john-logo.png" 
                    alt="John Patrick Acevedo" 
                    className="h-10 w-10 rounded-full object-cover border-2 border-amber-400"
                  />
                  <div>
                    <h3 className="font-serif font-bold text-gray-800 text-sm">
                      John Patrick <span className="text-amber-600">Acevedo</span>
                    </h3>
                    <p className="text-xs text-amber-500">Poet & Publisher</p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-sky-50 transition-all duration-300 flex items-center gap-3 group"
              >
                <FaHome className="text-amber-500 group-hover:scale-110 transition-transform" />
                <span>Home</span>
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-sky-50 transition-all duration-300 flex items-center gap-3 group"
              >
                <FaUser className="text-amber-500 group-hover:scale-110 transition-transform" />
                <span>About</span>
              </button>
              <button 
                onClick={() => scrollToSection('press')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-sky-50 transition-all duration-300 flex items-center gap-3 group"
              >
                <FaNewspaper className="text-amber-500 group-hover:scale-110 transition-transform" />
                <span>Press</span>
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-sky-50 transition-all duration-300 flex items-center gap-3 group"
              >
                <FaCalendarAlt className="text-amber-500 group-hover:scale-110 transition-transform" />
                <span>Videos & Media</span>
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-sky-50 transition-all duration-300 flex items-center gap-3 group"
              >
                <FaImages className="text-amber-500 group-hover:scale-110 transition-transform" />
                <span>Gallery</span>
              </button>
              
              <div className="border-t border-amber-100 mt-2 pt-2 px-4">
                <button 
                  onClick={() => scrollToSection('featured-books')}
                  className="w-full py-2 bg-gradient-to-r from-amber-600 to-sky-600 text-white rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaStar size={12} />
                  Explore Books
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Add animation keyframes */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default NavigationBar;