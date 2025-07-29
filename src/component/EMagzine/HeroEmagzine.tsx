'use client';

import Image from 'next/image';
import React from 'react';
import logo from '@/@/assets/eMagazine.jpg';

const EMagazineHero = () => {
  return (
    <section className="w-full bg-[#e4e2dd] px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <Image
          src={logo}
          alt="eMagazine Banner"
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
};

export default EMagazineHero;
