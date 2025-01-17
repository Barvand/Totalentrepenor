import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { tjenester } from "../../data/array.tjenester";
import Slider from "react-slick";

export default function TjenesterHomepage() {
  // Slider settings with custom prev and next arrows
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024, // For medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="container">
      <div className="flex justify-between">
        <h2 className="underline-color mb-2 text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
          Tjenester
        </h2>
        <Link className="text-sm text-black" to="/tjenester/">
          Se alle tjenester
        </Link>
      </div>

      {/* Slick Slider */}
      <Slider {...settings}>
        {tjenester.map((tjeneste) => (
          <div key={tjeneste.id} className="px-4">
            <Link
              to={`/tjenester/${encodeURIComponent(tjeneste.title)}`}
              className="bg-white shadow-lg overflow-hidden"
            >
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
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
}
