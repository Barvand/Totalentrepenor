import { Link } from "react-router-dom";
import { tjenester } from "../../data/array.tjenester";
import { useState } from "react";

export default function Tjenester() {
  const [visibleItemCount, setVisibleItemCount] = useState(6);
  const [displayedData, setDisplayedData] = useState(
    tjenester.slice(0, visibleItemCount)
  );

  const handleLoadMore = () => {
    setVisibleItemCount((prevCount) => prevCount + 5);

    setDisplayedData(tjenester.slice(0, visibleItemCount + 4));
  };

  return (
    <>
      <section className="container">
        <h2 className="underline-color mb-2 text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
          Tjenester
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {displayedData.map((tjeneste) => (
            <Link
              key={tjeneste.id}
              to={`/tjenester/${encodeURIComponent(tjeneste.title)}`}
            >
              <div className="bg-white shadow-lg overflow-hidden">
                {/* Image Section */}
                <div className="relative transform transition-transform duration-300 hover:scale-105">
                  <img
                    src={tjeneste.image[0].url}
                    alt={tjeneste.image[0].alt}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                </div>

                {/* Content Section */}
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 underline-color">
                    {tjeneste.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{tjeneste.description}</p>
                </div>

                {/* Action Button */}
                <div className="p-4">
                  <div
                    className="flex items-center gap-2 w-full py-2 p-2 bg-primary text-white rounded-md hover:bg-blue-700 transition duration-200 cursor-pointer"
                    role="button"
                    title={`Learn more about ${tjeneste.title}`}
                  >
                    Learn More
                    <span className="material-icons-outlined">east</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {tjenester.length > 0 && visibleItemCount < tjenester.length && (
          <button
            className="btn bg-black rounded text-white"
            onClick={handleLoadMore}
          >
            Se al tjenester
          </button>
        )}
      </section>
    </>
  );
}
