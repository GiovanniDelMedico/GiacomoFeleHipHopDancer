// Galleria.jsx
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery/Gallery";

export default function Galleria() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0b0c0e]">
      {/* Navbar */}
      <Navbar />

      {/* Contenuto principale */}
      <main className="flex-grow" data-aos="fade-up">
        <Gallery />
      </main>
    </div>
  );
}
