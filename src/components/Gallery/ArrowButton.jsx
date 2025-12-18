// ArrowButton.jsx
export default function ArrowButton({ direction, onClick }) {
  const isPrev = direction === "prev";
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 
        ${isPrev ? "left-1 md:left-10" : "right-1 md:right-10"} 
        bg-black/50 hover:bg-black/70 transition text-white 
        p-1 md:p-2 rounded-full`}
      aria-label={isPrev ? "Immagine precedente" : "Immagine successiva"}
    >
      <svg
        className="w-6 h-6 md:w-7 md:h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        {isPrev ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );
}
