import React, { useEffect, useRef } from 'react';
import { FaBookOpen } from 'react-icons/fa';
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
  
  return (
    <div className="bg-white">
      <NavigationBar />
      
      {/* Hero Section */}
      <section id="hero" className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center pt-16">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="/images/ahome.png" 
            alt="Dickson Lane" 
            className="w-full h-full object-cover object-center mt-10"
          />
        </div>

        {/* Centered content */}
        <div className="relative z-20 text-center text-white px-5 max-w-4xl">
          {/* Optional button */}
        </div>
      </section>

      
     {/* About Section */}
      <div id="about" ref={aboutRef} className="max-w-7xl mx-auto px-5 py-20">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6 relative inline-block">
            <span className="relative">
              About The Author
              <span className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-400"></span>
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
            <div className="absolute -z-10 -bottom-8 -right-8 w-3/4 h-3/4 border-4 border-orange-400 rounded-xl"></div>
          </div>

          <div className="pt-10">
            <h2 className="text-3xl font-serif text-gray-800 mb-8">
              The Story Behind the Words
            </h2>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-600">
                John Patrick Acevedo is a poet, publisher, and spoken word artist whose creative journey spans over two decades. 
                A 1990 graduate of the College of Communication at Boston University, he began his literary path in earnest as a member of Poets Ink (the rebranded Wineglass Court Poets critique group), meeting monthly at Howard County Community College and later at the Ivy Bookshop in Pikesville, Maryland.
              </p>

              <p className="text-lg leading-relaxed text-gray-600">
                In January 2001, he was a featured poet at the Mariposa Center for Creative Expression, led by Mrs. Maritza Rivera. 
                There, he read his new poems alongside writers such as Mark Daniel Epstein, author of the critically-acclaimed Bob Dylan biography, 
                and penned <span className="italic">“give and take”</span> — a meditation on the lowest common denominator between God and human nature.
              </p>

              <p className="text-lg leading-relaxed text-gray-600">
                As the sole proprietor and sole author of Synergy Press Books and Media, John Patrick has published eleven books independently. 
                He has also released a classic spoken word CD, <span className="italic">The Mad City Coffee Reading</span>, and produced the film short 
                <span className="italic"> Holy Bible Sociology! A Journey Into the Soul of John Patrick Acevedo</span>. 
                Several video poems and a mini-documentary produced by Theologist Prince Kwasi Mensah can be viewed on YouTube.
              </p>

              <p className="text-lg leading-relaxed text-gray-600">
                Before retiring in 2014, Acevedo built a distinguished 20-year career with Best Buy, where he consistently ranked in the top 5 
                in attached profit levers and received the company’s most prestigious award — the Brad Anderson Legacy Stock Award — twice.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <FaBookOpen className="text-3xl text-orange-500 mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-2">Published Works</h3>
            <p className="text-gray-600">11 books (Synergy Press), spoken word CD, film short</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <FaBookOpen className="text-3xl text-orange-500 mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-2">Education & Training</h3>
            <p className="text-gray-600">Boston University (1990), Poets Ink, Mariposa Center for Creative Expression</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <FaBookOpen className="text-3xl text-orange-500 mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-2">Creative Range</h3>
            <p className="text-gray-600">Poetry, spoken word, video poems, documentary, publishing</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <FaBookOpen className="text-3xl text-orange-500 mb-4" />
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

      {/* Floating CTA Button */}
      {/* <button 
        onClick={() => navigate('/home')}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full px-6 py-3 shadow-xl flex items-center gap-3 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 z-50"
      >
        <FaBookOpen size={18} />
        <span>Explore His Work</span>
      </button> */}
    </div>
  );
}

export default AboutMe;