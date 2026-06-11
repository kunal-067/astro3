"use client";
import { useEffect, useRef } from "react";
import { BREAKUP_WA_LINK, PAIN_POINTS } from "@/lib/data";
import { WAIcon, Stars } from "@/components/ui";

/* -------------- Animated broken heart SVG -------------- */
function BrokenHeart() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer glow ring */}
      <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full
        bg-gradient-to-br from-[#ff4fa1]/20 to-[#9333ea]/15
        blur-3xl animate-[glowPulse_3s_ease-in-out_infinite]" />

      {/* Pulsing rings */}
      {[1, 2, 3].map(i => (
        <div key={i}
          className="absolute rounded-full border border-[#ff4fa1]/15"
          style={{
            width:  `${200 + i * 60}px`,
            height: `${200 + i * 60}px`,
            animation: `glowPulse ${2.5 + i * 0.5}s ease-in-out ${i * 0.4}s infinite`,
          }}
        />
      ))}

      {/* Central broken heart */}
      <div className="relative z-10 animate-[float_6s_ease-in-out_infinite]">
        <svg viewBox="0 0 200 180" className="w-52 h-52 md:w-72 md:h-72 drop-shadow-2xl">
          <defs>
            <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#ff4fa1" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#9333ea" stopOpacity="0.85" />
            </linearGradient>
            <linearGradient id="crackGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%"   stopColor="#fbbf24" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ff4fa1" stopOpacity="0.6" />
            </linearGradient>
            <filter id="heartGlow">
              <feGaussianBlur stdDeviation="4" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          {/* Left half */}
          <path
            d="M100 160 C60 140 10 110 10 65 C10 35 30 15 55 15 C72 15 86 25 100 40"
            fill="url(#heartGrad)"
            filter="url(#heartGlow)"
          />
          {/* Right half — slightly separated */}
          <path
            d="M102 160 C142 140 190 110 190 65 C190 35 170 15 145 15 C128 15 114 25 102 40"
            fill="url(#heartGrad)"
            opacity="0.85"
            filter="url(#heartGlow)"
            transform="translate(4, 0)"
          />

          {/* Crack / lightning bolt */}
          <path
            d="M100 38 L90 75 L104 75 L94 130 L106 130 L98 85 L112 85 L100 38"
            fill="url(#crackGrad)"
            opacity="0.95"
          />

          {/* Shine */}
          <ellipse cx="60" cy="55" rx="18" ry="12"
            fill="white" opacity="0.12" transform="rotate(-25 60 55)" />

          {/* Floating tears / particles */}
          {[[140, 40], [155, 65], [148, 52]].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="3.5"
              fill="#a5f3fc" opacity="0.6"
              style={{ animation: `float ${3 + i}s ${i * 0.5}s ease-in-out infinite` }}
            />
          ))}
        </svg>

        {/* Emoji sparks */}
        {["💔", "✨", "🌸"].map((e, i) => (
          <span key={i}
            className="absolute text-2xl animate-[floatSlow_7s_ease-in-out_infinite]"
            style={{
              top:  ["10%", "60%", "15%"][i],
              left: ["-20%", "90%", "80%"][i],
              animationDelay: `${i * 1.2}s`,
            }}
          >
            {e}
          </span>
        ))}
      </div>
    </div>
  );
}

