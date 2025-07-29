"use client";

import { useState } from "react";
import Image from "next/image";
import { FiPlus, FiX } from "react-icons/fi";
import chand from "@/@/assets/swati.jpg";
import song from "@/@/assets/doe.jpg";
import jacq from "@/@/assets/doe.jpg";
import coca from "@/@/assets/coca.jpg"; // dummy company logo

const agenda = [
  {
    day: "Day 1",
    date: "Friday, Oct 21, 2020",
    events: [
      {
        time: "09:00",
        title: "Opening Keynote",
        speaker: {
          name: "Chandravad",
          image: chand,
          position: "Lead Architect",
          companyLogo: coca,
        },
        description: "",
      },
      {
        time: "10:30",
        title: "Tech Talk",
        speaker: {
          name: "Jacqueline",
          image: jacq,
          position: "Marketing Head",
          companyLogo: coca,
        },
        description: "Modern marketing strategies using data-driven insights.",
      },
    ],
  },
  {
    day: "Day 2",
    date: "Saturday, Oct 22, 2020",
    events: [
      {
        time: "10:00",
        title: "AI Innovations",
        speaker: {
          name: "Chandravad",
          image: chand,
          position: "Senior Developer",
          companyLogo: coca,
        },
        description: "",
      },
      {
        time: "11:30",
        title: "Scaling Startups",
        speaker: {
          name: "Jacqueline",
          image: jacq,
          position: "COO",
          companyLogo: coca,
        },
        description: "",
      },
    ],
  },
  {
    day: "Day 3",
    date: "Sunday, Oct 23, 2020",
    events: [
      {
        time: "11:00",
        title: "Crypto Panel",
        speaker: {
          name: "Song Bao",
          image: song,
          position: "CTO",
          companyLogo: coca,
        },
        description:
          "We are your partners for emerging technology-driven solutions. Be it smart contract audit or cryptocurrency exchange development.",
      },
      {
        time: "12:00",
        title: "Closing Speech",
        speaker: {
          name: "Jacqueline",
          image: jacq,
          position: "Marketing Head",
          companyLogo: coca,
        },
        description: "",
      },
    ],
  },
];

export default function Agenda() {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);

  const selectedAgenda = agenda[selectedDayIndex];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row py-20 px-8 pt-10">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/4 space-y-6">
        {agenda.map((day, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedDayIndex(index);
              setExpandedCardIndex(null);
            }}
            className={`cursor-pointer px-4 py-2 rounded-lg ${
              selectedDayIndex === index
                ? "bg-blue-100 text-blue-800 font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <div className="text-lg">{day.day}</div>
            <div className="text-sm text-gray-500">{day.date}</div>
          </div>
        ))}
      </div>

      {/* Right Timeline */}
      <div className="w-full md:w-3/4 space-y-6 mt-10 md:mt-0 md:pl-10">
        {selectedAgenda.events.map((event, i) => (
          <div key={i}>
            <div className="bg-white rounded-xl shadow border border-gray-200 p-5 flex items-start justify-between">
              {/* Time */}
              <div className="text-sm font-semibold text-gray-600 w-14">{event.time}</div>

              {/* Profile & Content */}
              <div className="flex-1 px-4">
                {event.speaker ? (
                  <div className="flex items-center gap-4">
                    <Image
                      src={event.speaker.image}
                      alt={event.speaker.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-800">
                        {event.speaker.name}
                      </p>
                      <p className="text-sm text-gray-500">{event.title}</p>
                      {event.description && (
                        <p className="text-xs text-gray-500 mt-1">{event.description}</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-gray-700">{event.title}</p>
                )}
              </div>

              {/* Action Icon */}
              <div
                className="text-gray-400 hover:text-gray-600 cursor-pointer mt-1"
                onClick={() =>
                  setExpandedCardIndex((prev) => (prev === i ? null : i))
                }
              >
                {expandedCardIndex === i ? <FiX size={18} /> : <FiPlus size={18} />}
              </div>
            </div>

            {/* Expanded Table */}
            {expandedCardIndex === i && event.speaker && (
              <div className="mt-2 bg-white rounded-lg border shadow p-4">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="text-gray-600 border-b">
                      <th className="py-2 px-4">Speaker</th>
                      <th className="py-2 px-4">Company Logo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4">
                        <div>
                          <p className="font-semibold">{event.speaker.name}</p>
                          <p className="text-xs text-gray-500">
                            {event.speaker.position}
                          </p>
                        </div>
                      </td>
                      <td className="py-2 px-4">
                        {event.speaker.companyLogo && (
                          <Image
                            src={event.speaker.companyLogo}
                            alt="Company Logo"
                            width={50}
                            height={50}
                            className="object-contain"
                          />
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
