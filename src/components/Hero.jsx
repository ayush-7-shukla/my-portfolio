import React, { useEffect, useState } from "react";

const roles = ["Full-Stack Developer", "React Enthusiast", "OS & Networks Nerd", "Problem Solver"];

function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "5rem 1.5rem 4rem", position: "relative", overflow: "hidden" }}>
      <style>{`
        .hero-blob { position: absolute; top: 20%; right: 5%; width: 360px; height: 360px; background: radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%); border-radius: 50%; animation: float 8s ease-in-out infinite; pointer-events: none; }
        .hero-grid-bg { position: absolute; inset: 0; background-image: linear-gradient(rgba(245,158,11,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.04) 1px, transparent 1px); background-size: 60px 60px; pointer-events: none; }
        .hero-name { font-family: var(--font-display); font-size: clamp(3rem, 12vw, 6.5rem); font-weight: 800; line-height: 1; letter-spacing: -0.03em; margin: 0.5rem 0; }
        .hero-typed { font-family: var(--font-display); font-size: clamp(0.95rem, 3vw, 1.4rem); font-weight: 500; color: var(--slate-light); height: 2rem; display: flex; align-items: center; margin-bottom: 1rem; }
        .hero-tagline { color: var(--slate); max-width: 520px; line-height: 1.8; font-size: clamp(0.85rem, 2vw, 1rem); margin-bottom: 2rem; }
        .hero-ctas { display: flex; gap: 1rem; flex-wrap: wrap; }
        @media (max-width: 480px) {
          .hero-blob { width: 200px; height: 200px; top: 10%; right: -5%; }
          .hero-ctas a { flex: 1; text-align: center; min-width: 140px; }
        }
      `}</style>

      <div className="hero-grid-bg" />
      <div className="hero-blob" />

      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <div className="section-label animate-fade-up-1" style={{ marginBottom: "1.25rem" }}>
          <span className="amber-line" />Hello, World
        </div>
        <h1 className="hero-name animate-fade-up-2">
          Ayush<br /><span style={{ color: "var(--amber)" }}>Shukla</span>
        </h1>
        <div className="hero-typed animate-fade-up-3">
          {displayed}<span style={{ marginLeft: 2, color: "var(--amber)", animation: "blink 1s step-end infinite" }}>|</span>
        </div>
        <p className="hero-tagline animate-fade-up-3">
          B.Tech CS student at Graphic Era University — building scalable web apps and exploring systems design, cybersecurity & algorithms.
        </p>
        <div className="hero-ctas animate-fade-up-4">
          <a href="#projects" style={{ display: "inline-block", padding: "0.75rem 2rem", background: "var(--amber)", color: "var(--navy)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.88rem", letterSpacing: "0.05em", textDecoration: "none", borderRadius: 6, transition: "all 0.2s" }} onMouseEnter={e => { e.currentTarget.style.background = "var(--amber-light)"; e.currentTarget.style.transform = "translateY(-2px)"; }} onMouseLeave={e => { e.currentTarget.style.background = "var(--amber)"; e.currentTarget.style.transform = "translateY(0)"; }}>View Projects →</a>
          <a href="#resume" style={{ display: "inline-block", padding: "0.75rem 2rem", background: "transparent", color: "var(--white)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.88rem", letterSpacing: "0.05em", textDecoration: "none", borderRadius: 6, border: "1px solid rgba(255,255,255,0.2)", transition: "all 0.2s" }} onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--amber)"; e.currentTarget.style.color = "var(--amber)"; }} onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "var(--white)"; }}>Download Resume</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;