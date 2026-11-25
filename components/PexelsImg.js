const WIDTHS = [480, 800, 1200, 1800, 2400];

// Pexels serves any width, so every photo gets several sizes (sharp on phones and retina screens).
export default function PexelsImg({
  id,
  alt,
  sizes = "100vw",
  width = 1200,
  height = 800,
  eager = false,
  className,
}) {
  const base = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=`;
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={className}
        src={`${base}1200`}
        srcSet={WIDTHS.map((w) => `${base}${w} ${w}w`).join(", ")}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    </>
  );
}
