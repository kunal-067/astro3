import TrustBar, { MarqueeReviews } from "@/components/sections/TrustBar"
import TextTestimonials from "@/components/sections/TextTestimonials";
import GallerySection from "@/components/sections/GallerySection";
import FinalCTA from "@/components/sections/FinalCTA";
import FAQSection from "@/components/sections/FAQSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import VideoTestimonials from "@/components/sections/VideoTestimonials";

import { FloatingWA } from "@/components/ui";

import { GalleryModal, ReviewModal, VideoModal } from "@/components/shared/Modals"
import HeroSection, { Hero2 } from "@/components/sections/HeroSection";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

// --- Sub-components ----


import {
  Sparkles,
} from "lucide-react";

const featuredIn = [
  "/logos/dna.png",
  "/logos/aajtak.png",
  "/logos/netflix.png",
  "/logos/colors.png",
  "/logos/mensxp.png",
  "/logos/wsj.png",
];

export function FeaturedOn() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <Sparkles className="w-5 h-5 text-violet-500" />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Featured In
          </h2>
          <Sparkles className="w-5 h-5 text-violet-500" />
        </div>

        {/* Card */}
        <div className="
          rounded-[32px]
          border
          border-orange-200/50
          dark:border-white/10
          bg-white/70
          dark:bg-white/[0.03]
          backdrop-blur-xl
          p-8 md:p-12
          shadow-xl
        ">
          <div className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-6
            gap-5
          ">
            {featuredIn.map((logo, index) => (
              <div
                key={index}
                className="
                  h-32
                  rounded-2xl
                  bg-white
                  dark:bg-white/5
                  border
                  border-slate-200
                  dark:border-white/10
                  flex
                  items-center
                  justify-center
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-lg
                "
              >
                <img
                  src={logo}
                  alt="featured logo"
                  className="
                    max-h-16
                    object-contain
                    grayscale
                    hover:grayscale-0
                    transition-all
                    duration-300
                  "
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
 
import {
  MessageCircleMore,
  Phone,
  Video,
  Flower2,
} from "lucide-react";

const services = [
  {
    title: "Chat with Astrologer",
    icon: MessageCircleMore,
  },
  {
    title: "Talk to Astrologer",
    icon: Phone,
  },
  {
    title: "Book Pooja",
    icon: Flower2,
  },
  {
    title: "Video Call with Astrologer",
    icon: Video,
  },
];

export function ConnectSection() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2
          className="
            text-4xl
            md:text-5xl
            mb-8
            text-[#5A4A93]
            dark:text-[#C9A4FF]
            font-semibold
          "
          style={{ fontFamily: "var(--font-display)" }}
        >
          Connect with Us
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                className="
                  group
                  bg-white
                  dark:bg-[#181226]
                  border
                  border-[#F3B08A]
                  dark:border-[#5D3F8F]
                  rounded-3xl
                  px-4
                  py-8
                  min-h-[170px]
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                <div
                  className="
                    h-14
                    w-14
                    rounded-full
                    bg-[#C9B6FF]
                    dark:bg-[#4E3B83]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Icon
                    size={28}
                    className="
                      text-[#5A3E91]
                      dark:text-[#D7C5FF]
                    "
                  />
                </div>

                <span
                  className="
                    text-center
                    text-lg
                    md:text-2xl
                    leading-tight
                    font-medium
                    text-[#100329]
                    dark:text-white
                  "
                >
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --- Main Page ----
export default function AcharyaJiLanding() {


  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0524] text-gray-900 dark:text-white font-sans overflow-x-hidden transition-colors duration-500">
      {/* Progress */}
      <ScrollProgress />

      {/* Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        :root { --font-display: 'Cormorant Garamond', serif; --font-body: 'DM Sans', sans-serif; }
        * { font-family: var(--font-body); }
        h1,h2,.display { font-family: var(--font-display); }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 40s linear infinite; }
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        @keyframes glow-pulse { 0%,100% { opacity: 0.4; } 50% { opacity: 0.8; } }
        .animate-glow { animation: glow-pulse 3s ease-in-out infinite; }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        .text-shimmer {
          background: linear-gradient(90deg, #ff4fa1 0%, #fbbf24 50%, #d946ef 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .glass { background: rgba(255,255,255,0.04); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
        .glass-light { background: rgba(255,255,255,0.7); backdrop-filter: blur(20px); }
        .dark .glass-light { background: rgba(255,255,255,0.04); }
        .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card-hover:hover { transform: translateY(-6px); }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #0f0524; } ::-webkit-scrollbar-thumb { background: #ff4fa1; border-radius: 2px; }
        .hero-bg-light { background: radial-gradient(ellipse at 70% 50%, rgba(255,79,161,0.08) 0%, transparent 60%), radial-gradient(ellipse at 30% 80%, rgba(217,70,239,0.06) 0%, transparent 50%), #f9f5ff; }
      `}</style>

      {/* --- HERO --- */}
      <Hero2 />

      {/* <HeroSection /> */}

      {/* <FeaturedOn /> */}


      {/* --- TRUST / REVIEWS MARQUEE --- */}
      <TrustBar />

      {/* --- VIDEO TESTIMONIALS --- */}
      <VideoTestimonials />

       {/* --- ABOUT --- */}
      <AboutSection />

      {/* --- SERVICES --- */}
      <ServicesSection />

      {/* --- TEXT TESTIMONIALS --- */}
      <TextTestimonials />

      {/* --- GALLERY --- */}
      <GallerySection />

      {/* --- FAQ --- */}
      <FAQSection />

      {/* --- FINAL CTA --- */}
      <FinalCTA />

      {/* --- FLOATING WA --- */}
      <FloatingWA />

      {/* --- MODALS --- */}

      {/* Review modal */}
      <ReviewModal />

      {/* Video modal */}
      <VideoModal />

      {/* Gallery modal */}
      <GalleryModal />

    </div>
  );
}