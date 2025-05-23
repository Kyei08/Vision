'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  return (
    <header className="fixed w-full bg-white top-0 left-0 z-50">
      {/* Mobile Menu Button - Only visible on mobile */}
      <button
        onClick={toggleMenu}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-primary-800/90 text-white hover:bg-primary-700 transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      

      {/* Navigation - Vertical on both mobile and desktop */}
      <nav
        className={`bg-primary-800/90 w-[220px] h-screen pt-[60px] flex flex-col items-start fixed left-0 top-0 transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        <Link
          href="/"
          className="text-gray-100 no-underline px-5 py-4 w-full box-border font-semibold transition-colors hover:bg-[rgba(0,255,204,0.2)] hover:text-[#00ffcc]"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/About"
          className="text-gray-100 no-underline px-5 py-4 w-full box-border font-semibold transition-colors hover:bg-[rgba(0,255,204,0.2)] hover:text-[#00ffcc]"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link
          href="/Projects"
          className="text-gray-100 no-underline px-5 py-4 w-full box-border font-semibold transition-colors hover:bg-[rgba(0,255,204,0.2)] hover:text-[#00ffcc]"
          onClick={() => setIsMenuOpen(false)}
        >
          Projects
        </Link>
        <Link
          href="/Credits"
          className="text-gray-100 no-underline px-5 py-4 w-full box-border font-semibold transition-colors hover:bg-[rgba(0,255,204,0.2)] hover:text-[#00ffcc]"
          onClick={() => setIsMenuOpen(false)}
        >
          Credit
        </Link>
        <Link
          href="/Contact"
          className="text-gray-100 no-underline px-5 py-4 w-full box-border font-semibold transition-colors hover:bg-[rgba(0,255,204,0.2)] hover:text-[#00ffcc]"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
      </nav>

      {/* Overlay for mobile - Only visible when menu is open */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}