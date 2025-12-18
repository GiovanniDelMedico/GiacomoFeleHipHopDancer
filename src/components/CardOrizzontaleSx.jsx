// src/components/CardOrizzontaleSx.jsx
export default function CardOrizzontaleSx({ img, title, description, ...props }) {
  return (
    <section
      {...props} // <-- qui propaghi data-aos e qualsiasi altra prop
      className="flex justify-center px-4 bg-[#0b0c0e]"
    >
      {/* Card orizzontale grande */}
      <div className="rounded-xl shadow-lg max-w-2xl w-full flex flex-col md:flex-row overflow-hidden ">
        {/* Immagine a sinistra */}
        <div className="md:w-1/2 w-full h-64 md:h-auto transition-transform duration-300 hover:scale-105">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Testo a destra */}
        <div className="md:w-1/2 w-full p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">{title}</h2>
          <p className="text-gray-400 text-md">{description}</p>
        </div>
      </div>
    </section>
  );
}
