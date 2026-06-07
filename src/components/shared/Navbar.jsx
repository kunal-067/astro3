"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl border-b border-white/10 bg-white/70 dark:bg-[#0f0524]/70"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="h-20 flex items-center justify-between">

            {/* Logo */}

            <a
              href="/"
              className="flex items-center gap-2"
            >
              <div
                className="
                  h-10
                  w-10
                  rounded-full
                  bg-gradient-to-r
                  from-pink-500
                  via-fuchsia-500
                  to-yellow-400
                  flex
                  items-center
                  justify-center
                  text-white
                  font-bold
                "
              >
                AJ
              </div>

              <div>
                <p className="font-semibold text-lg">
                  Acharya Ji
                </p>

                <p className="text-xs opacity-70">
                  London's Trusted Healer
                </p>
              </div>
            </a>

            {/* Desktop Menu */}

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="
                    text-sm
                    font-medium
                    hover:text-pink-500
                    transition-colors
                  "
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* CTA */}

            <div className="hidden lg:flex">
              <a
                href="https://wa.me/447000000000"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  px-5
                  py-3
                  text-white
                  text-sm
                  font-semibold
                  bg-gradient-to-r
                  from-pink-500
                  to-fuchsia-600
                  hover:scale-105
                  transition-all
                  duration-300
                  shadow-lg
                "
              >
                <MessageCircle size={18} />
                WhatsApp Now
              </a>
            </div>

            {/* Mobile Button */}

            <button
              className="lg:hidden"
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
            >
              {mobileOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={`
          fixed
          inset-0
          z-40
          lg:hidden
          transition-all
          duration-300
          ${
            mobileOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      >
        <div
          className="
            absolute
            inset-0
            bg-black/60
            backdrop-blur-md
          "
          onClick={() =>
            setMobileOpen(false)
          }
        />

        <div
          className="
            absolute
            right-0
            top-0
            h-full
            w-[85%]
            max-w-sm
            bg-white
            dark:bg-[#0f0524]
            p-6
            shadow-2xl
          "
        >
          <div className="mt-24 flex flex-col gap-6">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() =>
                  setMobileOpen(false)
                }
                className="
                  text-lg
                  font-medium
                  hover:text-pink-500
                "
              >
                {item.name}
              </a>
            ))}

            <a
              href="https://wa.me/447000000000"
              target="_blank"
              rel="noreferrer"
              className="
                mt-6
                rounded-full
                bg-gradient-to-r
                from-pink-500
                to-fuchsia-600
                text-white
                py-4
                text-center
                font-semibold
              "
            >
              WhatsApp Consultation
            </a>
          </div>
        </div>
      </div>
    </>
  );
}