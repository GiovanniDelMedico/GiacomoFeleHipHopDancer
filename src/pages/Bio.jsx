// src/pages/Bio.jsx

import Navbar from "../components/Navbar";
import CardOrizzontaleSx from "../components/CardOrizzontaleSx";

export default function Bio() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0b0c0e]">
      {/* Navbar */}
      <Navbar />

      {/* Contenuto Bio */}
      <main className="flex-1 flex flex-col items-center justify-start pt-20 px-6 ">
        <h1 className="font-grace text-5xl font-bold text-green-600 mb-8"  data-aos="fade-up"   >Bio</h1>

        {/* Card Verticale */}
        <CardOrizzontaleSx
          img={new URL("/FotoGiacomo/GiacomoFeleposacrew.webp", import.meta.url).href}
          title="Giacomo Fele"
          data-aos="fade-up"
          description="Giacomo Fele (1994), originario di Castel San Pietro Terme (BO), è un ballerino di danza Hip Hop che ha intrapreso un percorso di formazione professionale presso la Juste Debout School di Parigi tra il 2014 e il 2018. La sua crescita artistica è stata arricchita da esperienze in compagnie internazionali e da stage con ballerini proffessionisti della scena Hip Hop, consolidando una solida base tecnica e culturale."
        />
      </main>
    </div>
  );
}
