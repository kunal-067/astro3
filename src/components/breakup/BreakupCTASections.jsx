import { RELATED_SERVICES, BREAKUP_WA_LINK } from "@/lib/data";
import { Reveal, Pill, Stars, WAButton } from "@/components/ui";

/* -- Related services cross-links ------------------------- */
export function RelatedServicesSection() {
  return (
    <section className="py-16 border-t border-white/6 bg-[#0a0118]/40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-300/45 mb-3">
              Related Services
            </p>
            <h3 className="display text-3xl font-bold text-white">
              Explore Other Solutions
            </h3>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {RELATED_SERVICES.map((s, i) => (
            <Reveal key={i} delay={i * 60}>
              <a href={s.href}
                className="group flex flex-col items-center text-center p-6 rounded-2xl
                  border border-white/10 bg-white/[0.025]
                  hover:border-[#ff4fa1]/35 hover:bg-[#ff4fa1]/5
                  transition-all duration-300 hover:-translate-y-1">
                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">{s.icon}</span>
                <p className="text-sm font-bold text-white mb-1">{s.title}</p>
                <p className="text-xs text-purple-300/45">{s.desc}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -- Final CTA specific to breakup page ------------------- */
export function BreakupFinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden border-t border-white/6">
      {/* Background */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(135deg, #6b0f3a 0%, #4a0e7a 40%, #1a0840 70%, #0f0524 100%)",
      }} />
      {/* Orbs */}
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full
        bg-[#ff4fa1]/10 blur-[80px] animate-[glowPulse_4s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full
        bg-[#9333ea]/10 blur-[60px] animate-[glowPulse_3.5s_ease-in-out_infinite]"
        style={{ animationDelay: "1.5s" }} />

      {/* Floating particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#ff4fa1]/25
            animate-[float_6s_ease-in-out_infinite]"
          style={{
            left: `${(i * 8.5) + 2}%`,
            top:  `${15 + (i % 4) * 20}%`,
            animationDelay: `${i * 0.35}s`,
          }}
        />
      ))}

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        {/* Live badge */}
        <Reveal>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full
            bg-white/10 border border-white/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400
              animate-[ping_1.4s_ease-in-out_infinite]" />
            <span className="text-xs font-bold text-white/80 uppercase tracking-[0.18em]">
              Free · Private · No Obligation
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="display text-4xl sm:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Don't Let Another Day<br/>Pass Without Hope
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="text-white/70 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Every day without taking action makes the path harder. One free conversation with Acharya Ji could be the turning point that brings your loved one back.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <WAButton href={BREAKUP_WA_LINK} size="lg">
            Chat on WhatsApp — Get Help Now →
          </WAButton>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-7 flex flex-wrap justify-center gap-5 text-white/40 text-sm">
            <span>🔒 Completely Confidential</span>
            <span>⚡ Responds in &lt;2 Hours</span>
            <span>💯 First Session Free</span>
            <span>🇬🇧 Serving All UK Cities</span>
          </div>
        </Reveal>

        {/* Testimonial snippet */}
        <Reveal delay={300}>
          <div className="mt-14 max-w-xl mx-auto p-6 rounded-2xl
            bg-white/8 border border-white/15 backdrop-blur-sm text-left">
            <Stars count={5} lg />
            <p className="text-white/80 italic mt-3 leading-relaxed">
              "After 3 months of complete silence, my ex messaged me within 2 weeks of contacting Acharya Ji. We've been back together for 6 months now."
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-9 h-9 rounded-full bg-[#ff4fa1]/30 border border-[#ff4fa1]/25
                flex items-center justify-center text-white text-sm font-bold">
                R
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Ritu K.</p>
                <p className="text-white/40 text-xs">Manchester, UK · Reunited in 21 days</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
