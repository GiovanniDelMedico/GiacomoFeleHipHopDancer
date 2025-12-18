// Thumbnail.jsx
export default function Thumbnail({ image, onClick }) {
  return (
    <div
      className="shadow-md rounded-lg overflow-hidden md:hover:scale-110 transition-transform"
      onClick={onClick}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="h-24 w-24 object-cover cursor-pointer"
        loading="lazy"
      />
    </div>
  );
}

