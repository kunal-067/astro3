"use client";
import { useState } from "react";
import { BREAKUP_FAQS, BREAKUP_WA_LINK } from "@/lib/data";
import { Pill, Reveal, WAButton } from "@/components/ui";

function FAQItem({ q, a, i }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={i * 50}>
      <div className={`rounded-2xl mb-3 border overflow-hidden transition-all duration-300
        ${open
          ? "border-[#ff4fa1]/35 bg-[#ff4fa1]/4"
          : "border-white/10 bg-white/[0.02]"}`}>
        <button
          onClick={() => setOpen(o => !o)}
          className="w-full flex justify-between items-center px-6 py-5 text-left gap-4"
          aria-expanded={open}
        >
          <span className={`font-semibold text-base transition-colors duration-200
            ${open ? "text-[#ff4fa1]" : "text-white"}`}>
            {q}
          </span>
          <span className={`flex-shrink-0 w-8 h-8 rounded-full
            flex items-center justify-center text-white text-xl font-bold
            transition-all duration-300
            ${open
              ? "bg-[#ff4fa1] rotate-45 shadow-[0_0_16px_rgba(255,79,161,0.5)]"
              : "bg-gradient-to-br from-[#ff4fa1] to-[#9333ea]"}`}>
            +
          </span>
        </button>
        <div style={{
          overflow:"hidden",
          maxHeight: open ? "260px" : "0",
          opacity:   open ? 1 : 0,
          transition:"max-height .38s cubic-bezier(.4,0,.2,1),opacity .3s ease",
        }}>
          <p className="px-6 pb-6 text-sm text-purple-200/60 leading-relaxed
            border-t border-white/8 pt-4">
            {a}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export default function BreakupFAQSection() {
  return (
    <section id="faq" className="py-20 border-t border-white/6">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-14">
          <Reveal><Pill>Common Questions</Pill></Reveal>
          <Reveal delay={80}>
            <h2 className="display text-4xl md:text-5xl font-bold text-white mb-4">
              Your Questions, Answered
            </h2>
            <p className="text-purple-200/50 text-lg">
              Everything you need to know about healing a breakup with Acharya Ji.
            </p>
          </Reveal>
        </div>

        {BREAKUP_FAQS.map((f, i) => (
          <FAQItem key={i} q={f.q} a={f.a} i={i} />
        ))}

        <Reveal delay={240}>
          <div className="mt-10 p-7 rounded-2xl text-center
            bg-gradient-to-br from-[#ff4fa1]/10 to-[#9333ea]/10
            border border-[#ff4fa1]/20">
            <p className="text-2xl mb-3">💬</p>
            <p className="text-white font-bold text-lg mb-2">Still unsure? Ask directly.</p>
            <p className="text-purple-200/55 text-sm mb-5">
              Acharya Ji answers personal questions privately on WhatsApp — completely free.
            </p>
            <WAButton href={BREAKUP_WA_LINK} size="md">
              Ask Acharya Ji on WhatsApp
            </WAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
