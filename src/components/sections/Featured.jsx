import { Sparkles } from "lucide-react";

const logos = [
  { name: "DNA", svg: "/logos/dna.webp" },
  { name: "Aaj Tak", svg: "/logos/aajtak.webp" },
  { name: "Netflix", svg: "/logos/netflix.webp" },
  { name: "Colors", svg: "/logos/colors.webp" },
  { name: "MensXP", svg: "/logos/menspx.webp" },
  { name: "WSJ", svg: "/logos/wsj.webp" },
];

export function FeaturedOn() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-center gap-3">
          <Sparkles className="h-4 w-4 text-violet-500" />
          <h2
            className="text-2xl font-bold text-slate-900 dark:text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Featured In
          </h2>
          <Sparkles className="h-4 w-4 text-violet-500" />
        </div>

        <div className="rounded-3xl border border-orange-200/50 bg-white/60 p-5 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03]">
          <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex h-20 items-center justify-center rounded-2xl transition-all duration-300 hover:bg-black/[0.03] dark:hover:bg-white/[0.03]"
              >
                <img
                  src={logo.svg}
                  alt={logo.name}
                  className="max-h-10 w-auto object-contain opacity-70 transition-all duration-300 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}