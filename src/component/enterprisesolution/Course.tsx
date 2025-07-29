'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const topics = {
  'Legal, Risk & Advisory': [
    'White Collar Crime', 'Cyber Security', 'Compliance', 'Commercial Litigation',
    'Insolvency and Bankruptcy Code', 'Arbitration and Dispute Resolution',
    'Digital Forensics', 'Corporate Fraud', 'Corporate Governance', 'Cyber Crime',
    'Vendor Risk', 'Third Party Risk Management',
  ],
  Taxation: [
    'International Tax', 'Transfer Pricing', 'Income Tax', 'Tax Disputes',
    'Goods and Services Tax (GST)', 'Customs', 'Foreign Trade Policy (FTP)', 'VAT',
  ],
  Accounting: ['IFRS', 'Ind – AS', 'Internal Audit'],
  Leadership: ['Breakthrough in effectiveness', 'Team building', 'Soft Skills'],
};

export default function CourseTopics() {
  return (
    <section className="bg-[#f9fbff] py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#6D7BB1] mb-16">
          Course Topics
        </h2>

        <div className="space-y-20">
          {Object.entries(topics).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-xl rounded-2xl p-6 md:p-10 border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-red-800 mb-6 border-l-4 pl-3 border-red-600">
                {category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.05,
                      ease: [0.42, 0, 0.58, 1],
                    }}
                    viewport={{ once: true }}
                    className="group rounded-xl p-5 bg-gradient-to-br from-white to-red-50 border border-red-100 shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-red-100 group-hover:bg-red-600 p-2 rounded-full transition-colors">
                        <CheckCircle className="w-5 h-5 text-red-600 group-hover:text-white transition-colors" />
                      </div>
                      <p className="text-gray-800 text-sm font-medium group-hover:text-red-800 transition-colors">
                        {item}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-16 text-center text-gray-700 text-sm max-w-3xl mx-auto leading-relaxed">
          Uncover, discover and explore new options and avenues with APC’s
          services on the dynamic canvas of Enterprise solutions.
        </p>
      </div>
    </section>
  );
}
