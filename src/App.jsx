import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";
import ScrollTopBtn from "./Components/ScrollTopBtn";
function App() {
  return (
    <>
      <Navbar />
      <ScrollTopBtn />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
