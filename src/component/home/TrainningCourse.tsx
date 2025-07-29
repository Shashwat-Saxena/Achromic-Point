"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import course1 from "@/@/assets/course1.avif";
import course2 from "@/@/assets/course2.avif";
import apis from "@/@/assets/apics_logo.png";
import bpis from "@/@/assets/bsi-smg_logo.png";
import Link from "next/link";

const trainingCourses = [
  {
    title: "Certificate Course on International Tax",
    date: "26 Aug",
    location: "Online",
    mode: "Live Digital",
    image: course1,
    partnerLogo: apis,
  },
  {
    title: "GST in Action: A Practical Perspective - Chennai, India",
    date: "29 Aug",
    location: "Chennai, India",
    mode: "Live Digital",
    image: course2,
    partnerLogo: bpis,
  },
];

const TrainingCoursesSection = () => {
  return (
    <section className="px-4 md:px-10 py-12">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#00294a]">
          Upcoming Events
        </h2>
        <div className="flex gap-4 flex-wrap">
          <button className="bg-[#6E7CB0] text-[#00294a] cursor-pointer font-poppins px-6 py-3 rounded-full shadow-sm">
            Choose an Interest ▾
          </button>
          <Link href="/upcomingevents">
            <button className="bg-[#C7343A] hover:bg-[#E6F0F6] hover:text-black cursor-pointer text-white font-poppins px-6 py-3 rounded-full transition-all">
              Browse All Courses →
            </button>
          </Link>
        </div>
      </div>

      <div className="space-y-10">
        {trainingCourses.map((course, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row gap-6 items-start border-b pb-6"
          >
            <div className="w-full md:w-[300px] h-[200px] relative rounded-lg overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <h3 className="text-lg font-bold text-[#00294a]">
                  {course.title}
                </h3>
                <div className="text-right text-xs text-gray-500">
                  <span className="block">IN ASSOCIATION WITH:</span>
                  <Image
                    src={course.partnerLogo}
                    alt="partner"
                    width={80}
                    height={20}
                    className="mt-1"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-2">
                {course.date} • {course.location} • {course.mode}
              </p>
              <button className="mt-4 text-sm font-semibold inline-flex items-center gap-2 text-[#00294a] hover:no-underline group">
                <span className="group-hover:bg-[#C7343A] group-hover:text-white transition-all px-3 py-1 rounded-full border border-[##C7343A]">
                  Find out more →
                </span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrainingCoursesSection;
