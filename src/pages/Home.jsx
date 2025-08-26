import { useState, useEffect } from "react";
import { FaSearch, FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

// Carousel slides
const slides = [
  {
    image: "laptop.png",
    title: "Our Story",
    text: "Founded in 2010, Dickson Lane began as a small bookstore with big dreams.",
  },
  {
    image: "ebookk.png",
    title: "Our Mission",
    text: "To connect readers with books that inspire, educate, and entertain.",
  },
  {
    image: "bookdic.png",
    title: "Our Team",
    text: "A passionate group of book lovers dedicated to literary excellence.",
  },
  {
    image: "indiansdic.png",
    title: "Our Selection",
    text: "Curated collections for every taste, from classics to contemporary.",
  },
  {
    image: "indians2.png",
    title: "Innovation",
    text: "Embracing technology to enhance the reading experience.",
  },
];

// Simple reusable popup
function Popup({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white px-6 py-4 rounded-lg shadow-lg w-[240px] text-center">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Coming Soon 🚀</h2>
        <p className="text-gray-600 mb-3 text-sm leading-snug">
          This feature is not available yet. Stay tuned!
        </p>
        <button
          onClick={onClose}
          className="bg-sky-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-sky-600 transition text-sm"
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
  const [popupBook, setPopupBook] = useState(null);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setHeroLoaded(true), 300);
  }, [location.pathname]);

  return (
    <div className="bg-white text-gray-800 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <div
        className={`relative h-screen max-h-[900px] overflow-hidden transition-all duration-1000 ${
          heroLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="videobg1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-center z-20 px-8 md:px-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif leading-tight">
              Discover Your Next{" "}
              <span className="text-blue-400">Literary Adventure</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Explore our curated collection of books that inspire, educate, and entertain.
            </p>
          </div>
        </div>
      </div>

      {/* Header with Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm py-3 px-6 flex flex-col md:flex-row items-center justify-between">
        <img
          onClick={() => navigate("/")}
          src="dickson.png"
          alt="Dickson Lane"
          className="h-16 w-auto cursor-pointer mb-3 md:mb-0"
        />
        <Navbar />
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search books, authors..."
            className="w-full px-4 py-2 pr-10 rounded-full border border-gray-300 focus:outline-none focus:border-gray-500 transition"
          />
          <FaSearch className="absolute right-3 top-2.5 text-gray-400" />
        </div>
      </header>

      {/* Featured Books */}
      <section className="py-12 px-6 bg-gradient-to-br from-blue-50 via-white-100 to-blue-300 text-center">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900">
            Featured <span className="text-sky-700">Books</span>
          </h2>
          <div className="w-24 h-1 bg-sky-700 mx-auto rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {/* Book 1 */}
          <div
            onClick={() => navigate(`/bookdetails/1`)}
            className="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer hover:-translate-y-2 transition-all h-[500px] bg-blue-100 "
          >
            <div className="absolute inset-0 bg-gradient-to-t from-blue/70 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <h3 className="text-4xl md:text-3xl font-bold text-sky-700 mb-4 font-serif leading-tight">THE GHOST WALKER</h3>
            </div>
            <img
              src="image1.png"
              alt="The Ghost Walker"
              className="absolute inset-0 w-full h-full object-contain group-hover:opacity-0 transition"
            />
            <img
              src="dickson-book1.gif"
              alt="Preview"
              className="absolute inset-0 h-[70%] w-auto m-auto opacity-0 group-hover:opacity-100 transition"
            />
          </div>

          {/* Book 2 */}
          <div
            onClick={() => navigate(`/bookdetails/2`)}
            className="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer hover:-translate-y-2 transition-all h-[500px] bg-blue-100 "
          >
            <div className="absolute inset-0 bg-gradient-to-t from-blue/70 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <h3 className="ttext-4xl md:text-3xl font-bold text-sky-700 mb-4 font-serif leading-tight">10 LITTLE INDIANS</h3>
            </div>
            <img
              src="image4.png"
              alt="10 Little Indians"
              className="absolute inset-0 w-full h-full object-contain group-hover:opacity-0 transition"
            />
            <img
              src="dickson-book2.gif"
              alt="Preview"
              className="absolute inset-0 h-[70%] w-auto m-auto opacity-0 group-hover:opacity-100 transition"
            />
          </div>
        </div>
      </section>

      {/* eBooks Section */}
      <section className="py-12 px-6 bg-gradient-to-br from-blue-50 via-white-100 to-blue-300 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-4">
          Explore <span className="text-sky-500">EBooks</span>
        </h2>
        <p className="text-gray-600 mb-10">“Your Library, Anytime, Anywhere”</p>

        <div className="flex justify-center gap-12">
          {["A Ghost Walker", "10 Little Indians"].map((title, i) => (
            <div key={i} className="relative w-64 h-96 group">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-blue-100 rounded-2xl shadow-xl p-6 flex flex-col justify-between border border-blue-200">
                <div>
                  <p className="text-xs uppercase text-sky-600 mb-3">Featured</p>
                  <h3 className="text-2xl font-bold text-blue-900">{title}</h3>
                  <p className="text-gray-500 text-sm">by Dickson Lane</p>
                </div>
                <div className="space-y-3">
                  <button
                    onClick={() => {
                      setPopupBook(title);
                      setShowPopup(true);
                    }}
                    className="w-full bg-sky-500 text-white py-2 rounded-lg font-semibold hover:bg-sky-600"
                  >
                    Read Now
                  </button>
                  <button
                    onClick={() => {
                      setPopupBook(title);
                      setShowPopup(true);
                    }}
                    className="w-full border border-sky-500 text-sky-700 py-2 rounded-lg font-semibold hover:bg-sky-50"
                  >
                    Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Audiobooks Section */}
      <section className="py-12 px-6 bg-gradient-to-br from-blue-50 via-white-100 to-blue-300 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4 font-serif">
          Listen <span className="text-sky-700">Audiobooks</span>
        </h2>
        <p className="text-lg text-blue-700 mb-10">
          “Books You Can Hear, and Worlds You Can Feel.”
        </p>
        <div className="bg-white/70 p-8 rounded-2xl shadow-xl max-w-lg mx-auto border">
          <div className="flex items-center justify-center gap-6 mb-6">
            <button className="bg-sky-200 p-3 rounded-full">
              <FaChevronLeft />
            </button>
            <div
              onClick={() => setShowPopup(true)}
              className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white cursor-pointer shadow-lg"
            >
              <FaPlay className="text-2xl" />
            </div>
            <button className="bg-sky-200 p-3 rounded-full">
              <FaChevronRight />
            </button>
          </div>
          <h4 className="font-semibold text-blue-900">Now Playing</h4>
          <p className="text-sky-700 text-sm mb-3">The Ghost Walker — Chapter 5</p>
          <div className="w-full bg-blue-200 h-1.5 rounded-full mb-2">
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 h-1.5 rounded-full w-[45%]"></div>
          </div>
          <div className="flex justify-between text-xs text-blue-500">
            <span>12:45</span>
            <span>27:30</span>
          </div>
        </div>
        <button
          onClick={() => navigate("/audiobooks")}
          className="mt-10 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-3 rounded-full shadow-md hover:scale-105 transition"
        >
          Browse Audiobook Library
        </button>
      </section>

       {/* About Us Carousel */}
   <section className="relative py-8 px-6 md:px-12 bg-[url('/bookstore-bg.jpg')] bg-cover bg-center">
  {/* Overlay */}
<div className="absolute inset-0 bg-sky-300/40 "></div>

  <div className="relative max-w-7xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4 font-serif leading-tight">
        Welcome to <span className="text-sky-600">Dickson Lane</span>
      </h2>
      <p className="text-sky-600 text-lg mt-4 max-w-2xl mx-auto">
        A cozy bookstore where stories come alive and community thrives.
      </p>
    </div>

    {/* Carousel */}
    <div className="relative overflow-hidden rounded-2xl shadow-6xl">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-none w-full">
            <div
              className={`flex flex-col md:flex-row items-center h-[500px] p-10
              ${index % 3 === 0 ? "bg-gradient-to-r from-blue-200 to-yellow-200" : ""}
              ${index % 3 === 1 ? "bg-gradient-to-r from-blue-300 to-green-300" : ""}
              ${index % 3 === 2 ? "bg-gradient-to-r from-sky-300 to-violet-300" : ""}`}
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
    <section className="relative py-8 px-6 md:px-12 bg-gradient-to-br from-[#e6f6ff] via-[#cceeff] to-[#b3e5ff]">
  <div className="max-w-3xl mx-auto text-center">
    {/* Title */}
    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-sky-900">
      Join Our <span className="text-sky-600">Literary Community</span>
    </h2>

    {/* Subtitle */}
    <p className="text-lg md:text-xl mb-10 text-sky-800 leading-relaxed max-w-2xl mx-auto">
      Stay inspired with <span className="text-sky-600">new releases</span>, 
      enjoy <span className="text-sky-500">exclusive offers</span>, and discover upcoming 
      <span className="text-sky-700"> literary events</span>.
    </p>

    {/* Form */}
    {/* <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
      <input
        type="email"
        placeholder="Enter your email address"
        className="flex-1 px-6 py-4 rounded-full border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400 text-gray-800 bg-white shadow-sm"
        required
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-8 py-4 rounded-full font-semibold shadow-md transition"
      >
        Subscribe
      </button>
    </form> */}

    {/* Privacy note */}
    {/* <p className="text-sm text-sky-700 mt-6 italic">
      ✦ We respect your privacy. Unsubscribe anytime.
    </p> */}
  </div>
</section>

      {/* Footer */}
     <footer className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-gray-100 py-5 px-4 md:px-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    
    {/* Brand */}
    <div>
      <img onClick={() => navigate('/')} src="dickson1.jpg" alt="Dickson Lane" className="h-12 mb-4 rounded-2xl" />
      <p className="text-gray-300">
        Your gateway to exceptional books and reading experiences since 2010.
      </p>
    </div>
    
    {/* Explore */}
    <div>
      <h4 className="text-lg border-b font-semibold mb-4 text-white">Explore</h4>
      <ul className="space-y-2">
        <li><a href="/bookshop" className="text-gray-300 hover:text-white transition-colors">Books</a></li>
        <li><a href="/ebooks" className="text-gray-300 hover:text-white transition-colors">eBooks</a></li>
        <li><a href="/audiobooks" className="text-gray-300 hover:text-white transition-colors">Audiobooks</a></li>
      </ul>
    </div>
    
    {/* Company */}
    <div>
      <h4 className="border-b text-lg font-semibold mb-4 text-white">Company</h4>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
        <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
      </ul>
    </div>
    
    {/* Connect */}
    <div>
      <h4 className="border-b text-lg font-semibold mb-0 text-white">Connect</h4>
      <div className="flex gap-4 mb-4">
        {/* Example social icon button */}
        {/* <a href="#" className="bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
          <span className="sr-only">Facebook</span>
        </a> */}
      </div>
      <p className="text-gray-300 text-sm">123 Book Street, Literary City, LC 12345</p>
      <p className="text-gray-300 text-sm">info@dicksonlane.com</p>
    </div>
  </div>
  
  {/* Bottom bar */}
  <div className="border-t border-blue-700 mt-10 pt-5 text-center text-gray-400 text-sm">
    <p>© {new Date().getFullYear()} Dickson Lane. All rights reserved.</p>
  </div>
</footer>
{showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </div>
  );
}

export default Home;
