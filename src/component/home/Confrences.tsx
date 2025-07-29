"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import image1 from "@/@/assets/image1.jpg";
import image2 from "@/@/assets/image2.jpg";
import image3 from "@/@/assets/image3.jpg";
import image4 from "@/@/assets/image4.jpg";
import image5 from "@/@/assets/image5.jpg";
import image6 from "@/@/assets/image6.jpg";
import image7 from "@/@/assets/GST_Workshop_Delhi1.jpg";
import image8 from "@/@/assets/intell.jpg";
import image9 from "@/@/assets/CFO_Pune_.jpg"
import image10 from "@/@/assets/GST_Workshop_Mumbai1.jpg"

interface Event {
  title: string;
  date: string;
  location: string;
  image: StaticImageData;
  description: string;
}

const events: Event[] = [
  {
    title: "UAE Tax & Compliance Summit 2025 - Dubai, UAE",
    date: "September 18",
    location: "Dubai, UAE",
    image: image1,
    description: "Learn the fundamentals of data analytics in this hands-on workshop.",
  },
  {
    title: "General Counsel Summit - Conference & Awards 2025 - Mumbai, India",
    date: "September 11",
    location: "Mumbai, India",
    image: image2,
    description: "Join industry leaders to discuss the latest in cybersecurity.",
  },
  {
    title: "Advanced Workshop on Transfer Pricing - Virtual",
    date: "September 4",
    location: "Virtual",
    image: image3,
    description: "Explore advancements in AI and machine learning technologies.",
  },
  {
    title: "GST in Action: A Practical Perspective - Chennai, India",
    date: "August 29",
    location: "Chennai, India",
    image: image4,
    description: "Get hands-on experience with blockchain development.",
  },
  {
    title: "Certificate Course on International Tax",
    date: "August 26",
    location: "Online",
    image: image5,
    description: "Discover the future of cloud computing.",
  },
  {
    title: "The General Counsel Summit (UAE) – The Summit of Legal Minds - Dubai, UAE",
    date: "November 14",
    location: "Dubai, UAE",
    image: image6,
    description: "Unveil the latest trends in IoT technology.",
  },
   {
    title: "GST in Action: A Practical Perspective - New Delhi",
    date: "December 10",
    location: "New Delhi, India",
    image: image7,
    description: "Unveil the latest trends in IoT technology.",
  },
   {
    title: "Intellectual Property Symposium & Awards 2025 - New Delhi",
    date: "September 12",
    location: "New Delhi, India",
    image: image8,
    description: "Unveil the latest trends in IoT technology.",
  },
   {
    title: "GST in Action: A Practical Perspective - Mumbai",
    date: "November 14",
    location: "Mumbai, India",
    image: image9,
    description: "Unveil the latest trends in IoT technology.",
  },
   {
    title: "CFO leadership Summit & Awards 2025 - Pune",
    date: "October 28",
    location: "Pune, India",
    image: image10,
    description: "Unveil the latest trends in IoT technology.",
  },
];

export default function PastEvents() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8  bg-gradient-to-br from-gray-100 to-white min-h-screen">
      <div className="max-w-7xl mx-auto cursor-pointer">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl font-extrabold text-center text-gray-700 mb-16"
        >
          🚀 Past Events
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 relative transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 z-10" />
              </div>

              <div className="p-6 relative z-20 space-y-3">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#6E7CAE] transition duration-300">
                  {event.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span className="flex items-center gap-1">
                    📅 {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    📍 {event.location}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{event.description}</p>
              </div>

              {/* Gradient border animation */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#6E7CAE] group-hover:animate-pulse transition-all pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
