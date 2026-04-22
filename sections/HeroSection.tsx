import { NoiseCanvas } from '@/components/NoiseCanvas';
import { HandwrittenAccent } from '@/components/HandwrittenAccent';
import { DecorativeShape } from '@/components/DecorativeShape';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-charcoal"
    >
      {/* Noise Canvas Background */}
      <NoiseCanvas />

      {/* Decorative Shapes */}
      <DecorativeShape
        src="/assets/collage-shape-1.png"
        className="left-[-100px] top-[10%] w-[300px] md:w-[400px]"
        opacity={0.75}
      />
      <DecorativeShape
        src="/assets/collage-shape-2.png"
        className="right-[-80px] top-[30%] w-[250px] md:w-[350px]"
        opacity={0.65}
      />
      <DecorativeShape
        src="/assets/collage-shape-3.png"
        className="left-[-50px] bottom-[15%] w-[200px] md:w-[300px]"
        opacity={0.65}
      />

      {/* Content */}
      <div className="relative z-[2] flex flex-col items-center justify-center text-center px-4" style={{ zIndex: 2 }}>
        {/* Title Circles */}
        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
          <div
            className="w-[80px] h-[80px] md:w-[96px] md:h-[96px] rounded-full overflow-hidden flex items-center justify-center border-2 border-white/20 animate-fade-in-scale"
            style={{ animationDelay: '500ms', animationFillMode: 'both' }}
          >
            <span className="font-display text-[24px] md:text-[32px] text-white uppercase tracking-wider">
              D
            </span>
          </div>
          <div
            className="w-[80px] h-[80px] md:w-[96px] md:h-[96px] rounded-full overflow-hidden flex items-center justify-center border-2 border-white/20 animate-fade-in-scale"
            style={{ animationDelay: '700ms', animationFillMode: 'both' }}
          >
            <span className="font-display text-[24px] md:text-[32px] text-white uppercase tracking-wider">
              B
            </span>
          </div>
        </div>

        {/* Main Title */}
        <h1
          className="font-display text-[54px] md:text-[72px] lg:text-[90px] text-white leading-none mb-6 animate-fade-in-up"
          style={{ animationDelay: '300ms', animationFillMode: 'both' }}
        >
          D BLOCK ARTS
        </h1>

        {/* Stencil Text */}
        <div
          className="font-body font-black uppercase text-[40px] md:text-[80px] leading-none mb-4 animate-fade-in-up"
          style={{
            color: 'transparent',
            WebkitTextStroke: '2px #8ae900',
            animationDelay: '600ms',
            animationFillMode: 'both',
          }}
        >
          EMPOWER
        </div>

        {/* Year */}
        <div
          className="font-display text-[60px] md:text-[80px] text-white mb-4 animate-fade-in"
          style={{ animationDelay: '900ms', animationFillMode: 'both' }}
        >
          2024
        </div>

        {/* Handwritten Accent */}
        <div
          className="animate-fade-in"
          style={{ animationDelay: '1100ms', animationFillMode: 'both' }}
        >
          <HandwrittenAccent text="- we believe in art -" />
        </div>

        {/* Description */}
        <p
          className="font-body text-[16px] md:text-[18px] text-white max-w-[600px] mt-6 leading-relaxed animate-fade-in"
          style={{ animationDelay: '1300ms', animationFillMode: 'both' }}
        >
          Using art and fashion to empower and inspire all members of the community.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[2] animate-bounce-scroll"
        style={{ zIndex: 2 }}
      >
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-white">
          <path
            d="M8 4 L8 20 M8 20 L2 14 M8 20 L14 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
