import { useState, useEffect } from "react";
import GalleryImage from "./GalleryImage";
import ArrowButton from "./ArrowButton";
import ThumbnailList from "./ThumbnailList";

// Import del video ricodificato e del poster


const images = [
  {
    src: new URL("/FotoGiacomo/GiacomoFeleAtteggiamentohiphop.webp", import.meta.url).href,
    webp: new URL("/FotoGiacomo/GiacomoFeleAtteggiamentohiphop.webp", import.meta.url).href,
    alt: "Giacomo Fele mostrando atteggiamento Hip Hop",
  },
  {
    src: new URL("/FotoGiacomo/GiacomoFeleBallandoHipHop.webp", import.meta.url).href,
    webp: new URL("/FotoGiacomo/GiacomoFeleBallandoHipHop.webp", import.meta.url).href,
    alt: "Giacomo Fele ballando hip hop con la crew",
  },
  {
    src: new URL("/FotoGiacomo/GiacomoFelestilehiphop.webp", import.meta.url).href,
    webp: new URL("/FotoGiacomo/GiacomoFelestilehiphop.webp", import.meta.url).href,
    alt: "Giacomo Fele mostrando lo stile di danza hip hop",
  },
  {
    src: new URL("/FotoGiacomo/GiacomoFeleEnergiahiphop.webp", import.meta.url).href,
    webp: new URL("/FotoGiacomo/GiacomoFeleEnergiahiphop.webp", import.meta.url).href,
    alt: "Giacomo Fele mostrando energia Hip Hop",
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Debug video: logga se il browser riesce a caricare
  useEffect(() => {
    const v = document.getElementById("myVideo");
    if (!v) return;

    const onError = () => console.log("Video error:", v.error);
    const onMetadata = () => console.log("Metadata ok");
    const onCanPlay = () => console.log("Can play");

    v.addEventListener("error", onError);
    v.addEventListener("loadedmetadata", onMetadata);
    v.addEventListener("canplay", onCanPlay);

    return () => {
      v.removeEventListener("error", onError);
      v.removeEventListener("loadedmetadata", onMetadata);
      v.removeEventListener("canplay", onCanPlay);
    };
  }, []);

  const prevImage = () =>
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const nextImage = () =>
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <section id="galleria" className="py-8">
      <h2 className="w-full font-grace text-5xl text-green-600 font-bold mb-6 text-center font-covered  mt-12">
        Galleria
      </h2>
      {/* <section id="video" className="w-full flex flex-col items-center mt-12">

        <div className="relative p-4 md:p-12 rounded-xl w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto flex justify-center items-center">
          <video
            id="myVideo"
            className="w-full aspect-[9/16] rounded-lg shadow-md"
            controls
            controlsList="nodownload"
            poster={posterFile}
            preload="metadata"
            playsInline
            aria-label="Compilazione video di Giacomo Fele durante le esibizioni"
            aria-describedby="descrizioneVideo"
          >
            <source src={videoFile} type="video/mp4" />
            Il tuo browser non supporta il video.
          </video> */}

          {/* Overlay play centrale */}
          {/* <div
            id="playOverlay"
            className="absolute inset-0 flex justify-center items-center cursor-pointer"
            role="button"
            aria-label="Avvia il video di Giacomo Fele"
            tabIndex={0}
            onClick={() => {
              const video = document.getElementById("myVideo");
              video.play();
              document.getElementById("playOverlay").style.display = "none";
            }}
          >
            <div className="bg-green-900/50 rounded-full p-4 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 2v20l18-10L4 2z" />
              </svg>
            </div>
          </div> */}

{/*        
          <div id="descrizioneVideo" className="sr-only">
            Questo video mostra una compilation delle performance e coreografie
            di Giacomo Fele, ballerino e coreografo Hip Hop professionista.
          </div>
        </div>
      </section> */}

      <div className="relative p-4 md:p-12 rounded-xl w-full max-w-sm md:max-w-2xl mx-auto flex justify-center items-center">
        <GalleryImage image={images[currentIndex]} />
        <ArrowButton direction="prev" onClick={prevImage} />
        <ArrowButton direction="next" onClick={nextImage} />
      </div>

      <ThumbnailList
        images={images}
        onSelect={(index) => setCurrentIndex(index)}
      />
    </section>
  );
}
