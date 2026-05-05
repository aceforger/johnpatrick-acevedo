import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes, FaImages, FaSpinner, FaCamera, FaExpand } from 'react-icons/fa';

const ImageGallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Automatically import all images from the gallery folder
  useEffect(() => {
    const loadImages = async () => {
      try {
        // Using Vite's import.meta.glob (for Vite/React projects)
        const imageModules = import.meta.glob('/public/images/gallery/*.{png,jpg,jpeg,webp,gif}', { eager: true });
        
        const images = Object.entries(imageModules).map(([path, module], index) => ({
          id: index + 1,
          src: module.default || module,
          title: path.split('/').pop().split('.').shift()
            .replace(/-/g, ' ')
            .replace(/_/g, ' ')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        }));
        
        if (images.length > 0) {
          setGalleryImages(images);
        } else {
          // Fallback to manual array if no images found
          setGalleryImages(getManualImages());
        }
      } catch (error) {
        console.error('Error loading images:', error);
        setGalleryImages(getManualImages());
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  // Fallback manual images if dynamic loading fails
  const getManualImages = () => {
    const manualImages = [];
    for (let i = 1; i <= 20; i++) {
      manualImages.push({
        id: i,
        src: `/images/gallery/image${i}.png`,
        title: `Gallery Image ${i}`
      });
    }
    return manualImages;
  };

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
  }, [isOpen, galleryImages]);

  if (isLoading) {
    return (
      <section id="gallery" className="py-20 bg-gradient-to-br from-sky-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <div className="inline-block mb-3">
              <span className="text-amber-600 text-sm font-semibold tracking-wider uppercase">✦ Visual Journey ✦</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 relative inline-block">
              <span className="relative">
                Photo <span className="bg-gradient-to-r from-sky-600 to-amber-600 bg-clip-text text-transparent">Gallery</span>
                <span className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-amber-500 rounded-full"></span>
              </span>
            </h2>
          </div>
          <div className="flex justify-center items-center h-96">
            <div className="text-center">
              <FaSpinner className="text-5xl text-amber-500 animate-spin mx-auto mb-4" />
              <p className="text-gray-500">Loading gallery...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-sky-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-3">
            <span className="text-amber-600 text-sm font-semibold tracking-wider uppercase">✦ Visual Journey ✦</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 relative inline-block">
            <span className="relative">
              Photo <span className="bg-gradient-to-r from-sky-600 to-amber-600 bg-clip-text text-transparent">Gallery</span>
              <span className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-amber-500 rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore moments captured from readings, events, and the creative journey
          </p>
        </div>
        
        {galleryImages.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-lg border border-amber-100">
            <FaImages className="text-6xl text-amber-300 mx-auto mb-4" />
            <p className="text-gray-500">No images found in gallery folder.</p>
            <p className="text-gray-400 text-sm mt-2">Add images to /public/images/gallery/ folder</p>
          </div>
        ) : (
          <>
            {/* Gallery Stats */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2 text-amber-600">
                <FaCamera className="text-amber-500" />
                <span className="text-sm font-medium">{galleryImages.length} photos</span>
              </div>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((image, index) => (
                <div 
                  key={image.id} 
                  onClick={() => openLightbox(index)}
                  className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white border border-amber-100"
                >
                  {/* Bronze accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-amber-500 to-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10"></div>
                  
                  <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <img 
                      src={image.src} 
                      alt={image.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 via-sky-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                          <FaExpand className="text-white text-xl" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-sky-900/90 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-white text-sm font-medium line-clamp-2">{image.title}</span>
                    </div>
                  </div>
                  
                  {/* Image number indicator */}
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                    #{index + 1}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Lightbox Modal - Bronze/Sky Theme */}
        {isOpen && currentIndex !== null && galleryImages[currentIndex] && (
          <div className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center p-5 backdrop-blur-sm">
            {/* Animated background accents */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            <button 
              onClick={closeLightbox}
              className="absolute top-8 right-8 text-white text-3xl hover:text-amber-400 transition-colors duration-300 z-10 bg-black/30 hover:bg-black/50 p-3 rounded-full backdrop-blur-sm"
            >
              <FaTimes />
            </button>
            
            <button 
              onClick={goToPrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-amber-500/30 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xl backdrop-blur-sm transition-all duration-300 z-10 hover:scale-110"
            >
              <FaChevronLeft />
            </button>
            
            <div className="relative w-full max-w-6xl">
              <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center">
                <img 
                  src={galleryImages[currentIndex].src} 
                  alt={galleryImages[currentIndex].title} 
                  className="max-h-[80vh] max-w-full w-auto rounded-2xl shadow-2xl object-contain border-2 border-amber-500/30"
                />
                
                {/* Image info overlay */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm flex items-center gap-4">
                  <span className="flex items-center gap-2">
                    <FaCamera className="text-amber-400" />
                    {currentIndex + 1} / {galleryImages.length}
                  </span>
                  <span className="w-px h-4 bg-white/30"></span>
                  <span className="max-w-md truncate">{galleryImages[currentIndex].title}</span>
                </div>
              </div>
            </div>
            
            <button 
              onClick={goToNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-amber-500/30 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xl backdrop-blur-sm transition-all duration-300 z-10 hover:scale-110"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageGallery;