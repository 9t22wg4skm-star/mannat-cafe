'use client';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur border-b border-zinc-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:py-5">
        <a href="#home" className="text-2xl font-bold tracking-wide text-white">
          <span className="text-[#facc15]">Mannat</span> Cafe
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-white font-medium transition-colors duration-200 hover:text-[#facc15] focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:ring-offset-2 focus:ring-offset-black"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/80 text-white transition-all duration-200 hover:border-[#facc15] hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:ring-offset-2 focus:ring-offset-black md:hidden"
        >
          <span className="text-2xl leading-none">{menuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden bg-black transition-all duration-300 ${menuOpen ? 'max-h-80 border-t border-zinc-800' : 'max-h-0'}`}
      >
        <div className="px-6 pb-6 pt-2">
          <div className="rounded-3xl border border-zinc-800 bg-black shadow-xl shadow-black/30 p-4">
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block rounded-2xl px-4 py-4 text-lg font-semibold text-white transition-colors duration-200 hover:bg-white/5 hover:text-[#facc15] focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:ring-offset-2 focus:ring-offset-black"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
