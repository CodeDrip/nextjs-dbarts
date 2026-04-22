interface DecorativeShapeProps {
  src: string;
  className?: string;
  opacity?: number;
  alt?: string;
}

export function DecorativeShape({
  src,
  className = '',
  opacity = 0.65,
  alt = '',
}: DecorativeShapeProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`absolute pointer-events-none select-none ${className}`}
      style={{ opacity }}
      loading="lazy"
    />
  );
}
