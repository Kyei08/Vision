'use client';

import { useEffect } from "react";
import Image from "next/image";

export default function AboutDashboardPage() {
  // Ripple Effect
  useEffect(() => {
    const createRipple = () => {
      const ripple = document.createElement('div');
      ripple.classList.add('ripple');
      const size = Math.random() * 100;
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${Math.random() * 100}vw`;
      ripple.style.top = `${Math.random() * 100}vh`;
      ripple.style.animationDelay = `${Math.random() * 5}s`;
      
      const rippleBackground = document.querySelector('.ripple-background');
      if (rippleBackground) {
        rippleBackground.appendChild(ripple);
        setTimeout(() => ripple.remove(), 6000);
      }
    };

    const interval = setInterval(createRipple, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen relative">
      {/* Ripple Background */}
      <div className="ripple-background fixed inset-0 bg-gradient-to-b from-[#748881] to-[#427977] overflow-hidden" />

      {/* Main Content */}
      <div className="relative z-10 ml-11 p-8 md:p-12">
        <div className="max-w-5xl mx-auto">
          {/* About Section */}
          <section className="relative mb-16">
            {/* Decorative Background Element */}
            <div className="absolute right-0 top-[15%] w-[60%] h-[80%] bg-[#639d91] -z-10" />
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Image */}
              <div className="w-full md:w-[45%] relative">
                <Image 
                  src="/Assets/pexels-pok-rie-33563-1726310.jpg" 
                  alt="About Us Image : Pexels" 
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              
              {/* Content */}
              <div className="w-full md:w-[55%] bg-white p-6 md:p-8 border border-dotted border-gray-400 md:-ml-[10%] relative z-10">
                <p className="text-gray-800 leading-relaxed">
                  Vision is a dynamic group of junior developers navigating the continuous learning curve of ever changing technology landscape. We believe that by building projects, experimenting with new technologies, and collaborating closely, we can gain the experience necessary to thrive in the dynamic tech industry. Our goal is not just to learn, but strive to bring new innovations to the tech world.
                </p>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-4xl text-center text-white mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-sm text-center transform transition-transform hover:scale-105">
                <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-md">
                  <svg className="w-10 h-10 fill-[#639d91]" viewBox="0 0 24 24">
                    <path d="M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z" />
                  </svg>
                </div>
                <h3 className="text-gray-800 font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">We constantly seek new and better ways to innovate.</p>
              </div>

              <div className="bg-[#639d91] p-6 rounded-sm text-center text-white transform transition-transform hover:scale-105">
                <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-md">
                  <svg className="w-10 h-10 fill-[#639d91]" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm2-10c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm4 7.5c-.42-1.2-1.5-2.1-2.79-2.38C14.5 14.5 13.28 14 12 14s-2.5.5-3.21 1.12C7.5 15.4 6.42 16.3 6 17.5c-.53-1.35-.9-2.94-.9-4.5C5.1 8.04 8.14 5 12 5s6.9 3.04 6.9 6.98c0 1.48-.35 3.09-.9 4.52z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Customer Focus</h3>
                <p>Our customers are at the heart of everything we do.</p>
              </div>

              <div className="bg-white p-6 rounded-sm text-center transform transition-transform hover:scale-105">
                <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-md">
                  <svg className="w-10 h-10 fill-[#639d91]" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h3 className="text-gray-800 font-semibold mb-2">Integrity</h3>
                <p className="text-gray-600">We operate with honesty and transparency in all our interactions.</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.2);
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
      `}</style>
    </main>
  );
}