'use client';

import { Phone, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section className="bg-[#002B31] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Get in touch<span className="text-orange-500">.</span></h2>
        <p className="text-lg mb-12">Want to get in touch? We'd love to hear from you. Here's how you can reach us.</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Sales Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="bg-white text-black rounded-xl p-8 shadow-lg"
          >
            <div className="flex justify-center mb-4">
              <Phone className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Talk to Sales</h3>
            <p className="text-center mb-4">
              Interested in HubSpot’s software? Just pick up the phone to chat with a member of our sales team.
            </p>
            <p className="text-center text-blue-600 font-semibold mb-2 underline">
              000800 050 3669
            </p>
            <Link href="#" className="block text-orange-600 text-sm text-center underline font-medium">
              View all global numbers
            </Link>
          </motion.div>

          {/* Support Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="bg-white text-black rounded-xl p-8 shadow-lg"
          >
            <div className="flex justify-center mb-4">
              <MessageSquare className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Contact Customer Support</h3>
            <p className="text-center mb-6">
              Sometimes you need a little help from your friends. Or a HubSpot support rep. Don’t worry... we’re here for you.
            </p>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-orange-700 transition"
              >
                Contact Support
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
