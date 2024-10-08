import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";
import About from "./Pages/About";
import OurCustomers from "./Pages/OurCustomers";
import HumanrResources from "./Pages/HumanrResources";
import Gallery from "./Pages/Gallery";
import ProductionGuide from "./Pages/ProductionGuide";
import QualityPage from "./Pages/QualityPage";
import Colletion from "./Pages/Collection";
import ScrollTopBtn from "./Components/ScrollTopBtn";
import OurStoresPage from "./Pages/OurStoresPage";
import IsgPage from "./Pages/IsgPage";
import SupplyPage from "./Pages/SupplyPage";
import ContactPage from "./Pages/ContactPage";
function App() {
  const currentLanguage = localStorage.getItem("i18nextLng");
  if (currentLanguage === "tr-TR") {
    localStorage.setItem("i18nextLng", "tr");
  }
  return (
    <>
      <Navbar />
      <ScrollTopBtn />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkımızda" element={<About />} />
        <Route path="/musterilerimiz" element={<OurCustomers />} />
        <Route path="/insankaynaklari" element={<HumanrResources />} />
        <Route path="/uretimtesisi" element={<ProductionGuide />} />
        <Route path="/galeri" element={<Gallery />} />
        <Route path="/koleksiyon" element={<Colletion />} />
        <Route path="/kalite" element={<QualityPage />} />
        <Route path="/magazalarimiz" element={<OurStoresPage />} />
        <Route path="/isg" element={<IsgPage />} />
        <Route path="/tedarik" element={<SupplyPage />} />
        <Route path="/iletisim" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
