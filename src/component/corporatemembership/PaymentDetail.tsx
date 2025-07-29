"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";

const PaymentDetails = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-poppins text-gray-900 tracking-tight">
            Payment Information
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Register with Achromic Point Consulting by selecting your preferred
            method of payment below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white  rounded-3xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
            <div className="space-y-4 text-gray-800">
              <h2 className="text-xl font-poppins">Banking Details</h2>
              <ul className="text-sm space-y-1">
                <li>
                  <strong className="font-poppins">Company:</strong> Achromic Point Consulting Pvt Ltd
                </li>
                <li>
                  <strong>Bank:</strong> Axis Bank
                </li>
                <li>
                  <strong>Branch:</strong> Kalkaji, New Delhi
                </li>
                <li>
                  <strong>Account No:</strong> 914020057251909
                </li>
                <li>
                  <strong>MICR Code:</strong> 11021107
                </li>
                <li>
                  <strong>IFSC Code:</strong> UTIB0001021
                </li>
                <li>
                  <strong>Swift Code:</strong> AXISINBBA45
                </li>
                <li>
                  <strong>GSTIN:</strong> 07AAICA4140L1ZO
                </li>
              </ul>
            </div>

            <div className="space-y-4 text-gray-800">
              <h2 className="text-xl font-semibold">Contact</h2>
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="text-red-500" />
                <span>Call: 8447758768</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-red-500" />
                <span>Email: nupur.verma@achromicpoint.com</span>
              </div>

              <div className="pt-4">
                <p>
                  <strong>Note:</strong> Please contact if you are an{" "}
                  <strong>APC Events Corporate Member</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 px-10 py-8 bg-gray-50">
            <div className="space-y-4">
              <div className="flex items-center text-lg font-semibold text-gray-700">
                <MdOutlineVerifiedUser
                  className="text-blue-500 mr-2"
                  size={24}
                />
                Registration & Confirmation
              </div>
              <p className="text-sm text-gray-600">
                Registration will only be confirmed upon receipt of the
                completed registration form (via email or fax) and payment. A
                confirmation email will be sent to you from Achromic Point to
                confirm your registration for the event.
              </p>

              <div className="text-sm text-gray-700 space-y-2">

                <p className="pt-4">
                  <strong className="text-gray-700">Payments:</strong> Payment must be received prior the event. Please refer to the
                  following payment options. By Cheque/By Demand draft. All
                  cheques/demand drafts should be crossed, marked “A/C Payee
                  only” and made payable to “Achromic Point Consulting Pvt Ltd”
                  with the title of the programme(s) indicated clearly on the
                  back of the cheque/demand draft.
                </p>
                <p>
                  <strong>By Electronic Transfer:</strong> Use the bank details
                  above for electronic payments.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:to-red-800 text-white px-8 py-3 rounded-full font-medium shadow-md"
              >
                Enroll Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentDetails;
