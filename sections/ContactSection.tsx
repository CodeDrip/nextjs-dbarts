"use client"

import { useInView } from '../components/hooks/useInView';
import { SectionTitle } from '@/components/SectionTitle';
import { StencilText } from '../components/StencilText';
import { StaggeredTextReveal } from '@/components/StaggeredTextReveal';
import { DecorativeShape } from '@/components/DecorativeShape';
import { ParallelogramSVG } from '@/components/ParallelogramSVG';

const SOCIAL_LINKS = [
  { name: 'Instagram', handle: '@dblockarts', icon: 'instagram' },
  { name: 'Facebook', handle: 'D Block Arts', icon: 'facebook' },
  { name: 'Twitter', handle: '@dblockarts', icon: 'twitter' },
  { name: 'LinkedIn', handle: 'D Block Arts', icon: 'linkedin' },
];

function SocialIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    instagram: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    facebook: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    twitter: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    linkedin: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  };

  return icons[type] || null;
}

export function ContactSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-charcoal overflow-hidden"
      style={{
        opacity: isInView ? 1 : 0,
        transition: 'opacity 1000ms ease-out',
      }}
    >
      {/* Decorative shapes */}
      <DecorativeShape
        src="/assets/collage-shape-2.png"
        className="left-[-50px] top-[10%] w-[200px] md:w-[300px]"
        opacity={0.65}
      />
      <DecorativeShape
        src="/assets/collage-shape-1.png"
        className="right-[-60px] bottom-[5%] w-[180px] md:w-[280px]"
        opacity={0.75}
      />

      {/* Diagonal parallelograms */}
      <div className="absolute right-[10%] top-[15%] hidden md:block">
        <ParallelogramSVG color="#f26419" driftDirection="left" />
      </div>
      <div className="absolute right-[5%] bottom-[10%] hidden md:block">
        <ParallelogramSVG color="#ffead4" driftDirection="right" />
      </div>

      <div className="container-dba py-12 md:py-24">
        <SectionTitle title="Get In Touch" accent="- let's create together -" />

        {/* Stencil Text */}
        <div className="flex justify-center my-8 md:my-12">
          <StencilText text="CONNECT" color="#ffd100" />
        </div>

        {/* Description */}
        <div className="max-w-[600px] mx-auto text-center mb-10 md:mb-16">
          <StaggeredTextReveal
            tag="p"
            className="font-body text-[16px] md:text-[18px] text-white leading-relaxed"
          >
            Ready to get involved? Have questions about our programs? Want to partner with us? We'd love to hear from you. Reach out and let's start a conversation.
          </StaggeredTextReveal>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-[800px] mx-auto">
          {/* Left - Contact Details */}
          <div>
            <h3 className="font-body text-[14px] text-white uppercase tracking-wider mb-4 opacity-60">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@dblockarts.org"
                className="block font-body text-[16px] md:text-[18px] text-neon text-decoration-link"
              >
                hello@dblockarts.org
              </a>
              <p className="font-body text-[16px] md:text-[18px] text-white">
                (555) 234-5678
              </p>
              <p className="font-body text-[14px] text-white opacity-80 leading-relaxed">
                123 Creative Street, Arts District<br />
                City, ST 12345
              </p>
            </div>
          </div>

          {/* Right - Social Links */}
          <div>
            <h3 className="font-body text-[14px] text-white uppercase tracking-wider mb-4 opacity-60">
              Follow Us
            </h3>
            <div className="space-y-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center gap-3 font-body text-[16px] md:text-[18px] text-white hover:text-neon transition-colors duration-250 text-decoration-link group"
                >
                  <span className="group-hover:text-neon transition-colors duration-250">
                    <SocialIcon type={link.icon} />
                  </span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <a
            href="mailto:hello@dblockarts.org"
            className="btn-dba btn-dba-charcoal"
          >
            Send Us a Message
          </a>
        </div>
      </div>
    </section>
  );
}
