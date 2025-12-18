// src/pages/Bio.jsx

import Navbar from "../components/Navbar";
import CardOrizzontaleSx from "../components/CardOrizzontaleSx";
import CardOrizzontaleDx from "../components/CardOrizontaleDx";

export default function Bio() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0b0c0e]">
      {/* Navbar */}
      <Navbar />

      {/* Contenuto Bio */}
      <main className="flex-1 flex flex-col items-center justify-start pt-20 px-6" data-aos="fade-up">
        <h1 className="font-grace text-5xl  font-bold text-green-600 mb-8">Esperienze</h1>

        {/* Card Verticale */}
        <CardOrizzontaleSx
          img="/FotoGiacomo/GiacomoFeleBallandoHipHop.webp"
          title="Freestyle"
          description="Giacomo Fele è un ballerino di Hip Hop Freestyle molto attivo sulla scena delle battle. Negli anni ha partecipato e vinto numerose competizioni, mettendo in gioco la propria creatività,tecnica  e capacità di improvvisazione. La sua presenza non si limita al ruolo di partecipante ma anche giudice, contribuendo con la sua esperienza e sensibilità artistica a valutare le performance di altri ballerini. "
        />
        <CardOrizzontaleDx
        img="/FotoGiacomo/GiacomoFeleEnergiahiphop.webp"
          title="Insegnante e coreografo"
          description="Parallelamente alla carriera da performer, Giacomo ha sviluppato un’intensa attività di insegnamento e coreografia. Ha guidato workshops e corsi sia in Italia che all’estero, dall’Austria fino a scuole di danza italiane di rilievo. La sua ricerca artistica mira a trasmettere la cultura Hip Hop alle nuove generazioni, unendo tecnica ed espressività per formare ballerini consapevoli e creativi."
        />
        <CardOrizzontaleSx
         img="/FotoGiacomo/GiacomoFelestilehiphop.webp"
          title="Ballerino per show e compagnie"
          description="Nel corso degli anni, Giacomo ha calcato palchi importanti come il Prestige Dance Awards e il festival HIP HOP Collections al Musée du Quai Branly di Parigi. Ha collaborato con coreografi e realtà di rilievo quali Bruno Sharxilla, Mehdi Slimani (Compagnia NoMad) e il collettivo MOVEandART, consolidando un percorso artistico internazionale che lo ha reso protagonista di numerose esperienze performative e culturali."
        />

        
      </main>
    </div>
  );
}
