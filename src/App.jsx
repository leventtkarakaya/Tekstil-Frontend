import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";
import About from "./Pages/About";
import OurCustomers from "./Shared/OurCustomers";
import HumanrResources from "./Shared/HumanrResources";
import ScrollTopBtn from "./Components/ScrollTopBtn";
function App() {
  return (
    <>
      <Navbar />
      <ScrollTopBtn />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkımızda" element={<About />} />
        <Route path="/musterilerimiz" element={<OurCustomers />} />
        <Route path="/insankaynaklari" element={<HumanrResources />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
