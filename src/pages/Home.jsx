import { useState, useEffect } from 'react';
import { FaSearch, FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const slides = [
  {
    image: 'laptop.png',
    title: "Our Story",
    text: "Founded in 2010, Dickson Lane began as a small bookstore with big dreams.",
    color: "from-purple-600 to-indigo-600"
  },
  {
    image: 'ebookk.png',
    title: "Our Mission", 
    text: "To connect readers with books that inspire, educate, and entertain.",
    color: "from-amber-600 to-orange-600"
  },
  {
    image: 'bookdic.png',
    title: "Our Team",
    text: "A passionate group of book lovers dedicated to literary excellence.",
    color: "from-emerald-600 to-teal-600"
  },
  {
    image: 'indiansdic.png',
    title: "Our Selection",
    text: "Curated collections for every taste, from classics to contemporary.",
    color: "from-rose-600 to-pink-600"
  },
  {
    image: 'indians2.png',
    title: "Innovation",
    text: "Embracing technology to enhance the reading experience.",
    color: "from-blue-600 to-cyan-600"
  },
];

function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const location = useLocation();

  // Hero section animation
  const [heroLoaded, setHeroLoaded] = useState(false);

  
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setHeroLoaded(true), 300);
  }, [location.pathname]);



  return (
    <div className="bg-white text-gray-800 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <div className={`relative h-screen max-h-[900px] overflow-hidden transition-all duration-1000 ${heroLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 z-11 overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="fallback-image.jpg" // Shows while video loads
          >
            <source src="videobg1.mp4" type="video/mp4" />
            {/* <source src="videobg1.webm" type="video/webm" /> Alternative format */}
            
            {/* Fallback for browsers that don't support video */}
            <div 
              className="absolute inset-0 bg-[url('fallback-image.jpg')] bg-cover bg-center"
            />
          </video>
          
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="absolute inset-0 flex items-center z-20 px-8 md:px-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif leading-tight">
              Discover Your Next <span className="text-blue-400">Literary Adventure</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Explore our curated collection of books that inspire, educate, and entertain.
            </p>
            {/* <div className="flex gap-4">
              <button 
                onClick={() => navigate('/shop')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105"
              >
                Browse Books
              </button>
              <button 
                onClick={() => navigate('/ebooks')}
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-all"
              >
                Explore eBooks
              </button>
            </div> */}
          </div>
        </div>
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="bookstore-hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Search Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md py-4 px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="logo mb-4 md:mb-0">
          <img src="dickson.png" alt="Dickson Lane" className="h-20 w-auto" />
        </div>
        <div className="relative w-full md:w-1/3">
          <input 
            type="text" 
            placeholder="Search for books, authors, genres..." 
            className="w-full px-4 py-2 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <FaSearch className="absolute right-3 top-3 text-gray-400" />
        </div>
      </header>

      <Navbar />

      {/* Featured Books Section */}
<section className="py-20 px-4 md:px-8 relative bg-gradient-to-br from-[#f9f7f2] via-[#f1eee7] to-[#e6e2da]">
  {/* Decorative background layers */}
  <div className="absolute inset-0 z-0">
    {/* Soft paper-like texture */}
    <div className="absolute inset-0 bg-[url('/paper-texture.png')] opacity-20 mix-blend-overlay"></div>

    {/* Gentle vignette lighting for realism */}
    <div className="absolute inset-0 bg-gradient-radial from-white/50 via-transparent to-transparent"></div>

    {/* Light floating accents for depth */}
    <div className="absolute top-10 left-1/4 w-48 h-48 bg-blue-100/30 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl"></div>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Section Header */}
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif drop-shadow-sm">
        Featured <span className="text-sky-700">Books</span>
      </h2>
      <div className="w-24 h-1 bg-sky-700 mx-auto rounded-full shadow-md"></div>
    </div>
    
    {/* Books Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Book 1 */}
      <div 
        onClick={() => navigate(`/bookdetails/1`)}
        className="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all hover:shadow-2xl h-[500px] transform hover:-translate-y-2 bg-white/90 backdrop-blur-md border border-gray-200"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 p-6 z-20">
          <h3 className="text-2xl font-bold text-white mb-2">THE GHOST WALKER</h3>
        </div>
        
        {/* Default Image */}
        <img 
          src="image1.png" 
          alt="THE GHOST WALKER" 
          className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 group-hover:opacity-0"
        />
        
        {/* Hover GIF Preview */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="dickson-book1.gif"
            alt="Book Preview"
            className="h-[70%] w-auto object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
          />
        </div>
      </div>

      {/* Book 2 */}
      <div 
        onClick={() => navigate(`/bookdetails/2`)}
        className="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all hover:shadow-2xl h-[500px] transform hover:-translate-y-2 bg-white/90 backdrop-blur-md border border-gray-200"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 p-6 z-20">
          <h3 className="text-2xl font-bold text-white mb-2">10 LITTLE INDIANS</h3>
        </div>
        
        {/* Default Image */}
        <img 
          src="image4.png" 
          alt="10 LITTLE INDIANS OF SUCCESSFUL SCREENPLAYS" 
          className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 group-hover:opacity-0"
        />

        {/* Hover GIF Preview */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="dickson-book2.gif"
            alt="Book Preview"
            className="h-[70%] w-auto object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
          />
        </div>
      </div>
    </div>
  </div>
</section>



      {/* eBook Section */}
   <section className="relative py-20 px-4 md:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-200 text-gray-900 overflow-hidden">
  {/* Decorative blur accents */}
  <div className="absolute inset-0">
    <div className="absolute top-24 left-1/3 w-80 h-80 bg-blue-200/40 blur-3xl rounded-full"></div>
    <div className="absolute bottom-24 right-1/3 w-80 h-80 bg-blue-300/40 blur-3xl rounded-full"></div>
  </div>

  <div className="max-w-5xl mx-auto relative z-10">
    {/* Title Section */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 font-serif text-blue-900 drop-shadow-sm">
        Dive Into <span className="text-sky-500">Aesthetic Reads</span>
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Where clean design meets calming shades of blue — curated for peaceful reading.
      </p>
    </div>

    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Floating Book Card */}
      <div className="relative w-64 h-96 group">
        <div className="absolute inset-0 rounded-2xl shadow-2xl transform rotate-y-0 group-hover:rotate-y-6 transition-transform duration-700 perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-blue-100 rounded-2xl flex flex-col justify-between p-6 border border-blue-200 shadow-lg">
            <div>
              <p className="text-xs uppercase tracking-wide text-sky-600 mb-3">Featured</p>
              <h3 className="text-2xl font-bold mb-2 text-blue-900">Serene Stories</h3>
              <p className="text-gray-500 text-sm">by Aesthetic Author</p>
            </div>
            <div className="space-y-3">
              <button className="w-full bg-sky-500 text-white font-semibold py-2 rounded-lg hover:bg-sky-600 transition shadow-md">
                Read Now
              </button>
              <button className="w-full border border-sky-500 text-sky-700 py-2 rounded-lg font-semibold hover:bg-sky-50 transition shadow-md">
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Content */}
      <div className="max-w-md">
        <h3 className="text-3xl font-bold mb-6 text-blue-900">Why Choose Aesthetic Blue?</h3>
        <ul className="space-y-5">
          {[
            "Soft, modern gradients",
            "Peaceful & calming colors",
            "Minimalist aesthetic",
            "Designed for focus & clarity",
          ].map((text, idx) => (
            <li key={idx} className="flex items-start">
              <div className="bg-sky-100 rounded-full p-2 mr-4 shadow-md">
                <svg
                  className="w-5 h-5 text-sky-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-gray-700">{text}</span>
            </li>
          ))}
        </ul>
        <button className="mt-8 bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-medium shadow-md transition">
          Explore Collection
        </button>
      </div>
    </div>
  </div>
</section>




      {/* Audiobooks Section */}
    <section className="relative py-20 px-4 md:px-6 overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-sky-100">
  {/* Background glow */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-300/40 rounded-full blur-[120px]"></div>
    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-300/30 rounded-full blur-[100px]"></div>
  </div>

  <div className="relative z-10 max-w-3xl mx-auto text-center">
    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6 tracking-tight">
      Immersive <span className="bg-gradient-to-r from-sky-600 to-blue-500 bg-clip-text text-transparent">Audio</span> Journeys
    </h2>
    <p className="text-base md:text-lg text-blue-700 mb-10 leading-relaxed">
      Experience audiobooks with <span className="text-sky-700 font-medium">rich narration</span> and <span className="text-blue-700 font-medium">deep storytelling</span>.
    </p>

    {/* Audio Player Card */}
    <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 mx-auto border border-blue-200 shadow-xl shadow-sky-200/60 max-w-lg">
      {/* Player Controls */}
      <div className="flex items-center justify-center gap-6 mb-6">
        <button className="bg-sky-200 hover:bg-sky-300 text-blue-700 rounded-full p-3 hover:scale-110 transition-transform">
          <FaChevronLeft />
        </button>
        <div className="w-20 h-20 bg-gradient-to-tr from-sky-500 to-blue-500 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.7)]">
          <FaPlay className="text-white text-2xl ml-1" />
        </div>
        <button className="bg-sky-200 hover:bg-sky-300 text-blue-700 rounded-full p-3 hover:scale-110 transition-transform">
          <FaChevronRight />
        </button>
      </div>

      {/* Track Info */}
      <div className="text-left">
        <h4 className="text-lg font-semibold text-blue-900 mb-1">Now Playing</h4>
        <p className="text-sky-700 mb-4 text-sm">The Ghost Walker — Chapter 5</p>

        {/* Progress Bar */}
        <div className="w-full bg-blue-200 rounded-full h-1.5 overflow-hidden mb-2">
          <div
            className="bg-gradient-to-r from-sky-500 to-blue-600 h-1.5 rounded-full"
            style={{ width: '45%' }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-blue-500">
          <span>12:45</span>
          <span>27:30</span>
        </div>
      </div>
    </div>

    {/* CTA Button */}
    <button className="mt-10 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-blue-300/50">
      Browse Audiobook Library
    </button>
  </div>
</section>



      {/* About Us Carousel */}
    <section className="relative py-24 px-6 md:px-12 bg-[url('/bookstore-bg.jpg')] bg-cover bg-center">
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative max-w-7xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
        Welcome to <span className="text-sky-300">Dickson Lane</span>
      </h2>
      <p className="text-gray-200 text-lg mt-4 max-w-2xl mx-auto">
        A cozy bookstore where stories come alive and community thrives.
      </p>
    </div>

    {/* Carousel */}
    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-none w-full">
            <div
              className={`flex flex-col md:flex-row items-center h-[500px] p-10
              ${index % 3 === 0 ? "bg-gradient-to-r from-sky-50 to-sky-200" : ""}
              ${index % 3 === 1 ? "bg-gradient-to-r from-indigo-50 to-indigo-200" : ""}
              ${index % 3 === 2 ? "bg-gradient-to-r from-cyan-50 to-cyan-200" : ""}`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="rounded-lg shadow-lg max-h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-10 text-gray-900">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  {slide.title}
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {slide.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/70 hover:bg-gray-900 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900/70 hover:bg-gray-900 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition"
      >
        <FaChevronRight />
      </button>
    </div>
  </div>
</section>



      {/* Newsletter Section */}
     <section className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-[#f8f5f2] via-[#f3ede7] to-[#e9e2db]">
  <div className="max-w-3xl mx-auto text-center">
    {/* Title */}
    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-[#3e2c2c]">
      Join Our <span className="text-[#8b6f56]">Literary Community</span>
    </h2>

    {/* Subtitle */}
    <p className="text-lg md:text-xl mb-10 text-[#5a463b] leading-relaxed max-w-2xl mx-auto">
      Stay inspired with <span className="text-[#8b6f56]">new releases</span>, 
      enjoy <span className="text-[#a9896d]">exclusive offers</span>, and discover upcoming 
      <span className="text-[#6f5b4e]"> literary events</span>.
    </p>

    {/* Form */}
    <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
      <input
        type="email"
        placeholder="Enter your email address"
        className="flex-1 px-6 py-4 rounded-full border border-[#d6cfc7] focus:outline-none focus:ring-2 focus:ring-[#b8a99a] text-gray-800 bg-[#fdfcfb] shadow-sm"
        required
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-[#c2a386] to-[#a9896d] hover:from-[#b89577] hover:to-[#8b6f56] text-white px-8 py-4 rounded-full font-semibold shadow-md transition"
      >
        Subscribe
      </button>
    </form>

    {/* Privacy note */}
    <p className="text-sm text-[#8b6f56] mt-6 italic">
      ✦ We respect your privacy. Unsubscribe anytime.
    </p>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="dickson1.jpg" alt="Dickson Lane" className="h-12 mb-4 rounded-2xl" />
            <p className="text-gray-400">
              Your gateway to exceptional books and reading experiences since 2010.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><a href="/bookshop" className="text-gray-400 hover:text-white transition-colors">Books</a></li>
              <li><a href="/ebooks" className="text-gray-400 hover:text-white transition-colors">eBooks</a></li>
              <li><a href="/audiobooks" className="text-gray-400 hover:text-white transition-colors">Audiobooks</a></li>
              
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-0">Connect</h4>
            <div className="flex gap-4 mb-4">
              {/* {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label={social}
                >
                  <span className="sr-only">{social}</span>
                </a>
              ))} */}
            </div>
            <p className="text-gray-400 text-sm">
              123 Book Street, Literary City, LC 12345
            </p>
            <p className="text-gray-400 text-sm">
              info@dicksonlane.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Dickson Lane. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;