interface ParallelogramSVGProps {
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  driftDirection?: 'left' | 'right';
}

export function ParallelogramSVG({
  color = '#83d4db',
  width = 70,
  height = 380,
  className = '',
  driftDirection = 'right',
}: ParallelogramSVGProps) {
  const skewAmount = 20;
  const animClass = driftDirection === 'right' ? 'animate-drift-right' : 'animate-drift-left';

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={`${animClass} ${className}`}
      style={{ willChange: 'transform' }}
    >
      <polygon
        points={`${skewAmount},0 ${width},0 ${width - skewAmount},${height} 0,${height}`}
        fill={color}
      />
    </svg>
  );
}
