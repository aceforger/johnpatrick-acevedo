import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const PressRelease = ({ pressData }) => {
  const [selectedRelease, setSelectedRelease] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pressReleases, setPressReleases] = useState([]);

  useEffect(() => {
    if (pressData && pressData.length > 0) {
      setPressReleases(pressData);
    } else {
      // SINGLE PRESS RELEASE - SPIRIT NATION by JOHN PATRICK ACEVEDO
      const formattedReleases = [
        {
          id: 1,
          title: "Spirit Nation: Poems From A Heretical Faith — A Bold New Poetry Collection by John Patrick Acevedo",
          date: "December 15, 2025",
          excerpt: "With piercing insight and lyrical depth, John Patrick Acevedo explores the intersections of faith, identity, and human reciprocity through a radical new lens he calls 'Holy Bible Sociology.'",
          fullContent: `
            <h3>Synergy Press and Glasslink Solutions LLC Announce Spirit Nation: Poems From A Heretical Faith</h3>
            
            <p><strong>Guaynabo, Puerto Rico, UNITED STATES</strong> — Synergy Press and Glasslink Solutions LLC is proud to announce the release of <em>Spirit Nation: Poems from A Heretical Faith</em>, the debut full-length poetry collection by John Patrick Acevedo. With piercing insight and lyrical depth, Acevedo explores the intersections of faith, identity, and human reciprocity through a radical new lens he calls "Holy Bible Sociology."</p>
            
            <p><em>Spirit Nation</em> is now available through Synergy Press and will soon be available in select physical bookstores nationwide.</p>
            
            <h4>About the Book</h4>
            <p>In this collection, Acevedo reinterprets sacred texts by dividing the Old and New Testaments into opposing energies—war and peace, hate and pride against lust and love, hierarchical power and egalitarian debt as subjective and objective realities—presenting them not as contradictions but as essential dualities of the human spirit. His poetry navigates the sacred and the secular, calling readers to examine the forces that shape personal belief and collective society.</p>
            
            <p>"<em>Spirit Nation</em> is about the Logos, Pathos, and Ethos that my life, love, and work have given me—and taken from me," says Acevedo. "It's a book of truths, exploring the world of 'have and have-nots,' the tension between worker and market, and the eternal struggle for spiritual dignity."</p>
            
            <h4>About the Author</h4>
            <p><strong>John Patrick Acevedo</strong> is a poet, publisher, and spoken word artist. A 1990 graduate of the College of Communication at Boston University, he has published eleven books independently as the sole proprietor and sole author of Synergy Press Books and Media.</p>
            
            <p>Acevedo has been a featured poet at the Mariposa Center for Creative Expression and a member of Poets Ink. He has released a spoken word CD, <em>The Mad City Coffee Reading</em>, and produced the film short <em>Holy Bible Sociology! A Journey Into the Soul of John Patrick Acevedo</em>.</p>
            
            <h4>Availability</h4>
            <p><em>Spirit Nation: Poems From A Heretical Faith</em> is now available through Synergy Press at synergy-press.org.</p>
          `,
          image: "/images/spirit.jpg",
          type: "poetry_collection",
          bookTitle: "Spirit Nation: Poems From A Heretical Faith",
          author: "John Patrick Acevedo"
        }
      ];
      setPressReleases(formattedReleases);
    }
  }, [pressData]);

  const openModal = (release) => {
    setSelectedRelease(release);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const renderHTML = (htmlString) => {
    return { __html: htmlString };
  };

  return (
    <section id="press" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-center text-4xl font-serif text-gray-800 mb-16 relative">
          <span className="relative inline-block">
            Press Release
            <span className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-400"></span>
          </span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {pressReleases.map((release) => (
            <div 
              key={release.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer group"
              onClick={() => openModal(release)}
            >
              <div className="h-96 overflow-hidden relative bg-gradient-to-br from-indigo-50 to-blue-50">
                <img 
                  src={release.image} 
                  alt={release.title}
                  className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                    Poetry Collection
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-xl font-serif text-white line-clamp-2">
                    {release.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm text-green-600 font-medium">{release.date}</div>
                  <div className="text-xs text-gray-500 font-medium">
                    {release.author}
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-5 line-clamp-3">{release.excerpt}</p>
                <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-400 text-white font-medium rounded-lg transition-all duration-300 hover:opacity-90">
                  Read Full Press Release
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedRelease && (
          <div className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center p-5 backdrop-blur-sm">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button 
                  onClick={closeModal}
                  className="absolute top-6 right-6 text-white hover:text-gray-300 text-2xl z-10 bg-black/30 rounded-full p-2"
                >
                  <FaTimes />
                </button>
                <div className="h-64 bg-gradient-to-r from-blue-500 to-indigo-400 relative overflow-hidden">
                  <img 
                    src={selectedRelease.image} 
                    alt={selectedRelease.title}
                    className="w-full h-full object-contain bg-gradient-to-r from-blue-600 to-indigo-500 p-6"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="text-center p-5">
                      <div className="text-white/90 text-sm mb-2">{selectedRelease.date}</div>
                      <h3 className="text-2xl font-serif text-white mb-2">{selectedRelease.title}</h3>
                      <div className="text-emerald-200">by {selectedRelease.author}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={renderHTML(selectedRelease.fullContent)}
                />
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button onClick={closeModal} className="text-blue-600 hover:text-blue-700">
                    ← Back to Press Release
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section - Glasslink Solutions */}
        {/* <div className="mt-16 text-center max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
            <h3 className="text-2xl font-serif text-gray-800 mb-4">Media Inquiries</h3>
            <p className="text-gray-600 mb-6">
              Editors: For review copies or interview requests, contact Glasslink Solutions, LLC
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+18337887552" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
              >
                📞 (833) 788-7552
              </a>
              <a 
                href="mailto:mia.glasslinksolutions@gmail.com" 
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50"
              >
                ✉️ mia.glasslinksolutions@gmail.com
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Synergy Press | Guaynabo, Puerto Rico
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PressRelease;