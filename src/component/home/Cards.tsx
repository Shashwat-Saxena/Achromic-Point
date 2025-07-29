"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import trainingImg from "@/@/assets/card1.avif"; // replace with your own image
import eventsImg from "@/@/assets/card2.avif";
import card3 from "@/@/assets/card3.avif";
import card4 from "@/@/assets/card4.avif"; // replace with your own image

const cardData = [
  {
    title: "Training",
    image: trainingImg,
    link: "#",
  },
  {
    title: "Events",
    image: eventsImg,
    link: "#",
  },
  {
    title: "Event Managment",
    image: card3,
    link: "#",
  },
  {
    title: "Exibitions",
    image: card4,
    link: "#",
  },
];

const FeatureCards = () => {
  return (
    <section className="bg-[#6B79B4] py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {cardData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-[#6E7CAE] to-[#C73B3D] text-white rounded-xl p-6 flex flex-col justify-between relative overflow-hidden min-h-[300px] group"
          >
            {/* Circle Image Overlay */}
            <div className="absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4 w-120 h-100 rounded-full overflow-hidden opacity-70 group-hover:scale-105 transition-transform duration-700 ease-in-out">
              <Image
                src={item.image}
                alt={item.title}
                className="w-auto h-auto object-cover"
                unoptimized
              />
            </div>

            {/* Content */}
            <h2 className="text-3xl font-bold mb-8 z-10 relative">
              {item.title}
            </h2>

            <Link
              href={item.link}
              className="text-white font-semibold z-10 relative w-[150px]"
            >
              <div className="flex items-center gap-2 bg-transparent rounded-full px-4 py-2 transition-all duration-300 group hover:bg-[#C73B3D] hover:text-white">
                View More
                <span className="bg-[#C73B3D] group-hover:bg-white group-hover:text-pink-600 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm transition-all duration-300">
                  →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
