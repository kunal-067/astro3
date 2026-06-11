import { REVERSAL_SIGNS, BREAKUP_WA_LINK } from "@/lib/data";
import { Reveal, Pill, WAButton } from "@/components/ui";

export default function ReversalSignsSection() {
  return (
    <section className="py-20 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <Reveal><Pill>Signs Your Situation Can Be Reversed</Pill></Reveal>
          <Reveal delay={80}>
            <h2 className="display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Your Breakup Can Be Healed
            </h2>
            <p className="text-purple-200/55 text-lg max-w-2xl mx-auto">
              Acharya Ji looks for these spiritual and emotional indicators before beginning any remedy.
              If one or more applies to you — there is genuine hope.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {REVERSAL_SIGNS.map((s, i) => (
            <Reveal key={i} delay={i * 65}>
              <div
                className="group relative h-full rounded-2xl p-7 overflow-hidden
                  border border-white/10 bg-white/[0.03]
                  hover:border-[#ff4fa1]/35 hover:bg-[#ff4fa1]/5
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(255,79,161,0.10)]"
              >
                {/* Corner glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                  transition-opacity duration-500 pointer-events-none
                  bg-[radial-gradient(ellipse_80%_80%_at_20%_20%,rgba(255,79,161,0.10),transparent)]" />

                {/* Check badge */}
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full
                  bg-green-500/15 border border-green-500/30
                  flex items-center justify-center
                  text-green-400 text-xs font-bold">
                  ✓
                </div>

                <div className="relative">
                  <span className="text-3xl block mb-4">{s.icon}</span>
                  <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-purple-200/55 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <Reveal delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6
            p-6 rounded-2xl border border-[#ff4fa1]/20 bg-[#ff4fa1]/5">
            <div>
              <p className="font-bold text-white text-lg">
                Recognise yourself in any of these?
              </p>
              <p className="text-purple-200/55 text-sm mt-1">
                Even one sign is enough to start the healing process.
              </p>
            </div>
            <WAButton href={BREAKUP_WA_LINK} size="md" className="flex-shrink-0">
              Consult Acharya Ji Free
            </WAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
