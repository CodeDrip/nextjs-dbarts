"use client"

import { useInView } from '../components/hooks/useInView';
import { SectionTitle } from '@/components/SectionTitle';
import { ProgramCard } from '../components/ProgramCard';
import { DecorativeShape } from '@/components/DecorativeShape';
import { ParallelogramSVG } from '@/components/ParallelogramSVG';

const PROGRAMS = [
  {
    image: '/assets/program-art-workshops.jpg',
    title: 'Art Workshops',
    description: 'Hands-on creative sessions exploring painting, sculpture, and mixed media. Open to all skill levels and ages.',
  },
  {
    image: '/assets/program-fashion-design.jpg',
    title: 'Fashion Design',
    description: 'Sustainable fashion programs teaching design, sewing, and textile arts. Express yourself through wearable art.',
  },
  {
    image: '/assets/program-community-events.jpg',
    title: 'Community Events',
    description: 'Gallery shows, pop-up exhibitions, and public art installations that bring the community together.',
  },
  {
    image: '/assets/program-youth-outreach.jpg',
    title: 'Youth Outreach',
    description: 'After-school and summer programs empowering young people through mentorship and creative expression.',
  },
];

export function ProgramsSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="programs"
      ref={ref}
      className="relative bg-charcoal overflow-hidden"
      style={{
        opacity: isInView ? 1 : 0,
        transition: 'opacity 1000ms ease-out',
      }}
    >
      {/* Decorative shapes */}
      <DecorativeShape
        src="/assets/collage-shape-1.png"
        className="left-[-60px] top-[5%] w-[200px] md:w-[300px]"
        opacity={0.75}
      />
      <DecorativeShape
        src="/assets/collage-shape-3.png"
        className="right-[-40px] bottom-[10%] w-[180px] md:w-[260px]"
        opacity={0.65}
      />

      {/* Diagonal parallelograms */}
      <div className="absolute right-[8%] top-[15%] hidden md:block">
        <ParallelogramSVG color="#54c7ab" driftDirection="left" />
      </div>

      <div className="container-dba py-12 md:py-24">
        <SectionTitle title="Our Programs" accent="- creating through art -" />

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-12">
          {PROGRAMS.map((program, index) => (
            <ProgramCard
              key={program.title}
              image={program.image}
              title={program.title}
              description={program.description}
              delay={index * 150}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <a
            href="#community"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-dba btn-dba-charcoal"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
}
