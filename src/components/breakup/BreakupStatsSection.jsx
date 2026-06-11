"use client";
import { BREAKUP_STATS } from "@/lib/data";
import { useInView, useCountUp } from "@/lib/hooks";

function StatCard({ value, suffix, label, active }) {
  const n = useCountUp(value, active, 1800);
  return (
    <div className="text-center px-4">
      <p className="display text-5xl md:text-6xl font-bold" style={{
        background: "linear-gradient(135deg,#ff4fa1,#fbbf24)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
      }}>
        {n.toLocaleString()}{suffix}
      </p>
      <p className="text-sm text-purple-300/50 mt-2 font-medium uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
}

export default function BreakupStatsSection() {
  const [ref, visible] = useInView(0.3);
  return (
    <div className="py-14 border-t border-white/6" style={{
      background: "linear-gradient(135deg, rgba(255,79,161,0.14) 0%, rgba(147,51,234,0.16) 50%, rgba(255,79,161,0.10) 100%)",
    }}>
      <div ref={ref} className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/8">
        {BREAKUP_STATS.map((s, i) => (
          <StatCard key={i} {...s} active={visible} />
        ))}
      </div>
    </div>
  );
}
