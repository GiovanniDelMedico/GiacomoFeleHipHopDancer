// src/App.jsx
import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Galleria from "./pages/Galleria";
import Esperienze from "./pages/Esperienze";
import Classi from "./pages/Classi";
import Scrivimi from "./pages/Scrivimi";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <HashRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/galleria" element={<Galleria />} />
          <Route path="/esperienze" element={<Esperienze />} />
          <Route path="/classi" element={<Classi />} />
          <Route path="/scrivimi" element={<Scrivimi />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
