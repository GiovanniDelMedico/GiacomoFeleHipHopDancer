// src/components/CardCalendario.jsx
export default function CardCalendario({ giorno, lezioni }) {
  return (
    <div
      className="w-64 bg-white rounded-xl shadow-lg p-6 border border-gray-300 text-center md:hover:scale-110"
      role="listitem"
    >
      <h3 className="text-3xl font-bold text-green-700 mb-4 font-covered">
        {giorno}
      </h3>

      {lezioni.map((lezione, index) => (
        <div key={index}>
          <p className="text-gray-700 text-sm font-semibold">{lezione.orario}</p>
          <p className="text-blue-600 text-sm font-semibold hover:underline mt-2">
            <a
              href={lezione.link}
              target="_blank"
              rel="noopener noreferrer"
              title={`Visualizza ${lezione.scuola} su Google Maps`}
            >
              {lezione.scuola}
            </a>
          </p>
          {index !== lezioni.length - 1 && (
            <hr className="border-gray-400 my-5" />
          )}
        </div>
      ))}
    </div>
  );
}
