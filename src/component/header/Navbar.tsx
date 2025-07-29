"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Search } from "lucide-react";
import Link from "next/link";
import logo from "@/@/assets/apc-Logo.png";

const navItems = [
  { name: "About Us", href: "/about" },
  { name: "Past Events", href: "/pastevents" },
  { name: "Enterprise", href: "/enterprise" },
  { name: "Contact", href: "/contact" },
  { name: "Speakers", href: "/speakers" },
  { name: "Corporate Membership", href: "/corporate" },
  { name: "eMagzine", href: "/emagzine" },
  { name: "UpComing Events", href: "/upcomingevents" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={250}
              height={40}
              className="object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-between w-full ml-10">
          <div className="flex gap-5 flex-wrap">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="text-[#C73B3D] hover:text-[#6D7CAB] font-semibold text-sm lg:text-base transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Optional Search */}
          {/* 
          <div className="ml-4">
            <Search className="text-gray-600 cursor-pointer" />
          </div> 
          */}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-4 space-y-4 shadow-sm">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="block text-[#C73B3D] hover:text-[#6D7CAB] font-semibold text-base transition"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Optional Mobile Search */}
          {/* 
          <div className="pt-2">
            <Search className="text-gray-600 cursor-pointer" />
          </div> 
          */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
