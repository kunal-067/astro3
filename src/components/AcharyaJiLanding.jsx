import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useInView } from "framer-motion";

/* ─── GOOGLE FONTS ─── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0f0524; color: #fff; overflow-x: hidden; }
    html { scroll-behavior: smooth; }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #0f0524; }
    ::-webkit-scrollbar-thumb { background: linear-gradient(#ff4fa1,#d946ef); border-radius: 2px; }
    .font-display { font-family: 'Cormorant Garamond', serif; }
    .font-body { font-family: 'DM Sans', sans-serif; }
    @keyframes float { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-20px)} }
    @keyframes pulse-glow { 0%,100%{box-shadow:0 0 20px rgba(255,79,161,0.3)} 50%{box-shadow:0 0 60px rgba(255,79,161,0.8),0 0 100px rgba(217,70,239,0.4)} }
    @keyframes shimmer { 0%{background-position:200% center} 100%{background-position:-200% center} }
    @keyframes rotate-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
    @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
    .animate-shimmer { background: linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent); background-size:200% 100%; animation: shimmer 2s infinite; }
    .marquee-track { display:flex; animation: marquee 30s linear infinite; }
    .marquee-track:hover { animation-play-state: paused; }
    .glass { background: rgba(255,255,255,0.05); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1); }
    .glass-pink { background: rgba(255,79,161,0.08); backdrop-filter: blur(20px); border: 1px solid rgba(255,79,161,0.2); }
    .text-gradient { background: linear-gradient(135deg, #ff4fa1, #d946ef, #fbbf24); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .text-gradient-shimmer { background: linear-gradient(90deg, #ff4fa1, #fbbf24, #d946ef, #ff4fa1); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: shimmer 3s linear infinite; }
    .btn-primary { background: linear-gradient(135deg, #ff4fa1, #d946ef); border: none; cursor: pointer; position: relative; overflow: hidden; transition: transform 0.2s, box-shadow 0.2s; }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 20px 60px rgba(255,79,161,0.5); }
    .btn-primary::after { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,0.2),transparent); opacity:0; transition:opacity 0.2s; }
    .btn-primary:hover::after { opacity:1; }
    .card-hover { transition: transform 0.3s, box-shadow 0.3s; }
    .card-hover:hover { transform: translateY(-8px); box-shadow: 0 30px 80px rgba(255,79,161,0.25); }
    .star-particle { position: absolute; border-radius: 50%; background: rgba(251,191,36,0.8); pointer-events: none; }
    .orb { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; }
  `}</style>
);

/* ─── PARTICLES ─── */
const Particles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 8,
  }));
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="star-particle"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -30, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

/* ─── SCROLL PROGRESS ─── */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      style={{
        position: "fixed", top: 0, left: 0, right: 0, height: 3, zIndex: 9999,
        background: "linear-gradient(90deg,#ff4fa1,#d946ef,#fbbf24)",
        transformOrigin: "0%", scaleX,
      }}
    />
  );
};

/* ─── WHATSAPP FLOAT ─── */
const WhatsAppFloat = () => (
  <motion.a
    href="https://wa.me/447700000000"
    target="_blank"
    rel="noopener noreferrer"
    className="animate-pulse-glow"
    style={{
      position: "fixed", bottom: 32, right: 32, zIndex: 999,
      width: 64, height: 64, borderRadius: "50%",
      background: "linear-gradient(135deg,#25D366,#128C7E)",
      display: "flex", alignItems: "center", justifyContent: "center",
      cursor: "pointer", textDecoration: "none",
    }}
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.95 }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 2, type: "spring" }}
  >
    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </motion.a>
);

/* ─── NAVBAR ─── */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "16px 40px",
        background: scrolled ? "rgba(15,5,36,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,79,161,0.15)" : "none",
        transition: "all 0.4s ease",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}
      className="font-body"
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg,#ff4fa1,#d946ef)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>✦</div>
        <span className="font-display" style={{ fontSize: 22, fontWeight: 600, letterSpacing: "0.05em", color: "#fff" }}>Acharya Ji</span>
      </div>
      <div style={{ display: "flex", gap: 32, fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.7)" }}>
        {["Services", "About", "Reviews", "Contact"].map(l => (
          <span key={l} style={{ cursor: "pointer", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "#ff4fa1"}
            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.7)"}
          >{l}</span>
        ))}
      </div>
      <a href="https://wa.me/447700000000" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
        <button className="btn-primary font-body" style={{ padding: "10px 24px", borderRadius: 40, fontSize: 14, fontWeight: 600, color: "#fff" }}>
          Chat on WhatsApp
        </button>
      </a>
    </motion.nav>
  );
};

