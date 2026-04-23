"use client"

import { useInView } from '../components/hooks/useInView';
import { SectionTitle } from '../components/SectionTitle';
import { StaggeredTextReveal } from '../components/StaggeredTextReveal';
import { DecorativeShape } from '../components/DecorativeShape';
import { ParallelogramSVG } from '../components/ParallelogramSVG';


export function AboutSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-charcoal overflow-hidden"
      style={{
        opacity: isInView ? 1 : 0,
        transition: 'opacity 1000ms ease-out',
      }}
    >
      {/* Decorative shapes */}
      <DecorativeShape
        src="/assets/collage-shape-3.png"
        className="left-[-80px] top-[10%] w-[250px] md:w-[350px]"
        opacity={0.65}
      />
      <DecorativeShape
        src="/assets/collage-shape-2.png"
        className="right-[-60px] top-[30%] w-[200px] md:w-[300px]"
        opacity={0.65}
      />
      <DecorativeShape
        src="/assets/collage-shape-4.png"
        className="left-[10%] bottom-[-50px] w-[180px] md:w-[250px]"
        opacity={0.65}
      />

      {/* Diagonal parallelograms */}
      <div className="absolute right-[5%] top-[20%] hidden md:block">
        <ParallelogramSVG color="#83d4db" driftDirection="right" />
      </div>
      <div className="absolute right-[15%] bottom-[10%] hidden md:block">
        <ParallelogramSVG color="#8ae900" driftDirection="left" />
      </div>

      <div className="container-dba py-12 md:py-24">
        <SectionTitle title="Our Mission" accent="- empowering communities -" centered={false} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left column - Description */}
          <div>
            <StaggeredTextReveal
              tag="p"
              className="font-body text-[16px] md:text-[18px] text-white leading-relaxed max-w-[540px]"
            >
              D Block Arts is a non-profit organization dedicated to using art and fashion as tools for empowerment. We create inclusive spaces where creativity thrives, offering programs that inspire self-expression, build confidence, and foster community connection. From street art workshops to sustainable fashion design, we believe everyone deserves access to creative opportunities.
            </StaggeredTextReveal>
          </div>

          {/* Right column - Buttons */}
          <div className="flex flex-col gap-4 items-start md:items-end">
            <a
              href="#programs"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-dba btn-dba-charcoal"
            >
              Learn More
            </a>
            <a
              href="#programs"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-dba btn-dba-yellow"
            >
              Our Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
