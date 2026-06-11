
/** Thin eyebrow pill — same as hero category pill */
export function SectionEyebrow({ label, color }) {
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
export function SectionHeading({ children, shimmer, color, align = "left" }) {
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
export function GlassCard({ children, className = "", style = {} }) {
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
export function StepConnector({ color }) {
    return (
        <div
            className="absolute left-6 top-14 bottom-0 w-px"
            style={{ background: `linear-gradient(to bottom, ${color}60, transparent)` }}
        />
    );
}

export function WAButton({ href = "#", children, color = "#ff4fa1" }) {
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