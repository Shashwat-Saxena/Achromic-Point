"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import hero from "@/@/assets/web.jpg";
import about from "@/@/assets/about.jpg"

export default function AboutPage() {
  return (
    <div className=" text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex flex-col justify-center items-start px-6 md:px-16 overflow-hidden">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold uppercase z-10 text-[#BE3632]">
          About <br />{" "}
          <span className="text-[#6B7BB2] font-poppins">Achromic Point</span>
        </h1>

        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 bg-black/50">
          <Image
            src={hero}
            alt="Emmy award"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </div>

        {/* Professional Bottom Curve */}
        <div className="absolute bottom-0 left-0 w-full z-10 overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-[100px] md:h-[160px]"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff" // ← Match the next section's background color
              d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,197.3C672,203,768,181,864,160C960,139,1056,117,1152,133.3C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative bg-white text-black py-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-80px] left-[-100px] w-[300px] h-[300px] bg-[#6B7BB2] opacity-20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[-100px] right-[-80px] w-[250px] h-[250px] bg-[#BE3632] opacity-20 rounded-full blur-3xl animate-pulse"></div>
          <svg
            className="absolute top-1/3 left-1/4 w-[300px] h-[300px] opacity-10 z-0"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#6B7BB2"
              d="M38.3,-64.3C48.2,-55.2,53.5,-39.5,62.1,-23.4C70.7,-7.4,82.7,8.8,77.7,20.2C72.7,31.5,50.6,38,36.6,48.5C22.5,59,16.5,73.4,6.7,75.4C-3.1,77.4,-15.7,67.1,-27.4,59.7C-39.1,52.3,-49.8,47.7,-61.8,38.2C-73.9,28.8,-87.4,14.4,-85.6,1.1C-83.7,-12.1,-66.5,-24.2,-52.6,-35.7C-38.7,-47.1,-27.9,-57.9,-14.6,-67.2C-1.2,-76.4,14.6,-84.1,29.7,-78.8C44.8,-73.6,59.2,-55.3,38.3,-64.3Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Content Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h2 className="text-xl font-semibold text-[#6B7BB2]">
            Achromic Point is a leading International Intelligence and Events
            Company
          </h2>
          <p className="mt-4 text-gray-700">
            Achromic Point is a leading International Intelligence and Events
            Company that delivers Business Seminars, Conferences, Virtual Events
            and Trainings for Corporates. With over 14+ years of experience, we
            have trained almost 25,000+ Professionals, 4500+ Corporate and
            organized 2000+ Seminars/Conferences/Webinars and the journey
            continues. Our reputation and expertise, combined with a record of
            outstanding service, knowledge to our Professionals, Time
            Management, Excellence & Commitment, our team of professionals
            offers expertise in event organization and management to ensure the
            delivery of successful events. Our foundation stone is laid on the
            fundamentals of an ethical, profitable & sustainable growth through
            a partnering approach.
          </p>
        </motion.div>

        {/* Image/Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={about}
              alt="Video placeholder"
              layout="fill"
              objectFit="cover"
            />
            {/* <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button className="bg-white text-black p-4 rounded-full hover:scale-110 transition">
                ▶
              </button>
            </div> */}
          </div>
        </motion.div>
      </section>

      {/* Floating Contact Button */}
      
    </div>
  );
}
