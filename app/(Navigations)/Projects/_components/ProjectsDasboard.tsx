'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './ProjectHeading.module.css';

interface Project {
  id: number;
  imageUrl: string;
  alt: string;
  name: string;
  description: string;
  url: string;
}

export default function ProjectDashboardPage() {
  const [projects, setProjects] = useState<Project[]>([
    { 
      id: 1, 
      imageUrl: '/Assets/1.jpg', 
      alt: 'Project 1',
      name: 'Creams',
      description: 'Shows website',
      url: 'https://example.com/creams'
    },
    { 
      id: 2, 
      imageUrl: '/Assets/2.jpeg', 
      alt: 'Project 2',
      name: 'Creative 3D',
      description: 'Creative 3D Digital Art website',
      url: 'https://example.com/creative3d'
    },
    { 
      id: 3, 
      imageUrl: '/Assets/3.jpeg', 
      alt: 'Project 3',
      name: 'Astro',
      description: 'An astronaute IG',
      url: 'https://example.com/astro'
    },
    { 
      id: 4, 
      imageUrl: '/Assets/4.jpeg', 
      alt: 'Project 4',
      name: 'atp idk yoh',
      description: 'Idk placeholder IG',
      url: 'https://example.com/atp'
    },
    { 
      id: 5, 
      imageUrl: '/Assets/5jpeg.jpeg', 
      alt: 'Project 5',
      name: 'Im Rick',
      description: 'My name is rick',
      url: 'https://example.com/rick'
    },
    { 
      id: 6, 
      imageUrl: '/Assets/6.jpeg', 
      alt: 'Project 6',
      name: 'WTH music',
      description: 'IG tyla would name a company WTH',
      url: 'https://example.com/wth'
    },
  ]);

  const rippleBackgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createRipple = () => {
      if (!rippleBackgroundRef.current) return;

      const ripple = document.createElement('div');
      ripple.className = styles.ripple;

      const size = Math.random() * 50 + 50; // Random size between 50-100px
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;

      const x = Math.random() * rippleBackgroundRef.current.offsetWidth;
      const y = Math.random() * rippleBackgroundRef.current.offsetHeight;

      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      rippleBackgroundRef.current.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 6000);
    };

    const intervalId = setInterval(createRipple, 1000);

    return () => clearInterval(intervalId);
  }, []);
  

  return (
    <main className="min-h-screen relative bg-gradient-to-br from-primary-800 to-primary-900 ">
      {/* Ripple Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={styles.rippleBackground} ref={rippleBackgroundRef}></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 ml-11 p-12">
        <div className="text-center mb-12">
          <h1 className={`display-2xl ${styles.projectTitle}`}>
            Projects
          </h1>
          <p className="body-lg text-gray-100 mt-4">
            Explore our latest projects and initiatives.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
            <a 
              key={project.id}
              href={project.url}
              target='_blank'
              rel="noopener noreferrer"
              className='"group relative overflow-hidden rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-primary-700 cursor-pointer'
            >
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-primary-700"
              >
                <div className="relative w-full h-[300px]">
                  <Image
                    src={project.imageUrl}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={project.id <= 3} // Load first 3 images immediately
                  />
                </div>

                {/* Desktop overlay - hidden on mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="display-sm font-semibold text-cyan-50 mb-2">
                      {project.name}
                    </h3>
                    <p className="body-sm text-gray-200">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile info section - only visible on mobile */}
              <div className="p-4 md:hidden">
                <h3 className="display-sm font-semibold text-cyan-50 mb-2">
                  {project.name}
                </h3>
                <p className="body-sm text-gray-200">
                  {project.description}
                </p>
              </div>
            </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
