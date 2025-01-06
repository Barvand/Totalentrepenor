import { AiOutlineBulb } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import { FaTools } from "react-icons/fa";

export default function SectionTwo() {
  return (
    <section className="bg-secondary w-full py-10 flex justify-center items-center h-full md:h-96">
      <div className="container flex justify-evenly flex-wrap gap-8">
        <div className="text-center flex flex-col items-center gap-3 max-w-xs">
          <FaTools className="text-5xl text-primary" />
          <h2 className="text-xl font-bold">Vi har lang og divers erfaring</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="text-center flex flex-col items-center gap-3 max-w-xs">
          <AiOutlineBulb className="text-5xl text-primary" />
          <h2 className="text-xl font-bold">Pålitelighet</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="text-center flex flex-col items-center gap-3 max-w-xs">
          <FaPencilAlt className="text-5xl text-primary" />
          <h2 className="text-xl font-bold">Ingeniørkompetanse</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
}

