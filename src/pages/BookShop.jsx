import React, { useState } from 'react';

const books = [
  {
    id: 1,
    title: 'THE GHOST WALKER',
    author: 'DICKSON LANE',
    image: '/image1.png',
    rating: 4.5,
    description: 'A haunting exploration of gender empowerment across native cultures in 19th century Canada.',
    formats: [
      { retailer: 'Amazon', link: 'https://www.amazon.com/dp/EXAMPLE2' },
      { retailer: 'Ingram', link: 'https://www.ingramspark.com/EXAMPLE3' },
      { retailer: 'Barnes & Noble', link: 'https://www.barnesandnoble.com/EXAMPLE4' }
    ],
    comingSoon: true
  },
  {
    id: 2,
    title: 'THE 10 LITTLE INDIANS',
    author: 'DICKSON LANE',
    image: '/image4.png',
    rating: 4.2,
    description: 'Learn from the Masters of Moviemaking about writing screenplays.',
    formats: [
      { retailer: 'Amazon', link: 'https://www.amazon.com/Little-Indians-Successful-Screenplays-Moviemaking/dp/B0FJYN6Q27' },
      { retailer: 'Barnes & Noble', link: 'https://www.barnesandnoble.com/w/the-10-little-indians-dickson-lane/1139918093' },
    ],
    comingSoon: false
  }
];

export default function BookShop() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Dickson Lane's Collection</h1>
          <p className="text-lg text-gray-600">Discover captivating stories from a master storyteller</p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {books.map((book) => (
            <div key={book.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
              <div className="md:flex">
                
                {/* Book Cover */}
                <div className="relative flex-shrink-0 bg-gray-100 flex items-center justify-center p-6 md:p-8">
                  <img className="h-64 w-48 object-contain rounded-lg shadow-md" src={book.image} alt={book.title} />
                  {book.comingSoon && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg">
                      <span className="bg-indigo-600 text-white px-3 py-1 rounded-lg font-bold text-sm">COMING SOON</span>
                    </div>
                  )}
                </div>
                
                {/* Book Details */}
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    {/* Rating */}
                    <div className="flex items-center mb-2">
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
                      <span className="ml-2 text-sm text-gray-600">{book.rating.toFixed(1)}</span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-1">{book.title}</h2>
                    <p className="text-sm text-gray-500 mb-4">by {book.author}</p>
                    <p className="text-gray-700 mb-6 text-sm">{book.description}</p>
                  </div>

                  <button
                    onClick={() => openModal(book)}
                    className={`w-full px-4 py-2 font-medium rounded-lg transition ${
                      book.comingSoon
                        ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                        : 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700'
                    }`}
                    disabled={book.comingSoon}
                  >
                    {book.comingSoon ? 'Coming Soon' : 'Shop Now'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">More Books Coming Soon!</h2>
          <p className="text-gray-600 mb-6">Sign up to be notified when we release new titles</p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-r-lg hover:bg-indigo-700 transition">
              Notify Me
            </button>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && selectedBook && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal}></div>
            
            {/* Modal Card */}
            <div className="relative z-10 w-full max-w-lg mx-auto">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden">
                
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-indigo-500 to-blue-600">
                  <h3 className="text-lg font-semibold text-white">{selectedBook.title}</h3>
                  <button onClick={closeModal} className="text-white hover:text-gray-200 transition">
                    ✕
                  </button>
                </div>

                {/* Body */}
                <div 
                  className="p-6 bg-cover bg-center relative"
                  style={{ 
                    backgroundImage: 'url("https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1600&q=80")' 
                  }}
                >
                  <div className="absolute inset-0 bg-black/30 rounded-b-2xl"></div>

                  <div className="relative space-y-4">
                    {selectedBook.formats.map((format, index) => (
                      <a 
                        key={index}
                        href={format.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-5 py-4 border border-white/30 bg-white/80 backdrop-blur-md rounded-xl hover:bg-white transition duration-300 shadow-lg"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-900">{format.retailer}</span>
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end">
                  {/* <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
                  >
                    Close
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
