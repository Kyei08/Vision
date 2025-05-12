// components/Hero.tsx
"use client";
const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/files/prototype/vid/bga_1,2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="relative z-10 flex items-left justify-center h-full text-white text-center">
        <div>
          <h1 className="text-5xl font-bold"></h1>
          
        </div>
      </div>

      {/* Optional: Overlay layer for dark tint */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-[1]" />
    </section>
  );
};

export default Hero;
