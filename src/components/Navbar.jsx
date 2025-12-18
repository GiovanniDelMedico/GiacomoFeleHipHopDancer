import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Blocca lo scroll del body quando il menu è aperto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Chiudi cliccando ovunque sull'overlay tranne che sui link
  const handleOverlayClick = (e) => {
    if (!e.target.closest("a")) {
      setIsOpen(false);
    }
  };

  return (
    <header className="bg-[#0b0c0e] text-gray-200 border-b border-gray-800 fixed top-0 w-full z-50">
      <nav className="mx-auto w-full max-w-6xl flex items-center justify-between p-4">
        {/* LEFT: logo */}
        <Link to="/" className=" font-grace text-3xl font-semibold text-white hover:text-green-500">
          Giacomo Fele
        </Link>

        {/* CENTER: link (desktop) */}
        <ul className="hidden md:flex flex-1 justify-center space-x-12 text-sm">
          {[
            ["Home", "/"],
            ["Bio", "/bio"],
            ["Galleria", "/galleria"],
            ["Esperienze", "/esperienze"],
            ["Classi", "/classi"],
            ["Scrivimi", "/scrivimi"],
          ].map(([label, path]) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `hover:text-green-400 ${
                    isActive ? "text-green-600 font-medium" : "text-gray-400"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* RIGHT: icone social (desktop) */}
        <div className="hidden md:flex items-center space-x-4 text-gray-400">
          {/* Mail */}
          <a
            href="mailto:giacomofele@virgilio.it"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Invia email"
            className="hover:text-green-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 h-6 fill-current"
            >
              <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 
                21.49 48 48 48h416c26.51 0 48-21.49 
                48-48V112c0-26.51-21.49-48-48-48zm0 
                64l-208 128L48 128V112l208 128 208-128v16z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/giaco_fl94_uc/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Apri Instagram"
            className="hover:text-green-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-6 h-6 fill-current"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 
                114.9S160.5 370.8 224.1 370.8 339 319.5 
                339 255.9 287.7 141 224.1 141zm0 
                186.6c-39.6 0-71.7-32.1-71.7-71.7 
                s32.1-71.7 71.7-71.7 71.7 32.1 
                71.7 71.7-32.1 71.7-71.7 71.7zm146.4-194.3c0 
                14.9-12.1 27-27 27s-27-12.1-27-27 
                12.1-27 27-27 27 12.1 27 27zm76.1 
                27.2c-1.7-35.7-9.9-67.3-36.2-93.5S365.7 
                18.1 330 16.4C293.9 14.6 154.1 14.6 
                118 16.4 82.3 18.1 50.7 26.3 24.5 
                52.5S-1.7 82.3.1 118.4C1.9 154.5 
                1.9 293.5.1 329.6c-1.7 35.7 6.5 67.3 
                32.8 93.5s57.8 34.5 93.5 36.2c36.1 
                1.8 175.9 1.8 212 0 35.7-1.7 
                67.3-9.9 93.5-36.2s34.5-57.8 
                36.2-93.5c1.8-36.1 1.8-175.9 
                0-212zM398.8 388c-7.8 19.6-22.9 
                34.7-42.6 42.6-29.5 11.7-99.5 
                9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 
                9-132.1c7.8-19.6 22.9-34.7 
                42.6-42.6 29.5-11.7 99.5-9 
                132.1-9s102.7-2.6 132.1 
                9c19.6 7.8 34.7 22.9 
                42.6 42.6 11.7 29.5 9 
                99.5 9 132.1s2.7 102.7-9 
                132.1z" />
            </svg>
          </a>
        </div>

        {/* HAMBURGER (mobile) */}
        <button
          type="button"
          aria-label="Apri menu mobile"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
          className="md:hidden w-12 h-12 bg-[#0b0c0e] flex items-center justify-center rounded-md border-2 border-gray-600"
        >
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* OVERLAY MOBILE */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={handleOverlayClick}
          className="fixed inset-0 flex flex-col justify-center items-center gap-10 bg-black/90 z-[60] text-white font-semibold"
        >
          {/* Bottone chiudi (X) */}
          <button
            type="button"
            aria-label="Chiudi menu mobile"
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-12 h-12 bg-[#0b0c0e] flex items-center justify-center rounded-md border-2 border-gray-600"
          >
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Link menu mobile */}
          <NavLink to="/" className="text-2xl" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/bio" className="text-2xl" onClick={() => setIsOpen(false)}>
            Bio
          </NavLink>
          <NavLink to="/galleria" className="text-2xl" onClick={() => setIsOpen(false)}>
            Galleria
          </NavLink>
          <NavLink to="/esperienze" className="text-2xl" onClick={() => setIsOpen(false)}>
            Esperienze
          </NavLink>
          <NavLink to="/classi" className="text-2xl" onClick={() => setIsOpen(false)}>
            Classi
          </NavLink>
          <NavLink to="/scrivimi" className="text-2xl" onClick={() => setIsOpen(false)}>
            Scrivimi
          </NavLink>
          <a
            href="https://www.instagram.com/giaco_fl94_uc/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl"
            onClick={() => setIsOpen(false)}
          >
            Instagram
          </a>
          <a
            href="mailto:giacomofele@virgilio.it"
            className="text-2xl"
            onClick={() => setIsOpen(false)}
          >
            Email
          </a>
        </div>
      )}
    </header>
  );
}
