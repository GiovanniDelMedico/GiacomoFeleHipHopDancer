// src/components/CardVerticale.jsx
export default function CardVerticale({ img, title, description }) {
  return (
    <section
      className="flex flex-col items-center pt-2 pb-10 px-4 bg-[#0b0c0e] max-h-screen"
      data-aos="fade-up"
    >
      <div className="relative bg-[#16181c] rounded-xl shadow-lg max-w-xs w-full h-[520px] transition-transform duration-300 hover:scale-105 hover:border hover:border-[var(--color-link)]">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />

        <h2 className="absolute -bottom-5 left-4 z-10 text-4xl font-semibold text-green-500 rounded-md">
          {title}
        </h2>
      </div>

      <p className="text-gray-400 text-center text-sm max-w-sm mt-10">
        {description}
      </p>
    </section>
  );
}
