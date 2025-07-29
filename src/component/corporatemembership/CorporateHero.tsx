'use client';

import Image from 'next/image';
import heroImg from '@/@/assets/banner.jpeg'; // ✅ Change this path to your image

const HeroImageSection = () => {
  return (
    <section className="w-full h-screen  flex items-center justify-center mt-[-44]">
      <div className="relative w-full h-full">
        <Image
          src={heroImg}
          alt="Hero Background"
          fill
          className="object-contain object-center"
          priority
          unoptimized
        />
      </div>
    </section>
  );
};

export default HeroImageSection;
