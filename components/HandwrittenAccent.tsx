interface HandwrittenAccentProps {
  text: string;
  className?: string;
}

export function HandwrittenAccent({ text, className = '' }: HandwrittenAccentProps) {
  return (
    <span
      className={`font-accent text-[14px] lowercase text-neon ${className}`}
    >
      {text}
    </span>
  );
}
