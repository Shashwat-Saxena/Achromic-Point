'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What services does APC Institute offer?',
    answer: 'APC Institute provides training programs, workshops, and seminars focused on physiotherapy and wellness.',
  },
  {
    question: 'Who can attend the training programs?',
    answer: 'Our programs are open to students, professionals, and individuals interested in physiotherapy and injury management.',
  },
  {
    question: 'Are certifications provided after training?',
    answer: 'Yes, participants receive a certified completion certificate after finishing the program.',
  },
  {
    question: 'Is there any support available after the training?',
    answer: 'Yes, we provide ongoing mentorship and community support even after your training is complete.',
  },
];


const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">Frequently Asked Questions</h2>
      <p className="text-center text-gray-600 mt-2 mb-8">Everything you need to know about our services.</p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between px-6 py-5 text-left text-lg font-medium text-gray-900 hover:bg-gray-50 transition"
            >
              {faq.question}
              <span>
                {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5 text-gray-600 text-base"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
