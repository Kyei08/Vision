'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  imageUrl: string;
  alt: string;
}

export default function ProjectDashboardPage() {
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, imageUrl: '/Assets/1.jpg', alt: 'Project 1' },
    { id: 2, imageUrl: '/Assets/2.jpeg', alt: 'Project 2' },
    { id: 3, imageUrl: '/Assets/3.jpeg', alt: 'Project 3' },
    { id: 4, imageUrl: '/Assets/4.jpeg', alt: 'Project 4' },
    { id: 5, imageUrl: '/Assets/5jpeg.jpeg', alt: 'Project 5' },
    { id: 6, imageUrl: '/Assets/6.jpeg', alt: 'Project 6' },
  ]);

  return (
    <main className="min-h-screen relative bg-gradient-to-br from-primary-800 to-primary-900 ">
      {/* Ripple Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="ripple-background"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 ml-11 p-12">
        <div className="text-center mb-12">
          <h1 className="display-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-primary-300 animate-gradient">
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
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="display-sm font-semibold text-white mb-2">
                      Project {project.id}
                    </h3>
                    <p className="body-sm text-gray-200">
                      Click to learn more about this project
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .ripple-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, var(--color-primary-300), var(--color-primary-800));
          overflow: hidden;
          z-index: -1;
        }

        .ripple {
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background-color: rgba(62, 21, 21, 0.226);
          animation: ripple-animation 6s infinite;
          opacity: 0;
        }

        @keyframes ripple-animation {
          0% {
            transform: scale(0.5);
            opacity: 0.8;
          }
          50% {
            transform: scale(2);
            opacity: 0.4;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }

        @keyframes animate-gradient {
          0%, 10%, 100% {
            background-position: -66rem 0;
          }
          80%, 90% {
            background-position: 0 0;
          }
        }
      `}</style>
    </main>
  );
}
