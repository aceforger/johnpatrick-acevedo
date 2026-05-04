import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes, FaImages, FaSpinner } from 'react-icons/fa';

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
      <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-center text-4xl font-serif text-gray-800 mb-16 relative">
            <span className="relative inline-block">
              Gallery
              <span className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-400"></span>
            </span>
          </h2>
          <div className="flex justify-center items-center h-96">
            <FaSpinner className="text-5xl text-blue-500 animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-center text-4xl font-serif text-gray-800 mb-16 relative">
          <span className="relative inline-block">
            Gallery
            <span className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-400"></span>
          </span>
        </h2>
        
        {galleryImages.length === 0 ? (
          <div className="text-center py-20">
            <FaImages className="text-6xl text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No images found in gallery folder.</p>
            <p className="text-gray-400 text-sm mt-2">Add images to /public/images/gallery/ folder</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id} 
                onClick={() => openLightbox(index)}
                className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-2 bg-gray-100 flex items-center justify-center"
                style={{ aspectRatio: '4/3' }}
              >
                <img 
                  src={image.src} 
                  alt={image.title} 
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 bg-gray-50"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-white text-sm font-medium">{image.title}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {isOpen && currentIndex !== null && galleryImages[currentIndex] && (
          <div className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center p-5 backdrop-blur-sm">
            <button 
              onClick={closeLightbox}
              className="absolute top-8 right-8 text-white text-3xl hover:text-orange-400 transition-colors duration-300 z-10"
            >
              <FaTimes />
            </button>
            
            <button 
              onClick={goToPrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xl backdrop-blur-sm transition-all duration-300 z-10"
            >
              <FaChevronLeft />
            </button>
            
            <div className="relative w-full max-w-6xl">
              <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center">
                <img 
                  src={galleryImages[currentIndex].src} 
                  alt={galleryImages[currentIndex].title} 
                  className="max-h-[80vh] max-w-full w-auto rounded-lg shadow-2xl object-contain"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                  {currentIndex + 1} / {galleryImages.length}
                </div>
              </div>
            </div>
            
            <button 
              onClick={goToNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xl backdrop-blur-sm transition-all duration-300 z-10"
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