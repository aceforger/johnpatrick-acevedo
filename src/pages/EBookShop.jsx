import React from "react";

const ebooks = [
  {
    id: 1,
    title: "THE GHOST WALKER",
    author: "DICKSON LANE",
    price: 14.99,
    image: "/image1.png",
    rating: 4.5,
    formats: ["PDF", "EPUB", "MOBI"],
    description:
      "A haunting exploration of gender empowerment across native cultures in 19th century Canada.",
    comingSoon: true,
  },
  {
    id: 2,
    title: "THE 10 LITTLE INDIANS",
    author: "DICKSON LANE",
    price: 12.99,
    image: "/image4.png",
    rating: 4.2,
    formats: ["PDF", "EPUB"],
    description:
      "Learn from the Masters of Moviemaking about writing screenplays.",
    comingSoon: false,
  },
];

export default function EBookShop() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-6 py-5 text-center relative z-10">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Discover Your Next Digital Escape
          </h1>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
            Instantly access captivating ebooks across genres. Read anywhere,
            anytime, on any device.
          </p>
          {/* <button className="mt-6 px-8 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow-md hover:bg-gray-100 transition">
            Browse Collection
          </button> */}
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

                    {/* Price + Button */}
                    <div className="flex items-center justify-between">
                      {ebook.comingSoon ? (
                        <span className="text-lg font-bold text-gray-400">
                          Coming Soon
                        </span>
                      ) : (
                        <div>
                          <span className="text-2xl font-bold text-gray-900">
                            ${ebook.price.toFixed(2)}
                          </span>
                          <span className="ml-2 text-sm text-gray-400 line-through">
                            ${(ebook.price * 1.4).toFixed(2)}
                          </span>
                        </div>
                      )}
                      <button
                        disabled={ebook.comingSoon}
                        className={`px-4 py-2 text-sm font-semibold rounded-lg transition ${
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

        {/* Newsletter */}
        <div className="mt-24 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl shadow-xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-2">Get Free EBook Samples</h2>
          <p className="text-indigo-100 mb-6">
            Subscribe to our newsletter for exclusive free chapters and updates.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
              Get Samples
            </button>
          </div>
          <p className="text-xs text-indigo-200 mt-3">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
