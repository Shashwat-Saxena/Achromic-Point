'use client';

import { motion } from "framer-motion";
import { FaUserTie, FaSearch, FaGem } from "react-icons/fa";

const cardData = [
  {
    icon: <FaUserTie size={40} className="text-[#BE3632] mb-4" />,
    title: "Mission",
    description: "We are ardent about education and advancement.",
  },
  {
    icon: <FaSearch size={40} className="text-[#BE3632] mb-4" />,
    title: "Vision",
    description:
      "Our envision helps the growth seeking enterprises in attaining ethical, sustainable and profitable growth.",
  },
  {
    icon: <FaGem size={40} className="text-[#BE3632] mb-4" />,
    title: "Values",
    description: "Trust, respect and Innovation is what holds us.",
  },
];

const MissionVisionValues = () => {
  return (
    <section className="relative py-20 px-4 md:px-20 bg-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#be363219] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#6B7BB230] rounded-full blur-2xl" />
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 w-[600px] h-[600px]"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#6B7BB2"
            d="M51.6,-62.6C64.5,-51.3,72.2,-32.6,74.2,-14.3C76.3,4.1,72.7,22.1,62.9,35.3C53.1,48.6,37.2,57.2,20.7,63.1C4.1,69.1,-13.2,72.5,-28.9,67.2C-44.6,62,-58.7,48,-65.9,31.7C-73.1,15.4,-73.4,-3.3,-67.4,-20.2C-61.4,-37.1,-49.2,-52.3,-34.1,-63.4C-19.1,-74.5,-1.2,-81.6,16.6,-82.2C34.4,-82.9,51.6,-77.8,51.6,-62.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-10 relative">
        {cardData.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="group rounded-xl border border-gray-200 bg-white shadow-md p-6 text-center backdrop-blur-sm transition duration-300 ease-in-out hover:brightness-110 hover:shadow-xl hover:border-[#6B7BB2]/50"
          >
            <div className="flex justify-center transition duration-300 group-hover:scale-110">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-[#6B7BB2] mb-2 transition duration-300 group-hover:text-[#BE3632]">
              {item.title}
            </h3>
            <p className="text-gray-600 transition duration-300 group-hover:text-gray-800 group-hover:font-medium">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MissionVisionValues;
