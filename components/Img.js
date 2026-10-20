import images from "@/data/images.json";

// Responsive <img> using the pre-generated WebP variants in public/images.
// Width/height are always set so the browser reserves space (no layout shift).
export default function Img({ name, alt, sizes = "100vw", priority = false, className, position, style }) {
  const img = images[name];
  if (!img) throw new Error(`Unknown image: ${name}`);
  const { variants, width, height } = img;
  const fallback = variants[Math.min(1, variants.length - 1)];
  return (
    <img
      src={fallback.src}
      srcSet={variants.map((v) => `${v.src} ${v.w}w`).join(", ")}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding={priority ? "sync" : "async"}
      style={position ? { objectPosition: position, ...style } : style}
    />
  );
}

export function imageData(name) {
  return images[name];
}
