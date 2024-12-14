import MailIcon from "./icons/mail-icon";
import OrganizationIcon from "./icons/organization";
import PhoneIcon from "./icons/phone-icon";
import { Link } from "react-router-dom";
import WebsiteLogo from "./icons/totalentrepenørlogo";

export default function Navigation() {
  return (
    <>
      <div className="container">
        <nav className="w-full">
          <Link className=" flex" to="/">
            <WebsiteLogo />
            <div className="logo">
              <h1 className="logo">TOTAL</h1>
              <h1 className="logo">Entrepenør</h1>
            </div>
          </Link>
          <div className="navigation-links font-bold">
            <Link className="hover:underline" to="/tjenester/">
              Tjenester
            </Link>
            <Link className="hover:underline" to="/referanser/">
              Referanser
            </Link>
            <Link className="hover:underline" to="/kontakt/">
              Kontakt
            </Link>
          </div>
        </nav>
      </div>
      <div className="contact-navigation bg-primary box-shadow">
        <div className="container flex justify-end gap-5">
          <div className="contact-navigation-decoration flex gap-1">
            <PhoneIcon />
            <p className="font-bold">+47555555</p>
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
    </>
  );
}
