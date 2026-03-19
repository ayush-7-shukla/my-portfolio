import React from "react";

const projects = [
  {
    title: "Campus Navigation System",
    desc: "Web-based campus navigation modelling 50+ nodes as a weighted graph. Dijkstra's algorithm computes real-time optimal routes with dynamic path visualisation on the campus map.",
    link: "#",
    github: "https://github.com/ayush-7-shukla",
    tags: ["JavaScript", "HTML/CSS", "Graph Algorithms", "DOM"],
    accent: "#10b981",
    number: "01",
    live: false,
    year: "2025",
  },
  {
    title: "Self-Healing OS Simulation",
    desc: "OS simulation framework that detects, logs and autonomously recovers from injected faults. Desktop GUI built with Tkinter; integrated via process spawning and IPC for command routing.",
    link: "#",
    github: "https://github.com/ayush-7-shukla",
    tags: ["Python", "Tkinter", "Process Automation", "Fault Recovery"],
    accent: "#8b5cf6",
    number: "02",
    live: false,
    year: "2025",
  },
  {
    title: "My Portfolio",
    desc: "Sleek personal portfolio built with React and Tailwind CSS, showcasing skills and projects with smooth animations, responsive design, and EmailJS contact integration.",
    link: "https://ayush-7-shukla.github.io/my-portfolio/",
    github: "https://github.com/ayush-7-shukla/my-portfolio",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    accent: "#3b82f6",
    number: "03",
    live: true,
    year: "2024",
  },
  {
    title: "Honeypot Cyber Detection",
    desc: "Cybersecurity system deploying honeypots to detect, monitor, and log intrusion attempts. Implements core Network Security and Penetration Testing principles.",
    link: "#",
    github: "https://github.com/ayush-7-shukla",
    tags: ["Python", "Network Security", "Pen Testing"],
    accent: "#ef4444",
    number: "04",
    live: false,
    year: "2024",
  },
  {
    title: "Flipkart Clone",
    desc: "Full-stack e-commerce platform replicating product listing, cart, authentication, and checkout with React frontend and Firebase backend.",
    link: "#",
    github: "https://github.com/ayush-7-shukla",
    tags: ["React", "Firebase", "Node.js"],
    accent: "#f59e0b",
    number: "05",
    live: false,
    year: "2024",
  },
  {
    title: "Hostel Management System",
    desc: "Web app for managing hostel operations — student allocation, room management, maintenance tracking, and an admin dashboard.",
    link: "#",
    github: "https://github.com/ayush-7-shukla",
    tags: ["React", "Node.js", "MySQL"],
    accent: "#ec4899",
    number: "06",
    live: false,
    year: "2024",
  },
];

function Projects() {
  return (
    <section id="projects" style={{ padding: "5rem 1.5rem", background: "var(--navy-2)", position: "relative" }}>
      <style>{`
        .projects-top-border { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, var(--amber), transparent); }
        .proj-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3rem; flex-wrap: wrap; gap: 1rem; }
        .proj-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.25rem; }
        @media (max-width: 480px) { .proj-grid { grid-template-columns: 1fr; } }
        .proj-card { background: var(--navy-3); border: 1px solid rgba(255,255,255,0.07); border-radius: 11px; padding: 1.6rem; position: relative; overflow: hidden; transition: all 0.25s; }
        .proj-card:hover { border-color: var(--amber); transform: translateY(-4px); }
      `}</style>

      <div className="projects-top-border" />
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="proj-header">
          <div>
            <div className="section-label" style={{ marginBottom: "0.75rem" }}><span className="amber-line" />Portfolio</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>Featured Projects</h2>
          </div>
          <a href="https://github.com/ayush-7-shukla" target="_blank" rel="noreferrer" style={{ color: "var(--amber)", fontSize: "0.82rem", fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "0.05em", textDecoration: "none", borderBottom: "1px solid rgba(245,158,11,0.4)", paddingBottom: 2, whiteSpace: "nowrap" }}>
            View All on GitHub →
          </a>
        </div>

        <div className="proj-grid">
          {projects.map((p) => (
            <div key={p.number} className="proj-card">
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: p.accent, opacity: 0.75, borderRadius: "11px 11px 0 0" }} />
              {/* Year badge */}
              <span style={{ position: "absolute", top: 14, right: 14, fontSize: "0.65rem", fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--slate)", letterSpacing: "0.08em", background: "rgba(255,255,255,0.05)", padding: "2px 8px", borderRadius: 100 }}>{p.year}</span>

              <div style={{ position: "relative", paddingTop: "0.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "0.6rem" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "0.75rem", color: "rgba(255,255,255,0.15)" }}>#{p.number}</span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", margin: 0, color: "var(--white)" }}>{p.title}</h3>
                </div>
                <p style={{ color: "var(--slate)", fontSize: "0.83rem", lineHeight: 1.7, margin: "0 0 1rem" }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1.1rem" }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{ fontSize: "0.68rem", fontFamily: "var(--font-display)", fontWeight: 600, padding: "3px 10px", borderRadius: 100, background: "rgba(255,255,255,0.05)", color: "var(--slate-light)", letterSpacing: "0.04em" }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <a href={p.github} target="_blank" rel="noreferrer" style={{ fontSize: "0.78rem", color: "var(--slate)", textDecoration: "none", fontFamily: "var(--font-display)", fontWeight: 600, transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "var(--white)"} onMouseLeave={e => e.currentTarget.style.color = "var(--slate)"}>⎇ Code</a>
                  {p.live && <a href={p.link} target="_blank" rel="noreferrer" style={{ fontSize: "0.78rem", color: "var(--amber)", textDecoration: "none", fontFamily: "var(--font-display)", fontWeight: 600 }}>↗ Live Demo</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;