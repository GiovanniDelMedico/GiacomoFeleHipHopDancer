// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

// Import delle tue pagine
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
      duration: 800, // durata animazioni in ms
      once: true,    // se true, l’animazione avviene solo una volta
    });
  }, []);
  return (
    <Router>
      <main>
      <Routes>
        {/* Rotte principali */}
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/galleria" element={<Galleria />} />
        <Route path="/esperienze" element={<Esperienze />} />
        <Route path="/classi" element={<Classi />} />
        <Route path="/scrivimi" element={<Scrivimi />} />

      </Routes>
      </main>
      <Footer/>
    </Router>
  );
}
