import MailIcon from "./icons/mail-icon";
import OrganizationIcon from "./icons/organization";
import PhoneIcon from "./icons/phone-icon";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="bg-primary">
      <div className="container bg-primary text-white">
        <nav className="w-full">
          <Link className=" flex" to="/">
            <div className="logo logo-decoration">
              <h1 className="logo">TOTAL</h1>
              <h1 className="logo">Entreprenør</h1>
            </div>
          </Link>
          <div className="navigation-links font-bold">
            <Link
              className="hover:underline decoration-accent"
              to="/tjenester/"
            >
              Tjenester
            </Link>
            <Link className="hover:underline decoration-accent" to="/kontakt/">
              Kontakt
            </Link>
          </div>
        </nav>
      </div>
      <div className="contact-navigation bg-black box-shadow">
        <div className="container flex justify-end gap-5">
          <div className="contact-navigation-decoration flex gap-1">
            <PhoneIcon />
            <p className="font-bold hover:underline decoration-accent cursor-pointer">
              +47555555
            </p>
          </div>
          <div className="contact-navigation-decoration flex gap-1">
            <MailIcon />
            <p className="font-bold">post@kgn.no</p>
          </div>
          <div className="contact-navigation-decoration flex gap-1">
            <OrganizationIcon />
            <p className="font-bold">Org.933886328</p>
          </div>
        </div>
      </div>
    </div>
  );
}
