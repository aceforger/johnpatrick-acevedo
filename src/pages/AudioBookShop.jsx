import React, { useState, useRef, useEffect } from 'react';

const audiobooks = [
  {
    id: 1,
    title: 'KAKAKI, THE MEDICINE WOMAN',
    author: 'DICKSON LANE',
    narrator: 'Mandy Grant',
    image: '/images/image1.png',
    rating: 4.8,
    previewAudio: '/images/KAKAKIaudio.MP3',
    description: 'Kakaki, The Medicine Woman is a haunting exploration of gender empowerment across native cultures and archetypes in 19th century Canada.',
    comingSoon: false,
    platformLinks: [
      {
        name: 'Google Play Books',
        url: 'https://play.google.com/store/audiobooks/details/Dickson_Lane_Kakaki_The_Medicine_Woman?id=AQAAAEDqilXKrM',
        icon: 'https://static.vecteezy.com/system/resources/previews/022/484/501/non_2x/google-play-store-icon-logo-symbol-free-png.png'
      },
      {
        name: 'Kobo',
        url: 'https://www.kobo.com/au/en/audiobook/kakaki-the-medicine-woman-1?srsltid=AfmBOorpiJjzoJsuHovDbn-2PpkeZ7GnE1lT_pyIqEkuCdyZWzGUtmrt',
        icon: 'https://www.pngitem.com/pimgs/m/32-323322_transparent-r-symbol-png-brand-logo-with-r.png'
      },
      {
        name: 'Apple Books',
        url: 'https://books.apple.com/ca/audiobook/kakaki-the-medicine-woman/id1857967024',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png'
      },
      {
        name: 'Booktopia',
        url: 'https://www.booktopia.com.au/kakaki-the-medicine-woman-dickson-lane/audiobook/9798260845622.html?srsltid=AfmBOoooGkoSQUsyRMXQSYEgNF2kRKJPh5fMViL2X3Bo7TvTEZIrjRAh',
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7dEjSxYPK1jxxN84MkwlqdyI68m8wUxC6wQ&s'
      }
    ]
  },
  {
    id: 2,
    title: 'THE 10 LITTLE INDIANS',
    author: 'DICKSON LANE',
    narrator: 'Morgan Freeman',
    price: 16.99,
    image: '/images/image4.png',
    rating: 4.6,
    duration: '6h 15m',
    description: 'Learn from the Masters of Moviemaking about writing screenplays.',
    comingSoon: true,
    platformLinks: [] // Empty for coming soon
  }
];

