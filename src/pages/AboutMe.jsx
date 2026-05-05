import React, { useEffect, useRef } from 'react';
import { FaBookOpen, FaQuoteLeft, FaStar, FaAward, FaMusic, FaFilm, FaUsers } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

// Import components
import NavigationBar from './NavigationBar';
import BookTrailer from './BookTrailer';
import ImageGallery from './ImageGallery';
import Events from './Events';
import PressRelease from './PressRelease';

function AboutMe() {
  const navigate = useNavigate();
  const location = useLocation();
  const aboutRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  // Navigate to home section
  const navigateToHomeSection = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };
  
  return (
    <div className="bg-gradient-to-br from-sky-50 via-white to-amber-50">
      <NavigationBar />
      
      {/* Hero Section - Bronze/Sky Theme */}
      <section id="hero" className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center pt-16">
        {/* Gradient overlays with bronze and sky */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/40 via-sky-800/30 to-amber-700/40 z-10"></div>
        
        {/* Animated bronze accents */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="/images/ahome.png" 
            alt="Dickson Lane" 
            className="w-full h-full object-cover object-center mt-15"
          />
        </div>

        {/* Centered content */}
        <div className="relative z-20 text-center text-white px-5 max-w-4xl">
          <div className="inline-block mb-6 px-6 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full border border-amber-400/30">
            <span className="text-amber-200 font-semibold tracking-wide">✧ POET • PUBLISHER • PERFORMER ✧</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif leading-tight">
            John Patrick <span className="bg-gradient-to-r from-sky-300 via-amber-300 to-sky-300 bg-clip-text text-transparent">Acevedo</span>
          </h1>
          <p className="text-xl md:text-2xl text-sky-100 max-w-3xl mx-auto">
            Weaving language, faith, and human nature into verse and vision
          </p>
        </div>
        
        {/* Wave decoration at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path fill="#f0f9ff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* About Section - Bronze/Sky Theme */}
      <div id="about" ref={aboutRef} className="max-w-7xl mx-auto px-5 py-20">
        <div className="text-center mb-20">
          <div className="inline-block mb-3">
            <span className="text-amber-600 text-sm font-semibold tracking-wider uppercase">✦ Meet the Author ✦</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6 relative inline-block">
            <span className="relative">
              About <span className="bg-gradient-to-r from-sky-600 to-amber-600 bg-clip-text text-transparent">The Author</span>
              <span className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-amber-500"></span>
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Poet, Publisher, and Performer — weaving language, faith, and human nature into verse and vision
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-28">
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/images/profile.png" 
                alt="John Patrick Acevedo" 
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Bronze accent border */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-3/4 h-3/4 border-4 border-amber-500 rounded-xl"></div>
            <div className="absolute -z-20 -top-8 -left-8 w-3/4 h-3/4 border-4 border-sky-400 rounded-xl"></div>
          </div>

          <div className="pt-10">
            <h2 className="text-3xl font-serif text-gray-800 mb-8 relative inline-block">
              The Story Behind the Words
              <div className="absolute bottom-[-8px] left-0 w-16 h-1 bg-amber-500 rounded-full"></div>
            </h2>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-600">
                John Patrick Acevedo is a poet, publisher, and spoken word artist whose creative journey spans over two decades. 
                A 1990 graduate of the College of Communication at Boston University, he began his literary path in earnest as a member of Poets Ink (the rebranded Wineglass Court Poets critique group), meeting monthly at Howard County Community College and later at the Ivy Bookshop in Pikesville, Maryland.
              </p>

              <p className="text-lg leading-relaxed text-gray-600">
                In January 2001, he was a featured poet at the Mariposa Center for Creative Expression, led by Mrs. Maritza Rivera. 
                There, he read his new poems alongside writers such as Mark Daniel Epstein, author of the critically-acclaimed Bob Dylan biography, 
                and penned <span className="italic text-amber-600">"give and take"</span> — a meditation on the lowest common denominator between God and human nature.
              </p>

              <p className="text-lg leading-relaxed text-gray-600">
                As the sole proprietor and sole author of Synergy Press Books and Media, John Patrick has published eleven books independently. 
                He has also released a classic spoken word CD, <span className="italic text-amber-600">The Mad City Coffee Reading</span>, and produced the film short 
                <span className="italic text-amber-600"> Holy Bible Sociology! A Journey Into the Soul of John Patrick Acevedo</span>. 
                Several video poems and a mini-documentary produced by Theologist Prince Kwasi Mensah can be viewed on YouTube.
              </p>

              <p className="text-lg leading-relaxed text-gray-600">
                Before retiring in 2014, Acevedo built a distinguished 20-year career with Best Buy, where he consistently ranked in the top 5 
                in attached profit levers and received the company's most prestigious award — the Brad Anderson Legacy Stock Award — twice.
              </p>
            </div>
            
            {/* Quote section */}
            <div className="mt-8 p-6 bg-gradient-to-r from-sky-50 to-amber-50 rounded-xl border-l-4 border-amber-500">
              <FaQuoteLeft className="text-amber-400 text-2xl mb-3 opacity-50" />
              <p className="text-gray-700 italic text-lg">
                "Poetry is not just what I write — it's how I breathe, how I see the world, and how I connect the divine to the human."
              </p>
              <p className="text-amber-600 font-semibold mt-2">— John Patrick Acevedo</p>
            </div>
          </div>
        </div>

        {/* Stats/Cards with Bronze/Sky Theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <FaBookOpen className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Published Works</h3>
            <p className="text-gray-600">11 books (Synergy Press), spoken word CD, film short</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group">
            <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <FaAward className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Education & Training</h3>
            <p className="text-gray-600">Boston University (1990), Poets Ink, Mariposa Center for Creative Expression</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <FaMusic className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Creative Range</h3>
            <p className="text-gray-600">Poetry, spoken word, video poems, documentary, publishing</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group">
            <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <FaStar className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Legacy Honors</h3>
            <p className="text-gray-600">2x Brad Anderson Legacy Stock Award, Best Buy MVP & service excellence awards</p>
          </div>
        </div>
      </div>

      {/* Press Release Section */}
      <PressRelease />

      {/* Book Trailer Section */}
      {/* <BookTrailer /> */}

      {/* Events Section */}
      <Events />

      {/* Gallery Section */}
      <ImageGallery />

      {/* Floating CTA Button - Bronze/Sky Theme */}
      {/* <button 
        onClick={() => navigate('/home')}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-amber-600 to-sky-600 text-white rounded-full px-6 py-3 shadow-xl flex items-center gap-3 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 z-50 group"
      >
        <FaBookOpen size={18} className="group-hover:rotate-12 transition" />
        <span>Explore His Work</span>
      </button> */}
    </div>
  );
}

export default AboutMe;