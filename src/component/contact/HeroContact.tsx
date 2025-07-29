"use client";

import { Phone, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section className="bg-gray-700  py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#6E7CB0]">
          Get in touch<span className="text-red-700">.</span>
        </h2>
        <p className="text-lg mb-12 text-[#AFB0C4]">
          Want to get in touch? We&apos;d love to hear from you. Here&apos;s how
          you can reach us.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Sales Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white text-black rounded-xl p-8 shadow-lg"
          >
            <div className="flex justify-center mb-4">
              <Phone className="w-8 h-8 text-[#CB2F36]" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center text-[#6E7CB0]">
              Talk to Sales
            </h3>
            <p className="text-center mb-4 text-[#AFB0C4]">
              Interested in HubSpot’s software? Just pick up the phone to chat
              with a member of our sales team.
            </p>
            <p className="text-center text-[#CB2F36] font-semibold mb-2 underline">
              +91-8447758768
            </p>
          </motion.div>

          {/* Support Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white text-black rounded-xl p-8 shadow-lg"
          >
            <div className="flex justify-center mb-4">
              <MessageSquare className="w-8 h-8 text-[#CB2F36]" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center text-[#6E7CB0]">
              Contact Customer Support
            </h3>
            <p className="text-center mb-6 text-[#AFB0C4]">
              Sometimes you need a little help from your friends. Or a HubSpot
              support rep. Don’t worry... we’re here for you.
            </p>
            <div className="flex justify-center">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="tel:+91-8447758768" // <-- Yahan apna contact number daalna
                className="bg-[#CB2F36] text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-orange-700 transition inline-block"
              >
                Contact Support
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
