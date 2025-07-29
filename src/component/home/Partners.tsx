"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import logo1 from "@/@/assets/1.jpg";
import logo2 from "@/@/assets/2pwc.jpg";
import logo3 from "@/@/assets/3.jpg";
import logo4 from "@/@/assets/4.jpg";
import logo5 from "@/@/assets/5.jpg";

const logos = [logo1, logo2, logo3, logo4, logo5];

const PartnersSection = () => {
  return (
    <section className="w-full bg-[#e6e7ec] py-14 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 px-4"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1e1f3b]">
          List of Partners
        </h2>
      </motion.div>

      {/* Infinite Scrolling Container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {/* Duplicate logos twice for smooth looping */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md h-32 flex items-center justify-center min-w-[180px]"
            >
              <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                className="max-h-20 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