/* -------------- Particle canvas -------------- */
function ParticleCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const pts= Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.3,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      a: Math.random() * 0.5 + 0.1,
      c: Math.random() > 0.5 ? "255,79,161" : "147,51,234",
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.c},${p.a})`;
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);
  return (
    <canvas ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-50" />
  );
}

/* -------------- Hero -------------- */
export default function BreakupHero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 100% 80% at 65% 40%, rgba(255,79,161,0.12) 0%, transparent 55%)," +
          "radial-gradient(ellipse 70% 60% at 15% 75%, rgba(147,51,234,0.14) 0%, transparent 50%)," +
          "#0f0524",
      }}
    >
      {/* Ambient orbs */}
      <div className="absolute top-20 left-10 w-[450px] h-[450px] rounded-full
        bg-[#ff4fa1]/7 blur-[110px] animate-[glowPulse_4s_ease-in-out_infinite] pointer-events-none" />
      <div className="absolute bottom-16 right-16 w-[350px] h-[350px] rounded-full
        bg-[#9333ea]/10 blur-[80px] animate-[glowPulse_3s_ease-in-out_infinite] pointer-events-none"
        style={{ animationDelay: "2s" }} />

      <ParticleCanvas />

      <div className="relative max-w-7xl mx-auto px-4 w-full
        grid lg:grid-cols-[1fr_480px] gap-12 xl:gap-20 items-center pt-28 pb-16">

        {/* -------------- LEFT -------------- */}
        <div style={{ animation: "fadeUp .85s cubic-bezier(.22,1,.36,1) both" }}>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-purple-300/50 font-medium mb-6">
            <a href="/" className="hover:text-[#ff4fa1] transition-colors">Home</a>
            <span>/</span>
            <span className="text-purple-200/70">Breakup Problems</span>
          </div>

          {/* Category pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-[rgba(255,79,161,0.12)] border border-[rgba(255,79,161,0.30)] mb-6">
            <span className="text-lg">💔</span>
            <span className="text-[11px] font-bold text-[#ff4fa1] uppercase tracking-[0.15em]">
              Breakup Solutions
            </span>
          </div>

          {/* Headline */}
          <h1 className="display text-5xl sm:text-6xl xl:text-[4.2rem] font-bold
            leading-[1.08] mb-6 text-white">
            The Pain of a<br/>
            <span style={{
              background: "linear-gradient(90deg,#ff4fa1,#fbbf24,#d946ef,#ff4fa1)",
              backgroundSize: "300% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 5s linear infinite",
            }}>
              Breakup
            </span>{" "}Doesn't<br/>
            Have to Be<br/>
            <span style={{
              background: "linear-gradient(90deg,#ff4fa1,#fbbf24,#d946ef,#ff4fa1)",
              backgroundSize: "300% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 5s linear infinite",
              animationDelay: "1s",
            }}>
              Permanent
            </span>
          </h1>

          <p className="text-lg text-purple-200/65 leading-relaxed mb-8 max-w-[500px]">
            Acharya Ji has reunited <strong className="text-white">3,200+ separated couples</strong> across the UK using ancient Vedic healing. Your situation — however painful it feels — is not beyond hope.
          </p>

          {/* Quick trust row */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            {[
              ["⚡", "Results in 7–21 Days"],
              ["🔒", "100% Private"],
              ["💯", "Free Consultation"],
              ["🇬🇧", "Serving All UK"],
            ].map(([icon, text], i) => (
              <div key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full
                  bg-white/[0.05] border border-white/12 text-xs font-semibold text-purple-100/85">
                <span>{icon}</span>{text}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a href={BREAKUP_WA_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-[1rem]
                bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-base
                shadow-[0_0_40px_rgba(34,197,94,0.40)] hover:shadow-[0_0_60px_rgba(34,197,94,0.60)]
                hover:scale-105 transition-all duration-300">
              <WAIcon className="w-5 h-5" />
              Get Help Now — Free
              <span className="text-green-200">→</span>
            </a>
            <a href="#how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-[1rem]
                border-2 border-[#ff4fa1]/40 text-[#ff4fa1] font-bold text-base
                hover:bg-[#ff4fa1]/10 hover:scale-105 transition-all duration-300">
              How It Works
              <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2.5">
              {["K","P","R","S","M","A"].map((l, i) => (
                <div key={i}
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-[#ff4fa1] to-[#9333ea]
                    border-2 border-[#0f0524] flex items-center justify-center
                    text-white text-xs font-bold">
                  {l}
                </div>
              ))}
            </div>
            <div className="border-l border-white/15 pl-4">
              <div className="flex items-center gap-1.5">
                <Stars count={5} />
                <span className="text-sm font-bold text-white">4.9/5</span>
              </div>
              <p className="text-xs text-purple-200/45 mt-0.5">
                3,200+ reunited couples across the UK
              </p>
            </div>
          </div>
        </div>

        {/* -------------- RIGHT: broken heart illustration -------------- */}
        <div
          className="relative h-[420px] md:h-[520px] flex items-center justify-center"
          style={{ animation: "fadeUp .95s .15s cubic-bezier(.22,1,.36,1) both" }}
        >
          <BrokenHeart />

          {/* Floating stat cards */}
          <div className="absolute top-4 left-0 bg-white/[0.06] border border-white/12
            rounded-2xl px-4 py-3 shadow-xl backdrop-blur-md
            animate-[floatSlow_8s_ease-in-out_infinite]">
            <p className="text-[10px] text-purple-300/60">Avg. Reunion</p>
            <p className="text-2xl font-bold display" style={{
              background:"linear-gradient(135deg,#ff4fa1,#fbbf24)",
              WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"
            }}>18 Days</p>
          </div>

          <div className="absolute bottom-8 right-0 bg-white/[0.06] border border-white/12
            rounded-2xl px-4 py-3 shadow-xl backdrop-blur-md
            animate-[floatSlow_9s_ease-in-out_infinite]"
            style={{ animationDelay: "1.8s" }}>
            <p className="text-[10px] text-purple-300/60">Success Rate</p>
            <p className="text-2xl font-bold display" style={{
              background:"linear-gradient(135deg,#ff4fa1,#9333ea)",
              WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"
            }}>96%</p>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2
        flex flex-col items-center gap-2 opacity-35 pointer-events-none">
        <span className="text-[10px] text-purple-300 uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#ff4fa1] to-transparent
          animate-[glowPulse_2s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
