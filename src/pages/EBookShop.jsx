import React, { useState } from "react";

const ebooks = [
  {
    id: 1,
    title: "KAKAKI, THE MEDICINE WOMAN",
    author: "DICKSON LANE",
    image: "/images/image1.1.png",
    rating: 4.5,
    formats: ["EPUB"],
    description: "A haunting exploration of gender empowerment across native cultures in 19th century Canada.",
    comingSoon: false,
    stores: [
      {
        name: "Barnes & Noble",
        link: "https://www.barnesandnoble.com/w/kakaki-the-medicine-woman-dickson-lane/1148323092",
        icon: "📚"
      },
      {
        name: "bol.",
        link: "https://www.bol.com/nl/nl/p/kakaki-the-medicine-woman/9300000241093960/",
        icon: "𝒃ol."
      },
      {
        name: "Booktopia",
        link: "https://www.booktopia.com.au/kakaki-the-medicine-woman-dickson-lane/ebook/9798349561344.html?srsltid=AfmBOooz_uM3pnfFU7owlvrM3vJzcRvYAEWQrViMcRnVi82sefvNSONe",
        icon: "𝒃"
      }
    ]
  },
  {
    id: 2,
    title: "THE 10 LITTLE INDIANS",
    author: "DICKSON LANE",
    image: "/images/image4.png",
    rating: 4.2,
    formats: ["EPUB"],
    description: "Learn from the Masters of Moviemaking about writing screenplays.",
    comingSoon: false,
    stores: [
      {
        name: "Kobo",
        link: "https://www.kobo.com/ph/en/ebook/the-10-little-indians-of-successful-screenplays?srsltid=AfmBOopCYN4u4bAETBg2lZyP8q0sp-1f8sG-yb8_Svod_yhE3CbckI9v",
        icon: "🔵"
      },
      {
        name: "Everand",
        link: "https://www.everand.com/book/892856975/The-10-Little-Indians-of-Successful-Screenplays-Lessons-from-the-Masters-of-Moviemaking",
        icon: "&"
      },
      {
        name: "Booktopia",
        link: "https://www.booktopia.com.au/the-10-little-indians-of-successful-screenplays--dickson-lane/ebook/9798349519505.html?srsltid=AfmBOopv7eNCwyHvqw1O3G4lqi7Uto62fcesBgTPUR2IULyfp-DfyMe4",
        icon: "𝒃"
      }
    ]
  },
];

export default function EBookShop() {
  const [selectedEbook, setSelectedEbook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShopNow = (ebook) => {
    if (ebook.stores && !ebook.comingSoon) {
      setSelectedEbook(ebook);
      setIsModalOpen(true);
    }
  };

  const handleStoreSelect = (storeLink) => {
    window.open(storeLink, '_blank');
    setIsModalOpen(false);
    setSelectedEbook(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEbook(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-6 py-2 text-center relative z-10">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Discover Your Next Digital Escape
          </h1>
          <p className="text-lg text-indigo-100 max-w-1xl mx-auto">
            Instantly access captivating ebooks across genres. Read anywhere,
            anytime, on any device.
          </p>
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Digital Editions
          </h2>
          <p className="text-gray-600 mt-2">
            Handpicked stories available in multiple formats
          </p>
        </div>

        {/* EBooks Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {ebooks.map((ebook) => (
            <div
              key={ebook.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Cover */}
                <div className="relative md:w-1/3">
                  <img
                    src={ebook.image}
                    alt={ebook.title}
                    className="w-full h-64 md:h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-indigo-600 text-white text-xs px-2 py-1 rounded-lg shadow">
                    DIGITAL
                  </div>
                  {ebook.comingSoon && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="text-white font-bold bg-indigo-700 px-3 py-1 rounded">
                        COMING SOON
                      </span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {ebook.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                      by {ebook.author}
                    </p>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                      {ebook.description}
                    </p>
                  </div>

                  <div>
                    {/* Formats */}
                    <div className="mb-3 flex flex-wrap gap-2">
                      {ebook.formats.map((format) => (
                        <span
                          key={format}
                          className={`px-2 py-1 text-xs rounded-lg font-medium ${
                            ebook.comingSoon
                              ? "bg-gray-200 text-gray-500"
                              : "bg-indigo-100 text-indigo-700"
                          }`}
                        >
                          {format}
                        </span>
                      ))}
                    </div>

                    {/* Button */}
                    <div className="flex items-center justify-end">
                      <button
                        onClick={() => handleShopNow(ebook)}
                        disabled={ebook.comingSoon}
                        className={`px-6 py-3 text-sm font-semibold rounded-lg transition ${
                          ebook.comingSoon
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-indigo-600 text-white hover:bg-indigo-700"
                        }`}
                      >
                        {ebook.comingSoon ? "Coming Soon" : "Shop Now"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose EBooks?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Instant Access",
                description: "Start reading immediately after purchase.",
                icon: "📚",
              },
              {
                title: "Read Anywhere",
                description: "Access on mobile, tablet, or computer.",
                icon: "📱",
              },
              {
                title: "Cloud Library",
                description: "Your books are safe and accessible anytime.",
                icon: "☁️",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Store Selection Modal */}
      {isModalOpen && selectedEbook && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full mx-auto">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">
                  Choose Store
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 mt-2">
                Select where you'd like to purchase{" "}
                <span className="font-semibold text-indigo-600">
                  {selectedEbook.title}
                </span>
              </p>
            </div>

            {/* Store List */}
            <div className="p-6">
              <div className="space-y-3">
                {selectedEbook.stores.map((store, index) => (
                  <button
                    key={index}
                    onClick={() => handleStoreSelect(store.link)}
                    className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200 group"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{store.icon}</span>
                      <div className="text-left">
                        <div className="font-semibold text-gray-900 group-hover:text-indigo-700">
                          {store.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          Available in {selectedEbook.formats.join(", ")}
                        </div>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
              <p className="text-xs text-gray-500 text-center">
                You'll be redirected to the selected store to complete your purchase
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}