import React, { useState, useEffect } from 'react';
import { FaTimes, FaNewspaper, FaCalendarAlt, FaUser, FaBookOpen } from 'react-icons/fa';

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
    <section id="press" className="py-20 bg-gradient-to-br from-sky-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-3">
            <span className="text-amber-600 text-sm font-semibold tracking-wider uppercase">✦ Latest News ✦</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 relative inline-block">
            <span className="relative">
              Press <span className="bg-gradient-to-r from-sky-600 to-amber-600 bg-clip-text text-transparent">Release</span>
              <span className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-amber-500 rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Official announcements and media coverage from Synergy Press
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {pressReleases.map((release) => (
            <div 
              key={release.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group border border-amber-100"
              onClick={() => openModal(release)}
            >
              {/* Bronze accent line */}
              <div className="h-1 bg-gradient-to-r from-sky-500 via-amber-500 to-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="h-96 overflow-hidden relative bg-gradient-to-br from-sky-100 to-amber-100">
                <img 
                  src={release.image} 
                  alt={release.title}
                  className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md">
                    <FaBookOpen className="inline mr-1 text-xs" /> Poetry Collection
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-sky-900/90 via-sky-900/50 to-transparent p-6">
                  <h3 className="text-xl font-serif text-white line-clamp-2 group-hover:text-amber-300 transition-colors">
                    {release.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-medium">
                    <FaCalendarAlt className="text-amber-500" />
                    {release.date}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-medium bg-amber-50 px-3 py-1 rounded-full">
                    <FaUser className="text-amber-500" />
                    {release.author}
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-5 line-clamp-3">{release.excerpt}</p>
                <button className="w-full py-3 bg-gradient-to-r from-amber-600 to-sky-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:opacity-90 flex items-center justify-center gap-2 group">
                  <FaNewspaper className="group-hover:rotate-12 transition" />
                  Read Full Press Release
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal - Bronze/Sky Theme */}
        {isModalOpen && selectedRelease && (
          <div className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center p-5 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button 
                  onClick={closeModal}
                  className="absolute top-6 right-6 text-white hover:text-amber-300 text-2xl z-10 bg-black/30 rounded-full p-2 transition-all hover:bg-amber-600/50"
                >
                  <FaTimes />
                </button>
                <div className="h-64 bg-gradient-to-r from-sky-600 via-sky-500 to-amber-500 relative overflow-hidden">
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10"></div>
                  <div className="absolute top-10 right-10 w-32 h-32 bg-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-10 left-10 w-32 h-32 bg-sky-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                  
                  <img 
                    src={selectedRelease.image} 
                    alt={selectedRelease.title}
                    className="w-full h-full object-contain bg-gradient-to-r from-sky-600 to-amber-500 p-6 relative z-10"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <div className="text-center p-5">
                      <div className="flex items-center justify-center gap-2 text-amber-200 text-sm mb-2">
                        <FaCalendarAlt />
                        {selectedRelease.date}
                      </div>
                      <h3 className="text-2xl font-serif text-white mb-2 max-w-2xl">{selectedRelease.title}</h3>
                      <div className="inline-flex items-center gap-2 px-4 py-1 bg-amber-500/30 backdrop-blur-sm rounded-full text-amber-100 text-sm">
                        <FaUser size={12} />
                        by {selectedRelease.author}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-sky-700 prose-headings:font-serif prose-strong:text-amber-700 prose-a:text-amber-600 prose-em:text-sky-600"
                  dangerouslySetInnerHTML={renderHTML(selectedRelease.fullContent)}
                />
                <div className="mt-8 pt-6 border-t border-amber-200 flex justify-between items-center">
                  <button 
                    onClick={closeModal} 
                    className="text-amber-600 hover:text-amber-700 font-semibold flex items-center gap-2 transition-colors"
                  >
                    ← Back to Press Release
                  </button>
                  <button 
                    onClick={() => window.open('/featured', '_blank')}
                    className="px-4 py-2 bg-gradient-to-r from-amber-600 to-sky-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition"
                  >
                    Explore the Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PressRelease;