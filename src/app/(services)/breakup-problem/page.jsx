'use client'
/* ============================================================
   PageSections.jsx
   All sections below follow the same prop-driven pattern as
   PageHero. Pass wheelColor1 / wheelColor2 to keep every
   section on-brand automatically.
   ============================================================ */

import { useRef, useEffect, useState } from "react";

/* ----------------------------------------------------------
   Shared helpers
---------------------------------------------------------- */

/** Thin eyebrow pill — same as hero category pill */
function SectionEyebrow({ label, color }) {
    return (
        <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{ background: `${color}1e`, border: `1px solid ${color}50` }}
        >
            <span
                className="text-[11px] font-bold uppercase tracking-[0.15em]"
                style={{ color }}
            >
                {label}
            </span>
        </div>
    );
}

/** Section heading — mirrors hero h1 scale */
function SectionHeading({ children, shimmer, color, align = "left" }) {
    return (
        <h2
            className={`text-4xl sm:text-5xl font-bold leading-[1.1] mb-4 text-gray-900 dark:text-white ${align === "center" ? "text-center" : ""}`}
        >
            {children}
            {shimmer && (
                <>
                    {" "}
                    <span
                        style={{
                            background: `linear-gradient(90deg,${color[0]},#fbbf24,${color[1]},${color[0]})`,
                            backgroundSize: "300% auto",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            animation: "shimmer 5s linear infinite",
                        }}
                    >
                        {shimmer}
                    </span>
                </>
            )}
        </h2>
    );
}

/** Glass card — mirrors the hero stat cards */
function GlassCard({ children, className = "", style = {} }) {
    return (
        <div
            className={`rounded-2xl border backdrop-blur-md
                bg-white/80 border-gray-200/80
                dark:bg-white/5 dark:border-white/12
                shadow-lg ${className}`}
            style={style}
        >
            {children}
        </div>
    );
}

/** Vertical connector line used in process steps */
function StepConnector({ color }) {
    return (
        <div
            className="absolute left-6 top-14 bottom-0 w-px"
            style={{ background: `linear-gradient(to bottom, ${color}60, transparent)` }}
        />
    );
}

/* ----------------------------------------------------------
   1. HowGurujiSolvesIt
      A numbered process section that reads as a real sequence.
      Each step has an icon, title, body, and optional detail chip.
   ---------------------------------------------------------- */

/**
 * @prop {string}  eyebrow          - Small pill label above heading
 * @prop {string}  heading          - Main heading text
 * @prop {string}  headingShimmer   - Gradient-shimmer word(s) appended to heading
 * @prop {string}  sub              - Paragraph below heading
 * @prop {Array}   steps            - [{ icon, title, body, chip? }]
 * @prop {string}  ctaLabel
 * @prop {string}  waLink
 * @prop {string}  wheelColor1
 * @prop {string}  wheelColor2
 */
