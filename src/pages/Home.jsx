import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero section */}
      <section className="relative min-h-screen pt-16 bg-[#0b0c0e]">
        {/* Immagine come background */}
        <img
          src={new URL("/FotoGiacomo/GiacomoGarage.webp", import.meta.url).href}
          alt="Giacomo Fele"
          className="absolute inset-0 w-full h-full max-w-6xl mx-auto px-4 object-cover"
        />

        {/* Testo centrale */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          {/* Contenitore con stessa larghezza della navbar */}
          <div className="w-full max-w-6xl mx-auto px-4 text-center text-white">
            <h1 className="font-grace text-6xl md:text-8xl font-bold mb-4">Giacomo Fele</h1>
            <h2 className=" font-grace text-4xl md:text-7xl font-light">
              Ballerino professionista di Hip Hop
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
