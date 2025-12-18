// ThumbnailList.jsx
import Thumbnail from "./Thumbnail";

export default function ThumbnailList({ images, onSelect }) {
  return (
    <div className="flex gap-4 justify-center flex-wrap max-w-2xl mx-auto mt-10">
      {images.map((img, index) => (
        <Thumbnail
          key={index}
          image={img}
          onClick={() => onSelect(index)} // <-- qui aggiorna lo stato
        />
      ))}
    </div>
  );
}
