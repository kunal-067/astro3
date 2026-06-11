import {SectionEyebrow, SectionHeading, WAButton, GlassCard, StepConnector} from "@/components/pages/ui"
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
                className="absolute top-0 right-0 w-125] h-125] rounded-full blur-[120px] opacity-20 pointer-events-none"
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
