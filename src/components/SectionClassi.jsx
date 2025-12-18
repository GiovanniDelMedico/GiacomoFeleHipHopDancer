// src/components/SectionClassi.jsx
export default function SectionClassi() {
  return (
    <section
      className="flex justify-center items-center px-4 py-12 bg-[#0b0c0e] min-h-screen"
      data-aos="fade-up"
    >
      <div className="max-w-5xl w-full flex flex-col items-center text-center">
        {/* Immagine grande */}
        <div className="w-full mb-6">
          <img
            src="/FotoGiacomo/GiacomoFeleBallandoHipHop.webp" // <-- immagine da public/FotoGiacomo
            alt="Le mie classi"
            className="w-full h-96 object-cover rounded-xl shadow-lg md:object-[50%_30%]"
          />
        </div>

        {/* Testo */}
        <h2 className="text-3xl font-semibold text-gray-100 mb-4">
          Classi e lezioni private
        </h2>
        <p className="text-gray-400 text-base max-w-3xl mb-6">
          Partecipa alle mie classi di danza o prenota una lezione privata.
          Ogni sessione è pensata per migliorare la tua tecnica, esplorare
          nuovi stili e valorizzare la tua espressione personale.
        </p>

        {/* Bottone */}
        <a
          href="/scrivimi"
         className="w-full bg-gradient-to-r from-green-300 to-green-700 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          Scrivimi
        </a>
      </div>
    </section>
  );
}
