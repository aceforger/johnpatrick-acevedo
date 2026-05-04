import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const BookTrailer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  
  const playTrailer = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setIsPlaying(true);
  };
  
  const closeTrailer = () => {
    setIsPlaying(false);
    setCurrentVideo(null);
  };
  
  return (
    <section id="trailer" className="py-20 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-center text-4xl font-serif text-gray-800 mb-16 relative">
          <span className="relative inline-block">
            Book Trailers
            <span className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-400"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Kakaki, The Medicine Woman */}
          <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <div className="relative">
              <div 
                className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group"
                onClick={() => playTrailer('/images/KAKAKI2.mp4')}
              >
                <img 
                  src="/images/image1.png" 
                  alt="Kakaki, The Medicine Woman Book Cover" 
                  className="w-full h-[50vh] object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white/90 p-6 rounded-full transform transition-transform duration-500 group-hover:scale-110">
                    <svg className="w-16 h-16 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-medium">Watch the Trailer</p>
                  <p className="text-sm opacity-90">0:54</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-serif text-gray-800 mb-2">Kakaki, The Medicine Woman</h3>
              <p className="text-gray-600 mb-4">Now available in stores and online</p>
              <button 
                onClick={() => playTrailer('/images/KAKAKI2.mp4')}
                className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Trailer
              </button>
            </div>
          </div>
          
          {/* The 10 Little Indians */}
          <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <div className="relative">
              <div 
                className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group"
                onClick={() => playTrailer('/images/tenLittle.mp4')}
              >
                <img 
                  src="/images/image4.png" 
                  alt="The 10 Little Indians Book Cover" 
                  className="w-full h-[50vh] object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white/90 p-6 rounded-full transform transition-transform duration-500 group-hover:scale-110">
                    <svg className="w-16 h-16 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-medium">Watch the Trailer</p>
                  <p className="text-sm opacity-90">Click to play</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-serif text-gray-800 mb-2">The 10 Little Indians</h3>
              <p className="text-gray-600 mb-4">Now available</p>
              <button 
                onClick={() => playTrailer('/images/tenLittle.mp4')}
                className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-3xl font-serif text-gray-800 mb-6 text-center">Experience the Stories</h3>
          <p className="text-lg leading-relaxed text-gray-600 mb-6">
            Explore the literary world of Dickson Lane through these captivating book trailers. Each video offers
            a unique glimpse into the rich narratives and characters that define his work.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Kakaki, The Medicine Woman
              </h4>
              <p className="text-gray-600">
                Watch the official trailer and get a glimpse into the mystical world created by Dickson Lane. 
                This visual journey complements the rich narrative of the novel, bringing to life the characters 
                and settings that make this story unforgettable.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                The 10 Little Indians
              </h4>
              <p className="text-gray-600">
                Discover the trailer for this captivating work. The 10 Little Indians delivers another 
                compelling story from Dickson Lane, with themes that resonate with contemporary
                readers while maintaining the author's distinctive narrative style.
              </p>
            </div>
          </div>
        </div>
        
        {/* Video Modal */}
        {isPlaying && (
          <div className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center p-5 backdrop-blur-sm">
            <button 
              onClick={closeTrailer}
              className="absolute top-8 right-8 text-white text-3xl hover:text-orange-400 transition-colors duration-300 z-10"
            >
              <FaTimes />
            </button>
            
            <div className="relative w-full max-w-4xl aspect-video">
              <video 
                className="w-full h-full rounded-lg"
                controls
                autoPlay
                playsInline
              >
                <source src={currentVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookTrailer;