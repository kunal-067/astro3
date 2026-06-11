import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
// import { ThemeProvider } from "./providers/theame-provider";

export default function RootLayout({
  children,
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >

      {/* Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        :root { --font-display: 'Cormorant Garamond', serif; --font-body: 'DM Sans', sans-serif; }
        * { font-family: var(--font-body); }
        h1,h2,.display { font-family: var(--font-display); }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 40s linear infinite; }
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        @keyframes glow-pulse { 0%,100% { opacity: 0.4; } 50% { opacity: 0.8; } }
        .animate-glow { animation: glow-pulse 3s ease-in-out infinite; }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        .text-shimmer {
          background: linear-gradient(90deg, #ff4fa1 0%, #fbbf24 50%, #d946ef 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .glass { background: rgba(255,255,255,0.04); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
        .glass-light { background: rgba(255,255,255,0.7); backdrop-filter: blur(20px); }
        .dark .glass-light { background: rgba(255,255,255,0.04); }
        .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card-hover:hover { transform: translateY(-6px); }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #0f0524; } ::-webkit-scrollbar-thumb { background: #ff4fa1; border-radius: 2px; }
        .hero-bg-light { background: radial-gradient(ellipse at 70% 50%, rgba(255,79,161,0.08) 0%, transparent 60%), radial-gradient(ellipse at 30% 80%, rgba(217,70,239,0.06) 0%, transparent 50%), #f9f5ff; }
      `}</style>

      <body>
        {/* <ThemeProvider> */}
        {/* Progress */}
        <ScrollProgress />

        {/* ── NAV ── */}
        <Navbar />
        <main>

        {children}
        </main>

        {/* ── FOOTER ── */}
        <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}