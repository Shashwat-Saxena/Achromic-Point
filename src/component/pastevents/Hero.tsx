"use client";

import React from "react";
import Image from "next/image";
import herocard from "@/@/assets/herocard.jpg";

const HeroSection = () => {
  return (
    <section className="pt-30 relative w-full min-h-[80vh] sm:min-h-[90vh] lg:min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={herocard}
          alt="Background"
          fill
          quality={100}
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover object-top md:object-center"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-700 bg-opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4 sm:px-8 md:px-16">
        <h1 className="text-[#6E7CAE] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Past Events
        </h1>
        <p className="text-[#AFB0C4] text-base sm:text-lg md:text-xl max-w-3xl">
          Explore the highlights and memories of our previously held programs, trainings, and community gatherings.
        </p>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 w-full z-20">
        <svg
          className="w-full h-32 sm:h-40 md:h-52"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,224L60,197.3C120,171,240,117,360,122.7C480,128,600,192,720,213.3C840,235,960,213,1080,197.3C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
