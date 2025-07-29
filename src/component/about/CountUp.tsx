'use client';

import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FaUserTie, FaBriefcase, FaChalkboardTeacher } from 'react-icons/fa';

const stats = [
  {
    icon: <FaUserTie size={30} className="text-white" />,
    label: 'Professionals',
    count: 25000,
    bg: 'bg-[#4B5A88]',
  },
  {
    icon: <FaBriefcase size={30} className="text-white" />,
    label: 'Corporates',
    count: 4500,
    bg: 'bg-[#BE3632]',
  },
  {
    icon: <FaChalkboardTeacher size={30} className="text-white" />,
    label: 'Seminars/Conferences/Webinars',
    count: 2000,
    bg: 'bg-[#4B5A88]',
  },
];

const StatCounter = () => {
  return (
    <section className="bg-[#b4b9cc] py-16 px-4 sm:px-10 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-3"
          >
            <div className={`w-16 h-16 flex items-center justify-center rounded-xl shadow-md ${item.bg}`}>
              {item.icon}
            </div>
            <h3 className="text-4xl font-bold text-[#0f1b2a] ">
              <CountUp end={item.count} duration={2.5} />
            </h3>
            <p className="text-base font-semibold text-black">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatCounter;
