"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import card1 from "@/@/assets/card1.jpg";
import card2 from "@/@/assets/card22.jpg";
import card3 from "@/@/assets/card33.jpg";
import card4 from "@/@/assets/card44.jpg";
import card5 from "@/@/assets/card5.jpg";
import card6 from "@/@/assets/card6.jpg";

const cards = [
  {
    id: 1,
    title: "Modern Design",
    description: "Beautiful, intuitive UI with a clean and responsive layout.",
    image: card1,
    date: "22 July 2025",
    time: "10:30 AM",
    location: "Delhi, India",
    price: "$99",
  },
  {
    id: 2,
    title: "Lightning Fast",
    description: "Optimized performance for blazing fast load times.",
    image: card2,
    date: "25 July 2025",
    time: "2:00 PM",
    location: "Mumbai, India",
    price: "$79",
  },
  {
    id: 3,
    title: "Fully Responsive",
    description: "Looks great on mobile, tablet, and desktop devices.",
    image: card3,
    date: "30 July 2025",
    time: "4:45 PM",
    location: "Bangalore, India",
    price: "$89",
  },
  {
    id: 4,
    title: "Creative Concept",
    description: "Engaging layouts to elevate your digital experience.",
    image: card4,
    date: "02 August 2025",
    time: "11:00 AM",
    location: "Chennai, India",
    price: "$109",
  },
  {
    id: 5,
    title: "Clean Aesthetics",
    description: "Minimal design with maximum usability.",
    image: card5,
    date: "08 August 2025",
    time: "5:00 PM",
    location: "Pune, India",
    price: "$69",
  },
  {
    id: 6,
    title: "Powerful Tools",
    description: "Delivering features that truly matter.",
    image: card6,
    date: "15 August 2025",
    time: "6:30 PM",
    location: "Hyderabad, India",
    price: "$99",
  },
];

const AdvancedCards = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Events
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Discover what makes our events stand out with advanced features
          designed to impress.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-white flex flex-col justify-between h-full rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            {/* Image */}
            <div className="relative h-52 w-full">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div className="space-y-3 mb-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">{card.description}</p>

                <div className="pt-2 border-t text-sm text-gray-600 space-y-1">
                  <p>
                    <span className="font-medium text-gray-800">Date:</span>{" "}
                    {card.date}
                  </p>
                  <p>
                    <span className="font-medium text-gray-800">Time:</span>{" "}
                    {card.time}
                  </p>
                  <p>
                    <span className="font-medium text-gray-800">
                      Location:
                    </span>{" "}
                    {card.location}
                  </p>
                  <p>
                    <span className="font-medium text-gray-800">Price:</span>{" "}
                    {card.price}
                  </p>
                </div>
              </div>

              {/* Button at the bottom */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full border border-gray-800 text-gray-800 font-medium py-2 px-4 rounded-full transition duration-300 hover:bg-gray-100 text-sm sm:text-base"
              >
                Know More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AdvancedCards;
