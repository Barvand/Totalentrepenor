import { Carousel, IconButton } from "@material-tailwind/react";

export default function CarouselCustomArrows() {
  return (
    <div className="carousel-height">
      <Carousel
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="gray"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="gray"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        <div className="flex justify-center items-center flex-col carousel-bg-img-1 text-center carousel-height">
          <div className="isolate text-white flex flex-col gap-2">
            <h1> Begyn med bygging nå</h1>
            <button className="p-4 btn text-black font-bold py-2 bg-secondary rounded-md hover:bg-yellow-700 transition duration-200 cursor-pointer">
              {" "}
              RING OSS{" "}
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col carousel-bg-img-1 text-center carousel-height">
          <h1> Begyn med bygging na </h1>
          <p className="py-2"> Ring oss </p>
        </div>
        <div className="flex justify-center items-center flex-col carousel-bg-img-1 text-center carousel-height">
          <h1> Begyn med bygging na </h1>
          <p className="py-2"> Ring oss </p>
        </div>
      </Carousel>
    </div>
  );
}
