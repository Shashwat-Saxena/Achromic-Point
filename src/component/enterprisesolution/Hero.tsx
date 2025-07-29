"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import herocard from "@/@/assets/enterprise-solutions.jpg";

const EnterpriseHeroSection = () => {
  return (
    <section className="pt-30 relative w-full min-h-[80vh] sm:min-h-[90vh] md:min-h-screen overflow-hidden pt-10">
      {/* Background Image */}
      <Image
        src={herocard}
        alt="Enterprise Solutions"
        fill
        priority
        quality={100}
        className="object-cover object-center z-0"
      />

      {/* Overlay with Glass Effect */}
      <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm z-10" />

      {/* Bottom SVG Curve */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg
          className="w-full h-28 md:h-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,170.7C96,149,192,107,288,106.7C384,107,480,149,576,186.7C672,224,768,256,864,256C960,256,1056,224,1152,186.7C1248,149,1344,107,1392,85.3L1440,64V320H0Z"
          ></path>
        </svg>
      </div>

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[#707AAD] text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg"
        >
          Empowering Enterprises with Tech-Driven Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[#B0B1C5] text-base sm:text-lg md:text-xl max-w-xl mb-6 drop-shadow-md"
        >
          Create, connect, and innovate with powerful digital experiences tailored to your enterprise journey.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-gray-800 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold transition duration-300 shadow-lg hover:bg-[#B0B1C5]"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default EnterpriseHeroSection;
