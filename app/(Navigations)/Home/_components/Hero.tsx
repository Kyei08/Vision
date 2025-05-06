"use client"
import { useEffect, useRef } from "react";

const HeroSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const playVideo = async () => {
            if (videoRef.current) {
                try {
                    await videoRef.current.play();
                } catch (error) {
                    console.error("Video playback failed:", error);
                    // Fallback: Show a play button if autoplay fails
                    if (videoRef.current) {
                        videoRef.current.controls = true;
                    }
                }
            }
        };
        playVideo();
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <video
                ref={videoRef}
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/vid/bga.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Text Content */}
            <div className="relative z-10 p-6 md:p-10 text-white text-shadow-lg flex flex-col items-center md:items-start max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
                    Build. Collaborate. Innovate.
                </h1>
               {/*} <button
                    onClick={() => videoRef.current?.play()}
                    className="px-6 py-2 text-lg bg-gradient-to-r from-blue-200 to-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
                />*/}
                <p className="text-lg md:text-xl mb-8 text-center md:text-left">
                    Showcase your projects, connect with fellow developers, and bring your vision to life.
                </p>
                <button className="px-6 py-2 text-lg bg-gradient-to-r from-blue-200 to-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                    Explore Vision
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
