'use client'
import { cn } from "@/lib/utils";
import { SectionBadge, SectionHeading } from "../ui";

const REVIEWS = [
    { name: "Priya S.", city: "London", img: "./astrologer.png" },
    { name: "Anita K.", city: "Birmingham", img: "./astrologer.png" },
    { name: "Sunita R.", city: "Manchester", img: "./astrologer.png" },
    { name: "Meera P.", city: "Leicester", img: "./astrologer.png" }
]
// ── Marquee Reviews ───────────────────────────────────────────────────────────

export function MarqueeReviews({ onCardClick }) {
    const doubled = [...REVIEWS, ...REVIEWS];
    return (
        <div className="relative overflow-hidden py-4 group">
            <div className="flex gap-4 w-max animate-marquee group-hover:[animation-play-state:paused]">
                {doubled.map((r, i) => (
                    <button
                        key={i}
                        onClick={() => onCardClick(r)}
                        className={cn(`shrink-0 w-72 rounded-2xl overflow-hidden text-left cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1
              bg-white/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10
              hover:border-pink-400/40 hover:bg-white/10 h-45`)}
                    >


                        <div className="max-h-full overflow-hidden rounded-2xl">
                            <img src={r.img} alt="Image" className="w-full h-full" />
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
const TrustBar = () => {
    return (
        <div id="testimonials" className="hidden py-16 bg-gray-50 dark:bg-white/2 border-y border-gray-200/50 dark:border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-10">
                    <SectionBadge>Real Results</SectionBadge>
                    <SectionHeading title="What Our Clients Say" subtitle="Hundreds of real WhatsApp reviews from clients across the UK." />
                </div>
                <MarqueeReviews onCardClick={r => setReviewModal(r)} />
                <p className="text-center text-xs text-gray-400 mt-6">Hover to pause · Click any card to read full review</p>
            </div>
        </div>
    )
}
export default TrustBar