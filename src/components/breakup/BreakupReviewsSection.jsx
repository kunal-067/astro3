"use client";
import { useState, useEffect } from "react";
import { BREAKUP_REVIEWS, BREAKUP_WA_LINK } from "@/lib/data";
import { Stars, Avatar, Pill, Reveal, Modal, WAButton } from "@/components/ui";

import { REVIEWS } from "@/lib/data";

function ReviewCard({ r, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group w-full text-left rounded-2xl p-6 flex flex-col h-full
        border border-white/10 bg-white/[0.03]
        hover:border-[#ff4fa1]/35 hover:bg-[#ff4fa1]/4
        transition-all duration-300 hover:-translate-y-1
        hover:shadow-[0_12px_40px_rgba(255,79,161,0.10)]"
    >
      {/* Stars + days badge */}
      <div className="flex items-center justify-between mb-4">
        <Stars count={r.stars} />
        <span className="px-3 py-1 rounded-full text-xs font-bold
          bg-green-500/15 border border-green-500/30 text-green-400">
          ✓ {r.days} days
        </span>
      </div>

      {/* Quote */}
      <p className="text-sm text-purple-100/65 italic leading-relaxed flex-1">
        "{r.text}"
      </p>

      {/* Author */}
      <div className="mt-5 pt-4 border-t border-white/8 flex items-center gap-3">
        <Avatar name={r.name} size="sm" />
        <div>
          <p className="text-sm font-semibold text-white">{r.name}</p>
          <p className="text-xs text-purple-300/45">{r.city}, UK</p>
        </div>
        <div className="ml-auto text-purple-300/30 group-hover:text-[#ff4fa1]/50 transition-colors">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
          </svg>
        </div>
      </div>
    </button>
  );
}

export default function BreakupReviewsSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-20 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <Reveal><Pill>Real Reunions</Pill></Reveal>
          <Reveal delay={80}>
            <h2 className="display text-4xl md:text-5xl font-bold text-white mb-4">
              They Were in Your Shoes
            </h2>
            <p className="text-purple-200/55 text-lg max-w-xl mx-auto">
              Real people, real breakups, real reunions — all with Acharya Ji's guidance.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BREAKUP_REVIEWS.map((r, i) => (
            <Reveal key={i} delay={i * 65}>
              <ReviewCard r={r} onClick={() => setSelected(r)} />
            </Reveal>
          ))}
        </div>

        {/* Average stats row */}
        <Reveal delay={200}>
          <div className="mt-12 flex flex-wrap justify-center gap-8 py-6
            border-t border-b border-white/8">
            {[
              ["⭐", "4.9/5 average rating"],
              ["⚡", "Average reunion: 18 days"],
              ["💚", "96% clients recommend"],
              ["🔒", "All reviews verified"],
            ].map(([icon, text], i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-purple-200/55 font-medium">
                <span>{icon}</span>{text}
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Review detail modal */}
      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <Avatar name={selected.name} size="lg" />
              <div className="flex-1">
                <p className="display text-xl font-bold text-white">{selected.name}</p>
                <p className="text-purple-300/55 text-sm">{selected.city}, UK</p>
                <div className="flex items-center gap-3 mt-2">
                  <Stars count={selected.stars} lg />
                  <span className="px-3 py-1 rounded-full text-xs font-bold
                    bg-green-500/15 border border-green-500/30 text-green-400">
                    ✓ Reunited in {selected.days} days
                  </span>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl p-7
              bg-gradient-to-br from-[#ff4fa1]/8 to-[#9333ea]/8 border border-white/10">
              <span className="absolute top-3 left-5 text-5xl text-[#ff4fa1]/12
                display font-bold leading-none select-none">"</span>
              <p className="text-purple-100/80 leading-loose text-base italic pt-4 pl-3">
                {selected.text}
              </p>
              <span className="absolute bottom-2 right-5 text-5xl text-[#ff4fa1]/12
                display font-bold leading-none select-none">"</span>
            </div>

            <div className="mt-6 text-center">
              <WAButton href={BREAKUP_WA_LINK} size="md">
                Get Your Reunion Story — Start Free
              </WAButton>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
