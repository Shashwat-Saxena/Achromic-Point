'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import whyChooseImg from '@/@/assets/2whychose.jpeg';

const WhyChooseSection = () => {
  return (
    <section className="relative w-full py-20 px-4 sm:px-8 lg:px-16 overflow-hidden bg-[#f4f4f5]">
      {/* 🎨 Background Decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Top-left blur blob */}
        <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-[#6B7BB2]/30 rounded-full blur-[100px]" />

        {/* Bottom-right blur blob */}
        <div className="absolute -bottom-24 -right-24 w-[300px] h-[300px] bg-[#BE3632]/20 rounded-full blur-[120px]" />

        {/* Organic SVG shape middle-right */}
        <svg
          className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[400px] h-[400px] opacity-10"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#6B7BB2"
            d="M40.5,-65.3C53.8,-54.8,66,-44.1,70.7,-30.8C75.3,-17.4,72.3,-1.3,66.6,12.4C60.8,26,52.4,37.2,42.4,48.3C32.4,59.4,20.8,70.3,5.7,71.5C-9.4,72.6,-18.8,64,-30.4,56.6C-42,49.1,-55.8,42.7,-63.2,31.6C-70.5,20.5,-71.3,4.7,-67.6,-9.3C-63.9,-23.2,-55.7,-34.2,-46.1,-45.8C-36.4,-57.3,-25.2,-69.4,-11.4,-73.5C2.3,-77.5,17.7,-73.3,40.5,-65.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* 📦 Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* 🖼️ Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden rounded-xl shadow-lg">
            <Image
              src={whyChooseImg}
              alt="Why Choose Us"
              className="w-full h-auto object-cover"
              priority
              unoptimized
            />
          </div>
        </motion.div>

        {/* 📝 Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[#111827]"
        >
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-[#0f172a] mb-6">
            Why Choose <span className="text-[#BE3632]">Achromic Point?</span>
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-[#6B7BB2]">
                Promote your brand, products and services and increase your brand awareness:
              </h3>
              <p className="mt-2 text-base sm:text-lg text-gray-700">
                Our events provide a financially savvy approach to promote your brand, products and services to the right audience.
                In addition, partnering with us in our events is an extraordinary way to reach your audience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#6B7BB2]">
                Identify new customers and attain sales leads:
              </h3>
              <p className="mt-2 text-base sm:text-lg text-gray-700">
                Our databases and directories provide comprehensive, targeted and up to date list of potential clients for your company.
                They will help to make your sales teams more effective and grow your revenues from new customers.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
