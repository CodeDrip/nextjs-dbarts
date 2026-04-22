"use client"

import { useEffect, useRef } from 'react';
import { noise } from './lib/perlin';

export function NoiseCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth * 1.2;
      canvas.height = window.innerHeight * 1.2;
    };

    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      timeRef.current += 0.004;
      const t = timeRef.current;

      ctx.fillStyle = '#25282a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = '#8ae900';
      ctx.lineWidth = 1;

      for (let i = 0; i < canvas.width; i += 4) {
        const n = noise(i * 0.005, t, 0);
        const y = (0.5 + 0.5 * n) * canvas.height;

        ctx.beginPath();
        ctx.moveTo(i, y);
        ctx.lineTo(i, y + 1);
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1, width: '120%', height: '120%', top: '-10%', left: '-10%' }}
    />
  );
}
