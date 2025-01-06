import { Link } from "react-router-dom";
import { tjenester } from "../data/array.tjenester";

export default function Footer() {
  return (
    <footer className="bg-black p-5">
      <div className="container flex flex-col items-center md:flex-row md:justify-between md:items-start flex-wrap gap-8 text-center md:text-left">
        {/* Kontakt Section */}
        <div className="flex flex-col gap-2">
          <h3 className="underline-color text-white text-xl">Kontakt</h3>
          <p className="text-sm">Lægdene 11, 5096, Bergen</p>
          <p className="text-sm">40580085</p>
          <p className="text-sm">Post@kgn.no</p>
          <p className="text-sm">Org nr: 933886328 MVA</p>
        </div>

        {/* Om oss Section */}
        <div className="flex flex-col gap-1">
          <h3 className="underline-color text-white text-xl">Om oss</h3>
          <p className="text-sm">Lægdene 11, 5096, Bergen</p>
          <p className="text-sm">40580085</p>
          <p className="text-sm">Org nr: 933886328 MVA</p>
        </div>

        {/* Tjenester Section */}
        <div className="flex flex-col gap-2">
          <h3 className="underline-color text-white text-xl">Tjenester</h3>
          {tjenester.map((tjeneste, index) => (
            <Link
              key={index}
              to={`/tjenester/${encodeURIComponent(tjeneste.title)}`}
              className="text-sm hover:underline hover:decoration-accent"
            >
              {tjeneste.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
