'use client';

import { CheckCircle } from 'lucide-react';

const benefits = [
  'Will be able to attend all programs (Maximum of 8) organised by Achromic Point free of charge throughout the calendar year 2025',
  'The member may depute any other officer only from his/her organisation with the authorization on Company Letter Head certifying that the nominated person is from his/her organisation',
  'Individual member may depute his/her partner, employee from the same firm (Authorization letter would be needed)',
  'Copy of Achromic Point Knowledge Forum eMagazine worth INR 1200 Per Annum for free.',
];

const CorporateMembershipSection = () => {
  return (
    <section className=" relative w-full bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] py-20 px-6 sm:px-10 lg:px-24 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e293b] mb-4">
          Corporate Membership <span className="text-[#BE3632]">2025</span>
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Enroll now and enjoy exclusive benefits from January 2025 – December 2025.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2">
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            className="flex items-start bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <CheckCircle className="text-[#6B7BB2] w-6 h-6 mt-1 mr-4 flex-shrink-0" />
            <p className="text-gray-800 text-base leading-relaxed">{benefit}</p>
          </div>
        ))}
      </div>

      {/* Decorative background blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#6B7BB2]/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#BE3632]/20 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default CorporateMembershipSection;
