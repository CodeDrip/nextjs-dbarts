"use client"

import { useMultipleColorCycle } from './hooks/useColorCycle';

export function DiagonalShapesMarquee() {
  
  const colors = useMultipleColorCycle(5, 3000);

  return (
    <div className="w-full overflow-hidden bg-charcoal py-4 md:py-8">
      <div className="flex items-center justify-center gap-[-10px] md:gap-0">
        {colors.map((color, i) => (
          <svg
            key={i}
            width={i % 2 === 0 ? 70 : 50}
            height={i % 2 === 0 ? 380 : 280}
            viewBox={`0 0 ${i % 2 === 0 ? 70 : 50} ${i % 2 === 0 ? 380 : 280}`}
            className={i % 2 === 0 ? 'animate-drift-right' : 'animate-drift-left'}
            style={{ willChange: 'transform', marginLeft: i > 0 ? '-20px' : '0' }}
          >
            <polygon
              points={`20,0 ${i % 2 === 0 ? 70 : 50},0 ${i % 2 === 0 ? 50 : 30},${i % 2 === 0 ? 380 : 280} 0,${i % 2 === 0 ? 380 : 280}`}
              fill={color}
            />
          </svg>
        ))}
      </div>
    </div>
  );
}
