"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WA_LINK } from "@/lib/constants";

const navLinks = [
  {
    name: "Love Back",
    href: "/love-back",
  },
  {
    name: "Relationship Issues",
    href: "/relationship-problems",
  },
  {
    name: "Divorce Guidance",
    href: "/divorce-problem",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "Gallery",
    href: "#gallery",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0.5 left-0 right-0 z-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mt-4 flex items-center justify-between px-6 py-3 rounded-2xl glass border dark:border-white/10 border-gray-200/60 shadow-xl shadow-black/20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-linear-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                A
              </div>
              <span
                className="font-bold text-lg text-gray-900 dark:text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Acharya Ji
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop WhatsApp */}
            <div className="flex gap-8">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden justify-self-end md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-pink-500 to-fuchsia-600 text-white text-sm font-semibold shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-shadow"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              WhatsApp
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-gray-900 dark:text-white"
            >
              <Menu size={26} />
            </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/50 z-60 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-70 bg-[#F5F0EB] dark:bg-zinc-950 z-70 shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-white/10">
          <div className="font-bold text-lg">Menu</div>

          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col p-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-4 border-b border-gray-100 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:text-pink-500 font-medium"
            >
              {link.name}
            </a>
          ))}

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-linear-to-r from-pink-500 to-fuchsia-600 text-white font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}