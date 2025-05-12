// components/Sidebar.tsx
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      const toggleButton = document.getElementById('toggle-button');
      
      if (isOpen && sidebar && toggleButton && 
          !sidebar.contains(event.target as Node) && 
          !toggleButton.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <button
        id="toggle-button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-0 left-0 z-50 p-2 bg-transparent border-none cursor-pointer"
      >
        <img 
          src="/files/prototype/img/Compass.png"
          alt="" 
          className="w-[150px] h-[150px]"
        />
      </button>

      <nav
        id="sidebar"
        className={`fixed top-0 left-0 w-[200px] h-screen pt-[180px]  z-40 flex flex-col transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-100'
        }`}
      >
        <Link href="/" className="text-white no-underline p-[15px_20px] w-full font-bold transition-all duration-300 hover:bg-[rgba(0,255,204,0.2)] hover:text-[#00ffcc]">
          Home
        </Link>
        <Link href="/about-us" className="text-white no-underline p-[15px_20px] w-full font-bold transition-all duration-300 hover:bg-[rgba(0,255,204,0.2)] hover:text-[#00ffcc]">
          About
        </Link>
        <Link href="/projects" className="text-white no-underline p-[15px_20px] w-full font-bold transition-all duration-300 hover:bg-[rgba(0,255,204,0.2)] hover:text-[#00ffcc]">
          Projects
        </Link>
        <Link href="/credit" className="text-white no-underline p-[15px_20px] w-full font-bold transition-all duration-300 hover:bg-[rgba(0,255,204,0.2)] hover:text-[#00ffcc]">
          Credit
        </Link>
        <Link href="/contact" className="text-white no-underline p-[15px_20px] w-full font-bold transition-all duration-300 hover:bg-[rgba(0,255,204,0.2)] hover:text-[#00ffcc]">
          Contact
        </Link>
      </nav>
    </>
  );
};

export default Sidebar;