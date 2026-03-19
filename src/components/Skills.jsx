import React, { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    category: "Programming",
    skills: [
      { name: "JavaScript", level: 82, icon: "JS" },
      { name: "Java", level: 72, icon: "☕" },
      { name: "C / C++", level: 75, icon: "C" },
    ],
  },
  {
    category: "Web & Frameworks",
    skills: [
      { name: "React.js", level: 80, icon: "⚛" },
      { name: "HTML / CSS", level: 88, icon: "◇" },
      { name: "Node.js", level: 65, icon: "◆" },
    ],
  },
  {
    category: "Data & Databases",
    skills: [
      { name: "SQL / MySQL", level: 74, icon: "⬡" },
      { name: "Pandas / NumPy", level: 68, icon: "∑" },
      { name: "Data Analysis (EDA)", level: 65, icon: "📊" },
    ],
  },
];

const toolBadges = ["Git", "GitHub", "VS Code", "Linux", "Eclipse", "Matplotlib", "Seaborn"];
const securityBadges = ["Network Security", "Web Security", "Ethical Hacking", "Pen Testing"];
const coreCourses = ["OOP", "Operating Systems", "Computer Networks", "DBMS"];

function SkillBar({ name, icon, level, animate }) {
  return (
    <div style={{ marginBottom: "1.1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.35rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <span style={{ fontSize: "0.7rem", background: "rgba(245,158,11,0.1)", color: "var(--amber)", padding: "2px 7px", borderRadius: 4, fontFamily: "var(--font-display)", fontWeight: 700 }}>{icon}</span>
          <span style={{ fontSize: "0.86rem", color: "var(--slate-light)", fontWeight: 500 }}>{name}</span>
        </div>
        <span style={{ fontSize: "0.72rem", color: "var(--amber)", fontFamily: "var(--font-display)", fontWeight: 600 }}>{level}%</span>
      </div>
      <div style={{ height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 100, overflow: "hidden" }}>
        <div style={{ height: "100%", width: animate ? `${level}%` : "0%", background: "linear-gradient(90deg, var(--amber), var(--amber-light))", borderRadius: 100, transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)" }} />
      </div>
    </div>
  );
}

function BadgePill({ label }) {
  return (
    <span
      style={{ padding: "6px 14px", background: "var(--navy-2)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 7, color: "var(--slate-light)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.76rem", letterSpacing: "0.04em", display: "inline-block", transition: "all 0.2s", cursor: "default" }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--amber)"; e.currentTarget.style.color = "var(--amber)"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "var(--slate-light)"; }}
    >
      {label}
    </span>
  );
}

function Skills() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setAnimate(true); }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} style={{ padding: "5rem 1.5rem", background: "var(--navy)", position: "relative" }}>
      <style>{`
        .skills-groups { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 2.5rem; }
        .badge-row { display: flex; flex-wrap: wrap; gap: 0.55rem; }
        @media (max-width: 900px) { .skills-groups { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 560px) { .skills-groups { grid-template-columns: 1fr; } }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: "3rem" }}>
          <div className="section-label" style={{ marginBottom: "0.75rem" }}><span className="amber-line" />Technical Skills</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>What I Work With</h2>
        </div>

        {/* Skill bars */}
        <div className="skills-groups">
          {skillGroups.map((group) => (
            <div key={group.category} style={{ background: "var(--navy-3)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "1.4rem" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--amber)", marginBottom: "1.25rem", marginTop: 0 }}>{group.category}</h3>
              {group.skills.map(s => <SkillBar key={s.name} {...s} animate={animate} />)}
            </div>
          ))}
        </div>

        {/* Tools */}
        <div style={{ marginBottom: "1.75rem" }}>
          <div className="section-label" style={{ marginBottom: "0.85rem" }}>Dev Tools & Platforms</div>
          <div className="badge-row">
            {toolBadges.map(b => <BadgePill key={b} label={b} />)}
          </div>
        </div>

        {/* Cybersecurity */}
        <div style={{ marginBottom: "1.75rem" }}>
          <div className="section-label" style={{ marginBottom: "0.85rem" }}>Cybersecurity Fundamentals</div>
          <div className="badge-row">
            {securityBadges.map(b => <BadgePill key={b} label={b} />)}
          </div>
        </div>

        {/* Core courses */}
        <div>
          <div className="section-label" style={{ marginBottom: "0.85rem" }}>Core Courses</div>
          <div className="badge-row">
            {coreCourses.map(b => (
              <span key={b} style={{ padding: "6px 16px", background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.25)", borderRadius: 7, color: "var(--amber)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.76rem", letterSpacing: "0.04em" }}>{b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;