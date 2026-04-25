"use client"

import { useScrollDirection } from './hooks/useScrollDirection';
import { useState, useEffect } from 'react';
import { PopOutMenu } from '../components/PopOutMenu';

const MENU_ITEMS = ['Home', 'About', 'Programs', 'Community', 'Contact'];

export function Navigation() {
  const isScrollingUp = useScrollDirection();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleNavClick = (item: string) => {
    setMenuOpen(false);
    const targetId = item.toLowerCase();
    const element = document.getElementById(targetId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] transition-transform duration-500 ease-in-out px-4 md:px-6"
        style={{
          transform: isScrollingUp || !hasScrolled ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex-shrink-0"
          >
            <img
              src="/assets/logo.png"
              alt="D Block Arts"
              className="w-[48px] h-[48px] md:w-[64px] md:h-[64px] object-contain invert"
              style={{ filter: 'invert(1) brightness(100)' }}
            />
          </a>

          {/* Menu Button */}
          <button
            onClick={handleMenuClick}
            className="flex items-center gap-2 text-white uppercase text-[18px] font-body tracking-wide group"
          >
            {/* Hamburger icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
              <line x1="4" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="2" />
              <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" />
              <line x1="4" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span className="text-decoration-link hidden md:inline">Menu</span>
          </button>
        </div>
      </nav>

      <PopOutMenu
        isOpen={menuOpen}
        onClose={handleMenuClose}
        items={MENU_ITEMS}
        onItemClick={handleNavClick}
      />
    </>
  );
}
