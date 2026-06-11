import { SectionEyebrow, SectionHeading, GlassCard } from "./ui";

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
