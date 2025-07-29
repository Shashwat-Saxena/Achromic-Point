'use client';

import React from 'react';
import { BookOpen, Download } from 'lucide-react';

const issues = [
  { number: '01', month: 'Apr', year: '2020' },
  { number: '02', month: 'May', year: '2020' },
  { number: '03', month: 'Jun', year: '2020' },
  { number: '04', month: 'Jul', year: '2020' },
  { number: '05', month: 'Aug', year: '2020' },
  { number: '06', month: 'Sep', year: '2020' },
  { number: '07', month: 'Oct', year: '2020' },
  { number: '08', month: 'Nov', year: '2020' },
  { number: '09', month: 'Dec', year: '2020' },
  { number: '10', month: 'Feb', year: '2021' },
  { number: '11', month: 'May', year: '2021' },
  { number: '12', month: 'Aug', year: '2021' },
  { number: '13', month: 'Nov', year: '2021' },
  { number: '14', month: 'Mar', year: '2022' },
  { number: '15', month: 'Jul', year: '2022' },
  { number: '16', month: 'Oct', year: '2022' },
];

const EMagazineCards = () => {
  return (
    <section className="w-full bg-gradient-to-br from-gray-100 to-white py-12 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {issues.map((issue) => (
          <div
            key={issue.number}
            className="group relative rounded-2xl p-6 bg-white/10 backdrop-blur-md border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] flex flex-col justify-between"
          >
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white text-red-600 rounded-full p-3 shadow-lg">
              <BookOpen className="w-6 h-6" />
            </div>

            <div className="pt-8 text-center">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-red-600">
                ISSUE #{issue.number}
              </h3>
              <p className="text-gray-500 mt-1">
                {issue.month} {issue.year}
              </p>
            </div>

            <button className="mt-6 inline-flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition">
              <Download className="w-4 h-4" />
              Free - Download
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EMagazineCards;
