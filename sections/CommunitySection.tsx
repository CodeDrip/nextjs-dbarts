"use client"

import { useInView } from '../components//hooks/useInView';
import { useEffect, useState, useRef } from 'react';
import { SectionTitle } from '@/components/SectionTitle';
import { StaggeredTextReveal } from '@/components/StaggeredTextReveal';
import { DecorativeShape } from '@/components/DecorativeShape';
import { ParallelogramSVG } from '@/components/ParallelogramSVG';

const STATS = [
  { value: 500, suffix: '+', label: 'Young Artists' },
  { value: 12, suffix: '', label: 'Active Programs' },
  { value: 25, suffix: '', label: 'Community Partners' },
];

function AnimatedCounter({
  target,
  suffix,
  isInView,
  delay,
}: {
  target: number;
  suffix: string;
  isInView: boolean;
  delay: number;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 1500;
    const startTime = performance.now();

    const timer = setTimeout(() => {
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime - delay;
        if (elapsed < 0) {
          requestAnimationFrame(animate);
          return;
        }
        const progress = Math.min(elapsed / duration, 1);
        // ease-out
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * target));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [isInView, target, delay]);

  return (
    <span className="font-display text-[48px] text-neon">
      {count}
      {suffix}
    </span>
  );
}

export function CommunitySection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="community"
      ref={ref}
      className="relative bg-charcoal overflow-hidden"
      style={{
        opacity: isInView ? 1 : 0,
        transition: 'opacity 1000ms ease-out',
      }}
    >
      {/* Decorative shapes */}
      <DecorativeShape
        src="/assets/collage-shape-4.png"
        className="right-[-60px] top-[10%] w-[220px] md:w-[320px]"
        opacity={0.65}
      />
      <DecorativeShape
        src="/assets/collage-shape-3.png"
        className="left-[-50px] bottom-[5%] w-[180px] md:w-[260px]"
        opacity={0.65}
      />

      {/* Diagonal parallelograms */}
      <div className="absolute left-[5%] top-[20%] hidden md:block">
        <ParallelogramSVG color="#a7d41e" driftDirection="right" />
      </div>
      <div className="absolute left-[12%] bottom-[15%] hidden md:block">
        <ParallelogramSVG color="#8ae900" driftDirection="left" />
      </div>

      <div className="container-dba py-12 md:py-24">
        <SectionTitle title="Building Community" accent="- together we create -" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12 items-center">
          {/* Left - Featured Image */}
          <div className="overflow-hidden group">
            <img
              src="/assets/community-featured.jpg"
              alt="Community mural project"
              className="w-full aspect-video object-cover grayscale transition-transform ease-out group-hover:scale-[1.02]"
              style={{ transitionDuration: '400ms' }}
              loading="lazy"
            />
          </div>

          {/* Right - Text and Stats */}
          <div>
            <StaggeredTextReveal
              tag="p"
              className="font-body text-[16px] md:text-[18px] text-white leading-relaxed mb-8"
            >
              At D Block Arts, community is at the heart of everything we do. Our outreach programs connect with youth across the city, providing safe spaces for creative exploration and personal growth. Through partnerships with local schools, community centers, and fellow artists, we bring transformative art experiences to neighborhoods that need them most. Every mural painted, every garment designed, and every workshop held strengthens the bonds that hold our community together.
            </StaggeredTextReveal>

            {/* Statistics */}
            <div className="flex flex-wrap gap-8 md:gap-12 mb-8">
              {STATS.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transition: `opacity 600ms ease-out ${index * 200}ms`,
                  }}
                >
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    isInView={isInView}
                    delay={index * 200}
                  />
                  <p className="font-body text-[14px] text-white uppercase tracking-wider mt-1 opacity-80">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-dba btn-dba-yellow inline-flex"
            >
              Join the Movement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
