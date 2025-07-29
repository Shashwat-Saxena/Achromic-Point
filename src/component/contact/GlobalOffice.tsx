'use client';

import { motion } from 'framer-motion';

const GlobalOfficeSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Connect with one of our global offices
        </h2>

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 150 }}
          className="flex flex-col lg:flex-row bg-white rounded-xl overflow-hidden shadow-md transform-gpu will-change-transform max-w-full"
        >
          {/* Map */}
          <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.4463018705374!2d-71.07964732409486!3d42.366198135944215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370a9c97f7637%3A0xddb40c06d0579cc4!2sHubSpot!5e0!3m2!1sen!2sin!4v1691904261643!5m2!1sen!2sin"
              loading="lazy"
              className="w-full h-full border-0"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Details */}
          <div className="w-full lg:w-1/2 p-6 sm:p-10 text-black">
            <h3 className="text-xl font-semibold mb-2">Global Headquarters</h3>
            <p className="mb-2">2 Canal Park</p>
            <p className="mb-2">Cambridge, MA 02141</p>
            <p className="mb-4">United States</p>

            <h4 className="font-semibold mb-1">Phone / Fax</h4>
            <p className="mb-2">+1 888 HUBSPOT</p>
            <p className="mb-4">(+1 888 482 7768)</p>
            <p className="mb-4">Fax: +1 617 812 5820</p>

            <h4 className="font-semibold mb-1">Press / Media / Blogger Information</h4>
            <a
              href="#"
              className="text-blue-600 underline font-medium"
            >
              Visit our Newsroom for contact info
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalOfficeSection;
