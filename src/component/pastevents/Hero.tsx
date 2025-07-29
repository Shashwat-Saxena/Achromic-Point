"use client";

import React from "react";
import Image from "next/image";
// import { motion } from "framer-motion";
import herocard from "@/@/assets/herocard.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden pt-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={herocard}
          alt="Background"
          fill
          quality={100}
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover sm:object-center object-[top] md:object-center"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4 sm:px-6 md:px-10">
        {/* Add your heading or button here */}
      </div>
    </section>
  );
};

export default HeroSection;
