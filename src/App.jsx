import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;