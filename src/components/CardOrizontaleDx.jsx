// src/components/CardOrizzontaleDx.jsx
export default function CardOrizzontaleDx({ img, title, description }) {
  return (
    <section className="flex justify-center px-4 bg-[#0b0c0e]">
      {/* Card orizzontale grande */}
      <div className="rounded-xl shadow-lg max-w-2xl w-full flex flex-col md:flex-row overflow-hidden">
        {/* Testo a sinistra */}
        <div className="md:w-1/2 w-full p-6 flex flex-col justify-center order-2 md:order-1">
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">{title}</h2>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>

        {/* Immagine a destra */}
        <div className="md:w-1/2 w-full h-64 md:h-auto transition-transform duration-300 hover:scale-105 hover:border hover:border-[var(--color-link)] order-1 md:order-2">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
