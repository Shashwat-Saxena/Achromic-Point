'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const IntroSection = () => {
  const router = useRouter();

  const handleExplore = () => {
    router.push('/courses'); // 👈 Yahan apna page ka route daalna
  };

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-20 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Unlock Your Learning Journey</h2>
        <p className="text-gray-600 text-lg mb-6">
          Discover a wide range of expertly crafted courses tailored to help you succeed in your career. From programming to design, we have everything you need to grow.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleExplore}
          className="bg-[#CB2F36] text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-red-700 transition"
        >
          Explore Courses
        </motion.button>
      </div>
    </section>
  );
};

export default IntroSection;
