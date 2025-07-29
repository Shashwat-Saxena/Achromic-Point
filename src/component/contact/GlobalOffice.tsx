'use client';

import { motion } from 'framer-motion';

const GlobalOfficeSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#6E7CB0]">
          Connect with One of Our Global Offices
        </h2>

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 150 }}
          className="flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-xl"
        >
          {/* Google Map */}
          <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7014.226044384683!2d77.2515864!3d28.5416563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3dde64a38f5%3A0x1923baa4fe80157b!2sAchromic%20Point%20Consulting%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1722255846644!5m2!1sen!2sin"
              loading="lazy"
              className="w-full h-full border-0"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Address Info */}
          <div className="w-full lg:w-1/2 p-8 sm:p-10 text-gray-800 bg-white">
            <h3 className="text-2xl font-semibold mb-4 text-[#6E7CB0]">Global Headquarters</h3>
            <div className="space-y-2">
              <p>F-11, First Floor, Kalkaji,</p>
              <p>New Delhi-110019, India</p>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2 text-[#6E7CB0]">Phone</h4>
              <p>011-4601-1835</p>
              <p>+91-8447758768</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalOfficeSection;
