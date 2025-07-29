'use client';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaMobileAlt,
  FaPaperPlane,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logo from "@/@/assets/apc-Logo.png";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0F1020] text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Logo and Social */}
        <div className="flex flex-col items-start">
          <img
            src={logo.src}
            alt="Achromic Point Logo"
            className="w-60 mb-4 bg-white"
          />
          <div className="flex gap-4 text-xl">
            <a href="https://www.facebook.com/AchromicPoint" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-blue-500" />
            </a>
            <a href="https://x.com/AchromicPoint" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="hover:text-gray-400" />
            </a>
            <a href="https://www.instagram.com/AchromicPoint/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500" />
            </a>
            <a href="https://www.linkedin.com/company/achromic-point-consulting/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="hover:text-blue-700" />
            </a>
            <a href="https://www.youtube.com/AchromicPoint" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-red-600" />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 border-b border-red-500 w-fit">Useful Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            {/* <li><Link href="/why-choose-us">Why Choose Us</Link></li> */}
            {/* <li><Link href="/testimonials">Testimonials</Link></li> */}
            <li><Link href="/termsconditions">Terms and Conditions</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/privacypolicy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Related Pages */}
        <div>
          <h3 className="text-lg font-semibold mb-2 border-b border-red-500 w-fit">Related Pages</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/agenda">Agenda</Link></li>
            <li><Link href="/speakers">Speakers</Link></li>
            <li><Link href="/enterprise">Enterprise </Link></li>
            <li><Link href="/pastevents">Past Events</Link></li>
            <li><Link href="/corporate">Corporate Membership</Link></li>
            <li><Link href="/emagazine">eMagazine</Link></li>
            <li><Link href="/upcomingevents">Upcoming Events</Link></li>
          </ul>
        </div>

        {/* Training & Courses */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-2 border-b border-red-500 w-fit">Training & Courses</h3>
          <ul className="space-y-1 text-sm">
            <li>Legal</li>
            <li>Compliance</li>
            <li>Risk</li>
            <li>Accounts</li>
            <li>Finance</li>
            <li>Tax</li>
          </ul>
        </div> */}

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-2 border-b border-red-500 w-fit">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> 011-4601-1835
            </li>
            <li className="flex items-center gap-2">
              <FaMobileAlt /> +91-8447758768
            </li>
            <li className="flex items-center gap-2">
              <FaPaperPlane />
              <a href="mailto:nupur.verma@achromicpoint.com" className="hover:underline">nupur.verma@achromicpoint.com</a>
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt />
              <span>
                F-11, First Floor, Kalkaji,<br />
                New Delhi-110019 New<br />
                Delhi-110019, India
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-white border-t border-gray-700 py-4">
        © 2024 Achromic Point. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