export function HowGurujiSolvesIt({
    eyebrow = "The Process",
    heading = "How Guruji",
    headingShimmer = "Solves It",
    sub = "A time-tested four-step method rooted in Vedic wisdom — personalised for your life, delivered in plain language.",
    steps = [
        {
            icon: "🔭",
            title: "Deep Kundali Reading",
            body: "Guruji studies your full birth chart — planets, houses, doshas and yogas — to find the exact root of your challenge.",
            chip: "Usually 30 min",
        },
        {
            icon: "🪬",
            title: "Root-Cause Diagnosis",
            body: "Most problems have a spiritual or karmic trigger. Guruji identifies it precisely so the remedy hits the cause, not just the symptom.",
            chip: "No guesswork",
        },
        {
            icon: "📿",
            title: "Custom Remedies",
            body: "Mantras, gemstones, yantras, or ritual timings — only what your chart actually needs. Never a one-size-fits-all package.",
            chip: "Personalised",
        },
        {
            icon: "🔄",
            title: "Follow-Up & Tracking",
            body: "Guruji checks back in. If circumstances shift, the remedy is refined. You are never left without guidance mid-journey.",
            chip: "Ongoing support",
        },
    ],
    ctaLabel = "Start Your Reading — Free",
    waLink = "#",
    wheelColor1 = "#ff4fa1",
    wheelColor2 = "#d946ef",
}) {
    return (
        <section
            className="relative py-24 overflow-hidden
                bg-[#F8F4EF] dark:bg-[#0f0524]"
        >
            {/* Ambient blob */}
            <div
                className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none"
                style={{ background: wheelColor1 }}
            />

            <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-[1fr_1fr] gap-16 items-start">

                {/* Left — sticky heading */}
                <div className="lg:sticky lg:top-28">
                    <SectionEyebrow label={eyebrow} color={wheelColor1} />
                    <SectionHeading shimmer={headingShimmer} color={[wheelColor1, wheelColor2]}>
                        {heading}
                    </SectionHeading>
                    <p className="text-lg text-gray-600 dark:text-purple-200/65 leading-relaxed mb-10 max-w-md">
                        {sub}
                    </p>
                    <WAButton href={waLink} color={wheelColor1}>{ctaLabel}</WAButton>

                    {/* Decorative mandala ring */}
                    <div
                        className="mt-14 w-48 h-48 rounded-full border-[2px] border-dashed opacity-20 animate-[spinSlow_30s_linear_infinite]"
                        style={{ borderColor: wheelColor1 }}
                    />
                </div>

                {/* Right — steps */}
                <div className="flex flex-col gap-6">
                    {steps.map((step, i) => (
                        <div key={i} className="relative pl-16" style={{ animation: `fadeUp .6s ${i * 0.1}s both` }}>
                            {i < steps.length - 1 && <StepConnector color={wheelColor1} />}

                            {/* Step number bubble */}
                            <div
                                className="absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg border-2"
                                style={{
                                    background: `linear-gradient(135deg,${wheelColor1}22,${wheelColor2}22)`,
                                    borderColor: `${wheelColor1}50`,
                                    color: wheelColor1,
                                }}
                            >
                                {step.icon}
                            </div>

                            <GlassCard className="p-6">
                                <div className="flex items-start justify-between gap-4 mb-2">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{step.title}</h3>
                                    {step.chip && (
                                        <span
                                            className="shrink-0 text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full"
                                            style={{ background: `${wheelColor2}22`, color: wheelColor2 }}
                                        >
                                            {step.chip}
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-gray-600 dark:text-purple-200/60 leading-relaxed">{step.body}</p>
                            </GlassCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ----------------------------------------------------------
   2. ProblemsSolvedSection
      Icon-grid of the life areas Guruji addresses.
   ---------------------------------------------------------- */

/**
 * @prop {string}  eyebrow
 * @prop {string}  heading
 * @prop {string}  headingShimmer
 * @prop {string}  sub
 * @prop {Array}   problems        - [{ icon, title, body }]
 * @prop {string}  wheelColor1
 * @prop {string}  wheelColor2
 */
export function ProblemsSolvedSection({
    eyebrow = "Specialisations",
    heading = "Problems",
    headingShimmer = "We Resolve",
    sub = "From stubborn career blocks to family disputes — Guruji has guided thousands through every kind of life challenge.",
    problems = [
        { icon: "💔", title: "Love & Marriage", body: "Delayed marriage, compatibility clashes, separation, remarriage guidance." },
        { icon: "💼", title: "Career & Business", body: "Job loss, promotion blocks, business failure, financial stagnation." },
        { icon: "🏠", title: "Property & Legal", body: "Land disputes, court cases, property stuck in limbo." },
        { icon: "👶", title: "Children & Fertility", body: "Conception difficulties, child health, education struggles." },
        { icon: "🌀", title: "Black Magic & Vastu", body: "Negative energies, evil eye, home or workplace Vastu doshas." },
        { icon: "🩺", title: "Health & Longevity", body: "Chronic illness patterns rooted in planetary afflictions." },
        { icon: "✈️", title: "Foreign Settlement", body: "Visa delays, overseas career, migration timing." },
        { icon: "🧠", title: "Mental Peace", body: "Anxiety, recurring nightmares, unexplained fears — often karmic in origin." },
    ],
    wheelColor1 = "#ff4fa1",
    wheelColor2 = "#d946ef",
}) {
    return (
        <section
            className="relative py-24 overflow-hidden
                bg-white dark:bg-[#080318]"
            style={{
                backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 100%, ${wheelColor2}10 0%, transparent 60%)`,
            }}
        >
            <div className="relative max-w-7xl mx-auto px-4">
                <div className="text-center mb-14">
                    <SectionEyebrow label={eyebrow} color={wheelColor2} />
                    <SectionHeading shimmer={headingShimmer} color={[wheelColor1, wheelColor2]} align="center">
                        {heading}
                    </SectionHeading>
                    <p className="text-lg text-gray-600 dark:text-purple-200/55 leading-relaxed max-w-xl mx-auto">
                        {sub}
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {problems.map((p, i) => (
                        <GlassCard
                            key={i}
                            className="p-6 group cursor-default transition-transform duration-300 hover:-translate-y-1"
                            style={{ animation: `fadeUp .5s ${i * 0.06}s both` }}
                        >
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110"
                                style={{ background: `linear-gradient(135deg,${wheelColor1}22,${wheelColor2}22)` }}
                            >
                                {p.icon}
                            </div>
                            <h3 className="font-bold text-gray-900 dark:text-white mb-1.5">{p.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-purple-200/50 leading-relaxed">{p.body}</p>
                            {/* Hover accent underline */}
                            <div
                                className="mt-4 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
                                style={{ background: `linear-gradient(90deg,${wheelColor1},${wheelColor2})` }}
                            />
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ----------------------------------------------------------
   3. TestimonialsSection
      Horizontal scroll of review cards with star rating.
   ---------------------------------------------------------- */

/**
 * @prop {string}  eyebrow
 * @prop {string}  heading
 * @prop {string}  headingShimmer
 * @prop {Array}   testimonials    - [{ name, location, stars, body, initials }]
 * @prop {string}  wheelColor1
 * @prop {string}  wheelColor2
 */
export function TestimonialsSection({
    eyebrow = "Client Stories",
    heading = "Real People,",
    headingShimmer = "Real Shifts",
    testimonials = [
        {
            initials: "P",
            name: "Priya S.",
            location: "London, UK",
            stars: 5,
            body: "I had been stuck in the same job for six years. After one session Guruji gave me a specific mantra and a timing window. I got the promotion within three months.",
        },
        {
            initials: "R",
            name: "Rahul M.",
            location: "Birmingham, UK",
            stars: 5,
            body: "My marriage was on the verge of breaking. Guruji identified a mangal dosha neither of us knew about. The remedies he gave brought genuine peace back to our home.",
        },
        {
            initials: "A",
            name: "Anjali K.",
            location: "Manchester, UK",
            stars: 5,
            body: "We had been trying for a child for four years. Guruji's reading pointed to a specific planetary period. Our daughter was born the following year. I have no other explanation.",
        },
        {
            initials: "S",
            name: "Suresh V.",
            location: "Leicester, UK",
            stars: 5,
            body: "The legal case over my father's property had been dragging for eight years. Guruji told me exactly which dates to avoid and which to act on. We settled in two months.",
        },
        {
            initials: "K",
            name: "Kavitha N.",
            location: "Leeds, UK",
            stars: 5,
            body: "I was sceptical. I am a doctor. But the accuracy of the reading — details about my childhood, my mother, my exact career crossroads — was impossible to dismiss.",
        },
        {
            initials: "M",
            name: "Mohan T.",
            location: "Glasgow, UK",
            stars: 5,
            body: "Guruji never makes promises. He gives probabilities and timing. That honesty itself gave me confidence. The remedy for my business worked exactly as described.",
        },
    ],
    wheelColor1 = "#ff4fa1",
    wheelColor2 = "#d946ef",
}) {
    const track = useRef(null);

    return (
        <section
            className="relative py-24 overflow-hidden
                bg-[#F8F4EF] dark:bg-[#0f0524]"
        >
            {/* Blob */}
            <div
                className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15 pointer-events-none"
                style={{ background: wheelColor1 }}
            />

            <div className="relative max-w-7xl mx-auto px-4 mb-12">
                <div className="flex items-end justify-between gap-6 flex-wrap">
                    <div>
                        <SectionEyebrow label={eyebrow} color={wheelColor1} />
                        <SectionHeading shimmer={headingShimmer} color={[wheelColor1, wheelColor2]}>
                            {heading}
                        </SectionHeading>
                    </div>
                    {/* Scroll arrows */}
                    <div className="flex gap-3">
                        {["←", "→"].map((arrow, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    track.current?.scrollBy({ left: i === 0 ? -360 : 360, behavior: "smooth" });
                                }}
                                className="w-11 h-11 rounded-full border-2 font-bold text-base
                                    transition-all duration-200 hover:scale-110
                                    border-gray-300 text-gray-600
                                    dark:border-white/20 dark:text-white/70
                                    hover:border-current"
                                style={{ "--hover-color": wheelColor1 }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = wheelColor1;
                                    e.currentTarget.style.color = wheelColor1;
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = "";
                                    e.currentTarget.style.color = "";
                                }}
                            >
                                {arrow}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scrollable track */}
            <div
                ref={track}
                className="flex gap-5 overflow-x-auto pb-4 px-4 max-w-7xl mx-auto scroll-smooth"
                style={{ scrollbarWidth: "none" }}
            >
                {testimonials.map((t, i) => (
                    <GlassCard
                        key={i}
                        className="shrink-0 w-[320px] p-7 flex flex-col gap-4"
                        style={{ animation: `fadeUp .5s ${i * 0.07}s both` }}
                    >
                        {/* Stars */}
                        <div className="flex gap-0.5">
                            {Array.from({ length: t.stars }).map((_, j) => (
                                <span key={j} className="text-amber-400 text-sm">★</span>
                            ))}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-purple-200/70 leading-relaxed flex-1">
                            "{t.body}"
                        </p>
                        <div className="flex items-center gap-3 border-t pt-4
                            border-gray-200 dark:border-white/10">
                            <div
                                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                                style={{ background: `linear-gradient(135deg,${wheelColor1},${wheelColor2})` }}
                            >
                                {t.initials}
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900 dark:text-white">{t.name}</p>
                                <p className="text-xs text-gray-500 dark:text-purple-300/50">{t.location}</p>
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
}

/* ----------------------------------------------------------
   4. WhyGurujiSection
      Split layout — credentials left, visual right.
   ---------------------------------------------------------- */

/**
 * @prop {string}  eyebrow
 * @prop {string}  heading
 * @prop {string}  headingShimmer
 * @prop {string}  sub
 * @prop {Array}   credentials     - [{ icon, stat, label }]
 * @prop {Array}   trustPoints     - [{ icon, text }]
 * @prop {string}  gurujiEmoji
 * @prop {string}  ctaLabel
 * @prop {string}  waLink
 * @prop {string}  wheelColor1
 * @prop {string}  wheelColor2
 */
export function WhyGurujiSection({
    eyebrow = "About Guruji",
    heading = "35 Years of",
    headingShimmer = "Vedic Mastery",
    sub = "Not every astrologer is the same. Guruji combines classical Parashari Jyotish with deep intuitive reading — trained under a lineage that stretches back four generations.",
    credentials = [
        { icon: "📅", stat: "35+", label: "Years of practice" },
        { icon: "🌍", stat: "5,000+", label: "Global clients" },
        { icon: "⭐", stat: "4.9", label: "Average rating" },
        { icon: "🎓", stat: "4th Gen", label: "Vedic lineage" },
    ],
    trustPoints = [
        { icon: "✅", text: "No false promises — only probability and timing" },
        { icon: "✅", text: "Consultation in Hindi, English, or Tamil" },
        { icon: "✅", text: "Available 7 days — including evenings" },
        { icon: "✅", text: "WhatsApp-first — quick, private, no travel needed" },
    ],
    gurujiEmoji = "🧘",
    ctaLabel = "Speak to Guruji — Free",
    waLink = "#",
    wheelColor1 = "#ff4fa1",
    wheelColor2 = "#d946ef",
}) {
    return (
        <section
            className="relative py-24 overflow-hidden
                bg-white dark:bg-[#080318]"
            style={{
                backgroundImage: `radial-gradient(ellipse 60% 80% at 0% 50%, ${wheelColor1}10 0%, transparent 55%)`,
            }}
        >
            <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-[1fr_480px] gap-16 items-center">

                {/* Left */}
                <div>
                    <SectionEyebrow label={eyebrow} color={wheelColor1} />
                    <SectionHeading shimmer={headingShimmer} color={[wheelColor1, wheelColor2]}>
                        {heading}
                    </SectionHeading>
                    <p className="text-lg text-gray-600 dark:text-purple-200/65 leading-relaxed mb-10 max-w-lg">
                        {sub}
                    </p>

                    {/* Credential stats */}
                    <div className="grid grid-cols-2 gap-4 mb-10">
                        {credentials.map((c, i) => (
                            <GlassCard key={i} className="p-5 flex items-center gap-4">
                                <span className="text-3xl">{c.icon}</span>
                                <div>
                                    <p
                                        className="text-2xl font-bold leading-none"
                                        style={{ background: `linear-gradient(135deg,${wheelColor1},${wheelColor2})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                                    >
                                        {c.stat}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-purple-300/50 mt-0.5">{c.label}</p>
                                </div>
                            </GlassCard>
                        ))}
                    </div>

                    {/* Trust points */}
                    <ul className="flex flex-col gap-3 mb-10">
                        {trustPoints.map((tp, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-700 dark:text-purple-100/80">
                                <span style={{ color: wheelColor1 }}>{tp.icon}</span>
                                {tp.text}
                            </li>
                        ))}
                    </ul>

                    <WAButton href={waLink} color={wheelColor1}>{ctaLabel}</WAButton>
                </div>

                {/* Right — portrait placeholder */}
                <div className="flex justify-center">
                    <div className="relative w-80 h-80">
                        {/* Outer spin ring */}
                        <div
                            className="absolute inset-0 rounded-full border-[2px] border-dashed opacity-30 animate-[spinSlow_25s_linear_infinite]"
                            style={{ borderColor: wheelColor1 }}
                        />
                        {/* Glow */}
                        <div
                            className="absolute inset-6 rounded-full blur-2xl opacity-40"
                            style={{ background: `linear-gradient(135deg,${wheelColor1},${wheelColor2})` }}
                        />
                        {/* Portrait */}
                        <div
                            className="absolute inset-8 rounded-full overflow-hidden border-[3px]
                                border-black/10 dark:border-white/25 animate-[float_7s_ease-in-out_infinite]"
                            style={{ boxShadow: `0 0 50px ${wheelColor1}40` }}
                        >
                            <div
                                className="w-full h-full flex flex-col items-center justify-end pb-6
                                    bg-gradient-to-b from-[#f0e8ff] via-[#e8d8ff] to-[#d8c0ff]
                                    dark:from-[#2d0a4e] dark:via-[#1a0840] dark:to-[#0f0524]"
                            >
                                <span className="text-6xl mb-2 mt-auto pt-8">{gurujiEmoji}</span>
                                <p className="text-gray-800 dark:text-white/80 text-base font-semibold">Guruji</p>
                            </div>
                        </div>

                        {/* Floating badge */}
                        <GlassCard
                            className="absolute -bottom-4 -right-4 px-4 py-2.5"
                        >
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-[ping_1.4s_ease-in-out_infinite]" />
                                <span className="text-xs font-bold text-green-700 dark:text-green-300">Online Now</span>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ----------------------------------------------------------
   5. FaqSection
      Accordion-style FAQ — no library needed.
   ---------------------------------------------------------- */

/**
 * @prop {string}  eyebrow
 * @prop {string}  heading
 * @prop {string}  headingShimmer
 * @prop {Array}   faqs            - [{ q, a }]
 * @prop {string}  ctaLabel
 * @prop {string}  waLink
 * @prop {string}  wheelColor1
 * @prop {string}  wheelColor2
 */
export function FaqSection({
    eyebrow = "FAQ",
    heading = "Questions",
    headingShimmer = "Answered",
    faqs = [
        {
            q: "Is this a real consultation or just a cold reading?",
            a: "Guruji asks for your exact birth details — date, time, and place — and reads your individual chart. Nothing is generic.",
        },
        {
            q: "How long does a session take?",
            a: "The initial reading takes 30–45 minutes on WhatsApp call or voice message. Follow-ups are shorter.",
        },
        {
            q: "Do I need to share personal information?",
            a: "Only your birth data and the area of concern. Guruji does not need your financial records or personal documents.",
        },
        {
            q: "What if I don't know my exact birth time?",
            a: "Guruji can work with an approximate time and may use prashna kundali (question-based chart) as a cross-reference.",
        },
        {
            q: "Are the remedies expensive?",
            a: "Most remedies are mantras, fasting, or simple offerings — things you can do at home at zero cost. Guruji only recommends gemstones or puja if the chart genuinely calls for it.",
        },
        {
            q: "Is the first consultation really free?",
            a: "Yes. Guruji gives a brief overview of your chart at no charge. There is no catch and no obligation.",
        },
    ],
    ctaLabel = "Ask Your Question — Free",
    waLink = "#",
    wheelColor1 = "#ff4fa1",
    wheelColor2 = "#d946ef",
}) {
    const [open, setOpen] = useState(null);

    return (
        <section
            className="relative py-24 overflow-hidden
                bg-[#F8F4EF] dark:bg-[#0f0524]"
        >
            <div className="relative max-w-3xl mx-auto px-4">
                <div className="text-center mb-14">
                    <SectionEyebrow label={eyebrow} color={wheelColor2} />
                    <SectionHeading shimmer={headingShimmer} color={[wheelColor1, wheelColor2]} align="center">
                        {heading}
                    </SectionHeading>
                </div>

                <div className="flex flex-col gap-3">
                    {faqs.map((faq, i) => {
                        const isOpen = open === i;
                        return (
                            <GlassCard key={i}>
                                <button
                                    className="w-full flex items-start justify-between gap-4 p-6 text-left"
                                    onClick={() => setOpen(isOpen ? null : i)}
                                >
                                    <span className="font-semibold text-gray-900 dark:text-white text-sm leading-snug">
                                        {faq.q}
                                    </span>
                                    <span
                                        className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-300"
                                        style={{
                                            background: `${wheelColor1}22`,
                                            color: wheelColor1,
                                            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                                        }}
                                    >
                                        +
                                    </span>
                                </button>
                                {isOpen && (
                                    <div className="px-6 pb-6 text-sm text-gray-600 dark:text-purple-200/65 leading-relaxed border-t
                                        border-gray-200 dark:border-white/10 pt-4">
                                        {faq.a}
                                    </div>
                                )}
                            </GlassCard>
                        );
                    })}
                </div>

                <div className="text-center mt-12">
                    <WAButton href={waLink} color={wheelColor1}>{ctaLabel}</WAButton>
                </div>
            </div>
        </section>
    );
}

/* ----------------------------------------------------------
   6. CtaBanner
      Full-width closing call-to-action strip.
   ---------------------------------------------------------- */

/**
 * @prop {string}  heading
 * @prop {string}  headingShimmer
 * @prop {string}  sub
 * @prop {string}  ctaLabel
 * @prop {string}  waLink
 * @prop {string}  secondaryLabel
 * @prop {string}  secondaryHref
 * @prop {Array}   microStats      - [{ value, label }]  max 3
 * @prop {string}  wheelColor1
 * @prop {string}  wheelColor2
 */
export function CtaBanner({
    heading = "Your Turning Point",
    headingShimmer = "Starts Here",
    sub = "Thousands of UK families have found clarity, direction, and peace. Yours can too — the first step costs nothing.",
    ctaLabel = "Get Free Consultation",
    waLink = "#",
    secondaryLabel = "Read Reviews",
    secondaryHref = "#testimonials",
    microStats = [
        { value: "5,000+", label: "Lives guided" },
        { value: "4.9★", label: "Client rating" },
        { value: "Free", label: "First session" },
    ],
    wheelColor1 = "#ff4fa1",
    wheelColor2 = "#d946ef",
}) {
    return (
        <section
            className="relative py-24 overflow-hidden
                bg-white dark:bg-[#080318]"
        >
            {/* Full-bleed gradient panel */}
            <div
                className="absolute inset-x-0 top-12 bottom-12 mx-4 lg:mx-16 rounded-3xl overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, ${wheelColor1}ee 0%, ${wheelColor2}ee 100%)`,
                }}
            >
                {/* Texture blobs inside the panel */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[80px] opacity-30 bg-white" />
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full blur-[60px] opacity-20 bg-white" />
            </div>

            <div className="relative max-w-5xl mx-auto px-8 lg:px-16 py-12 text-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-4">
                    {heading}{" "}
                    <span className="underline decoration-white/40 decoration-wavy underline-offset-4">
                        {headingShimmer}
                    </span>
                </h2>
                <p className="text-white/75 text-lg leading-relaxed max-w-xl mx-auto mb-10">{sub}</p>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <a
                        href={waLink}
                        className="inline-flex items-center gap-2.5 px-8 py-4 rounded-[1rem] bg-white font-bold text-base shadow-xl transition-transform duration-200 hover:scale-105"
                        style={{ color: wheelColor1 }}
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.557 4.116 1.532 5.847L.057 23.882l6.198-1.625A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.868 9.868 0 01-5.031-1.378l-.36-.214-3.732.979 1-3.643-.235-.374A9.865 9.865 0 012.106 12C2.106 6.578 6.578 2.106 12 2.106S21.894 6.578 21.894 12 17.422 21.894 12 21.894z" />
                        </svg>
                        {ctaLabel}
                    </a>
                    <a
                        href={secondaryHref}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-[1rem] border-2 border-white/50 text-white font-bold text-base hover:bg-white/10 transition-all duration-200"
                    >
                        {secondaryLabel}
                    </a>
                </div>

                {/* Micro stats */}
                <div className="flex flex-wrap justify-center gap-8">
                    {microStats.map((s, i) => (
                        <div key={i} className="text-center">
                            <p className="text-2xl font-bold text-white">{s.value}</p>
                            <p className="text-white/60 text-xs mt-0.5 uppercase tracking-wide">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ----------------------------------------------------------
   WAButton — local stub if not globally available.
   Replace with your actual <WAButton> import.
---------------------------------------------------------- */
function WAButton({ href = "#", children, color = "#ff4fa1" }) {
    return (
        <a
            href={href}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-[1rem] font-bold text-base text-white shadow-lg transition-transform duration-200 hover:scale-105"
            style={{ background: `linear-gradient(135deg,${color},${color}cc)` }}
        >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.557 4.116 1.532 5.847L.057 23.882l6.198-1.625A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.868 9.868 0 01-5.031-1.378l-.36-.214-3.732.979 1-3.643-.235-.374A9.865 9.865 0 012.106 12C2.106 6.578 6.578 2.106 12 2.106S21.894 6.578 21.894 12 17.422 21.894 12 21.894z" />
            </svg>
            {children}
        </a>
    );
}

/* ----------------------------------------------------------
   Example page assembly — shows how to wire it all together.
   ---------------------------------------------------------- */
export default function ExamplePage() {
    const theme = {
        wheelColor1: "#ff4fa1",
        wheelColor2: "#d946ef",
        waLink: "https://wa.me/447000000000",
    };

    return (
        <>
            {/* <PageHero {...theme} ... /> */}
            <HowGurujiSolvesIt {...theme} />
            <ProblemsSolvedSection {...theme} />
            <TestimonialsSection {...theme} />
            <WhyGurujiSection {...theme} />
            <FaqSection {...theme} />
            <CtaBanner {...theme} />
        </>
    );
}