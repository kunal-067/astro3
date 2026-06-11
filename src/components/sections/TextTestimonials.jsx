import React from 'react';
import {SectionBadge, SectionHeading, Stars} from "../ui";
import {REVIEWS} from "@/lib/data";
import MobileCarousel from '../ui/MobileCarousel';
// ── Shared card ───────────────────────────────────────────────────────────────
const ReviewCard = ({ r }) => (
  <div className="h-full rounded-2xl p-6 bg-white dark:bg-white/3 border border-gray-200/50 dark:border-white/10 shadow-sm hover:shadow-pink-500/10 hover:border-pink-400/30 transition-all duration-300 flex flex-col">
    <Stars count={r.stars} />
    <p className="mt-3 flex-1 text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic">
      "{r.text}"
    </p>
    <div className="mt-5 flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
        {r.name[0]}
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-900 dark:text-white">{r.name}</p>
        <p className="text-xs text-gray-400">{r.city}, UK</p>
      </div>
    </div>
  </div>
);

// ── Section ───────────────────────────────────────────────────────────────────
export const TextTestimonials = () => (
  <div className="py-20 px-4 bg-gray-50 dark:bg-white/2 border-y border-gray-200/50 dark:border-white/5">
    <div className="max-w-7xl mx-auto">

      <div className="text-center mb-14">
        <SectionBadge>Client Love</SectionBadge>
        <SectionHeading title="Voices From Across the UK" />
      </div>

      {/*
        MobileCarousel renders a swipeable carousel on mobile (<md),
        and simply passes children through unwrapped on md+,
        letting the grid below own the layout.
      */}
      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-5">
        <MobileCarousel autoInterval={4500}>
          {REVIEWS.map((r, i) => (
            <ReviewCard key={i} r={r} />
          ))}
        </MobileCarousel>
      </div>

    </div>
  </div>
);

export default TextTestimonials;