'use client';

import { useState } from 'react';
// import { motion } from 'framer-motion';
import Image from 'next/image';
// import Link from 'next/link';
import Slider from 'react-slick';

import hero1 from '@/@/assets/herohome1.jpg';
import hero2 from '@/@/assets/herohome2.jpg';

const slides = [
  {
    image: hero1,
    title: 'Empowerment',
    description:
      'Nurture talent and encourage every employee to reach full potential by availing opportunities that arise across the group.',
  },
  {
    image: hero2,
    title: 'Excellence',
    description:
      'We drive innovative solutions to empower our teams and help our clients grow faster in a changing world.',
  },
];

const HeroSection = () => {
  const [, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
  };

  return (
    <section className="relative w-full min-h-screen max-h-[100vh] overflow-hidden ">
      {/* Background Slider */}
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="relative w-full h-[100vh] sm:h-[90vh]">
              <Image
                src={slide.image}
                alt={`slide-${index}`}
                fill
                className="object-cover object-center w-full h-full"
                priority
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#6E7CB0] via-transparent to-transparent opacity-80 z-10" />

      {/* Content */}
      {/* <div className="absolute inset-0 z-20 flex items-center justify-start">
        <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-12">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white max-w-2xl text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold leading-tight mb-6">
              {slides[activeSlide].title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8 font-medium leading-relaxed">
              {slides[activeSlide].description}
            </p>

            <div className="flex flex-wrap gap-4 items-start">
              <Link
                href="#"
                className="bg-[#C73B3D] hover:bg-[#9932cc] text-white font-medium rounded-full px-6 py-3 transition-all duration-300 flex items-center gap-2"
              >
                Conferences <span className="text-xl">→</span>
              </Link>

              <Link
                href="#"
                className="bg-[#6E7CB0] text-black hover:bg-gray-200 font-medium rounded-full px-6 py-3 transition-all duration-300 flex items-center gap-2"
              >
                Training Courses <span className="text-xl">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
