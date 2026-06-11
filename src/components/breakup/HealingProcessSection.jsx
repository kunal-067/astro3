'use client'
import { HEALING_PHASES, BREAKUP_WA_LINK } from "@/lib/data";
import { Reveal, Pill, WAButton } from "@/components/ui";

export default function HealingProcessSection() {
  const colors = [
    { from: "#ff4fa1", to: "#d946ef", glow: "rgba(255,79,161,0.25)" },
    { from: "#d946ef", to: "#9333ea", glow: "rgba(217,70,239,0.25)" },
    { from: "#9333ea", to: "#ff4fa1", glow: "rgba(147,51,234,0.25)" },
  ];

  return (
    <section id="how-it-works" className="py-20 border-t border-white/6 bg-[#0a0118]/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Reveal><Pill>The Healing Process</Pill></Reveal>
          <Reveal delay={80}>
            <h2 className="display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              How Acharya Ji Heals<br/>
              <span style={{
                background:"linear-gradient(90deg,#ff4fa1,#fbbf24,#d946ef)",
                WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",
              }}>
                Your Breakup
              </span>
            </h2>
            <p className="text-purple-200/55 text-lg max-w-2xl mx-auto">
              A structured, three-phase approach developed over 25 years — combining Vedic wisdom with deep compassion.
            </p>
          </Reveal>
        </div>

        {/* Phase cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {HEALING_PHASES.map((phase, i) => {
            const c = colors[i];
            return (
              <Reveal key={i} delay={i * 120}>
                <div
                  className="relative h-full rounded-3xl p-8 overflow-hidden
                    border border-white/10 flex flex-col
                    hover:border-white/20 transition-all duration-400
                    hover:-translate-y-2 hover:shadow-2xl"
                  style={{
                    background: `linear-gradient(145deg, ${c.from}0e 0%, ${c.to}07 100%)`,
                    boxShadow: `0 4px 30px rgba(0,0,0,0.3)`,
                    transition: "transform .35s cubic-bezier(.34,1.56,.64,1), box-shadow .35s ease",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget ).style.boxShadow = `0 20px 60px ${c.glow}, 0 4px 30px rgba(0,0,0,0.4)`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget ).style.boxShadow = "0 4px 30px rgba(0,0,0,0.3)";
                  }}
                >
                  {/* Phase label */}
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full
                      text-[10px] font-black uppercase tracking-[0.18em] mb-5 w-fit"
                    style={{
                      background: `linear-gradient(135deg, ${c.from}25, ${c.to}18)`,
                      border: `1px solid ${c.from}40`,
                      color: c.from,
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-[glowPulse_2s_ease-in-out_infinite]"
                      style={{ background: c.from }} />
                    {phase.phase} · {phase.duration}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5
                      shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${c.from}25, ${c.to}18)`,
                      border: `1px solid ${c.from}30`,
                      boxShadow: `0 0 20px ${c.glow}`,
                    }}
                  >
                    {phase.icon}
                  </div>

                  <h3 className="display text-2xl font-bold text-white mb-3">{phase.title}</h3>
                  <p className="text-sm text-purple-200/55 leading-relaxed mb-6">{phase.desc}</p>

                  {/* Checklist */}
                  <ul className="space-y-2.5 mt-auto">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center
                            text-white text-[10px] font-bold flex-shrink-0 mt-0.5"
                          style={{ background: `linear-gradient(135deg, ${c.from}, ${c.to})` }}
                        >
                          ✓
                        </span>
                        <span className="text-sm text-purple-100/70">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Connector dot for desktop */}
                  {i < 2 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2
                      w-6 h-6 rounded-full border-2 border-white/20 bg-[#0f0524] z-10" />
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal delay={280}>
          <div className="text-center">
            <WAButton href={BREAKUP_WA_LINK} size="lg">
              Begin Your Healing Journey — Free
            </WAButton>
            <p className="text-purple-300/35 text-xs mt-4">
              Average time to first positive sign: 7 days
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
