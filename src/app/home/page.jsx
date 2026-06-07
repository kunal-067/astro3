"use client"
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef, useCallback } from "react";

// ── Utility ──────────────────────────────────────────────────────────────────
const WA_LINK = "https://wa.me/447700000000?text=Hello%20Acharya%20Ji%2C%20I%20need%20your%20guidance";

// ── Data ─────────────────────────────────────────────────────────────────────
const REVIEWS = [
  { name: "Priya S.", city: "London", text: "Acharya Ji reunited me with my partner after 2 years of separation. Pure miracle!", stars: 5 },
  { name: "Anita K.", city: "Birmingham", text: "My marriage was on the verge of divorce. After consulting Acharya Ji, everything changed.", stars: 5 },
  { name: "Sunita R.", city: "Manchester", text: "100% genuine. My ex came back within 3 weeks exactly as Acharya Ji promised.", stars: 5 },
  { name: "Meera P.", city: "Leicester", text: "I was sceptical at first but the results were beyond my expectations. Highly recommend.", stars: 5 },
  { name: "Kavita D.", city: "Leeds", text: "Lost all hope in my relationship. Acharya Ji gave me hope and delivered results.", stars: 5 },
  { name: "Reena T.", city: "Glasgow", text: "Very discreet and professional. My family problems resolved within a month.", stars: 5 },
  { name: "Pooja M.", city: "Bristol", text: "Acharya Ji's guidance on my marriage was spot on. We're now living happily together.", stars: 5 },
  { name: "Deepa V.", city: "Coventry", text: "Amazing experience. He understood my problem without me explaining much. Truly gifted.", stars: 5 },
];

const SERVICES = [
  { icon: "❤️", title: "Love Back", desc: "Reunite with your lost love through ancient Vedic remedies and spiritual healing.", route: "/love-back", color: "from-pink-500/20 to-rose-500/20" },
  { icon: "💔", title: "Breakup Problems", desc: "Heal a broken heart and restore your relationship with powerful spiritual solutions.", route: "/breakup-problem", color: "from-purple-500/20 to-pink-500/20" },
  { icon: "👨‍👩‍👧", title: "Relationship Issues", desc: "Resolve deep-rooted relationship conflicts and rebuild trust and connection.", route: "/relationship-problems", color: "from-fuchsia-500/20 to-purple-500/20" },
  { icon: "⚖️", title: "Divorce Problems", desc: "Stop divorce proceedings and restore harmony in your marriage.", route: "/divorce-problem", color: "from-amber-500/20 to-orange-500/20" },
  { icon: "✨", title: "Love Spell Guidance", desc: "Ancient Vedic love spells channelled with positive energy to attract your soulmate.", route: "/love-spell", color: "from-violet-500/20 to-fuchsia-500/20" },
  { icon: "💍", title: "Marriage Problems", desc: "Expert guidance to overcome marriage obstacles and create lasting marital bliss.", route: "/marriage-problem", color: "from-rose-500/20 to-amber-500/20" },
];

const VIDEOS = [
  { id: "dQw4w9WgXcQ", title: "Sarah from London — Love Restored After 2 Years" },
  { id: "dQw4w9WgXcQ", title: "Kavya from Birmingham — Marriage Saved" },
  { id: "dQw4w9WgXcQ", title: "Priya from Manchester — Found Love Again" },
  { id: "dQw4w9WgXcQ", title: "Meena from Leeds — Breakup Healed" },
];

const FAQS = [
  { q: "Can Acharya Ji really help bring my ex back?", a: "Yes. With 25+ years of experience, Acharya Ji has helped thousands of clients reunite with their lost love through ancient Vedic remedies, spiritual healing, and personalised guidance. Results typically manifest within 3–21 days." },
  { q: "Is my consultation completely private?", a: "Absolutely. All consultations with Acharya Ji are 100% confidential. Your personal details and the nature of your problem are never shared with anyone under any circumstances." },
  { q: "How does a WhatsApp consultation work?", a: "Simply click 'Chat on WhatsApp', introduce yourself and describe your situation. Acharya Ji or his team will respond promptly, typically within 1–2 hours, to guide you through the process." },
  { q: "How long does it take to see results?", a: "Results vary based on the complexity of the situation. Many clients see positive changes within 7–21 days. Acharya Ji will give you a realistic timeline after understanding your specific case." },
  { q: "Do you help with marriage problems between different cultures?", a: "Yes. Acharya Ji has extensive experience with inter-cultural, inter-faith, and family-opposition marriage issues. His solutions are universal and effective regardless of background." },
  { q: "Is there a consultation fee?", a: "Initial consultation is free. Acharya Ji believes everyone deserves guidance. Fees for specific remedies or services are discussed transparently with no hidden charges." },
];

