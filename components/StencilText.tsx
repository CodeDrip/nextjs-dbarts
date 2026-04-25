import { useInView } from './hooks/useInView';

interface StencilTextProps {
  text: string;
  color?: string;
  className?: string;
  size?: 'lg' | 'sm';
}

export function StencilText({
  text,
  color = '#8ae900',
  className = '',
  size = 'lg',
}: StencilTextProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  const sizeClass = size === 'lg'
    ? 'text-[40px] md:text-[80px]'
    : 'text-[32px] md:text-[54px]';

  return (
    <div
      ref={ref}
      className={`font-body font-black uppercase leading-none ${sizeClass} ${className}`}
      style={{
        color: 'transparent',
        WebkitTextStroke: `2px ${color}`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'scale(1)' : 'scale(0.95)',
        transition: 'opacity 800ms ease-out, transform 800ms ease-out',
      }}
    >
      {text}
    </div>
  );
}
