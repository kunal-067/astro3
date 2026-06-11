
// ── Layout ────────────────────────────────────────────────────
import Navbar               from "@/components/shared/Navbar";
import Footer               from "@/components/shared/Footer";
import { ScrollProgress} from "@/components/ui/ScrollProgress";
import { FloatingWA } from "@/components/ui";

// ── Breakup-specific sections ─────────────────────────────────
import BreakupHero          from "@/components/breakup/BreakupHero";
import PainPointsSection    from "@/components/breakup/PainPointsSection";
import ReversalSignsSection from "@/components/breakup/ReversalSignsSection";
import HealingProcessSection from "@/components/breakup/HealingProcessSection";
import BreakupStatsSection  from "@/components/breakup/BreakupStatsSection";
import BreakupReviewsSection from "@/components/breakup/BreakupReviewsSection";
import AcharyaJiBreakupProfile from "@/components/breakup/AcharyaJiBreakupProfile";
import BreakupFAQSection    from "@/components/breakup/BreakupFAQSection";
import {
  RelatedServicesSection,
  BreakupFinalCTA,
} from "@/components/breakup/BreakupCTASections";

/* ── SEO metadata ─────────────────────────────────────────── */
export const metadata = {
  title: "Breakup Problem Solution — Reunite With Your Ex | Acharya Ji",
  description:
    "Acharya Ji has healed 3,200+ breakups across the UK. Get your ex back in 7–21 days through ancient Vedic remedies. Free WhatsApp consultation — 100% private.",
  keywords: [
    "breakup solution UK",
    "get ex back London",
    "breakup healer UK",
    "how to get ex back",
    "ex back spell UK",
    "breakup problem Acharya Ji",
    "vedic breakup remedy UK",
  ],
  openGraph: {
    title: "Breakup Solution — Get Your Ex Back | Acharya Ji",
    description:
      "3,200+ couples reunited. Average 18-day reunion. Free consultation on WhatsApp.",
    type: "website",
    locale: "en_GB",
  },
};

/* ── Page ─────────────────────────────────────────────────── */
export default function BreakupProblemPage() {
  return (
    <>
      {/* Sticky UI */}
      <ScrollProgress />
      <FloatingWA />

      {/* Navigation */}
      <Navbar />

      <main>
        {/* 1. Hero — emotional headline + broken heart visual */}
        <BreakupHero />

        {/* 2. Pain points — emotional empathy */}
        <PainPointsSection />

        {/* 3. Signs your breakup can be reversed */}
        <ReversalSignsSection />

        {/* 4. How Acharya Ji heals breakups — 3-phase process */}
        <HealingProcessSection />

        {/* Stats counter */}
        <BreakupStatsSection />

        {/* 5. Acharya Ji's authority for breakup specifically */}
        <AcharyaJiBreakupProfile />

        {/* 6. Real client reviews with reunion day badge */}
        <BreakupReviewsSection />

        {/* 7. FAQ accordion */}
        <BreakupFAQSection />

        {/* 8. Related services */}
        <RelatedServicesSection />

        {/* 9. Final conversion CTA */}
        <BreakupFinalCTA />
      </main>

      <Footer />
    </>
  );
}