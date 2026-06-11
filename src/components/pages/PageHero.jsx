"use client";
import { useEffect, useRef, ReactNode } from "react";
import { Stars, WAButton } from "@/components/ui";

/* ── Zodiac wheel ───────────────────────────────────────── */
const ZODIAC = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];

function ZodiacWheel({ c1 = "#ff4fa1", c2 = "#d946ef" }) {
    const cx = 260, cy = 260;
    const r1 = 230, r2 = 195, r3 = 160, r4 = 128;
    const symbols = ZODIAC.map((sym, i) => {
        const a = (i / 12) * 2 * Math.PI - Math.PI / 2;
        return { sym, x: cx + r1 * Math.cos(a), y: cy + r1 * Math.sin(a) };
    });
    const ticks = Array.from({ length: 72 }, (_, i) => {
        const a = (i / 72) * 2 * Math.PI - Math.PI / 2;
        const isMajor = i % 6 === 0;
        const inner = r2 - (isMajor ? 14 : 7);
        return { x1: cx + inner * Math.cos(a), y1: cy + inner * Math.sin(a), x2: cx + r2 * Math.cos(a), y2: cy + r2 * Math.sin(a), major: isMajor };
    });
    return (
        <svg viewBox="0 0 520 520" className="absolute inset-0 w-full h-full" aria-hidden>
            <defs>
                <radialGradient id={`wg-${c1.slice(1)}`} cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor={c1} stopOpacity="0" />
                    <stop offset="60%" stopColor={c1} stopOpacity="0.06" />
                    <stop offset="100%" stopColor={c2} stopOpacity="0.18" />
                </radialGradient>
                <linearGradient id={`rg-${c1.slice(1)}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={c1} stopOpacity="0.55" />
                    <stop offset="50%" stopColor={c2} stopOpacity="0.38" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.42" />
                </linearGradient>
                <filter id="sg"><feGaussianBlur stdDeviation="3" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            </defs>
            <circle cx={cx} cy={cy} r={r1 + 20} fill={`url(#wg-${c1.slice(1)})`} />
            <circle cx={cx} cy={cy} r={r1 + 8} fill="none" stroke={`url(#rg-${c1.slice(1)})`} strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4 8" />
            <circle cx={cx} cy={cy} r={r1 - 12} fill="none" stroke={`url(#rg-${c1.slice(1)})`} strokeWidth="1.5" strokeOpacity="0.6" />
            {ticks.map((t, i) => (<line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke={t.major ? c1 : c2} strokeWidth={t.major ? 1.5 : 0.8} strokeOpacity={t.major ? 0.7 : 0.35} />))}
            <circle cx={cx} cy={cy} r={r2} fill="none" stroke={`url(#rg-${c1.slice(1)})`} strokeWidth="1" strokeOpacity="0.4" />
            <circle cx={cx} cy={cy} r={r3} fill="none" stroke={c2} strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 12" />
            <circle cx={cx} cy={cy} r={r4 + 1} fill="none" stroke={`url(#rg-${c1.slice(1)})`} strokeWidth="2" strokeOpacity="0.7" />
            {symbols.map((s, i) => (<text key={i} x={s.x} y={s.y} textAnchor="middle" dominantBaseline="central" fontSize="18" fill={c1} fillOpacity="0.75" filter="url(#sg)" style={{ fontFamily: "serif" }}>{s.sym}</text>))}
            {symbols.map((_, i) => { const a = (i / 12) * 2 * Math.PI - Math.PI / 2; return (<line key={i} x1={cx + (r4 + 4) * Math.cos(a)} y1={cy + (r4 + 4) * Math.sin(a)} x2={cx + (r2 - 2) * Math.cos(a)} y2={cy + (r2 - 2) * Math.sin(a)} stroke={c2} strokeWidth="0.8" strokeOpacity="0.4" />); })}
            {symbols.map((_, i) => { const a = (i / 12) * 2 * Math.PI - Math.PI / 2; return (<circle key={i} cx={cx + (r3 - 6) * Math.cos(a)} cy={cy + (r3 - 6) * Math.sin(a)} r="3.5" fill={c1} fillOpacity="0.55" />); })}
        </svg>
    );
}

/* ── Particles ──────────────────────────────────────────── */
function Particles({ c1 = "255,79,161", c2 = "217,70,239" }) {
    const ref = useRef(null);
    useEffect(() => {
        const canvas = ref.current; if (!canvas) return;
        const ctx = canvas.getContext("2d"); if (!ctx) return;
        let raf;
        const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
        resize();
        const ro = new ResizeObserver(resize); ro.observe(canvas);
        const pts = Array.from({ length: 70 }, () => ({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 2.2 + 0.4, dx: (Math.random() - .5) * 0.22, dy: (Math.random() - .5) * 0.22, a: Math.random() * 0.55 + 0.1, c: Math.random() > .5 ? c1 : c2 }));
        const draw = () => { ctx.clearRect(0, 0, canvas.width, canvas.height); pts.forEach(p => { ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(${p.c},${p.a})`; ctx.fill(); p.x += p.dx; p.y += p.dy; if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0; if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0; }); raf = requestAnimationFrame(draw); };
        draw();
        return () => { cancelAnimationFrame(raf); ro.disconnect(); };
    }, [c1, c2]);
    return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none opacity-55" />;
}

/* ── PageHero ───────────────────────────────────────────── */
export default function PageHero({
    badge, liveBadge = "Online Now · Free Consultation", breadcrumb,
    headLine1, headLineShimmer, headLine2, sub,
    badges = [], waLink, ctaLabel = "Get Help Now — Free",
    secondaryHref = "#how-it-works", secondaryLabel = "How It Works",
    statCards = [], avatarInitials = ["P", "S", "K", "A", "M", "R"],
    proofText = "Trusted by 5,000+ UK clients",
    placeholderEmoji = "🧘",
    wheelColor1 = "#ff4fa1", wheelColor2 = "#d946ef",
}) {
    return (
        <section
            className="
                relative min-h-screen flex items-center overflow-hidden
                bg-[#F8F4EF] dark:bg-[#0f0524] border-b border-gray-200
            "
            style={{
                backgroundImage: `
                    radial-gradient(ellipse 100% 80% at 65% 40%, ${wheelColor1}18 0%, transparent 55%),
                    radial-gradient(ellipse 70% 60% at 15% 75%, ${wheelColor2}20 0%, transparent 50%)
                `,
            }}
        >
            {/* Glow blobs */}
            <div
                className="absolute top-24 left-10 w-105 h-105 rounded-full blur-[100px] pointer-events-none animate-[glowPulse_4s_ease-in-out_infinite]"
                style={{ background: `${wheelColor1}0c` }}
            />
            <div
                className="absolute bottom-16 right-16 w-80 h-80 rounded-full blur-20 pointer-events-none animate-[glowPulse_3s_ease-in-out_infinite]"
                style={{ background: `${wheelColor2}12`, animationDelay: "2s" }}
            />
            <Particles
                c1={wheelColor1.replace("#", "").match(/.{2}/g)?.map(h => parseInt(h, 16)).join(",") ?? ""}
                c2={wheelColor2.replace("#", "").match(/.{2}/g)?.map(h => parseInt(h, 16)).join(",") ?? ""}
            />

            <div className="relative max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-[1fr_520px] gap-12 xl:gap-20 items-center pt-28 pb-16">

                {/* LEFT */}
                <div style={{ animation: "fadeUp .85s cubic-bezier(.22,1,.36,1) both" }}>

                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-xs font-medium mb-5
                        text-gray-400 dark:text-purple-300/50">
                        <a href="/"
                            className="hover:text-[#ff4fa1] transition-colors
                                text-gray-500 dark:text-purple-300/50">
                            Home
                        </a>
                        <span>/</span>
                        <span className="text-gray-600 dark:text-purple-200/70">{breadcrumb}</span>
                    </div>

                    {/* Category pill */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                        style={{ background: `${wheelColor1}1e`, border: `1px solid ${wheelColor1}50` }}
                    >
                        <span
                            className="text-[11px] font-bold uppercase tracking-[0.15em]"
                            style={{ color: wheelColor1 }}
                        >
                            {badge}
                        </span>
                    </div>

                    {/* Live badge */}
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-7 ml-1
                        bg-green-500/10 dark:bg-green-500/12
                        border border-green-500/30 dark:border-green-500/25">
                        <span className="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400 animate-[ping_1.4s_cubic-bezier(0,0,0.2,1)_infinite]" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.15em]
                            text-green-700 dark:text-green-300">
                            {liveBadge}
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="display text-5xl sm:text-6xl xl:text-[4.2rem] font-bold leading-[1.08] mb-6
                        text-gray-900 dark:text-white">
                        {headLine1}<br />
                        <span style={{
                            background: `linear-gradient(90deg,${wheelColor1},#fbbf24,${wheelColor2},${wheelColor1})`,
                            backgroundSize: "300% auto",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            animation: "shimmer 5s linear infinite"
                        }}>
                            {headLineShimmer}
                        </span>
                        {headLine2 && <><br />{headLine2}</>}
                    </h1>

                    {/* Sub */}
                    <p className="text-lg leading-relaxed mb-8 max-w-125
                        text-gray-600 dark:text-purple-200/65">
                        {sub}
                    </p>

                    {/* Trust badges */}
                    {badges.length > 0 && (
                        <div className="flex flex-wrap gap-2.5 mb-10">
                            {badges.map((b, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold
                                        border
                                        bg-white/70 border-gray-200 text-gray-700
                                        dark:bg-white/5 dark:border-white/12 dark:text-purple-100
                                        backdrop-blur-sm"
                                    style={{ animation: `fadeUp .6s ${0.1 + i * 0.07}s both` }}
                                >
                                    <span>{b.icon}</span>{b.text}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 mb-10">
                        <WAButton href={waLink} size="lg">{ctaLabel}</WAButton>
                        <a
                            href={secondaryHref}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 font-bold text-base hover:scale-105 transition-all duration-300"
                            style={{ borderColor: `${wheelColor1}80`, color: wheelColor1 }}
                        >
                            {secondaryLabel}
                            <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-2">
                                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>

                    {/* Social proof */}
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-2.5">
                            {avatarInitials.map((l, i) => (
                                <div
                                    key={i}
                                    className="w-9 h-9 rounded-full bg-linear-to-br from-[#ff4fa1] to-[#9333ea] flex items-center justify-center text-white text-xs font-bold
                                        border-2 border-white dark:border-[#0f0524]"
                                >
                                    {l}
                                </div>
                            ))}
                        </div>
                        <div className="border-l pl-4
                            border-gray-300 dark:border-white/15">
                            <div className="flex items-center gap-1.5">
                                <Stars count={5} />
                                <span className="text-sm font-bold text-gray-900 dark:text-white">4.9/5</span>
                            </div>
                            <p className="text-xs mt-0.5 text-gray-500 dark:text-purple-200/45">{proofText}</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div
                    className="relative flex justify-center items-center"
                    style={{ animation: "fadeUp .9s .15s cubic-bezier(.22,1,.36,1) both" }}
                >
                    <div className="relative w-130 h-130 max-w-[90vw] max-h-[90vw]">

                        {/* Spinning zodiac wheel */}
                        <div className="absolute inset-0 animate-[spinSlow_28s_linear_infinite]">
                            <ZodiacWheel c1={wheelColor1} c2={wheelColor2} />
                        </div>

                        {/* Inner dashed ring */}
                        <div
                            className="absolute inset-15 rounded-full animate-[spinReverse_22s_linear_infinite] border border-dashed"
                            style={{ borderColor: `${wheelColor1}20` }}
                        />

                        {/* Glow core */}
                        <div
                            className="absolute inset-20 rounded-full blur-2xl animate-[glowPulse_3s_ease-in-out_infinite]"
                            style={{ background: `linear-gradient(135deg,${wheelColor1}28,${wheelColor2}30)` }}
                        />

                        {/* Avatar circle */}
                        <div
                            className="absolute inset-22.5 rounded-full overflow-hidden border-[3px] animate-[float_7s_ease-in-out_infinite]
                                border-black/10 dark:border-white/25"
                            style={{ boxShadow: `0 0 60px ${wheelColor1}50,0 0 120px ${wheelColor2}25` }}
                        >
                            <img src="./astrologer.png" alt="Acharya Ji" fill='fill' className="object-cover object-top"/>
                            {/* <div className="w-full h-full flex flex-col items-center justify-end pb-6
                                bg-linear-to-b from-[#f0e8ff] via-[#e8d8ff] to-[#d8c0ff]
                                dark:from-[#2d0a4e] dark:via-[#1a0840] dark:to-[#0f0524]">
                                <span className="text-7xl mb-3 mt-auto pt-10">{placeholderEmoji}</span>
                                <p className="text-gray-800 dark:text-white/80 text-lg font-semibold display">Acharya Ji</p>
                                <p className="text-gray-500 dark:text-white/35 text-xs mt-1 px-4 text-center">Replace with /public/acharya-ji.jpg</p>
                            </div> */}
                        </div>

                        {/* Stat card top-left */}
                        {statCards[0] && (
                            <div className="absolute -top-2 -left-4 rounded-2xl px-4 py-3 shadow-2xl animate-[floatSlow_8s_ease-in-out_infinite]
                                border backdrop-blur-md
                                bg-white/80 border-gray-200/80
                                dark:bg-white/5 dark:border-white/12">
                                <p className="text-[10px] text-gray-500 dark:text-purple-300/60">{statCards[0].label}</p>
                                <p
                                    className="text-2xl font-bold display"
                                    style={{ background: `linear-gradient(135deg,${wheelColor1},#fbbf24)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                                >
                                    {statCards[0].value}
                                </p>
                            </div>
                        )}

                        {/* Stat card bottom-right */}
                        {statCards[1] && (
                            <div
                                className="absolute -bottom-2 -right-4 rounded-2xl px-4 py-3 shadow-2xl animate-[floatSlow_9s_ease-in-out_infinite]
                                    border backdrop-blur-md
                                    bg-white/80 border-gray-200/80
                                    dark:bg-white/5 dark:border-white/12"
                                style={{ animationDelay: "2s" }}
                            >
                                <p className="text-[10px] text-gray-500 dark:text-purple-300/60">{statCards[1].label}</p>
                                <p
                                    className="text-2xl font-bold display"
                                    style={{ background: `linear-gradient(135deg,${wheelColor2},${wheelColor1})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                                >
                                    {statCards[1].value}
                                </p>
                            </div>
                        )}

                        {/* Available Now badge */}
                        <div className="absolute top-1/2 -right-6 -translate-y-1/2 rounded-2xl px-3 py-2 shadow-xl
                            border backdrop-blur-md
                            bg-white/80 border-gray-200/80
                            dark:bg-white/5 dark:border-white/12">
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400 animate-[ping_1.4s_ease-in-out_infinite]" />
                                <span className="text-xs font-bold text-green-700 dark:text-green-300">Available Now</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Scroll hint */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-35 pointer-events-none">
                <span className="text-[10px] uppercase tracking-[0.2em]
                    text-gray-500 dark:text-purple-300">
                    Scroll
                </span>
                <div
                    className="w-px h-8 animate-[glowPulse_2s_ease-in-out_infinite]"
                    style={{ background: `linear-gradient(to bottom, ${wheelColor1}, transparent)` }}
                />
            </div>
        </section>
    );
}