/* ─── HERO ─── */
const Hero = () => {
  const trusts = [
    { icon: "⭐", label: "5,000+ Clients", sub: "5-Star Rated" },
    { icon: "🏅", label: "25+ Years", sub: "Experience" },
    { icon: "🔒", label: "100% Private", sub: "Consultation" },
    { icon: "📱", label: "WhatsApp", sub: "Available Now" },
  ];
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", background: "#0f0524", paddingTop: 80 }}>
      {/* BG Orbs */}
      <div className="orb" style={{ width: 600, height: 600, background: "rgba(255,79,161,0.15)", top: -200, left: -200 }} />
      <div className="orb" style={{ width: 500, height: 500, background: "rgba(217,70,239,0.12)", bottom: -100, right: -100 }} />
      <div className="orb" style={{ width: 300, height: 300, background: "rgba(251,191,36,0.08)", top: "40%", left: "40%" }} />
      <Particles />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", position: "relative", zIndex: 2 }}>
        {/* LEFT */}
        <div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="glass font-body" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 20px", borderRadius: 40, fontSize: 13, fontWeight: 500, color: "#fbbf24", marginBottom: 32 }}>
              <span>✦</span> Trusted by 5,000+ UK Families
            </div>
          </motion.div>

          <motion.h1 className="font-display" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontSize: "clamp(36px,4.5vw,68px)", lineHeight: 1.1, fontWeight: 600, marginBottom: 24, letterSpacing: "-0.01em" }}>
            London's Most{" "}
            <span className="text-gradient-shimmer">Trusted Love</span>{" "}
            <br />& Relationship{" "}
            <span style={{ fontStyle: "italic", color: "#fbbf24" }}>Healer</span>
          </motion.h1>

          <motion.p className="font-body" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", marginBottom: 40, maxWidth: 520 }}>
            Acharya Ji has helped thousands rebuild relationships, resolve marriage problems, and find love again across the UK.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            style={{ display: "flex", gap: 16, marginBottom: 48, flexWrap: "wrap" }}>
            <a href="https://wa.me/447700000000" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <button className="btn-primary font-body" style={{ padding: "16px 36px", borderRadius: 50, fontSize: 16, fontWeight: 600, color: "#fff", display: "flex", alignItems: "center", gap: 10 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </button>
            </a>
            <button className="font-body glass" style={{ padding: "16px 36px", borderRadius: 50, fontSize: 16, fontWeight: 600, color: "#fff", cursor: "pointer", transition: "all 0.3s" }}
              onMouseEnter={e => { e.target.style.background = "rgba(255,79,161,0.15)"; e.target.style.borderColor = "rgba(255,79,161,0.4)"; }}
              onMouseLeave={e => { e.target.style.background = "rgba(255,255,255,0.05)"; e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}>
              Get Consultation
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {trusts.map((t, i) => (
              <motion.div key={i} className="glass" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + i * 0.1 }}
                style={{ padding: "14px 18px", borderRadius: 16, display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 24 }}>{t.icon}</span>
                <div>
                  <div className="font-body" style={{ fontWeight: 700, fontSize: 14, color: "#fff" }}>{t.label}</div>
                  <div className="font-body" style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{t.sub}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT - Acharya Ji Image Placeholder */}
        <motion.div initial={{ opacity: 0, scale: 0.9, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }}
          style={{ position: "relative", display: "flex", justifyContent: "center" }}>
          {/* Glow rings */}
          <div style={{ position: "absolute", width: 480, height: 480, borderRadius: "50%", background: "conic-gradient(from 0deg,#ff4fa1,#d946ef,#fbbf24,#ff4fa1)", opacity: 0.15, filter: "blur(40px)" }} className="animate-float" />
          <div style={{ position: "absolute", width: 420, height: 420, borderRadius: "50%", border: "1px solid rgba(255,79,161,0.2)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
          <div style={{ position: "absolute", width: 360, height: 360, borderRadius: "50%", border: "1px solid rgba(217,70,239,0.15)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
            className="animate-float" />

          {/* Image container */}
          <div style={{ position: "relative", width: 380, height: 480, borderRadius: 32, overflow: "hidden",
            background: "linear-gradient(160deg,rgba(255,79,161,0.15),rgba(217,70,239,0.1),rgba(15,5,36,0.9))",
            border: "1px solid rgba(255,79,161,0.25)", boxShadow: "0 40px 120px rgba(255,79,161,0.3)" }}>
            {/* Decorative gradient overlay */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(15,5,36,0.8) 0%,transparent 60%)", zIndex: 2 }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
              {/* Avatar placeholder */}
              <div style={{ width: 180, height: 180, borderRadius: "50%", background: "linear-gradient(135deg,#ff4fa1,#d946ef)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 72, marginBottom: 20, boxShadow: "0 0 60px rgba(255,79,161,0.5)" }}>🧘</div>
              <div className="font-display" style={{ fontSize: 28, fontWeight: 600, textAlign: "center", color: "#fff" }}>Acharya Ji</div>
              <div className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", textAlign: "center", marginTop: 4 }}>Vedic Astrology & Healing</div>
            </div>
            {/* Decorative corner accent */}
            <div style={{ position: "absolute", top: 20, right: 20, width: 50, height: 50, borderTop: "2px solid #ff4fa1", borderRight: "2px solid #ff4fa1", borderRadius: "0 8px 0 0", zIndex: 3 }} />
            <div style={{ position: "absolute", bottom: 20, left: 20, width: 50, height: 50, borderBottom: "2px solid #fbbf24", borderLeft: "2px solid #fbbf24", borderRadius: "0 0 0 8px", zIndex: 3 }} />
          </div>

          {/* Floating badge */}
          <motion.div className="glass-pink font-body" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}
            style={{ position: "absolute", top: 40, right: -20, padding: "12px 18px", borderRadius: 20, fontSize: 13, fontWeight: 600, color: "#ff4fa1", whiteSpace: "nowrap" }}>
            ✦ 25+ Years Expertise
          </motion.div>
          <motion.div className="glass font-body" animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            style={{ position: "absolute", bottom: 80, left: -30, padding: "12px 18px", borderRadius: 20, fontSize: 13, fontWeight: 500, color: "#fbbf24" }}>
            ⭐⭐⭐⭐⭐ 5,000+ Clients
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── MARQUEE REVIEWS ─── */
const reviews = [
  { name: "Priya S.", city: "London", text: "Acharya Ji helped me get my husband back within 2 weeks. I am forever grateful.", rating: 5 },
  { name: "Anjali M.", city: "Birmingham", text: "My marriage was on the verge of divorce. Now we are happily together again.", rating: 5 },
  { name: "Ritu K.", city: "Manchester", text: "100% genuine. My ex came back and we're getting married next month!", rating: 5 },
  { name: "Sunita R.", city: "Leicester", text: "I had lost all hope. Acharya Ji restored my relationship in just 3 weeks.", rating: 5 },
  { name: "Meena P.", city: "Leeds", text: "Very private consultation. He solved my marriage problem completely.", rating: 5 },
  { name: "Kavita T.", city: "Bristol", text: "Unbelievably effective. My love life has completely transformed.", rating: 5 },
  { name: "Deepa A.", city: "Glasgow", text: "I tried many astrologers but Acharya Ji is the only one who truly helped.", rating: 5 },
  { name: "Pooja V.", city: "Coventry", text: "Fast results and very caring. Highly recommend to anyone with love problems.", rating: 5 },
];

const ReviewCard = ({ r, onClick }) => (
  <div className="glass card-hover" onClick={() => onClick(r)} style={{ minWidth: 280, maxWidth: 280, padding: 24, borderRadius: 20, cursor: "pointer", margin: "0 12px", flexShrink: 0 }}>
    <div style={{ display: "flex", marginBottom: 12 }}>
      {Array.from({ length: r.rating }, (_, i) => <span key={i} style={{ color: "#fbbf24", fontSize: 16 }}>★</span>)}
    </div>
    <p className="font-body" style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.8)", marginBottom: 16 }}>"{r.text}"</p>
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#ff4fa1,#d946ef)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700 }}>
        {r.name[0]}
      </div>
      <div>
        <div className="font-body" style={{ fontWeight: 600, fontSize: 13, color: "#fff" }}>{r.name}</div>
        <div className="font-body" style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{r.city}, UK</div>
      </div>
    </div>
  </div>
);

const TrustSection = () => {
  const [modal, setModal] = useState(null);
  const doubled = [...reviews, ...reviews];
  return (
    <section style={{ padding: "100px 0", background: "linear-gradient(180deg,#0f0524,#150832)", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", marginBottom: 60, textAlign: "center" }}>
        <FadeIn>
          <div className="font-body" style={{ color: "#ff4fa1", fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Social Proof</div>
          <h2 className="font-display" style={{ fontSize: "clamp(32px,3.5vw,52px)", fontWeight: 600 }}>What Our Clients Say</h2>
          <p className="font-body" style={{ color: "rgba(255,255,255,0.55)", marginTop: 12, fontSize: 16 }}>Real WhatsApp reviews from real UK clients</p>
        </FadeIn>
      </div>

      <div style={{ overflow: "hidden", padding: "20px 0" }}>
        <div className="marquee-track">
          {doubled.map((r, i) => <ReviewCard key={i} r={r} onClick={setModal} />)}
        </div>
      </div>

      <AnimatePresence>
        {modal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
            style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="glass" style={{ maxWidth: 460, width: "100%", padding: 40, borderRadius: 28, position: "relative" }}>
              <button onClick={() => setModal(null)} style={{ position: "absolute", top: 16, right: 16, background: "rgba(255,79,161,0.2)", border: "none", borderRadius: "50%", width: 36, height: 36, cursor: "pointer", color: "#fff", fontSize: 18 }}>×</button>
              <div style={{ display: "flex", marginBottom: 20 }}>
                {Array.from({ length: modal.rating }, (_, i) => <span key={i} style={{ color: "#fbbf24", fontSize: 24 }}>★</span>)}
              </div>
              <p className="font-body" style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.9)", marginBottom: 24 }}>"{modal.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg,#ff4fa1,#d946ef)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 700 }}>{modal.name[0]}</div>
                <div>
                  <div className="font-body" style={{ fontWeight: 700, fontSize: 16, color: "#fff" }}>{modal.name}</div>
                  <div className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>{modal.city}, United Kingdom</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

/* ─── FADE IN WRAPPER ─── */
const FadeIn = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>
      {children}
    </motion.div>
  );
};

/* ─── VIDEO TESTIMONIALS ─── */
const videos = [
  { id: "dQw4w9WgXcQ", title: "How I got my husband back – Priya, London" },
  { id: "dQw4w9WgXcQ", title: "Marriage saved in 3 weeks – Anjali, Birmingham" },
  { id: "dQw4w9WgXcQ", title: "Breakup healed – Real story from Manchester" },
  { id: "dQw4w9WgXcQ", title: "Love spell guidance that changed my life – Leeds" },
];

const VideoSection = () => {
  const [active, setActive] = useState(0);
  const [modal, setModal] = useState(null);
  return (
    <section style={{ padding: "100px 0", background: "#0f0524", position: "relative", overflow: "hidden" }}>
      <div className="orb" style={{ width: 400, height: 400, background: "rgba(217,70,239,0.1)", top: 0, right: 0 }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 2 }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="font-body" style={{ color: "#d946ef", fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Video Testimonials</div>
            <h2 className="font-display" style={{ fontSize: "clamp(32px,3.5vw,52px)", fontWeight: 600 }}>Hear Their Stories</h2>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24 }}>
          {videos.map((v, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="glass card-hover" onClick={() => setModal(v)}
                style={{ borderRadius: 20, overflow: "hidden", cursor: "pointer" }}>
                <div style={{ position: "relative", paddingBottom: "56.25%", background: `linear-gradient(135deg,rgba(255,79,161,0.15),rgba(217,70,239,0.1))` }}>
                  <img src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`} alt={v.title}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <motion.div whileHover={{ scale: 1.15 }} style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(255,79,161,0.9)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 30px rgba(255,79,161,0.5)" }}>
                      <div style={{ borderLeft: "20px solid #fff", borderTop: "12px solid transparent", borderBottom: "12px solid transparent", marginLeft: 5 }} />
                    </motion.div>
                  </div>
                </div>
                <div style={{ padding: "18px 20px" }}>
                  <p className="font-body" style={{ fontSize: 14, lineHeight: 1.5, fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>{v.title}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {modal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
            style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.9)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
            <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              style={{ maxWidth: 800, width: "100%", borderRadius: 20, overflow: "hidden", position: "relative" }}>
              <button onClick={() => setModal(null)} style={{ position: "absolute", top: -48, right: 0, background: "transparent", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "50%", width: 36, height: 36, cursor: "pointer", color: "#fff", fontSize: 18, zIndex: 2 }}>×</button>
              <div style={{ paddingBottom: "56.25%", position: "relative" }}>
                <iframe src={`https://www.youtube.com/embed/${modal.id}?autoplay=1`} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }} allow="autoplay" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

/* ─── SERVICES ─── */
const services = [
  { icon: "❤️", title: "Love Back", desc: "Reunite with your lost love through ancient Vedic remedies and spiritual guidance.", route: "/love-back", color: "#ff4fa1" },
  { icon: "💔", title: "Breakup Problems", desc: "Heal the pain of separation and restore your relationship with powerful solutions.", route: "/breakup-problem", color: "#d946ef" },
  { icon: "👨‍👩‍👧", title: "Relationship Issues", desc: "Resolve conflicts, misunderstandings, and emotional distance in your relationship.", route: "/relationship-problems", color: "#a855f7" },
  { icon: "⚖️", title: "Divorce Problems", desc: "Stop divorce proceedings and save your marriage through spiritual intervention.", route: "/divorce-problem", color: "#ec4899" },
  { icon: "✨", title: "Love Spell Guidance", desc: "Sacred Vedic techniques to attract and bind the love you deserve in your life.", route: "/love-spell", color: "#fbbf24" },
  { icon: "💍", title: "Marriage Problems", desc: "Overcome obstacles, family disputes, and compatibility issues for a happy marriage.", route: "/marriage-problem", color: "#f97316" },
];

const ServicesSection = () => (
  <section style={{ padding: "100px 0", background: "linear-gradient(180deg,#150832,#0f0524)", position: "relative", overflow: "hidden" }}>
    <div className="orb" style={{ width: 500, height: 500, background: "rgba(255,79,161,0.08)", bottom: 0, left: "20%" }} />
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 2 }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 70 }}>
          <div className="font-body" style={{ color: "#ff4fa1", fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>How I Can Help</div>
          <h2 className="font-display" style={{ fontSize: "clamp(32px,3.5vw,52px)", fontWeight: 600, marginBottom: 16 }}>Problems We <span className="text-gradient">Solve</span></h2>
          <p className="font-body" style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>Every problem has a spiritual solution. Acharya Ji has resolved thousands of cases across the UK.</p>
        </div>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
        {services.map((s, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <motion.div className="glass card-hover" whileHover={{ borderColor: `${s.color}44` }}
              style={{ padding: 32, borderRadius: 24, cursor: "pointer", position: "relative", overflow: "hidden", height: "100%" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${s.color},transparent)`, borderRadius: "24px 24px 0 0" }} />
              <div style={{ width: 64, height: 64, borderRadius: 20, background: `${s.color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, marginBottom: 20, border: `1px solid ${s.color}30` }}>
                {s.icon}
              </div>
              <h3 className="font-display" style={{ fontSize: 22, fontWeight: 600, marginBottom: 12, color: "#fff" }}>{s.title}</h3>
              <p className="font-body" style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", marginBottom: 24 }}>{s.desc}</p>
              <div className="font-body" style={{ color: s.color, fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                Learn More <span>→</span>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─── ABOUT ─── */
const AboutSection = () => {
  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "5K+", label: "Happy Clients" },
    { value: "98%", label: "Success Rate" },
    { value: "50+", label: "Countries Served" },
  ];
  const timeline = [
    { year: "1999", event: "Began Vedic astrology studies in India" },
    { year: "2005", event: "Relocated to UK, started UK practice" },
    { year: "2012", event: "Featured in UK Asian media" },
    { year: "2018", event: "Reached 3,000+ successful cases" },
    { year: "2024", event: "5,000+ UK families helped" },
  ];
  return (
    <section style={{ padding: "100px 0", background: "#0f0524", position: "relative", overflow: "hidden" }}>
      <div className="orb" style={{ width: 600, height: 600, background: "rgba(217,70,239,0.08)", top: 0, left: -200 }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", position: "relative", zIndex: 2 }}>
        {/* Image Side */}
        <FadeIn>
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: 28, overflow: "hidden", background: "linear-gradient(160deg,rgba(255,79,161,0.15),rgba(217,70,239,0.1))", border: "1px solid rgba(255,79,161,0.2)", padding: 40, textAlign: "center", boxShadow: "0 40px 120px rgba(255,79,161,0.15)" }}>
              <div style={{ width: 160, height: 160, borderRadius: "50%", background: "linear-gradient(135deg,#ff4fa1,#d946ef)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64, margin: "0 auto 24px", boxShadow: "0 0 60px rgba(255,79,161,0.5)" }}>🧘</div>
              <h3 className="font-display" style={{ fontSize: 28, fontWeight: 600, marginBottom: 8 }}>Acharya Ji</h3>
              <p className="font-body" style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}>Vedic Astrologer & Love Healer</p>
              <div style={{ marginTop: 24, padding: "16px 0", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                {timeline.map((t, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 14, textAlign: "left" }}>
                    <span className="font-body" style={{ color: "#ff4fa1", fontWeight: 700, fontSize: 13, minWidth: 42 }}>{t.year}</span>
                    <span className="font-body" style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.4 }}>{t.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Text Side */}
        <div>
          <FadeIn>
            <div className="font-body" style={{ color: "#ff4fa1", fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>About</div>
            <h2 className="font-display" style={{ fontSize: "clamp(30px,3vw,48px)", fontWeight: 600, lineHeight: 1.15, marginBottom: 24 }}>
              A Lifetime Dedicated to <span className="text-gradient">Healing Hearts</span>
            </h2>
            <p className="font-body" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8, fontSize: 15, marginBottom: 16 }}>
              Acharya Ji is one of the UK's most sought-after Vedic astrologers, with over 25 years of experience helping individuals and couples navigate the most challenging moments of their love lives.
            </p>
            <p className="font-body" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8, fontSize: 15, marginBottom: 40 }}>
              Trained in ancient Indian traditions, Acharya Ji combines spiritual wisdom with genuine compassion to deliver results where others have failed. His methods are rooted in Vedic shastra and are tailored to each client's unique situation.
            </p>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {stats.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="glass-pink" style={{ padding: "24px 20px", borderRadius: 20, textAlign: "center" }}>
                  <div className="font-display text-gradient" style={{ fontSize: 40, fontWeight: 700, lineHeight: 1 }}>{s.value}</div>
                  <div className="font-body" style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 6 }}>{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── TEXT TESTIMONIALS CAROUSEL ─── */
const textTestimonials = [
  { name: "Shreya B.", city: "London", rating: 5, text: "I never believed in astrology before, but Acharya Ji changed everything. My fiancé came back after 6 months of silence. I am in tears of joy." },
  { name: "Rekha G.", city: "Leicester", rating: 5, text: "My husband had filed for divorce. Within 21 days of Acharya Ji's guidance, he withdrew the case and we are now living happily together." },
  { name: "Nandita P.", city: "Manchester", rating: 5, text: "I consulted on WhatsApp and received advice the same day. Very private, very effective. My relationship is now stronger than ever." },
  { name: "Lalita S.", city: "Birmingham", rating: 5, text: "After years of marriage problems, we were on the brink of separation. Acharya Ji's remedy worked in just 2 weeks. Truly miraculous." },
  { name: "Champa D.", city: "Coventry", rating: 5, text: "My son's love marriage was being opposed by the family. Acharya Ji solved everything peacefully. We couldn't be happier." },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % textTestimonials.length), 4000);
    return () => clearInterval(t);
  }, []);
  const t = textTestimonials[current];
  return (
    <section style={{ padding: "100px 0", background: "linear-gradient(180deg,#0f0524,#150832)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 40px", textAlign: "center" }}>
        <FadeIn>
          <div className="font-body" style={{ color: "#fbbf24", fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Client Testimonials</div>
          <h2 className="font-display" style={{ fontSize: "clamp(32px,3.5vw,52px)", fontWeight: 600, marginBottom: 60 }}>Real Stories, Real <span className="text-gradient">Results</span></h2>
        </FadeIn>

        <AnimatePresence mode="wait">
          <motion.div key={current} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}
            className="glass" style={{ padding: "48px 40px", borderRadius: 28 }}>
            <div style={{ fontSize: 40, color: "#ff4fa1", marginBottom: 24, fontFamily: "Georgia, serif", lineHeight: 1 }}>"</div>
            <p className="font-display" style={{ fontSize: "clamp(18px,2vw,24px)", lineHeight: 1.6, color: "rgba(255,255,255,0.9)", fontStyle: "italic", marginBottom: 32 }}>{t.text}</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: "linear-gradient(135deg,#ff4fa1,#d946ef)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 700 }}>{t.name[0]}</div>
              <div style={{ textAlign: "left" }}>
                <div className="font-body" style={{ fontWeight: 700, color: "#fff" }}>{t.name}</div>
                <div className="font-body" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{t.city}, UK</div>
              </div>
              <div style={{ display: "flex", marginLeft: 8 }}>
                {Array.from({ length: t.rating }, (_, i) => <span key={i} style={{ color: "#fbbf24" }}>★</span>)}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 32 }}>
          {textTestimonials.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? 32 : 8, height: 8, borderRadius: 4, background: i === current ? "#ff4fa1" : "rgba(255,255,255,0.2)", border: "none", cursor: "pointer", transition: "all 0.3s" }} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── GALLERY ─── */
const galleryItems = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  color: ["#ff4fa1", "#d946ef", "#fbbf24", "#a855f7", "#ec4899", "#f97316", "#6366f1", "#14b8a6", "#e11d48"][i],
  emoji: ["🙏", "❤️", "✨", "💫", "🌸", "💍", "🌺", "💖", "🌙"][i],
  label: ["Love Ceremony", "Couple Reunion", "Blessing Ritual", "Energy Healing", "Flower Offering", "Wedding Blessing", "Puja Ceremony", "Heart Healing", "Moon Ritual"][i],
}));

const GallerySection = () => {
  const [modal, setModal] = useState(null);
  return (
    <section style={{ padding: "100px 0", background: "#0f0524" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="font-body" style={{ color: "#ff4fa1", fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Gallery</div>
            <h2 className="font-display" style={{ fontSize: "clamp(32px,3.5vw,52px)", fontWeight: 600 }}>Sacred <span className="text-gradient">Journey</span></h2>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gridTemplateRows: "auto", gap: 16 }}>
          {galleryItems.map((g, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <motion.div whileHover={{ scale: 1.02 }} onClick={() => setModal(g)}
                style={{ borderRadius: 20, overflow: "hidden", cursor: "pointer", gridRow: i === 0 || i === 4 ? "span 2" : "span 1",
                  background: `linear-gradient(135deg,${g.color}20,${g.color}08)`, border: `1px solid ${g.color}22`,
                  minHeight: i === 0 || i === 4 ? 320 : 160, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24 }}>
                <div style={{ fontSize: i === 0 || i === 4 ? 56 : 36, marginBottom: 12 }}>{g.emoji}</div>
                <div className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", textAlign: "center" }}>{g.label}</div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {modal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
            style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.9)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
              onClick={e => e.stopPropagation()}
              className="glass" style={{ padding: 60, borderRadius: 28, textAlign: "center", maxWidth: 400, position: "relative" }}>
              <button onClick={() => setModal(null)} style={{ position: "absolute", top: 16, right: 16, background: "rgba(255,79,161,0.2)", border: "none", borderRadius: "50%", width: 36, height: 36, cursor: "pointer", color: "#fff", fontSize: 18 }}>×</button>
              <div style={{ fontSize: 80, marginBottom: 20 }}>{modal.emoji}</div>
              <div className="font-display" style={{ fontSize: 24, fontWeight: 600, marginBottom: 8 }}>{modal.label}</div>
              <div className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>Sacred ceremony by Acharya Ji</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

/* ─── FAQ ─── */
const faqs = [
  { q: "How can Acharya Ji help me get my ex back?", a: "Acharya Ji uses ancient Vedic techniques, mantras, and personalized remedies based on your birth chart and situation. These methods have helped thousands rebuild broken relationships across the UK." },
  { q: "How soon can I see results?", a: "Most clients begin to see changes within 7–21 days. The exact timeline depends on the complexity of your situation. Acharya Ji will give you an honest assessment during your consultation." },
  { q: "Is my consultation completely private?", a: "Absolutely. All consultations are 100% confidential. Acharya Ji follows strict privacy principles. Your personal information and situation are never shared with anyone." },
  { q: "How do I book a consultation?", a: "Simply click the WhatsApp button to start a chat. Acharya Ji or his team will respond promptly to schedule your private session at a time convenient for you." },
  { q: "Can Acharya Ji help with marriage problems?", a: "Yes. Acharya Ji specialises in marriage problems including compatibility issues, family disputes, divorce prevention, and strengthening the marital bond through Vedic remedies." },
  { q: "Does Acharya Ji offer online consultations?", a: "Yes. Acharya Ji offers consultations via WhatsApp, phone, and video call, serving clients across the entire United Kingdom and internationally." },
];

const FAQSection = () => {
  const [open, setOpen] = useState(null);
  return (
    <section style={{ padding: "100px 0", background: "linear-gradient(180deg,#150832,#0f0524)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 40px" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="font-body" style={{ color: "#ff4fa1", fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>FAQs</div>
            <h2 className="font-display" style={{ fontSize: "clamp(32px,3.5vw,52px)", fontWeight: 600 }}>Frequently Asked <span className="text-gradient">Questions</span></h2>
          </div>
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((f, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="glass" style={{ borderRadius: 20, overflow: "hidden", cursor: "pointer" }} onClick={() => setOpen(open === i ? null : i)}>
                <div style={{ padding: "22px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
                  <span className="font-body" style={{ fontWeight: 600, fontSize: 16, color: "#fff", lineHeight: 1.4 }}>{f.q}</span>
                  <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.3 }}
                    style={{ fontSize: 24, color: "#ff4fa1", flexShrink: 0, fontWeight: 300 }}>+</motion.span>
                </div>
                <AnimatePresence>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <div style={{ padding: "0 28px 22px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                        <p className="font-body" style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", paddingTop: 16 }}>{f.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── FINAL CTA ─── */
const FinalCTA = () => (
  <section style={{ padding: "120px 40px", background: "#0f0524", position: "relative", overflow: "hidden", textAlign: "center" }}>
    <div className="orb" style={{ width: 700, height: 700, background: "rgba(255,79,161,0.12)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(255,79,161,0.08) 0%,transparent 70%)" }} />
    <Particles />

    <div style={{ position: "relative", zIndex: 2, maxWidth: 700, margin: "0 auto" }}>
      <FadeIn>
        <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg,#ff4fa1,#d946ef)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, margin: "0 auto 32px", boxShadow: "0 0 60px rgba(255,79,161,0.5)" }} className="animate-float">✦</div>
        <h2 className="font-display" style={{ fontSize: "clamp(36px,4.5vw,64px)", fontWeight: 600, lineHeight: 1.1, marginBottom: 20 }}>
          Talk Directly With <span className="text-gradient">Acharya Ji</span> Today
        </h2>
        <p className="font-body" style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 48 }}>
          Get confidential guidance for your relationship, marriage, or personal concerns. Your first step toward healing starts with one message.
        </p>
        <a href="https://wa.me/447700000000" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "inline-block" }}>
          <motion.button className="btn-primary font-body" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}
            style={{ padding: "20px 52px", borderRadius: 60, fontSize: 18, fontWeight: 700, color: "#fff", display: "flex", alignItems: "center", gap: 12, margin: "0 auto" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chat on WhatsApp Now
          </motion.button>
        </a>
        <p className="font-body" style={{ marginTop: 20, fontSize: 13, color: "rgba(255,255,255,0.35)" }}>🔒 Completely private · Available 7 days a week · UK clients welcome</p>
      </FadeIn>
    </div>
  </section>
);

/* ─── FOOTER ─── */
const Footer = () => (
  <footer style={{ background: "#080215", borderTop: "1px solid rgba(255,79,161,0.1)", padding: "48px 40px", textAlign: "center" }}>
    <div className="font-display" style={{ fontSize: 24, fontWeight: 600, marginBottom: 8, color: "#fff" }}>Acharya Ji</div>
    <p className="font-body" style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", marginBottom: 24 }}>London's Most Trusted Love & Relationship Healer</p>
    <div style={{ display: "flex", gap: 24, justifyContent: "center", marginBottom: 32 }}>
      {["Services", "About", "Testimonials", "FAQ", "Contact"].map(l => (
        <span key={l} className="font-body" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", cursor: "pointer", transition: "color 0.2s" }}
          onMouseEnter={e => e.target.style.color = "#ff4fa1"}
          onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.4)"}>{l}</span>
      ))}
    </div>
    <p className="font-body" style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>© 2025 Acharya Ji. All rights reserved. | United Kingdom</p>
  </footer>
);

/* ─── MAIN APP ─── */
export default function App() {
  return (
    <div className="font-body" style={{ background: "#0f0524", minHeight: "100vh", color: "#fff" }}>
      <FontLoader />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <TrustSection />
      <VideoSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <GallerySection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
