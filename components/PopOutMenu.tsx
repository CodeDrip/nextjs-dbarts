import { useScrollLock } from './hooks/useScrollLock';
import { useEffect, useState } from 'react';

const ITEM_COLORS = ['#83d4db', '#8ae900', '#f26419', '#a7d41e', '#ffead4'];

interface PopOutMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: string[];
  onItemClick: (item: string) => void;
}

export function PopOutMenu({ isOpen, onClose, items, onItemClick }: PopOutMenuProps) {
  useScrollLock(isOpen);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 600);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleItemClick = (item: string) => {
    onItemClick(item);
  };

  if (!isAnimating && !isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[101] bg-charcoal"
      style={{
        transform: isOpen ? 'translateX(0)' : 'translateX(-100vw)',
        transition: 'transform 600ms ease-in-out',
      }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        <img
          src="/assets/logo.png"
          alt="D Block Arts"
          className="w-[48px] h-[48px] md:w-[64px] md:h-[64px] object-contain"
          style={{ filter: 'invert(1) brightness(100)' }}
        />
        <button
          onClick={onClose}
          className="w-12 h-12 rounded-full bg-dark flex items-center justify-center text-white hover:opacity-80 transition-opacity"
          aria-label="Close menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <line x1="2" y1="2" x2="18" y2="18" stroke="currentColor" strokeWidth="2.5" />
            <line x1="18" y1="2" x2="2" y2="18" stroke="currentColor" strokeWidth="2.5" />
          </svg>
        </button>
      </div>

      {/* Menu items */}
      <div className="flex flex-col md:flex-row items-center justify-center flex-1 gap-4 md:gap-8 px-4 pt-12 md:pt-0">
        {items.map((item, index) => (
          <button
            key={item}
            onClick={() => handleItemClick(item)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative flex items-center justify-center cursor-pointer"
            style={{
              width: hoveredIndex === index ? '100%' : '50px',
              height: hoveredIndex === index ? '80px' : '50px',
              borderRadius: hoveredIndex === index ? '0' : '50%',
              backgroundColor: hoveredIndex === index ? ITEM_COLORS[index] : 'transparent',
              transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            }}
          >
            <span
              className="font-body font-bold uppercase whitespace-nowrap"
              style={{
                fontSize: hoveredIndex === index ? '27px' : '14px',
                color: hoveredIndex === index ? '#25282a' : '#ffffff',
                transition: 'all 300ms ease',
              }}
            >
              {item}
            </span>
          </button>
        ))}
      </div>

      {/* Description */}
      <div className="px-4 md:px-6 pb-12 md:pb-16">
        <p className="font-body text-[14px] md:text-[16px] text-white opacity-60 max-w-md text-center mx-auto leading-relaxed">
          D Block Arts uses art and fashion to empower and inspire all members of the community.
          We believe in the transformative power of creative expression.
        </p>
      </div>
    </div>
  );
}
