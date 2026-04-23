import { useInView } from './hooks/useInView';


interface StaggeredTextRevealProps {
  children: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
  staggerDelay?: number;
  wordDuration?: number;
}

export function StaggeredTextReveal({
  children,
  className = '',
  tag: Tag = 'div',
  staggerDelay = 100,
  wordDuration = 600,
}: StaggeredTextRevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const words = children.split(' ');

  return (
    <Tag ref={ref as React.RefObject<never>} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block mr-[0.3em] transition-opacity"
          style={{
            opacity: isInView ? 1 : 0,
            transitionDuration: `${wordDuration}ms`,
            transitionDelay: `${i * staggerDelay}ms`,
            transitionTimingFunction: 'ease-out',
          }}
        >
          {word}
        </span>
      ))}
    </Tag>
  );
}
