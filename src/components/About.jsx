import React from "react";

const facts = [
  { icon: "🎓", label: "Education", value: "B.Tech CSE · CGPA 7.2", sub: "Graphic Era University, Dehradun" },
  { icon: "📍", label: "From", value: "Kanpur, UP", sub: "Currently in Dehradun" },
  { icon: "⚽", label: "Sports", value: "Football & Athletics", sub: "Inter-school medal winner" },
  { icon: "✈️", label: "Passion", value: "Travel & Exploration", sub: "Always seeking new experiences" },
];

function About() {
  return (
    <section id="about" style={{ padding: "5rem 1.5rem", position: "relative", background: "var(--navy-2)" }}>
      <style>{`
        .about-top-border { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, var(--amber), transparent); }
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
        .fact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.9rem; }
        .fact-card { background: var(--navy-3); border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 1.25rem; transition: all 0.25s; }
        .fact-card:hover { border-color: var(--amber); transform: translateY(-3px); }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
        }
        @media (max-width: 400px) {
          .fact-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="about-top-border" />
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: "3rem" }}>
          <div className="section-label" style={{ marginBottom: "0.75rem" }}><span className="amber-line" />About Me</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>Who I Am</h2>
        </div>

        <div className="about-grid">
          <div>
            <p style={{ color: "var(--slate-light)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "1.25rem" }}>
              I'm <strong style={{ color: "var(--white)", fontWeight: 600 }}>Ayush Shukla</strong>, a passionate Computer Science student from Kanpur, Uttar Pradesh, currently in my 2nd year of B.Tech at Graphic Era Deemed to be University, Dehradun.
            </p>
            <p style={{ color: "var(--slate)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "1.25rem" }}>
              My academic interests center around <strong style={{ color: "var(--amber)", fontWeight: 500 }}>Operating Systems, Computer Networks, and Cybersecurity</strong>. I love turning complex problems into elegant solutions — from OS schedulers to campus navigation.
            </p>
            <p style={{ color: "var(--slate)", lineHeight: 1.9, fontSize: "0.95rem" }}>
              Outside of code, you'll find me on the football field, planning my next trip, or deep in a DSA problem. My goal is to become a skilled <strong style={{ color: "var(--white)", fontWeight: 500 }}>Software Engineer</strong> who builds things that matter.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.75rem" }}>
              {["OS Design", "Cybersecurity", "React", "Node.js", "Algorithms", "System Design"].map(t => (
                <span key={t} style={{ padding: "4px 14px", border: "1px solid rgba(245,158,11,0.3)", borderRadius: 100, fontSize: "0.75rem", color: "var(--amber)", fontFamily: "var(--font-display)", fontWeight: 500, letterSpacing: "0.04em" }}>{t}</span>
              ))}
            </div>
          </div>

          <div className="fact-grid">
            {facts.map((f) => (
              <div key={f.label} className="fact-card">
                <div style={{ fontSize: "1.4rem", marginBottom: "0.65rem" }}>{f.icon}</div>
                <div style={{ fontSize: "0.62rem", color: "var(--amber)", fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.2rem" }}>{f.label}</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9rem", color: "var(--white)", marginBottom: "0.15rem" }}>{f.value}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--slate)" }}>{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;