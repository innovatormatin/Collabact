import { Routes, Route } from "react-router-dom";
import {
  Home,
  BusinessesOffer,
  SalesPartnerOffer,
  About,
  FAQ,
  Blog,
  Contact,
} from "./pages";
import { Navbar, Footer } from "./components";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ouroffer/businessesoffer" element={<BusinessesOffer />} />
        <Route path="ouroffer/salespartneroffer" element={<SalesPartnerOffer />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
