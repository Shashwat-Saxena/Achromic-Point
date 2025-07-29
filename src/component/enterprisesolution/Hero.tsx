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

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray-500 bg-opacity-60 z-10" />

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
        >
          Empowering Enterprises with Tech-Driven Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-[90%] sm:max-w-xl md:max-w-2xl mb-6"
        >
          Create, connect, and innovate with powerful digital experiences tailored to your enterprise journey.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-white border border-white px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-full font-medium transition duration-300 hover:bg-white hover:text-black"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default EnterpriseHeroSection;
