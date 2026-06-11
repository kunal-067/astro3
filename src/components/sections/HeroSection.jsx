'use client'
import React, { useRef, useEffect } from 'react'
import { WA_LINK } from '@/lib/constants';
import { Stars } from '../ui';
import { MarqueeReviews } from './TrustBar';

const HeroSection = () => {
 
  return (
   <>
   <Hero1 className={`hidden md:block`}/>
   <Hero2 className={`block md:hidden`}/>
   </>
  )
}


const Hero1 = ({ className }) => {
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
    <div className={`relative min-h-screen flex items-center dark:bg-none overflow-hidden ${className}`}>
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-pink-500/15 dark:bg-pink-500/20 blur-3xl animate-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-purple-500/10 dark:bg-purple-500/20 blur-3xl animate-glow pointer-events-none" style={{ animationDelay: "1.5s" }} />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-50 dark:opacity-100" />

      <div className={`relative max-w-7xl mx-auto px-4 pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center w-full`}>
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-pink-500/15 to-purple-500/15 dark:from-pink-500/20 dark:to-purple-500/20 border border-pink-400/30 text-pink-500 dark:text-pink-300 text-xs font-semibold uppercase tracking-widest mb-6">
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
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-linear-to-r from-green-500 to-green-600 text-white font-semibold text-base shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 transition-all duration-300">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
              {["P", "S", "K", "A", "M"].map((l, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-linear-to-br from-pink-400 to-purple-500 border-2 border-white dark:border-[#0f0524] flex items-center justify-center text-white text-xs font-bold">
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
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-pink-500 to-purple-600 blur-2xl opacity-30 scale-110 animate-glow" />
            {/* Profile card */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-pink-500/20">
              <div className="w-full h-full bg-linear-to-br from-pink-900 via-purple-900 to-violet-900 flex items-center justify-center">
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
  )
}

const serviceCards = [
  {
    label: "Chat with Astrologer",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 md:w-6 h-4 md:h-6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Talk to Astrologer",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 md:w-6 h-4 md:h-6">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1.19h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 5.37 5.37l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Book Pooja",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 md:w-6 h-4 md:h-6">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeLinecap="round" />
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Video Call with Astrologer",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 md:w-6 h-4 md:h-6">
        <polygon points="23 7 16 12 23 17 23 7" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];
export const Hero2 = ({ className }) => {
  return (
    <div className={`bg-[#F5F0EB] dark:bg-[#0F0A1F] font-sans px-4 ${className}`}>
      {/* Hero Banner */}
      <HeroBanner className={'pt-24'} />

      {/* Service Cards */}
      <div className="mx-auto mt-6 max-w-7xl pb-2">
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
          {serviceCards.map((card, i) => (
            <button
              key={i}
              className="group flex min-h-29 flex-col items-center justify-center gap-3 rounded-2xl border border-[#EDE8E3] bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-50 hover:shadow-lg dark:border-white/10 dark:bg-[#181226] dark:hover:border-violet-500 dark:hover:bg-violet-950/30 md:min-h-42.5 md:gap-4 md:p-6"
            >
              <div className="flex p-3 items-center justify-center rounded-full bg-[#EDE8F5] text-violet-600 transition-colors group-hover:bg-violet-100 md:h-14 md:w-14">
                {card.icon}
              </div>

              <span className="text-center text-sm font-semibold leading-snug text-[#1C1028] dark:text-white md:text-lg">
                {card.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className='overflow-hidden'>
        <MarqueeReviews />
      </div>
    </div>
  );
};
export const HeroBanner = ({ className }) => {
  return (
    <section className={`${className}`}>
      <div className="relative max-w-7xl mx-auto rounded-4xl bg-linear-to-br from-[#1A0F39] via-[#2B1157] to-[#521457]">
        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.08),transparent_40%)]" />

        <div className="relative flex h-full items-center">
          {/* Content */}
          <div className="z-10 basis-[65%] p-6 sm:p-10 md:p-16">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold bg-linear-to-r from-[#C9A4FF] via-[#E6B4C4] to-[#FF9C6B] bg-clip-text text-transparent">
              Acharya Guruji
            </h1>

            <p className="mt-4 text-base sm:text-xl md:text-3xl font-medium leading-tight text-white">
              London's Most Trusted
              <br className="hidden md:block" />
              Love & Relationship
              <br className="hidden md:block" />
              Specialist
            </p>

            <div className="mt-6 flex gap-4 text-sm font-medium">
              <button className="rounded-full bg-white px-3 py-2 md:px-6 md:py-3 text-[#2B1157] transition hover:scale-105">
                Consult Now
              </button>

              <button className="rounded-full border border-white/20 bg-white/10 px-3 py-2 py-1md:px-6 md:py-3  text-white backdrop-blur">
                WhatsApp
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="absolute right-5 bottom-0 md:right-4 z-0">
            <img
              src="/astrologer2-bgr.png"
              alt="Acharya Guruji"
              className="w-45 sm:w-65 md:w-105 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};


export default HeroSection;