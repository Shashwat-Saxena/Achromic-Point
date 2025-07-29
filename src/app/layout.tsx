import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../component/header/Navbar";
import Footer from "../component/Footer";
import { FaPhoneAlt } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Achromic Point",
  description: "Connecting professionals through events and training",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 💡 Force light mode only */}
      <head>
        <meta name="color-scheme" content="light" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        <Navbar />
        {children}
        <Footer />

        {/* 📞 Floating Call Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="tel:+91-8447758768"
            className="bg-yellow-400 text-black p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-yellow-500 transition"
          >
            <FaPhoneAlt />
          </a>
        </div>
      </body>
    </html>
  );
}
