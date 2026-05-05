import { useState, useEffect } from "react";
import { FaSearch, FaChevronLeft, FaChevronRight, FaPlay, FaStar, FaQuoteLeft } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

// Simple reusable popup
function Popup({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white px-6 py-4 rounded-lg shadow-lg w-[240px] text-center">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Coming Soon 🚀</h2>
        <p className="text-gray-600 mb-3 text-sm leading-snug">
          This feature is not available yet. Stay tuned!
        </p>
        <button
          onClick={onClose}
          className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-2 rounded-md font-semibold hover:from-amber-700 hover:to-amber-800 transition text-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);

  // All books data
  const books = [
    {
      id: 1,
      title: "Bottomless Toothpaste Flats in Bruges",
      subtitle: "A Poet's Memoir",
      image: "/images/bottomless.png",
      gif: "/images/bottomless.png",
      description: "As a fan of mainstream Singer and Songwriter music, John Patrick Acevedo has become an expert in the dualistic creative process and passion involved in art.",
      rating: 4.8
    },
    {
      id: 2,
      title: "SPIRIT NATION",
      subtitle: "Poems From A Heretical Faith",
      image: "/images/spirit.jpg",
      gif: "/images/spirit.jpg",
      description: "A bold exploration of faith, identity, and human reciprocity through the lens of Holy Bible Sociology. Available now through Synergy Press.",
      rating: 4.9
    },
    {
      id: 3,
      title: "The Watch That Healed Waterloo",
      subtitle: "A Gnostic Romance",
      image: "/images/thewatch.png",
      gif: "/images/thewatch.png",
      description: "An exploration of strength, weakness, and the misconception that weakness draws pathos instead of ethos.",
      rating: 4.7
    },
    {
      id: 4,
      title: "NAPOLEONIC CULMINATIONS",
      subtitle: "A Holy Bible Sociology",
      image: "/images/napoleonic.png",
      gif: "/images/napoleonic.png",
      description: "Speaking of the four elements of human nature — wind, water, earth and fire — and the duality of man.",
      rating: 4.9
    },
    {
      id: 5,
      title: "Healing w/o Patient Suffering",
      subtitle: "for Virginal Sole Distinction",
      image: "/images/healing.png",
      gif: "/images/healing.png",
      description: "An ascetic romantic's quest for God and love, exploring the spirit from an animal magnetic dimension of human nature.",
      rating: 4.6
    },
    {
      id: 6,
      title: "We're Watching Her Show",
      subtitle: "For Bathroom Sails of the Starched Collar",
      image: "/images/watching.png",
      gif: "/images/watching.png",
      description: "An eclectic collection exploring the theme of 'give and take' — a journey from loss, sadness, and acceptance.",
      rating: 4.8
    }
  ];

  // Truncate description function
  const truncateDescription = (description, maxLength = 100) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setHeroLoaded(true), 300);
  }, [location.pathname]);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-br from-sky-50 via-white to-amber-50 text-gray-800 font-sans overflow-x-hidden">
      {/* Hero Section with Bronze/Sky Theme */}
      <section id="hero" className="relative h-[800px] md:h-[900px] overflow-hidden bg-gradient-to-r from-sky-900 via-sky-800 to-amber-800">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-sky-900/50"></div>
        
        {/* Animated bronze accents */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-6 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full border border-amber-400/30">
              <span className="text-amber-300 font-semibold tracking-wide">✧ AWARD-WINNING POET ✧</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif leading-tight">
              Discover the Poetry of{" "}
              <span className="bg-gradient-to-r from-sky-300 via-amber-300 to-sky-300 bg-clip-text text-transparent">
                John Patrick Acevedo
              </span>
            </h1>
            <p className="text-lg md:text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
              Explore a collection of poetry that challenges, inspires, and transforms — where words become timeless art.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('featured-books')}
                className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full font-semibold hover:from-amber-700 hover:to-amber-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Explore Collections
              </button>
              <button 
                onClick={() => navigate('/')}
                className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-all"
              >
                Home
              </button>
            </div>
          </div>
        </div>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path fill="#f0f9ff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Header with Navbar - Bronze/Sky Styling */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md py-3 px-6 flex flex-col md:flex-row items-center justify-between border-b border-amber-200">
        <img
          onClick={() => navigate("/")}
          src="/images/john-logo.png"
          alt="John Patrick Acevedo"
          className="h-16 w-auto cursor-pointer mb-3 md:mb-0 hover:opacity-80 transition"
        />
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search books, poems..."
            className="w-full px-4 py-2 pr-10 rounded-full border border-amber-200 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition bg-amber-50/30"
          />
          <FaSearch className="absolute right-3 top-2.5 text-amber-500" />
        </div>
      </header>

      {/* Featured Books Section - FIXED DISPLAY */}
      <section id="featured-books" className="py-16 px-6 bg-gradient-to-br from-sky-50 via-white to-amber-50 scroll-mt-20">
        <div className="text-center mb-14">
          <div className="inline-block mb-3">
            <span className="text-amber-600 text-sm font-semibold tracking-wider uppercase">✦ Curated Collection ✦</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900">
            Featured <span className="bg-gradient-to-r from-sky-600 to-amber-600 bg-clip-text text-transparent">Poetry Collections</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-600 to-amber-600 mx-auto rounded-full mt-4"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover the complete collection of poetry by John Patrick Acevedo — each volume a journey into the depths of human experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {books.map((book) => (
            <div
              key={book.id}
              onClick={() => navigate(`/bookdetails/${book.id}`)}
              className="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-500 hover:shadow-2xl bg-white border border-amber-100 h-[520px] flex flex-col"
            >
              {/* Bronze accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-amber-500 to-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>
              
              {/* Image Container */}
              <div className="relative h-64 bg-gradient-to-br from-sky-100 to-amber-100 flex items-center justify-center p-6 flex-shrink-0">
                <img
                  src={book.image}
                  alt={book.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/300x400?text=Book+Cover';
                  }}
                />
              </div>
              
              {/* Content Container */}
              <div className="p-6 flex-1 flex flex-col min-h-0">
                <div className="flex items-center gap-1 mb-2 flex-shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`w-4 h-4 ${i < Math.floor(book.rating) ? 'text-amber-400' : 'text-gray-300'}`} />
                  ))}
                  <span className="text-xs text-gray-500 ml-2">{book.rating}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 font-serif leading-tight group-hover:text-sky-700 transition-colors line-clamp-2 flex-shrink-0">
                  {book.title}
                </h3>
                <p className="text-amber-600 text-sm font-medium mb-3 flex-shrink-0">{book.subtitle}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-shrink-0">
                  {truncateDescription(book.description, 100)}
                </p>
                <div className="mt-auto pt-2 flex-shrink-0">
                  <span className="inline-flex items-center gap-2 text-sky-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    Read More <FaChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
              
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Author Spotlight Section */}
      <section id="author-spotlight" className="py-20 px-6 bg-gradient-to-r from-sky-800 to-sky-900 relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-5"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <div className="inline-block mb-4 px-4 py-1 bg-amber-500/20 rounded-full">
                <span className="text-amber-300 text-sm font-semibold">✦ ABOUT THE AUTHOR ✦</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
                John Patrick Acevedo
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-sky-400 mb-6 mx-auto md:mx-0"></div>
              <p className="text-sky-100 text-lg leading-relaxed mb-6">
                A voice that transcends boundaries, John Patrick Acevedo weaves together poetry, philosophy, and raw human emotion. His work explores the depths of faith, love, and the human condition with unprecedented honesty and artistry.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <button 
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      const aboutSection = document.getElementById('about');
                      if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="px-6 py-2 bg-amber-600 text-white rounded-full font-semibold hover:bg-amber-700 transition shadow-lg"
                >
                  Read Biography
                </button>
                <button 
                  onClick={() => setShowPopup(true)}
                  className="px-6 py-2 border border-amber-400 text-amber-300 rounded-full font-semibold hover:bg-amber-400/10 transition"
                >
                  Watch Interviews
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-sky-500 rounded-2xl blur-xl opacity-50"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-amber-400/30 bg-gradient-to-br from-sky-700 to-sky-800 flex items-center justify-center">
                  <img 
                    src="/images/profile1.png" 
                    alt="John Patrick Acevedo"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/400x400?text=John+Patrick+Acevedo';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-white scroll-mt-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900">
            Reader <span className="bg-gradient-to-r from-sky-600 to-amber-600 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-600 to-amber-600 mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { text: "A breathtaking journey through the human soul. Each poem resonates deeply and stays with you long after reading.", author: "Sarah Chen", role: "Poetry Critic" },
            { text: "Acevedo's work is transformative. He captures the ineffable with words that seem to dance between worlds.", author: "Michael Torres", role: "Professor of Literature" },
            { text: "This collection changed how I understand poetry. Raw, honest, and absolutely beautiful.", author: "Emma Watson", role: "Reader & Poet" }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-gradient-to-br from-sky-50 to-amber-50 p-8 rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition">
              <FaQuoteLeft className="text-amber-400 text-3xl mb-4 opacity-50" />
              <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-amber-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-16 px-6 bg-gradient-to-r from-sky-900 to-sky-800 scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
            Join the Poetry Circle
          </h3>
          <p className="text-sky-100 mb-6">
            Subscribe to receive exclusive poetry, updates, and special offers from John Patrick Acevedo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="px-6 py-3 rounded-full bg-white/10 border border-sky-300 text-white placeholder:text-sky-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button 
              onClick={() => setShowPopup(true)}
              className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full font-semibold hover:from-amber-700 hover:to-amber-800 transition shadow-lg"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-gradient-to-br from-sky-900 via-sky-800 to-sky-900 text-gray-100 py-10 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          <div>
            <img onClick={() => navigate('/')} src="/images/john-logo.png" alt="John Patrick Acevedo" className="h-12 mb-4 rounded-2xl cursor-pointer" />
            <p className="text-sky-200 text-sm leading-relaxed">
              Your gateway to exceptional poetry and literary experiences that transcend the ordinary.
            </p>
            <div className="flex gap-3 mt-4">
              <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-amber-500/30 transition">
                <span className="text-amber-400 text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-amber-500/30 transition">
                <span className="text-amber-400 text-xs">X</span>
              </div>
              <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-amber-500/30 transition">
                <span className="text-amber-400 text-xs">in</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white border-l-3 border-amber-500 pl-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollToSection('featured-books')} className="text-sky-200 hover:text-amber-300 transition-colors">Poetry Collections</button></li>
              <li><button onClick={() => setShowPopup(true)} className="text-sky-200 hover:text-amber-300 transition-colors">New Releases</button></li>
              <li><button onClick={() => setShowPopup(true)} className="text-sky-200 hover:text-amber-300 transition-colors">Award Winners</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white border-l-3 border-amber-500 pl-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollToSection('author-spotlight')} className="text-sky-200 hover:text-amber-300 transition-colors">About Us</button></li>
              <li><a href="" className="text-sky-200 hover:text-amber-300 transition-colors">Contact</a></li>
              <li><button onClick={() => setShowPopup(true)} className="text-sky-200 hover:text-amber-300 transition-colors">Privacy Policy</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white border-l-3 border-amber-500 pl-3">Connect</h4>
            <p className="text-sky-200 text-sm"></p>
            <p className="text-sky-200 text-sm"></p>
            <p className="text-sky-200 text-sm mt-2"></p>
          </div>
        </div>
        <div className="border-t border-sky-700 mt-10 pt-6 text-center text-sky-300 text-sm relative z-10">
          <p>© 2025 John Patrick Acevedo | Synergy Press. All rights reserved.</p>
        </div>
      </footer>
      
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </div>
  );
}

export default Home;