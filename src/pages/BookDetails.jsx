import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaBookOpen, FaQuoteLeft } from 'react-icons/fa';

const mockBooks = [
  { 
    id: '1', 
    title: 'THE GHOST WALKER', 
    author: 'DICKSON LANE', 
    image: '/image1.png', 
    description: 'Ghost Walker is a haunting exploration of gender empowerment across native cultures and archetypes in 19th century Canada. The novel follows protagonist Eliza Blackwood as she navigates the spiritual and physical landscapes of indigenous communities. Through vivid prose and meticulous research, Lane brings to life forgotten histories and traditions.', 
    postDate: 'May 21, 2025',
    quote: '"A mesmerizing journey through forgotten histories. Lane masterfully blends the supernatural with profound cultural insights." - Cultural Reviews',
    relatedTopics: [
      { title: 'DICKSON LANE', link: 'More Information >' },
    ]
  },
  { 
    id: '2', 
    title: 'THE 10 LITTLE INDIANS (OF SUCCESSFUL SCREENPLAYS)', 
    author: 'DICKSON LANE', 
    image: '/image4.png', 
    description: 'Learn from the Masters of Moviemaking about writing screenplays. This comprehensive guide breaks down complex storytelling techniques into ten essential principles that will transform your writing. Each chapter analyzes a classic film structure, from Hitchcockian suspense to contemporary nonlinear narratives.', 
    postDate: 'August 18, 2021',
    quote: '"I couldn\'t put it down! The most practical screenwriting guide I\'ve encountered in years." - Film Monthly',
    relatedTopics: [
      { title: 'DICKSON LANE', link: 'More Information >' },
    ]
  }
];

function BookNewsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 700));
        const foundBook = mockBooks.find(b => b.id === id);
        
        if (foundBook) {
          setBook(foundBook);
        } else {
          setError('Book not found');
        }
      } catch (err) {
        console.error(err);
        setError('Failed to fetch book details');
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
      {/* Loading spinner using Tailwind */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-white text-xl">Loading book details...</p>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="text-white text-xl">{error}</div>
    </div>
  );
  
  if (!book) return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="text-white text-xl">Book not found</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-300 hover:text-white mb-8 transition-colors duration-300"
        >
          <FaArrowLeft className="mr-2" />
          <span>Back to Books</span>
        </button>

        {/* Book Card */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Book Header */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-8 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 font-serif tracking-wide">{book.title}</h1>
            <p className="text-amber-200 text-lg mb-1">by {book.author}</p>
            <p className="text-amber-300 text-sm">{book.postDate}</p>
          </div>

          {/* Book Content */}
          <div className="p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Book Cover */}
              <div className="lg:w-1/3">
                <div className="relative group">
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="w-full h-auto rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-500 border-4 border-blue-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                </div>
              </div>

              {/* Book Details */}
              <div className="lg:w-2/3">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 font-serif">Synopsis</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {book.description}
                </p>

                {/* Review Quote */}
                <div className="relative bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500 mb-8">
                  <FaQuoteLeft className="text-blue-300 text-3xl absolute top-4 left-4" />
                  <p className="text-gray-700 italic pl-10 pr-4">{book.quote}</p>
                </div>

                {/* Read More */}
                <button className="text-blue-700 hover:text-blue-900 font-medium flex items-center transition-colors duration-300">
                  Read more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* About Author Section */}
            <div className="mt-12 bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-serif border-b-2 border-blue-200 pb-2">About The Author</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {book.relatedTopics.map((topic, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="flex items-center justify-between p-4 hover:bg-blue-50 rounded-lg transition-colors duration-300">
                      <div>
                        <h4 className="font-medium text-gray-800">{topic.title}</h4>
                      </div>
                      <span className="text-blue-600 group-hover:text-blue-800 transition-colors duration-300">
                        {topic.link}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Books */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-6 font-serif border-b-2 border-blue-200 pb-2">More Books</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {mockBooks.filter(b => b.id !== id).slice(0, 2).map(relatedBook => (
                  <div 
                    key={relatedBook.id} 
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    onClick={() => navigate(`/bookdetails/${relatedBook.id}`)}
                  >
                    <div className="p-4">
                      <h4 className="font-bold text-gray-800 mb-2">{relatedBook.title}</h4>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{relatedBook.description}</p>
                      <div className="flex items-center text-blue-600 text-sm">
                        <FaBookOpen className="mr-2" />
                        <span>View details</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookNewsDetails;