'use client';

// import { useEffect } from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { BsStarFill } from 'react-icons/bs';

const testimonials = [
  {
    name: 'Sarvpriya Sonal',
    feedback:
      'The seminar sessions were really great and in depth for GST with immense learning. Recently I had an opportunity with another such session but it was not in comparison to. On a positive note, if you have material for furthering learning on GST, I will be highly obliged if you do share the same.',
    rating: 5,
  },
  {
    name: 'Rohit Sharma',
    feedback:
      'Absolutely loved the interactive sessions! The content and the presenters were both amazing. Highly recommended for professionals.',
    rating: 5,
  },
  {
    name: 'Anjali Mehra',
    feedback:
      'Informative, practical, and engaging. A must-attend for anyone in the finance or compliance field.',
    rating: 4,
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Auto-slide every 5s

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#a9aec1] py-16 px-4 text-center text-gray-900">
      <div className="max-w-4xl mx-auto">
        <p className="text-pink-700 tracking-widest uppercase font-semibold text-sm">Testimonials</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1b1c39] mt-2 mb-6">What Clients Say</h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-transparent px-6 md:px-12"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-teal-400 text-white p-4 rounded-full">
                <FaQuoteLeft size={24} />
              </div>
            </div>
            <p className="text-lg md:text-xl font-medium mb-8 leading-relaxed">
              {testimonials[current].feedback}
            </p>
            <h4 className="text-lg font-semibold text-gray-900">{testimonials[current].name}</h4>
            <div className="flex justify-center mt-2">
              {Array.from({ length: testimonials[current].rating }, (_, i) => (
                <BsStarFill key={i} className="text-yellow-400 mx-0.5" />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <div className="flex justify-between mt-10 max-w-[200px] mx-auto">
          <button
            onClick={prevSlide}
            className="bg-[#6E7CB0] hover:bg-[#5e6ca0] text-white p-3 rounded-full transition"
          >
            <IoIosArrowBack size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-[#6E7CB0] hover:bg-[#5e6ca0] text-white p-3 rounded-full transition"
          >
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;