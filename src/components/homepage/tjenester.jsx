import { Link } from "react-router-dom";
import { tjenester } from "../../data/array.tjenester";

export default function Tjenester() {
  return (
    <>
      <section className="container">
        <h2 className="underline-color mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Tjenester
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
          {tjenester.map((tjeneste) => (
            <Link
              key={tjeneste.id}
              to={`/tjenester/${encodeURIComponent(tjeneste.title)}`}
            >
              <div className="bg-white shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                {/* Image Section */}
                <div className="relative">
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
      </section>
    </>
  );
}

