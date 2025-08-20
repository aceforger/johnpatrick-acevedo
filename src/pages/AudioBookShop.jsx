import React from 'react';

const audiobooks = [
  {
    id: 1,
    title: 'THE GHOST WALKER',
    author: 'DICKSON LANE',
    narrator: 'James Earl Jones',
    price: 19.99,
    image: '/image1.png',
    rating: 4.8,
    duration: '8h 42m',
    description: 'A haunting exploration of gender empowerment across native cultures in 19th century Canada.',
    comingSoon: true  // Added comingSoon flag
  },
  {
    id: 2,
    title: 'THE 10 LITTLE INDIANS',
    author: 'DICKSON LANE',
    narrator: 'Morgan Freeman',
    price: 16.99,
    image: '/image4.png',
    rating: 4.6,
    duration: '6h 15m',
    description: 'Learn from the Masters of Moviemaking about writing screenplays.',
    comingSoon: false  // Added comingSoon flag
  }
];

export default function AudioBookShop() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold mb-4 tracking-tight">Immersive Audiobooks</h1>
          <p className="text-lg opacity-90 mb-6">Stories come alive with our professional narrations. Listen anytime, anywhere.</p>
          {/* <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition">Browse Library</button> */}
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
                  <button 
                    className={`absolute bottom-4 right-4 p-3 rounded-full shadow-lg transition-colors duration-300 ${
                      book.comingSoon 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                    disabled={book.comingSoon}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
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
                      <div className={`flex items-center text-sm ${book.comingSoon ? 'text-gray-500' : 'text-gray-600'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {book.duration}
                      </div>
                    </div>

                    <p className={`mb-6 ${book.comingSoon ? 'text-gray-500' : 'text-gray-700'}`}>
                      {book.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    {book.comingSoon ? (
                      <span className="text-lg font-bold text-gray-400">Coming Soon</span>
                    ) : (
                      <span className="text-xl font-bold text-blue-700">${book.price.toFixed(2)}</span>
                    )}
                    <button
                      disabled={book.comingSoon}
                      className={`px-5 py-2 rounded-lg font-medium transition ${
                        book.comingSoon ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {book.comingSoon ? 'Notify Me' : 'Add to Library'}
                    </button>
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
                desc: 'Use our mobile app for listening on the go.',
                icon: '📱'
              },
              {
                title: 'On Your Computer',
                desc: 'Stream directly from your browser.',
                icon: '💻'
              },
              {
                title: 'Smart Speakers',
                desc: 'Connect with Alexa or Google Home.',
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
                book: 'THE GHOST WALKER'
              },
              {
                quote: "I listen during my commute and it's transformed my daily drive into something I look forward to.",
                author: 'Michael T.',
                book: 'THE 10 LITTLE INDIANS'
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow hover:shadow-md transition text-left">
                <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
                <p className="text-sm text-gray-600">— <span className="font-medium">{t.author}</span>, Listener of {t.book}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-6 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Immersive Audiobooks. All rights reserved.</p>
      </footer>
    </div>
  );
}
