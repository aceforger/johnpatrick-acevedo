import React, { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaTimes, FaChevronLeft, FaChevronRight, FaYoutube, FaPlay, FaVideo, FaList } from 'react-icons/fa';

const videosData = [
  {
    id: 1,
    title: "Spirit Nation: Poems From A Heretical Faith - Official Trailer",
    videoId: "IcWXWAD5g0I",
    thumbnail: "https://img.youtube.com/vi/IcWXWAD5g0I/maxresdefault.jpg",
    date: "December 2025",
    description: "Official trailer for Spirit Nation: Poems From A Heretical Faith by John Patrick Acevedo. A bold and thought-provoking poetry collection exploring faith, identity, and human reciprocity through the lens of 'Holy Bible Sociology.'",
    duration: "2:30"
  },
  {
    id: 2,
    title: "John Patrick Acevedo - Poetry Reading & Interview",
    videoId: "Jh5olReoan4",
    thumbnail: "https://img.youtube.com/vi/Jh5olReoan4/maxresdefault.jpg",
    date: "December 2025",
    description: "John Patrick Acevedo reads from Spirit Nation: Poems From A Heretical Faith and discusses his creative process, the inspiration behind Holy Bible Sociology, and his journey as a poet and publisher.",
    duration: "5:47"
  }
];

