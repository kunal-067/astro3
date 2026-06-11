import { WA_LINK } from "@/lib/data";
import { Pill, Reveal, WAButton } from "@/components/ui";

const EXPERTISE = [
  { icon: "💔", title: "3,200+ Breakups Healed",      desc: "More UK breakup reunions than any other spiritual healer." },
  { icon: "⏰", title: "Average 18-Day Reunion",       desc: "Most clients experience contact from their ex within 7–14 days." },
  { icon: "🔮", title: "Deep Karmic Analysis",          desc: "Acharya Ji reads the karmic bond between two people with precision." },
  { icon: "🤫", title: "Complete Discretion",           desc: "Every case handled with total privacy — your ex never knows." },
];

export default function AcharyaJiBreakupProfile() {
  return (
    <section className="py-20 border-t border-white/6 bg-[#0a0118]/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT: Image + floating stats */}
          <Reveal>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff4fa1]/12 to-[#9333ea]/18
                rounded-3xl blur-3xl" />

              <div className="relative max-w-sm mx-auto aspect-[4/5] rounded-3xl overflow-hidden
                border border-white/12 shadow-[0_20px_80px_rgba(255,79,161,0.10)]">
                {/* Photo placeholder */}
                <div className="w-full h-full bg-gradient-to-b from-[#2d0a4e] via-[#1a0840] to-[#0f0524]
                  flex flex-col items-center justify-center gap-4">
                  <span className="text-8xl">💫</span>
                  <p className="display text-white/80 text-2xl font-semibold">Acharya Ji</p>
                  <p className="text-white/35 text-xs text-center px-8">
                    Breakup Healing Specialist
                  </p>
                </div>

                {/* Overlay badge */}
                <div className="absolute bottom-0 left-0 right-0 p-5
                  bg-gradient-to-t from-[#0f0524] to-transparent">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff4fa1] to-[#9333ea]
                      flex items-center justify-center text-white text-lg shadow-lg">✦</div>
                    <div>
                      <p className="text-white font-bold text-sm">Acharya Ji</p>
                      <p className="text-purple-300/50 text-xs">UK's #1 Breakup Healer · 25+ Years</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="absolute -top-3 -right-4 bg-white/[0.07] border border-white/12
                rounded-2xl px-4 py-3 shadow-xl backdrop-blur-md
                animate-[floatSlow_8s_ease-in-out_infinite]">
                <p className="text-[10px] text-purple-300/55">Breakups Healed</p>
                <p className="text-2xl font-bold display" style={{
                  background:"linear-gradient(135deg,#ff4fa1,#fbbf24)",
                  WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"
                }}>3,200+</p>
              </div>

              <div className="absolute -bottom-3 -left-4 bg-white/[0.07] border border-white/12
                rounded-2xl px-4 py-3 shadow-xl backdrop-blur-md
                animate-[floatSlow_9s_ease-in-out_infinite]"
                style={{ animationDelay: "2.5s" }}>
                <p className="text-[10px] text-purple-300/55">Avg. Reunion</p>
                <p className="text-2xl font-bold display" style={{
                  background:"linear-gradient(135deg,#9333ea,#ff4fa1)",
                  WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"
                }}>18 Days</p>
              </div>
            </div>
          </Reveal>

          {/* RIGHT: Content */}
          <Reveal delay={100}>
            <div>
              <Pill>About Acharya Ji</Pill>
              <h2 className="display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                The UK's Most Trusted<br/>
                <span style={{
                  background:"linear-gradient(90deg,#ff4fa1,#fbbf24,#d946ef)",
                  WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",
                }}>
                  Breakup Healer
                </span>
              </h2>

              <p className="text-purple-200/60 leading-relaxed mb-5">
                With over <strong className="text-white">25 years of Vedic practice</strong>, Acharya Ji has developed a precise understanding of the spiritual and emotional dynamics behind breakups. He doesn't offer generic advice — he reads your specific karmic bond and applies targeted remedies.
              </p>
              <p className="text-purple-200/60 leading-relaxed mb-8">
                His record speaks for itself: <strong className="text-white">3,200+ separated couples reunited</strong> across the UK, with an average reunion time of just 18 days. Clients often say he understood their situation before they'd fully explained it.
              </p>

              {/* Expertise grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {EXPERTISE.map(({ icon, title, desc }, i) => (
                  <div key={i}
                    className="flex items-start gap-3 p-4 rounded-xl
                      bg-white/[0.03] border border-white/10
                      hover:border-[#ff4fa1]/25 transition-colors">
                    <span className="text-2xl flex-shrink-0">{icon}</span>
                    <div>
                      <p className="text-sm font-bold text-white mb-1">{title}</p>
                      <p className="text-xs text-purple-200/50 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Guarantee badge */}
              <div className="flex items-start gap-4 p-5 rounded-2xl mb-8
                border border-amber-500/25 bg-amber-500/6">
                <span className="text-2xl flex-shrink-0">🏆</span>
                <div>
                  <p className="text-white font-bold text-sm mb-1">
                    The Acharya Ji Promise
                  </p>
                  <p className="text-purple-200/60 text-xs leading-relaxed">
                    If Acharya Ji cannot help your specific situation, he will tell you honestly during the free consultation — never taking a case he cannot deliver results for.
                  </p>
                </div>
              </div>

              <WAButton href={WA_LINK} size="lg">
                Consult Acharya Ji — It's Free
              </WAButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
