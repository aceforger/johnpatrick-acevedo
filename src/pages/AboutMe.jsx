import React, { useState, useEffect } from 'react';
import { FaBookOpen, FaPenFancy, FaAward, FaUniversity, FaChevronLeft, FaChevronRight, FaTimes, FaArrowRight } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

// ===== Gallery Data =====
const galleryImages = [
  {
    id: 1,
    src: "gallery1.png",
    // title: "At Oxford University",
    // description: "Dickson lecturing at his alma mater"
  },
  {
    id: 2,
    src: "gallery2.png",
    // title: "Book Signing Event",
    // description: "Meeting readers in London"
  },
  {
    id: 3,
    src: "gallery3.png",
    // title: "Writing Retreat",
    // description: "Working on his latest novel"
  },
  {
    id: 4,
    src: "gallery4.png",
    // title: "Published Works",
    // description: "Collection of Dickson's books"
  },
  {
    id: 5,
    src: "gallery5.png",
    // title: "Morning Routine",
    // description: "Reading with coffee at his home office"
  },
  {
    id: 6,
    src: "gallery6.png",
    // title: "Literary Festival",
    // description: "Speaking at a literary event"
  },
  {
    id: 7,
    src: "gallery7.png",
    // title: "On Set",
    // description: "Filming a documentary about his life"
  },
  {
    id: 8,
    src: "gallery8.png",
    // title: "With Fans",
    // description: "Engaging with readers at a book fair"
  },
  {
    id: 9,
    src: "gallery9.png",
    // title: "Inspiration",
    // description: "Nature walk that sparked a new story idea"
  },
  

];

// ===== Gallery Component =====
const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isOpen) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') goToPrev(e);
        if (e.key === 'ArrowRight') goToNext(e);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-center text-4xl font-serif text-gray-800 mb-16 relative">
          <span className="relative inline-block">
            Gallery
            <span className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-400"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              onClick={() => openLightbox(index)}
              className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-2 aspect-[4/3]"
            >
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-medium mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{image.title}</h3>
                <p className="text-gray-300 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-700">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center p-5 backdrop-blur-sm">
            <button 
              onClick={closeLightbox}
              className="absolute top-8 right-8 text-white text-3xl hover:text-orange-400 transition-colors duration-300"
            >
              <FaTimes />
            </button>
            
            <div className="relative w-full max-w-6xl">
              <button 
                onClick={goToPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl backdrop-blur-sm transition-all duration-300"
              >
                <FaChevronLeft />
              </button>
              
              <div className="relative w-full h-full max-h-[80vh] flex flex-col lg:flex-row gap-8 items-center">
                <div className="w-full lg:w-2/3 h-full flex items-center justify-center">
                  <img 
                    src={galleryImages[currentIndex].src} 
                    alt={galleryImages[currentIndex].title} 
                    className="max-h-[70vh] w-auto rounded-lg shadow-2xl object-contain"
                  />
                </div>
                <div className="w-full lg:w-1/3 text-white">
                  <h3 className="text-2xl font-medium mb-3">{galleryImages[currentIndex].title}</h3>
                  <p className="text-gray-300 leading-relaxed">{galleryImages[currentIndex].description}</p>
                </div>
              </div>
              
              <button 
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl backdrop-blur-sm transition-all duration-300"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

function AboutMe() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
          <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="/dlhome.png" 
            alt="Dickson Lane" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Dickson Lane top-left */}
        <h2 className="absolute top-6 left-6 z-20 text-3xl md:text-7xl font-bold text-gray-100 font-serif">
          Dickson <span className="text-red-800">Lane</span>
        </h2>

        {/* Centered content */}
        <div className="relative z-20 text-center text-white px-5 max-w-4xl">
          {/* <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Where Literature Meets Life's Profoundest Truths
          </p> */}

          {/* Optional button */}
          {/* 
          <button 
            onClick={() => navigate('/home')}
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-500 flex items-center gap-2 mx-auto"
          >
            Explore Works <FaArrowRight className="text-sm" />
          </button> 
          */}
        </div>
      </section>

      
      {/* About Section */}
      <div className="max-w-7xl mx-auto px-5 py-20">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6 relative inline-block">
            <span className="relative">
              About The Author
              <span className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-400"></span>
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Author, Educator, and Literary Visionary bridging timeless wisdom with contemporary storytelling
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-28">
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="profile.jpg" 
                alt="Dickson Lane" 
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
               Dickson Lane is a multi-talented creative with accomplishments spanning literature, theatre, and the arts. 
               His stage play "And She Was There" has become a staple in regional and community theatre. 
               As a visual artist, he trained under Robert Hale at the Art Students League of New York, developing a keen eye for detail and depth that now informs his writing. 
              </p>
              
              <p className="text-lg leading-relaxed text-gray-600">
                A lifelong aficionado of performance, Lane has earned credits as an actor, technician, and producer in both theatre and film. 
                He further honed his craft at the prestigious Webber-Douglas Academy of Dramatic Art in London and holds a BA in English and Theatre Arts from Catawba College in North Carolina.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-600">
                "Kakaki, The Ghost Walker" marks his debut as a novelist, weaving together his background in the dramatic and visual arts into a vivid, immersive story. 
                With this work, Lane showcases his gift for blending atmosphere, character, and imagination, establishing himself as a fresh and compelling voice in contemporary fiction. 
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <FaBookOpen className="text-3xl text-orange-500 mb-4" />
                <h3 className="text-xl font-medium text-gray-800 mb-2">Published Works</h3>
                <p className="text-gray-600">8 books, 20+ academic papers</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <FaUniversity className="text-3xl text-orange-500 mb-4" />
                <h3 className="text-xl font-medium text-gray-800 mb-2">Education</h3>
                <p className="text-gray-600"> Webber-Douglas Academy of Dramatic Art in London, BA in English and Theatre Arts from Catawba College in North Carolina</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <FaPenFancy className="text-3xl text-orange-500 mb-4" />
                <h3 className="text-xl font-medium text-gray-800 mb-2">Writing Style</h3>
                <p className="text-gray-600">Literary fiction with historical depth</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <FaAward className="text-3xl text-orange-500 mb-4" />
                <h3 className="text-xl font-medium text-gray-800 mb-2">Awards</h3>
                <p className="text-gray-600">3-time Booker Prize nominee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <ImageGallery />

      {/* Floating CTA Button */}
      <button 
        onClick={() => navigate('/home')}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full px-6 py-3 shadow-xl flex items-center gap-3 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 z-50"
      >
        <FaBookOpen size={18} />
        <span>Explore His Work</span>
      </button>
    </div>
  );
}

export default AboutMe;