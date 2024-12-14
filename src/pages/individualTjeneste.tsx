import { useParams } from "react-router-dom";
import { tjenester, Tjeneste} from "../data/array.tjenester";


function TjenestePage() {
  // Define the shape of the route parameters
  const { title } = useParams<{ title: string }>(); // Expect `title` to be a string

  // Find the service matching the title in the URL
  const tjeneste = tjenester.find(
    (t: Tjeneste) => t.title === decodeURIComponent(title || "")

  );

  if (!tjeneste) {
    return <div>Service not found</div>; // Handle case where service is not found
  }

  return (
    <div className="container mt-5 h-screen">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6">
        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
          <img
            className="w-full h-full object-cover"
            src={tjeneste.image[0]?.url || ""}
            alt={tjeneste.image[0]?.alt || "Image"}
          />
        </div>
        <div className="tjeneste-text">
          <h1>{tjeneste.title}</h1>
          <p>{tjeneste.description}</p>
        </div>
      </div>
    </div>
  );
}

export default TjenestePage;
