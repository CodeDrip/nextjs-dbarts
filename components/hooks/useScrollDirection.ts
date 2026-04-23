import { useEffect, useRef, useState } from 'react';

export function useScrollDirection() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      if (scrollY < 10) {
        setIsScrollingUp(true);
      } else if (Math.abs(scrollY - lastScrollY.current) < 5) {
        // Ignore small changes
      } else {
        setIsScrollingUp(scrollY < lastScrollY.current);
      }

      lastScrollY.current = scrollY > 0 ? scrollY : 0;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return isScrollingUp;
}
