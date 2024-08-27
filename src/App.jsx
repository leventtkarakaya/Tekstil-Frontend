import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import ScrollTopBtn from "./Components/ScrollTopBtn";
import Home from "./Pages/Home";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ScrollTopBtn />
    </>
  );
}

export default App;
