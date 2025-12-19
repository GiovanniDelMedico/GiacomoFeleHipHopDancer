import Navbar from "../components/Navbar";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Scrivimi() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_giaco",        // Service ID
        "template_uydof6u",     // Template ID
        e.target,               // Il form
        "0yvVVUKAxuCGzJ-ri"     // Public Key
      )
      .then(
        () => {
          setSuccess("Messaggio inviato con successo ✅");
          e.target.reset();
        },
        (error) => {
          console.error(error);
          setSuccess("Errore nell'invio ❌");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0c0e] items-center justify-center">
      {/* Navbar */}
      <Navbar />

      <section
        className="w-full max-w-6xl mx-auto px-4 py-16 bg-[#0b0c0e] text-gray-100 min-h-screen mt-4"
        data-aos="fade-up"
      >
        <h1 className="font-grace text-5xl font-bold text-center mb-12 text-green-600">
          Scrivimi
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-4">
          {/* Form contatti */}
          <div className="px-4 md:px-0">
            <form
              id="contact-form"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              {/* Nome */}
              <div>
                <label
                  htmlFor="nome"
                  className="block text-gray-300 font-semibold mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  className="w-full border border-gray-600 bg-[#16181c] rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Cognome */}
              <div>
                <label
                  htmlFor="cognome"
                  className="block text-gray-300 font-semibold mb-2"
                >
                  Cognome
                </label>
                <input
                  type="text"
                  id="cognome"
                  name="cognome"
                  required
                  className="w-full border border-gray-600 bg-[#16181c] rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-gray-600 bg-[#16181c] rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Messaggio */}
              <div>
                <label
                  htmlFor="messaggio"
                  className="block text-gray-300 font-semibold mb-2"
                >
                  Messaggio
                </label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  rows="5"
                  required
                  className="w-full border border-gray-600 bg-[#16181c] rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>

              {/* Bottone */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-300 to-green-700 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
                >
                  {loading ? "Invio..." : "Invia"}
                </button>
              </div>
            </form>

            {/* Feedback */}
            {success && (
              <p className="mt-4 text-center text-green-400">{success}</p>
            )}
          </div>

          {/* Immagine laterale */}
          <div className="flex justify-center mt-4">
            <img
              src={new URL("/FotoGiacomo/GiacomoGarage.webp", import.meta.url).href}
              alt="D.Gio"
              className="rounded-2xl shadow-lg object-cover h-[650px] w-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
