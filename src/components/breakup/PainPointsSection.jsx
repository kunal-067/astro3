import { PAIN_POINTS, BREAKUP_WA_LINK } from "@/lib/data";
import { Reveal, Pill, WAButton } from "@/components/ui";

export default function PainPointsSection() {
  return (
    <section className="py-20 border-t border-white/6 bg-[#0a0118]/60">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <Reveal><Pill>We Understand Your Pain</Pill></Reveal>
          <Reveal delay={80}>
            <h2 className="display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Are You Feeling<br/>
              <span style={{
                background:"linear-gradient(90deg,#ff4fa1,#fbbf24,#d946ef,#ff4fa1)",
                backgroundSize:"300% auto",
                WebkitBackgroundClip:"text",
                WebkitTextFillColor:"transparent",
                backgroundClip:"text",
                animation:"shimmer 5s linear infinite",
              }}>
                Any of These?
              </span>
            </h2>
            <p className="text-purple-200/55 text-lg max-w-xl mx-auto">
              Acharya Ji has heard these exact words from thousands of clients. You are not alone — and this is not the end.
            </p>
          </Reveal>
        </div>

        {/* Pain point cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {PAIN_POINTS.map((p, i) => (
            <Reveal key={i} delay={i * 60}>
              <div
                className="flex items-start gap-4 p-5 rounded-2xl
                  border border-white/10 bg-white/[0.03]
                  hover:border-[#ff4fa1]/30 hover:bg-[#ff4fa1]/5
                  transition-all duration-300 group"
              >
                <span className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform">
                  {p.emoji}
                </span>
                <p className="text-sm text-purple-100/70 leading-relaxed font-medium">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Empathy message + CTA */}
        <Reveal delay={200}>
          <div
            className="relative overflow-hidden rounded-3xl p-8 md:p-12 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,79,161,0.12) 0%, rgba(147,51,234,0.10) 100%)",
              border: "1px solid rgba(255,79,161,0.20)",
            }}
          >
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32
              bg-[#ff4fa1]/10 blur-3xl pointer-events-none" />

            <div className="relative">
              <span className="text-5xl block mb-5">🙏</span>
              <h3 className="display text-3xl md:text-4xl font-bold text-white mb-4">
                Your Pain Is Real — And So Is the Solution
              </h3>
              <p className="text-purple-200/65 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Whether it ended yesterday or a year ago, whether they've blocked you or moved on — Acharya Ji has seen it all and helped people in situations just like yours. The first step is a single free conversation.
              </p>
              <WAButton href={BREAKUP_WA_LINK} size="lg">
                Talk to Acharya Ji Now — It's Free
              </WAButton>
              <p className="text-purple-300/35 text-xs mt-4">
                🔒 100% confidential · No obligation · Responds within 2 hours
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
