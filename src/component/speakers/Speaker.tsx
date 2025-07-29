"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiLinkedin } from "react-icons/fi";
import type { StaticImageData } from "next/image";

// Sample Images
import john from "@/@/assets/OIP.jpg";
import jane from "@/@/assets/doe.jpg";
import member from "@/@/assets/member.webp";
import swati from "@/@/assets/swati.jpg";
import coca from "@/@/assets/coca.jpg";

interface Speaker {
  _id: string;
  name: string;
  image: string | StaticImageData;
  designation: string;
  company: string;
  companyLogo?: string | StaticImageData;
  linkedIn?: string;
}

// Dummy API
async function getAllSpeakers() {
  return {
    statuscode: {
      speakers: [
        {
          _id: "1",
          name: "Shruti Chawla",
          image: swati,
          designation: "Director, Legal Counsel - APAC",
          company: "The Coca-Cola Company",
          companyLogo: coca,
          linkedIn: "https://linkedin.com/in/shruti-chawla",
        },
        {
          _id: "2",
          name: "Jane Smith",
          image: jane,
          designation: "CEO",
          company: "Innovate Inc",
          companyLogo: coca,
          linkedIn: "https://linkedin.com/in/janesmith",
        },
        {
          _id: "3",
          name: "John Doe",
          image: john,
          designation: "CTO",
          company: "Techverse",
          companyLogo: coca,
          linkedIn: "https://linkedin.com/in/johndoe",
        },
        {
          _id: "4",
          name: "Amit Sharma",
          image: jane,
          designation: "Head of Product",
          company: "Zypher Labs",
          companyLogo: coca,
          linkedIn: "https://linkedin.com/in/amitsharma",
        },
        {
          _id: "5",
          name: "Sweta Roy",
          image: swati,
          designation: "VP Marketing",
          company: "BrightEdge",
          companyLogo: coca,
          linkedIn: "https://linkedin.com/in/swetaroy",
        },
        {
          _id: "6",
          name: "Ravi Kumar",
          image: john,
          designation: "Data Scientist",
          company: "Alpha AI",
          companyLogo: coca,
          linkedIn: "https://linkedin.com/in/ravikumar",
        },
      ],
    },
  };
}

export default function Speakers() {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const response = await getAllSpeakers();
        setSpeakers(response.statuscode.speakers);
      } catch {
        console.error("Failed to load speakers");
      } finally {
        setLoading(false);
      }
    };
    fetchSpeakers();
  }, []);

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100">
      {/* Hero */}
      <section className="relative h-[400px] w-full">
        <Image
          src={member}
          alt="speakers background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-poppins tracking-tight text-[#6F7CAC]">
            Our Speakers
          </h1>
          <p className="text-xl max-w-2xl mt-4 text-gray-200 font-poppins text-[#AFB0C4]">
            Learn from industry leaders and innovators shaping tomorrow.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
          {speakers.map((speaker) => (
            <div
              key={speaker._id}
              className="bg-white/60 backdrop-blur-md border border-gray-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition duration-300 relative group"
            >
              {/* Image */}
              <div className="relative w-28 h-28 mx-auto mb-4 drop-shadow-md">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="rounded-full object-cover border-4 border-white shadow-md"
                />
                {speaker.companyLogo && (
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center border border-gray-300">
                    <Image
                      src={speaker.companyLogo}
                      alt={`${speaker.company} logo`}
                      width={80}
                      height={80}
                      className="object-contain rounded-full"
                    />
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 transition group-hover:scale-105 duration-300">
                  {speaker.name}
                </h3>
                <p className="text-sm text-gray-700 mt-2 italic tracking-wide">
                  {speaker.designation}
                </p>
                <p className="inline-block mt-1 px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full shadow">
                  {speaker.company}
                </p>
              </div>

              {/* LinkedIn */}
              {speaker.linkedIn && (
                <div className="flex justify-center mt-4">
                  <a
                    href={speaker.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-100 hover:bg-blue-200 transition"
                  >
                    <FiLinkedin className="text-blue-600 text-lg" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
