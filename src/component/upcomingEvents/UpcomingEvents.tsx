'use client';

import Image from 'next/image';
import React from 'react';
import logo from '@/@/assets/upcoming.jpg';

const UpcomingEventsHero = () => {
  return (
    <section className="w-full  px-4 py-9 pt-12">
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

export default UpcomingEventsHero;