const GALLERY_ITEMS = [
  { id: 1, aspect: "tall", bg: "from-pink-900 to-purple-900", label: "Sacred Yantra Ceremony" },
  { id: 2, aspect: "wide", bg: "from-purple-900 to-violet-900", label: "Consultation Session" },
  { id: 3, aspect: "square", bg: "from-violet-900 to-fuchsia-900", label: "Vedic Rituals" },
  { id: 4, aspect: "square", bg: "from-fuchsia-900 to-pink-900", label: "Client Blessings" },
  { id: 5, aspect: "tall", bg: "from-rose-900 to-purple-900", label: "Temple Prayers" },
  { id: 6, aspect: "wide", bg: "from-amber-900 to-rose-900", label: "Success Ceremony" },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const s = document.documentElement;
      setProgress((s.scrollTop / (s.scrollHeight - s.clientHeight)) * 100);
    };
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-0.5 z-[100]">
      <div
        className="h-full bg-gradient-to-r from-pink-500 via-fuchsia-400 to-amber-400 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function FloatingWA() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-green-500 shadow-2xl shadow-green-500/40 transition-transform duration-300 group-hover:scale-110">
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </div>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-xl">
        Chat Now
      </span>
    </a>
  );
}

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 fill-amber-400">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ── Marquee Reviews ───────────────────────────────────────────────────────────
function MarqueeReviews({ onCardClick }) {
  const doubled = [...REVIEWS, ...REVIEWS];
  return (
    <div className="relative overflow-hidden py-4 group">
      <div className="flex gap-4 w-max animate-marquee group-hover:[animation-play-state:paused]">
        {doubled.map((r, i) => (
          <button
            key={i}
            onClick={() => onCardClick(r)}
            className={cn(`flex-shrink-0 w-72 rounded-2xl p-5 text-left cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1
              bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10
              hover:border-pink-400/40 hover:bg-white/10`)}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                {r.name[0]}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{r.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{r.city}</p>
              </div>
            </div>
            <Stars count={r.stars} />
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 line-clamp-3">{r.text}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Modal ─────────────────────────────────────────────────────────────────────
function Modal({ open, onClose, children }) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl bg-gray-950 border border-white/10"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none stroke-2">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}

// ── Accordion FAQ ─────────────────────────────────────────────────────────────
function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-semibold text-gray-900 dark:text-white pr-4">{q}</span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white text-sm transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-600 dark:text-gray-300 text-sm leading-relaxed border-t border-white/10">
          <p className="pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

// ── Section wrapper ───────────────────────────────────────────────────────────
function Section({ children, className = "", id = "" }) {
  return (
    <section id={id} className={`py-20 px-4 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
}

function SectionBadge({ children }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 text-pink-400 text-xs font-semibold uppercase tracking-widest mb-5">
      <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
      {children}
    </div>
  );
}

function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function AcharyaJiLanding() {
  const [reviewModal, setReviewModal] = useState(null);
  const [videoModal, setVideoModal] = useState(null);
  const [galleryModal, setGalleryModal] = useState(null);
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [videoIdx, setVideoIdx] = useState(0);

  // Particle canvas
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.2,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,79,161,${p.alpha})`;
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
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

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

      {/* ── NAV ── */}
      <nav className="fixed top-0.5 left-0 right-0 z-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mt-4 flex items-center justify-between px-6 py-3 rounded-2xl glass border border-white/10 dark:border-white/10 border-gray-200/60 shadow-xl shadow-black/20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">A</div>
              <span className="font-bold text-lg text-gray-900 dark:text-white" style={{ fontFamily: "var(--font-display)" }}>Acharya Ji</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {["Services","Testimonials","About","FAQ"].map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors font-medium">{l}</a>
              ))}
            </div>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white text-sm font-semibold shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-shadow">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div className="relative min-h-screen flex items-center dark:bg-none overflow-hidden">
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-pink-500/15 dark:bg-pink-500/20 blur-3xl animate-glow pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-purple-500/10 dark:bg-purple-500/20 blur-3xl animate-glow pointer-events-none" style={{ animationDelay: "1.5s" }} />
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-50 dark:opacity-100" />

        <div className="relative max-w-7xl mx-auto px-4 pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/15 to-purple-500/15 dark:from-pink-500/20 dark:to-purple-500/20 border border-pink-400/30 text-pink-500 dark:text-pink-300 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> 
              Available Now · Free Consultation
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-gray-900 dark:text-white" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
              London's Most{" "}
              <span className="text-shimmer">Trusted Love</span>
              {" "}& Relationship{" "}
              <span className="text-shimmer">Healer</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-xl">
              Acharya Ji has helped <strong className="text-gray-900 dark:text-white">thousands</strong> rebuild relationships, resolve marriage problems, and find love again — across the UK.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                { icon: "⭐", text: "5,000+ Happy Clients" },
                { icon: "🏆", text: "25+ Years Experience" },
                { icon: "🔒", text: "100% Private" },
                { icon: "💬", text: "On WhatsApp" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm">
                  <span className="text-base">{b.icon}</span>
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">{b.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-base shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 transition-all duration-300">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
              <a href="#services"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-pink-400/50 text-pink-500 dark:text-pink-300 font-semibold text-base hover:bg-pink-500/10 hover:scale-105 transition-all duration-300">
                Get Consultation
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-8">
              <div className="flex -space-x-2">
                {["P","S","K","A","M"].map((l,i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 border-2 border-white dark:border-[#0f0524] flex items-center justify-center text-white text-xs font-bold">
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1"><Stars count={5} /><span className="text-sm font-bold text-gray-900 dark:text-white ml-1">4.9/5</span></div>
                <p className="text-xs text-gray-500 dark:text-gray-400">from 5,000+ UK clients</p>
              </div>
            </div>
          </div>

          {/* Right — profile image placeholder */}
          <div className="relative  flex justify-center lg:self-start lg:mt-24 lg:justify-end">
            <div className="relative animate-float">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 blur-2xl opacity-30 scale-110 animate-glow" />
              {/* Profile card */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-pink-500/20">
                <div className="w-full h-full bg-gradient-to-br from-pink-900 via-purple-900 to-violet-900 flex items-center justify-center">
                  {/* <div className="text-center">
                    <div className="text-6xl mb-4">🧘</div>
                    <p className="text-white/80 text-lg font-semibold" style={{ fontFamily: "var(--font-display)" }}>Acharya Ji</p>
                    <p className="text-white/50 text-sm">Your profile photo here</p>
                  </div> */}

                  <img src="./astrologer.png" alt="img" />
                </div>
              </div>
              {/* Floating cards */}
              <div className="absolute -top-4 -left-8 glass dark:glass border border-white/10 rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-xs text-gray-500 dark:text-gray-400">Success Rate</p>
                <p className="text-2xl font-bold text-shimmer">98%</p>
              </div>
              <div className="absolute -bottom-4 -right-8 glass dark:glass border border-white/10 rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-xs text-gray-500 dark:text-gray-400">Years Active</p>
                <p className="text-2xl font-bold text-shimmer">25+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── TRUST / REVIEWS MARQUEE ── */}
      <div id="testimonials" className="py-16 bg-gray-50 dark:bg-white/[0.02] border-y border-gray-200/50 dark:border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <SectionBadge>Real Results</SectionBadge>
            <SectionHeading title="What Our Clients Say" subtitle="Hundreds of real WhatsApp reviews from clients across the UK." />
          </div>
          <MarqueeReviews onCardClick={r => setReviewModal(r)} />
          <p className="text-center text-xs text-gray-400 mt-6">Hover to pause · Click any card to read full review</p>
        </div>
      </div>

      {/* ── VIDEO TESTIMONIALS ── */}
      <Section id="videos">
        <div className="text-center mb-14">
          <SectionBadge>Video Proof</SectionBadge>
          <SectionHeading title="Hear It From Real Clients" subtitle="Watch genuine video testimonials from clients whose lives Acharya Ji transformed." />
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VIDEOS.map((v, i) => (
              <button
                key={i}
                onClick={() => { setVideoModal(v); setVideoIdx(i); }}
                className="group relative rounded-2xl overflow-hidden aspect-video card-hover cursor-pointer border border-white/10 hover:border-pink-400/40 transition-colors"
              >
                <img
                  src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
                  alt={v.title}
                  className="w-full h-full object-cover"
                  onError={e => { e.target.style.display="none"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-pink-900/80 to-purple-900/80 flex items-center justify-center flex-col">
                  <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white ml-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="mt-3 text-white text-xs text-center px-4 font-medium leading-snug">{v.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SERVICES ── */}
      <div id="services" className="py-20 px-4 bg-gray-50 dark:bg-white/[0.02] border-y border-gray-200/50 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <SectionBadge>Our Services</SectionBadge>
            <SectionHeading title="Problems We Solve" subtitle="Ancient wisdom meets modern guidance. Every situation is unique — and solvable." />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <a
                key={i}
                href={s.route}
                className={`group relative rounded-3xl p-7 border border-gray-200/50 dark:border-white/10 card-hover cursor-pointer overflow-hidden bg-gradient-to-br ${s.color} hover:border-pink-400/40 transition-all duration-300 block`}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-3xl" />
                <div className="relative">
                  <div className="text-4xl mb-5">{s.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3" style={{ fontFamily: "var(--font-display)" }}>{s.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">{s.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-pink-500 dark:text-pink-300 text-sm font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <Section id="about">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-3xl blur-3xl" />
            <div className="relative aspect-[4/5] max-w-sm mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-pink-900 via-purple-900 to-violet-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl mb-4">🌟</div>
                  <p className="text-white/70 font-semibold" style={{ fontFamily: "var(--font-display)" }}>Acharya Ji Profile</p>
                </div>
              </div>
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
              {[{ n: "25+", l: "Years" }, { n: "5K+", l: "Clients" }, { n: "98%", l: "Success" }].map((s,i) => (
                <div key={i} className="glass dark:glass border border-white/10 rounded-2xl px-5 py-3 text-center shadow-xl">
                  <p className="text-xl font-bold text-shimmer">{s.n}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="pt-8 lg:pt-0">
            <SectionBadge>About</SectionBadge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Meet{" "}<span className="text-shimmer">Acharya Ji</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              With over <strong className="text-gray-900 dark:text-white">25 years of spiritual practice</strong> rooted in ancient Vedic traditions, Acharya Ji has become the UK's most sought-after love and relationship healer. His work bridges timeless wisdom with modern emotional realities.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Having served clients from London to Glasgow, Birmingham to Bristol, Acharya Ji has resolved thousands of seemingly impossible situations — from reuniting separated lovers to saving marriages on the verge of collapse.
            </p>
            
            {/* Timeline */}
            <div className="space-y-5">
              {[
                { year: "1999", event: "Began Vedic spiritual practice under renowned Himalayan masters" },
                { year: "2005", event: "Established practice in London, serving the UK South Asian community" },
                { year: "2015", event: "Helped 1,000+ clients rebuild love and relationships" },
                { year: "2024", event: "Over 5,000 successful cases across the United Kingdom" },
              ].map((t, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-16 h-8 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 flex items-center justify-center">
                    <span className="text-pink-500 dark:text-pink-300 text-xs font-bold">{t.year}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 pt-1 leading-relaxed">{t.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── TEXT TESTIMONIALS ── */}
      <div className="py-20 px-4 bg-gray-50 dark:bg-white/[0.02] border-y border-gray-200/50 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <SectionBadge>Client Love</SectionBadge>
            <SectionHeading title="Voices From Across the UK" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {REVIEWS.map((r, i) => (
              <div key={i} className="rounded-2xl p-6 bg-white dark:bg-white/[0.03] border border-gray-200/50 dark:border-white/10 card-hover shadow-sm hover:shadow-pink-500/10 hover:border-pink-400/30 transition-all">
                <Stars count={r.stars} />
                <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic">"{r.text}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{r.name}</p>
                    <p className="text-xs text-gray-400">{r.city}, UK</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── GALLERY ── */}
      <Section id="gallery">
        <div className="text-center mb-14">
          <SectionBadge>Gallery</SectionBadge>
          <SectionHeading title="Sacred Moments & Ceremonies" subtitle="A glimpse into the spiritual world of Acharya Ji." />
        </div>
        {/* Desktop masonry */}
        <div className="hidden md:columns-3 gap-5 md:block">
          {GALLERY_ITEMS.map((g, i) => (
            <button
              key={i}
              onClick={() => { setGalleryModal(true); setGalleryIdx(i); }}
              className="block w-full mb-5 rounded-2xl overflow-hidden cursor-pointer group card-hover border border-white/10 hover:border-pink-400/30 transition-colors"
            >
              <div className={`bg-gradient-to-br ${g.bg} relative overflow-hidden ${g.aspect === "tall" ? "h-72" : g.aspect === "wide" ? "h-40" : "h-52"}`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                  <div className="w-12 h-12 rounded-full bg-white/20 border border-white/40 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-white/80 text-xs font-medium">{g.label}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
        {/* Mobile carousel */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
          {GALLERY_ITEMS.map((g, i) => (
            <div key={i} className={`flex-shrink-0 w-64 h-48 rounded-2xl bg-gradient-to-br ${g.bg} snap-center`} />
          ))}
        </div>
      </Section>

      {/* ── FAQ ── */}
      <div id="faq" className="py-20 px-4 bg-gray-50 dark:bg-white/[0.02] border-y border-gray-200/50 dark:border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <SectionBadge>FAQ</SectionBadge>
            <SectionHeading title="Questions & Answers" subtitle="Everything you need to know before reaching out." />
          </div>
          {FAQS.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
        </div>
      </div>

      {/* ── FINAL CTA ── */}
      <div className="relative py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/90 to-purple-800/90 dark:from-pink-700 dark:to-purple-900" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-4">Your Journey Starts Here</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            Talk Directly With Acharya Ji Today
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Get confidential guidance for your relationship, marriage, or personal concerns. First consultation is completely free.
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-gray-900 font-bold text-lg shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-green-500">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp — It's Free
          </a>
          <p className="mt-6 text-white/50 text-sm">🔒 Completely Private · No Obligation · Immediate Response</p>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="py-10 px-4 border-t border-gray-200/50 dark:border-white/10 bg-white dark:bg-[#0a0318]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">A</div>
            <span className="font-bold text-gray-900 dark:text-white" style={{ fontFamily: "var(--font-display)" }}>Acharya Ji</span>
          </div>
          <p className="text-xs text-gray-400 text-center">
            © 2024 Acharya Ji · London, United Kingdom · All consultations are private and confidential.
          </p>
          <div className="flex gap-4 text-xs text-gray-400">
            <a href="#" className="hover:text-pink-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-pink-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-pink-500 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WA ── */}
      <FloatingWA />

      {/* ── MODALS ── */}
      
      {/* Review modal */}
      <Modal open={!!reviewModal} onClose={() => setReviewModal(null)}>
        {reviewModal && (
          <div className="p-8">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
                {reviewModal.name[0]}
              </div>
              <div>
                <p className="text-lg font-bold text-white">{reviewModal.name}</p>
                <p className="text-gray-400 text-sm">{reviewModal.city}, UK</p>
                <Stars count={reviewModal.stars} />
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <p className="text-gray-200 leading-relaxed text-base italic">"{reviewModal.text}"</p>
            </div>
            <p className="mt-4 text-center text-xs text-gray-500">Verified client review</p>
          </div>
        )}
      </Modal>

      {/* Video modal */}
      <Modal open={!!videoModal} onClose={() => setVideoModal(null)}>
        {videoModal && (
          <div>
            <div className="aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${videoModal.id}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={videoModal.title}
              />
            </div>
            <div className="p-5">
              <p className="text-white font-semibold">{videoModal.title}</p>
            </div>
          </div>
        )}
      </Modal>

      {/* Gallery modal */}
      <Modal open={!!galleryModal} onClose={() => setGalleryModal(null)}>
        <div className="relative">
          <div className={`aspect-video bg-gradient-to-br ${GALLERY_ITEMS[galleryIdx]?.bg} flex items-center justify-center`}>
            <p className="text-white/70 font-semibold" style={{ fontFamily: "var(--font-display)" }}>{GALLERY_ITEMS[galleryIdx]?.label}</p>
          </div>
          <div className="flex justify-between absolute inset-y-0 left-0 right-0 items-center px-4 pointer-events-none">
            {galleryIdx > 0 && (
              <button onClick={e => { e.stopPropagation(); setGalleryIdx(i => i-1); }} className="w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors pointer-events-auto">
                ‹
              </button>
            )}
            <div />
            {galleryIdx < GALLERY_ITEMS.length-1 && (
              <button onClick={e => { e.stopPropagation(); setGalleryIdx(i => i+1); }} className="w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors pointer-events-auto">
                ›
              </button>
            )}
          </div>
          <div className="p-4 flex justify-center gap-2">
            {GALLERY_ITEMS.map((_,i) => (
              <button key={i} onClick={e => { e.stopPropagation(); setGalleryIdx(i); }}
                className={`w-2 h-2 rounded-full transition-all ${i === galleryIdx ? "bg-pink-400 w-5" : "bg-white/30"}`} />
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}