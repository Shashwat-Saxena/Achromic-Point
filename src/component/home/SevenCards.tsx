"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import img1 from "@/@/assets/con card1.avif";
import img2 from "@/@/assets/con card2.avif";
import img3 from "@/@/assets/con card3.avif";
import img4 from "@/@/assets/con card4.avif";
import logo1 from "@/@/assets/logo1.png";
import logo2 from "@/@/assets/logo2.png";
import logo3 from "@/@/assets/logo3.png";

const courses = [
  {
    title: "Management Skills for New Managers",
    date: "4 Aug, 2025",
    duration: "4 days",
    month: "Oct",
    location: "Dubai, UAE",
    format: "Live Digital",
    image: img1,
    link: "#",
  },
  {
    title:
      "IASP - Strategy Management Professional (SMP) - Strategy Planning Professional (SPP) Exam Preparation",
    date: "19 Oct, 2025",
    duration: "5 days",
    location: "Dubai, UAE",
    format: "Live Digital",
    image: img2,
    logo: logo1,
    link: "#",
  },
  {
    title: "Strategic Communication in Total Rewards - WorldatWork",
    location: "Dubai, UAE",
    format: "Live Digital",
    image: img3,
    logo: logo2,
    link: "#",
  },
  {
    title:
      "Certified Blockchain Business Foundations (CBBF) / Certified Blockchain Solution Architect (CBSA)",
    date: "25 Aug, 2025",
    duration: "4 days",
    location: "Dubai, UAE",
    format: "Live Digital",
    image: img4,
    logo: logo3,
    link: "#",
  },
];

const SevenCardsSection = () => {
  return (
    <section className="px-4 md:px-10 py-12">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#00294a]">
          Upcoming Training Courses
        </h2>
        <div className="flex gap-4 flex-wrap">
          <button className="bg-gray-100 text-[#00294a] font-medium px-6 py-3 rounded-full shadow-sm">
            Choose an Interest ▾
          </button>
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full transition-all">
            Browse All Courses →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="rounded-lg shadow-md overflow-hidden flex flex-col justify-between border border-gray-200 transition-all duration-300 bg-white"
          >
            <div className="relative h-48 w-full">
              <Image
                src={course.image}
                alt={course.title}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-500"
              />
            </div>

            <div className="p-5 flex flex-col justify-between flex-grow">
              <h3 className="text-lg font-bold mb-2 text-[#00294a]">
                {course.title}
              </h3>
              {(course.date || course.duration || course.month) && (
                <p className="text-sm text-gray-600 mb-1">
                  {course.date && `${course.date} •`} {course.duration} {course.month && `+ ${course.month}`}
                </p>
              )}
              <p className="text-sm font-semibold text-[#00294a] mb-2">
                {course.location} • {course.format}
              </p>
              {course.logo && (
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-1">IN ASSOCIATION WITH:</p>
                  <Image src={course.logo} alt="partner" width={100} height={30} />
                </div>
              )}
              <Link
                href={course.link}
                className="text-sm font-semibold mt-auto inline-flex items-center gap-2 text-[#00294a] hover:no-underline group"
              >
                <span className="group-hover:bg-pink-600 group-hover:text-white transition-all px-3 py-1 rounded-full border border-pink-600">
                  Find out more →
                </span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SevenCardsSection;
