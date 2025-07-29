'use client';

import Image from 'next/image';
import heroImg from '@/@/assets/banner.jpeg';

const HeroImageSection = () => {
  return (
    <section className="w-full flex items-center justify-center py-4 sm:py-6 md:py-8 lg:py-10 ">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
        <Image
          src={heroImg}
          alt="Hero Background"
          fill
          className="object-contain object-center"
          priority
        />
      </div>
    </section>
  );
};

export default HeroImageSection;