export default function AudioBookShop() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentBookId, setCurrentBookId] = useState(null);
  const [showPlatforms, setShowPlatforms] = useState({});
  const audioRef = useRef(null);

  const handlePlayPause = (bookId) => {
    const book = audiobooks.find(b => b.id === bookId);
    if (book.previewAudio) {
      if (currentBookId === bookId && isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        if (currentBookId !== bookId) {
          if (audioRef.current) {
            audioRef.current.pause();
          }
          setCurrentBookId(bookId);
          audioRef.current.src = book.previewAudio;
          audioRef.current.load();
        }
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    if (audioRef.current) {
      const seekTime = parseFloat(e.target.value);
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const togglePlatforms = (bookId) => {
    setShowPlatforms(prev => ({
      ...prev,
      [bookId]: !prev[bookId]
    }));
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
      });
      audio.addEventListener('ended', () => {
        setIsPlaying(false);
        setCurrentTime(0);
      });
    }

    return () => {
      if (audio) {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', () => {});
        audio.removeEventListener('ended', () => {});
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hidden audio element */}
      <audio ref={audioRef} className="hidden" />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-1">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold mb-4 tracking-tight">Immersive Audiobooks</h1>
          <p className="text-lg opacity-90 mb-6">Stories come alive with our professional narrations. Listen anytime, anywhere.</p>
        </div>
      </section>

      {/* Audiobooks Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Featured Audiobooks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {audiobooks.map((book) => (
            <div key={book.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Cover */}
                <div className="relative md:w-1/3 flex justify-center items-center p-6 bg-gray-50">
                  <img src={book.image} alt={book.title} className="h-64 object-contain rounded-lg shadow" />
                  {book.comingSoon && (
                    <span className="absolute top-4 left-4 bg-blue-700 text-white text-xs px-3 py-1 rounded-full">Coming Soon</span>
                  )}
                  
                  {/* Preview Audio Player - Only for Kakaki */}
                  {book.previewAudio && (
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-gray-700">Preview</span>
                        <span className="text-xs text-gray-500">{formatTime(currentTime)} / {formatTime(duration)}</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <input
                        type="range"
                        min="0"
                        max={duration || 100}
                        value={currentTime}
                        onChange={handleSeek}
                        className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600"
                      />
                      
                      {/* Play/Pause Button */}
                      <button
                        onClick={() => handlePlayPause(book.id)}
                        className={`mt-2 flex items-center justify-center w-full py-1 rounded-md transition-colors ${
                          currentBookId === book.id && isPlaying
                            ? 'bg-red-50 text-red-600 hover:bg-red-100'
                            : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                        }`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {currentBookId === book.id && isPlaying ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          )}
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium">
                          {currentBookId === book.id && isPlaying ? 'Pause Preview' : 'Play Preview'}
                        </span>
                      </button>
                    </div>
                  )}
                </div>
                
                {/* Details */}
                <div className="p-6 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{book.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">by {book.author}</p>
                    <p className="text-gray-700 text-sm mb-4"><span className="font-medium">Narrated by:</span> {book.narrator}</p>

                    <div className="flex items-center mb-4 space-x-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${i < Math.floor(book.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className={`ml-2 text-sm ${book.comingSoon ? 'text-gray-500' : 'text-gray-600'}`}>
                          {book.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>

                    <p className={`mb-6 ${book.comingSoon ? 'text-gray-500' : 'text-gray-700'}`}>
                      {book.description}
                    </p>
                  </div>

                  {/* Platform Links & Price */}
                  <div className="space-y-4">
                    {!book.comingSoon && book.platformLinks && book.platformLinks.length > 0 && (
                      <div className="border-t border-gray-200 pt-4">
                        <button
                          onClick={() => togglePlatforms(book.id)}
                          className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium mb-2"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                          Available on {book.platformLinks.length} platforms
                        </button>
                        
                        {showPlatforms[book.id] && (
                          <div className="grid grid-cols-2 gap-2 mb-3 animate-fadeIn">
                            {book.platformLinks.map((platform, index) => (
                              <a
                                key={index}
                                href={platform.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center p-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                              >
                                {platform.icon ? (
                                  <img src={platform.icon} alt={platform.name} className="h-4 w-4 mr-2 object-contain" />
                                ) : (
                                  <div className="h-4 w-4 mr-2 bg-blue-100 rounded"></div>
                                )}
                                <span className="text-xs font-medium text-gray-700 truncate">{platform.name}</span>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    <div className="flex justify-between items-center">
                      {book.comingSoon ? (
                        <div>
                          <span className="text-lg font-bold text-gray-400">Coming Soon</span>
                          <p className="text-xs text-gray-500 mt-1">Will be available on major platforms</p>
                        </div>
                      ) : (
                        <div>
                          {/* <span className="text-xl font-bold text-blue-700">${book.price.toFixed(2)}</span>
                          <p className="text-xs text-gray-600 mt-1">Starting price may vary by platform</p> */}
                        </div>
                      )}
                      
                      {book.comingSoon ? (
                        <button className="px-5 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition">
                          Notify Me
                        </button>
                      ) : (
                        <button
                          onClick={() => togglePlatforms(book.id)}
                          className="px-5 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition flex items-center"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          Get Audiobook
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How To Listen */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">How To Listen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'On Your Phone',
                desc: 'Download from Google Play, Apple Books, or Audible app',
                icon: '📱'
              },
              {
                title: 'On Your Computer',
                desc: 'Stream directly from your browser or desktop app',
                icon: '💻'
              },
              {
                title: 'Smart Speakers',
                desc: 'Connect with Alexa or Google Home devices',
                icon: '🔊'
              }
            ].map((f, i) => (
              <div key={i} className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">What Our Listeners Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "The narration brought the story to life in ways I couldn't imagine. James Earl Jones' voice is magical!",
                author: 'Sarah J.',
                book: 'KAKAKI, THE MEDICINE WOMAN',
                rating: 5
              },
              {
                quote: "I listen during my commute and it's transformed my daily drive into something I look forward to.",
                author: 'Michael T.',
                book: 'THE 10 LITTLE INDIANS',
                rating: 4
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow hover:shadow-md transition text-left">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`w-5 h-5 ${index < t.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
                <p className="text-sm text-gray-600">— <span className="font-medium">{t.author}</span>, Listener of {t.book}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm mb-2">© {new Date().getFullYear()} Immersive Audiobooks. All rights reserved.</p>
          <p className="text-xs opacity-75">Available on all major audiobook platforms</p>
        </div>
      </footer>
    </div>
  );
}