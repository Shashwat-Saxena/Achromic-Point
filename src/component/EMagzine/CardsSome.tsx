'use client';

import React from 'react';

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
    <section className="w-full bg-white py-12 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {issues.map((issue) => (
          <div
            key={issue.number}
            className="rounded-xl shadow-md bg-gradient-to-br from-white to-gray-100 hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col justify-between text-center group hover:scale-105 transform ease-in-out duration-300"
          >
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                ISSUE#{issue.number}
              </h3>
              <div className="w-10 mx-auto border-t-2 border-gray-400 mb-2"></div>
              <p className="text-indigo-500 font-medium text-base">
                {issue.month} {issue.year}
              </p>
            </div>
            <button className="mt-6 bg-red-600 text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-red-700 transition-colors">
              Free - Download
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EMagazineCards;
