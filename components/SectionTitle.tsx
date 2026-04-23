import { StaggeredTextReveal } from './StaggeredTextReveal';
import { HandwrittenAccent } from './HandwrittenAccent';

interface SectionTitleProps {
  title: string;
  accent?: string;
  className?: string;
  centered?: boolean;
}

export function SectionTitle({ title, accent, className = '', centered = true }: SectionTitleProps) {
  return (
    <div className={`mb-6 ${centered ? 'text-center' : ''} ${className}`}>
      <StaggeredTextReveal
        tag="h2"
        className="font-display text-[38px] text-white leading-tight"
      >
        {title}
      </StaggeredTextReveal>
      {accent && (
        <div className={`mt-2 ${centered ? 'text-center' : ''}`}>
          <HandwrittenAccent text={accent} />
        </div>
      )}
    </div>
  );
}
