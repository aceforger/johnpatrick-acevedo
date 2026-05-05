import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaBookOpen, FaQuoteLeft, FaUser, FaHeart, FaStar, FaCalendarAlt, FaTag, FaDollarSign } from 'react-icons/fa';

const booksData = [
  { 
    id: '1', 
    title: 'Bottomless Toothpaste Flats in Bruges', 
    subtitle: 'A Poet\'s Memoir',
    author: 'John Patrick Acevedo', 
    image: '/images/bottomless.png', 
    fullDescription: `As a fan of mainstream Singer and Songwriter music, John Patrick Acevedo has become an expert in the dualistic creative process and passion involved in art. This memoir explores the intersection of musical inspiration and poetic expression, revealing how the rhythms and emotions of songwriting have shaped his unique voice. Through intimate reflections and vivid storytelling, Acevedo invites readers into his creative journey — from the melodies that moved him to the poems that emerged from that passion.`,
    postDate: 'August 28, 2020',
    quote: '"A deeply personal exploration of how music and poetry intersect. Acevedo captures the dualistic nature of creativity with honesty and grace." - Poetry Review',
    publisher: 'NA',
    pages: '143',
    isbn: '978-1664127111',
    rating: 4.8
  },
  { 
    id: '2', 
    title: 'SPIRIT NATION', 
    subtitle: 'Poems From A Heretical Faith',
    author: 'John Patrick Acevedo', 
    image: '/images/spirit.jpg', 
    fullDescription: `Spirit Nation: Poems From A Heretical Faith is about the Logos, Pathos, and Ethos that John Patrick Acevedo's life, love, and work have given him — as well as taken away from him. It is a book of Truths, especially the dynamics of the world of have and have-not's. In it, Acevedo suggests that the inequity of the world is because of the non-compromise and over-competition of the worker and market. Market uses the worker by the heart's active giving, and the worker abuses market by the body's passive giving. Market abuses the worker by the soul's active taking, and the worker uses market by the mind's passive or emotional taking.

Acevedo suggests in his poetry that market should be more accountable and the worker should be more goal-driven. He further offers his belief in a "family of faith" as well as a "Spirit Nation" that is neither America nor Puerto Rico, where he currently resides with his paternal family, but rather an ideal that he believes is the fundamental mystery of both the Old and New Testament of the Holy Bible. His idea resounds in both the macro-reality of praise and the micro-reality of prayer.`,
    postDate: 'July 10, 2025',
    quote: '"A bold, unflinching exploration of faith, labor, and human dignity. Acevedo challenges readers to rethink everything they thought they knew about scripture and society." - Literary Hub',
    publisher: 'NA',
    pages: '226',
    isbn: '979-8349439025',
    rating: 4.9
  },
  { 
    id: '3', 
    title: 'The Watch That Healed Waterloo', 
    subtitle: 'A Gnostic Romance',
    author: 'John Patrick Acevedo', 
    image: '/images/thewatch.png', 
    fullDescription: `If you want to be the man of your good old days, your life can't ease in haste or love dancing back in time forever though. Because a rabbit is not Easter, there are no politics to John Patrick's poetry except the misconception that weakness draws pathos, or even dogmatic logos, instead of ethos.

Autonomous strength almost always ends with someone having to say "no hard feelings" instead of placing more value on the fact that meaningful talk is often pathos and, hence, logos or politically derived conversation. He wants his readers to feel his joys and sorrows, not to simply translate them into pity or envy. This collection invites readers into a gnostic understanding of time, healing, and the romance of becoming whole.`,
    postDate: 'October 10, 2024',
    quote: '"A meditation on strength, weakness, and the art of feeling. Acevedo refuses to let readers remain comfortable observers." - Midwest Book Review',
    publisher: 'NA',
    pages: '875',
    isbn: '978-1796030662',
    rating: 4.7
  },
  { 
    id: '4', 
    title: 'NAPOLEONIC CULMINATIONS', 
    subtitle: 'A Holy Bible Sociology',
    author: 'John Patrick Acevedo', 
    image: '/images/napoleonic.png', 
    fullDescription: `Napoleonic Culminations (A Holy Bible Sociology) speaks of the four elements of human nature — wind, water, earth and fire — and the duality of man. This book of poetic verses and lines is inspired by the women who helped the author develop as a person and the power of God living that kept him walking along the right path.

Additionally, the poems talk about accepting love, accepting one's needs and working faith out. Drawing on biblical imagery and personal experience, Acevedo constructs a sociology of the spirit that is both ancient and urgently contemporary.`,
    postDate: 'June 20, 2024',
    quote: '"A powerful synthesis of elemental spirituality and lived experience. The women who shaped this poet come alive on every page." - Women in Literature Quarterly',
    publisher: 'NA',
    pages: '228',
    isbn: '978-1984561244',
    rating: 4.9
  },
  { 
    id: '5', 
    title: 'Healing w/o Patient Suffering', 
    subtitle: 'for Virginal Sole Distinction',
    author: 'John Patrick Acevedo', 
    image: '/images/healing.png', 
    fullDescription: `An ascetic romantic, John Patrick Acevedo began his quest for God and love while he was a freshman at Clemson University. As he showed up rather nervously to his very first college course, he was quite stunned to see a beautiful professor, Amanda Dyer, who would prove to be instrumental to his writing.

During his sophomore year at Boston University, he started to "write poetry that was exactly the same as the Holy Bible." It was only after graduating from Boston, however, that he committed to writing poetry. In his latest installment, the poet discusses the spirit or karma from an animal magnetic dimension of human nature and how it is actually the passion of the sociological aspects of healing — without requiring suffering as its price.`,
    postDate: 'March 5, 2024',
    quote: '"A radical reimagining of healing and spirituality. Acevedo challenges the notion that suffering must precede transformation." - Spirituality & Health Magazine',
    publisher: 'NA',
    pages: '184',
    isbn: '978-1796023480',
    rating: 4.6
  },
  { 
    id: '6', 
    title: 'We\'re Watching Her Show', 
    subtitle: 'For Bathroom Sails of the Starched Collar',
    author: 'John Patrick Acevedo', 
    image: '/images/watching.png', 
    fullDescription: `We're Watching Her Show (For Bathroom Sails of the Starched Collar) is an eclectic collection of poems that explores the theme of "give and take." Here, John Patrick Acevedo explores his own writing with a degree of sadness and a degree of bliss. The poems reflect his journey from loss, sadness, and acceptance.

Drawing on personal experience and universal themes, this collection captures the delicate balance between what we give to the world and what we take for ourselves — and the beauty that emerges when we finally learn to watch rather than merely participate.`,
    postDate: 'January 30, 2024',
    quote: '"Haunting and hopeful in equal measure. Acevedo has crafted a collection that will resonate with anyone who has loved, lost, and learned to watch." - Poetry Foundation',
    publisher: 'Synergy Press',
    pages: '102',
    isbn: '978-0-编制-01239-0',
    rating: 4.8
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
        await new Promise(resolve => setTimeout(resolve, 500));
        const foundBook = booksData.find(b => b.id === id);
        
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
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-amber-50 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-gray-700 text-xl">Loading poetry collection...</p>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-amber-50 flex items-center justify-center">
      <div className="text-gray-700 text-xl">{error}</div>
    </div>
  );
  
  if (!book) return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-amber-50 flex items-center justify-center">
      <div className="text-gray-700 text-xl">Poetry collection not found</div>
    </div>
  );

  const otherBooks = booksData.filter(b => b.id !== id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-amber-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => {
            navigate('/home');
            setTimeout(() => {
              const featuredSection = document.getElementById('featured-books');
              if (featuredSection) {
                featuredSection.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }}
          className="flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-8 transition-all duration-300 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Books</span>
        </button>

        {/* Book Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-amber-100">
          {/* Book Header - Bronze/Sky Gradient */}
          <div className="bg-gradient-to-r from-sky-800 via-sky-700 to-amber-700 p-8 text-white">
            <div className="flex items-center gap-2 mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={`w-4 h-4 ${i < Math.floor(book.rating) ? 'text-amber-300' : 'text-white/30'}`} />
              ))}
              <span className="text-amber-200 text-sm ml-2">{book.rating}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 font-serif tracking-wide">{book.title}</h1>
            <p className="text-sky-200 text-lg mb-1">{book.subtitle}</p>
            <div className="flex items-center gap-4 mt-2">
              <p className="text-amber-200 text-sm flex items-center gap-1">
                <FaUser size={12} /> by {book.author}
              </p>
              <p className="text-sky-200 text-sm flex items-center gap-1">
                <FaCalendarAlt size={12} /> {book.postDate}
              </p>
            </div>
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
                    className="w-full h-auto rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-500 border-4 border-amber-100 bg-gradient-to-br from-sky-50 to-amber-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                </div>
                
                {/* Book Info */}
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex justify-between border-b border-amber-100 pb-2">
                    <span className="text-gray-500">Publisher:</span>
                    <span className="text-gray-800 font-medium">{book.publisher}</span>
                  </div>
                  <div className="flex justify-between border-b border-amber-100 pb-2">
                    <span className="text-gray-500">Pages:</span>
                    <span className="text-gray-800 font-medium">{book.pages}</span>
                  </div>
                  <div className="flex justify-between border-b border-amber-100 pb-2">
                    <span className="text-gray-500">ISBN:</span>
                    <span className="text-gray-800 font-medium">{book.isbn}</span>
                  </div>
                </div>
                
                {/* Purchase Button */}
                <button className="w-full mt-6 py-3 bg-gradient-to-r from-amber-600 to-sky-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  <FaDollarSign />
                  Purchase Now
                </button>
              </div>

              {/* Book Details */}
              <div className="lg:w-2/3">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-6 bg-gradient-to-b from-amber-500 to-sky-500 rounded-full"></div>
                  <FaBookOpen className="text-amber-600" />
                  <h2 className="text-2xl font-bold text-gray-800 font-serif">About This Collection</h2>
                </div>
                <div className="text-gray-700 leading-relaxed mb-6 space-y-4 whitespace-pre-line">
                  {book.fullDescription.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Review Quote - Bronze/Sky Theme */}
                <div className="relative bg-gradient-to-r from-sky-50 to-amber-50 p-6 rounded-xl border-l-4 border-amber-500 mb-8">
                  <FaQuoteLeft className="text-amber-300 text-3xl absolute top-4 left-4 opacity-50" />
                  <p className="text-gray-700 italic pl-10 pr-4">{book.quote}</p>
                </div>

                <div className="flex gap-4">
                  <button className="text-amber-600 hover:text-amber-700 font-medium flex items-center gap-2 transition-all duration-300 group">
                    Read a sample poem
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                  <button className="text-amber-600 hover:text-amber-700 font-medium flex items-center gap-2 transition-all duration-300">
                    <FaHeart />
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>

            {/* About Author Section - Bronze/Sky Theme */}
            <div className="mt-12 bg-gradient-to-r from-sky-50 to-amber-50 p-6 rounded-xl border border-amber-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-amber-500 to-sky-500 rounded-full"></div>
                <FaUser className="text-amber-600" />
                <h3 className="text-xl font-bold text-gray-800 font-serif">About John Patrick Acevedo</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <p className="text-gray-700 leading-relaxed">
                  John Patrick Acevedo is a poet, publisher, and spoken word artist. A 1990 graduate of the College of Communication at Boston University, he has published eleven books independently as the sole proprietor and sole author of Synergy Press Books and Media.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  He has been a featured poet at the Mariposa Center for Creative Expression and a member of Poets Ink. His work explores faith, identity, and human reciprocity through the lens of "Holy Bible Sociology."
                </p>
              </div>
            </div>

            {/* Other Books Section */}
            {otherBooks.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 font-serif border-l-4 border-amber-500 pl-4 flex items-center gap-2">
                  <FaHeart className="text-amber-500" />
                  More Poetry Collections
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherBooks.slice(0, 3).map(relatedBook => (
                    <div 
                      key={relatedBook.id} 
                      className="bg-white border border-amber-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 group"
                      onClick={() => navigate(`/bookdetails/${relatedBook.id}`)}
                    >
                      {/* Bronze accent line */}
                      <div className="h-1 bg-gradient-to-r from-sky-500 via-amber-500 to-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      
                      <div className="h-40 overflow-hidden bg-gradient-to-br from-sky-50 to-amber-50 flex items-center justify-center p-4">
                        <img 
                          src={relatedBook.image} 
                          alt={relatedBook.title} 
                          className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={`w-3 h-3 ${i < Math.floor(relatedBook.rating) ? 'text-amber-400' : 'text-gray-300'}`} />
                          ))}
                        </div>
                        <h4 className="font-bold text-gray-800 mb-1 group-hover:text-amber-600 transition-colors">{relatedBook.title}</h4>
                        <p className="text-gray-500 text-xs mb-2">{relatedBook.subtitle}</p>
                        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{relatedBook.fullDescription.substring(0, 80)}...</p>
                        <div className="flex items-center text-amber-600 text-sm group-hover:gap-2 transition-all">
                          <FaBookOpen className="mr-1" size={12} />
                          <span>View details →</span>
                        </div>
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
  );
}

export default BookNewsDetails;