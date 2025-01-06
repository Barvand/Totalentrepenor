import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./pages";
import Layout from "./components/layout";
import KontaktPage from "./pages/kontakt";
import ReferanserPage from "./pages/referanser";
import TjenestePage from "./pages/individualTjeneste";
import ScrollToTop from "./features/scrollToTop";
import AllServicesPage from "./pages/servicePage";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/tjenester" element={<AllServicesPage />} />
          <Route path="/referanser" element={<ReferanserPage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route path="/tjenester/:title" element={<TjenestePage />} />
        </Route>
      </Routes>
    </Router>
  );
}