const Events = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const openModal = (video, index) => {
    setSelectedVideo(video);
    setCurrentVideoIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  const openGallery = (index = 0) => {
    setCurrentVideoIndex(index);
    setSelectedVideo(videosData[index]);
    setIsGalleryOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setSelectedVideo(null);
    setCurrentVideoIndex(0);
    document.body.style.overflow = 'auto';
  };

  const nextVideo = () => {
    const newIndex = currentVideoIndex === videosData.length - 1 ? 0 : currentVideoIndex + 1;
    setCurrentVideoIndex(newIndex);
    setSelectedVideo(videosData[newIndex]);
  };

  const prevVideo = () => {
    const newIndex = currentVideoIndex === 0 ? videosData.length - 1 : currentVideoIndex - 1;
    setCurrentVideoIndex(newIndex);
    setSelectedVideo(videosData[newIndex]);
  };

  // Get YouTube embed URL
  const getYouTubeEmbedUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-center text-4xl font-serif text-gray-800 mb-16 relative">
          <span className="relative inline-block">
            Videos & Media
            <span className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-400"></span>
          </span>
        </h2>
        
        {/* Featured Videos Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-serif text-gray-800 mb-8 flex items-center">
            <FaYoutube className="text-red-500 mr-3" />
            Featured Videos
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videosData.map((video, index) => (
              <div 
                key={video.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer border border-gray-100"
                onClick={() => openModal(video, index)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "https://img.youtube.com/vi/" + video.videoId + "/hqdefault.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                      <FaPlay className="text-white text-3xl ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {video.duration}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-xl font-serif text-white line-clamp-2">{video.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-red-500 font-medium flex items-center">
                      <FaYoutube className="mr-1" /> YouTube
                    </div>
                    <div className="text-xs text-gray-500">{video.date}</div>
                  </div>
                  <p className="text-gray-600 leading-relaxed line-clamp-3">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Gallery Section */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <h3 className="text-2xl font-serif text-gray-800 mb-4 lg:mb-0 flex items-center">
              <FaVideo className="text-red-500 mr-3" />
              Video Gallery
            </h3>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {videosData.map((video, index) => (
              <div 
                key={video.id}
                className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                onClick={() => openGallery(index)}
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = "https://img.youtube.com/vi/" + video.videoId + "/hqdefault.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <FaPlay className="text-white text-2xl ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h4 className="text-white font-medium text-sm line-clamp-2">{video.title}</h4>
                  <div className="text-white/60 text-xs mt-1 flex items-center">
                    <FaYoutube className="mr-1" size={10} /> {video.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-8">
            <button 
              onClick={() => openGallery(0)}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <FaPlay className="mr-2" />
              Watch All Videos
            </button>
          </div>
        </div>


        {/* Video Modal for Single Video */}
        {isModalOpen && selectedVideo && (
          <div className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center p-5 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button 
                  onClick={closeModal}
                  className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 text-2xl z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:scale-110 transition-transform"
                >
                  <FaTimes />
                </button>
                
                <div className="p-6">
                  {/* Video Player */}
                  <div className="relative rounded-xl overflow-hidden shadow-2xl mb-6" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={getYouTubeEmbedUrl(selectedVideo.videoId)}
                      title={selectedVideo.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  
                  {/* Video Details */}
                  <div>
                    <h3 className="text-2xl font-serif text-gray-800 mb-3">{selectedVideo.title}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-red-500 font-medium flex items-center">
                        <FaYoutube className="mr-1" /> YouTube • {selectedVideo.date}
                      </div>
                      <div className="text-sm text-gray-500">{selectedVideo.duration}</div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{selectedVideo.description}</p>
                  </div>

                  {/* Related Videos */}
                  {videosData.length > 1 && (
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h4 className="text-lg font-serif text-gray-800 mb-4">Related Videos</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {videosData.filter((_, idx) => idx !== currentVideoIndex).map((video, idx) => (
                          <div 
                            key={video.id}
                            className="flex gap-3 cursor-pointer group hover:bg-gray-50 rounded-lg p-2 transition-colors"
                            onClick={() => {
                              setSelectedVideo(video);
                              setCurrentVideoIndex(videosData.findIndex(v => v.id === video.id));
                            }}
                          >
                            <img 
                              src={video.thumbnail}
                              alt={video.title}
                              className="w-24 h-16 object-cover rounded-md"
                              onError={(e) => {
                                e.target.src = "https://img.youtube.com/vi/" + video.videoId + "/hqdefault.jpg";
                              }}
                            />
                            <div>
                              <p className="text-sm font-medium text-gray-800 group-hover:text-red-600 line-clamp-2">{video.title}</p>
                              <p className="text-xs text-gray-500 mt-1">{video.duration}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Full Screen Gallery Modal with Video Player */}
        {isGalleryOpen && selectedVideo && (
          <div className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center p-5 backdrop-blur-sm">
            <button 
              onClick={closeGallery}
              className="absolute top-8 right-8 text-white text-3xl hover:text-red-400 transition-colors duration-300 z-10 bg-black/30 hover:bg-black/50 p-3 rounded-full"
            >
              <FaTimes />
            </button>
            
            <button 
              onClick={prevVideo}
              className="absolute left-8 top-1/2 -translate-y-1/2 text-white text-2xl hover:text-red-400 transition-colors duration-300 z-10 bg-black/30 hover:bg-black/50 p-4 rounded-full"
            >
              <FaChevronLeft />
            </button>
            
            <button 
              onClick={nextVideo}
              className="absolute right-8 top-1/2 -translate-y-1/2 text-white text-2xl hover:text-red-400 transition-colors duration-300 z-10 bg-black/30 hover:bg-black/50 p-4 rounded-full"
            >
              <FaChevronRight />
            </button>
            
            <div className="relative w-full max-w-6xl max-h-[90vh] flex flex-col items-center">
              <div className="w-full rounded-xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%', position: 'relative' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={getYouTubeEmbedUrl(selectedVideo.videoId)}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="text-white text-center mt-6">
                <h3 className="text-xl font-serif mb-2">{selectedVideo.title}</h3>
                <div className="text-sm text-gray-300">
                  Video {currentVideoIndex + 1} of {videosData.length}
                </div>
              </div>
              
              {/* Thumbnail Strip */}
              <div className="flex space-x-3 mt-6 overflow-x-auto max-w-full px-4 pb-2">
                {videosData.map((video, index) => (
                  <div 
                    key={video.id}
                    className={`flex-shrink-0 cursor-pointer transition-all duration-200 rounded-lg overflow-hidden ${
                      index === currentVideoIndex 
                        ? 'ring-4 ring-red-400 scale-110 shadow-lg' 
                        : 'opacity-60 hover:opacity-100 hover:scale-105'
                    }`}
                    onClick={() => {
                      setCurrentVideoIndex(index);
                      setSelectedVideo(video);
                    }}
                  >
                    <img 
                      src={video.thumbnail}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-28 h-20 object-cover"
                      onError={(e) => {
                        e.target.src = "https://img.youtube.com/vi/" + video.videoId + "/hqdefault.jpg";
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;