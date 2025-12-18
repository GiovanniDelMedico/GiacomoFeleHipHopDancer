// GalleryImage.jsx
export default function GalleryImage({ image }) {
  return (
    <picture className="w-5/6 md:w-3/4 block">
      {image.webp && (
        <source srcSet={image.webp} type="image/webp" />
      )}
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-auto rounded-lg shadow-md transition-opacity duration-300"
        loading="lazy"
      />
    </picture>
  );
}
