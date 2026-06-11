import React from 'react'
import { Section, SectionBadge, SectionHeading } from "../ui"
import { SERVICES } from "@/lib/data"

const ServicesSection = () => {
    return (
        <Section id="services" className="bg-gray-50 dark:bg-white/2 border-y border-gray-200/50 dark:border-white/5">
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
                            className={`group relative rounded-3xl p-7 border border-gray-200/50 dark:border-white/10 card-hover cursor-pointer overflow-hidden bg-linear-to-br ${s.color} hover:border-pink-400/40 transition-all duration-300 block`}
                        >
                            {/* Hover glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-pink-500/10 to-purple-500/10 rounded-3xl" />
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
        </Section>

    )
}

export default ServicesSection