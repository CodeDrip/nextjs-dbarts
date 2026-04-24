import { useInView } from './hooks/useInView';

interface ProgramCardProps {
  image: string;
  title: string;
  description: string;
  delay?: number;
}

export function ProgramCard({ image, title, description, delay = 0 }: ProgramCardProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="group"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 600ms ease-out ${delay}ms, transform 600ms ease-out ${delay}ms`,
      }}
    >
      <div className="overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full aspect-[3/2] object-cover grayscale transition-transform duration-300 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="font-body text-[20px] text-white font-normal mb-2">{title}</h3>
      <p className="font-body text-[14px] text-white leading-relaxed opacity-80">{description}</p>
    </div>
  );
}
