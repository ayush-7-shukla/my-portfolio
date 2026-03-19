import React from "react";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Graphic Era Deemed To Be University",
    period: "Aug 2023 – Present",
    location: "Dehradun, Uttarakhand",
    detail: "CGPA: 7.2 / 10",
  },
  {
    degree: "Intermediate — PCM (Grade 12)",
    institution: "Delhi Public School, Kanpur",
    period: "Apr 2022 – Mar 2023",
    location: "Kanpur, UP",
    detail: "75%",
  },
];

const projects = [
  {
    title: "Campus Navigation System using Dijkstra's Algorithm",
    tech: "JavaScript, HTML, CSS, Graph Algorithms",
    year: "2025",
    bullets: [
      "Modelled campus as a weighted graph with 50+ nodes (blocks, labs, cafeteria, hostels).",
      "Implemented Dijkstra's shortest path algorithm for real-time optimal route computation.",
      "Designed interactive UI that dynamically displays the shortest path only after user input.",
      "Visualised paths on campus map using JavaScript DOM manipulation.",
    ],
  },
  {
    title: "Self-Healing OS Simulation Framework",
    tech: "Python, Tkinter, Process Automation, Fault Recovery",
    year: "2025",
    bullets: [
      "Engineered simulation detecting, logging, and autonomously recovering from injected faults.",
      "Built a desktop GUI with Tkinter for manual crash injection and real-time log display.",
      "Integrated simulation engine via controlled process spawning and inter-process communication.",
      "Implemented fault injection and automated recovery logic for repeated failure scenarios.",
    ],
  },
];

const skillGroups = [
  { label: "Programming & Query", items: ["Java", "C/C++", "JavaScript", "HTML", "CSS", "SQL"] },
  { label: "Data Analytics", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA", "Data Cleaning"] },
  { label: "Databases", items: ["MySQL", "Relational Modeling", "Joins", "Indexing"] },
  { label: "Dev Tools", items: ["Git", "GitHub", "VS Code", "Linux", "Eclipse"] },
  { label: "Cybersecurity", items: ["Network Security", "Web Security", "Ethical Hacking", "Pen Testing"] },
];

const courses = ["OOP", "Operating Systems", "Computer Networks", "DBMS"];

const stats = [
  { label: "CGPA", value: "7.2" },
  { label: "Projects", value: "6+" },
  { label: "Languages", value: "5+" },
  { label: "Year", value: "2nd" },
];

function Resume() {
  return (
    <section id="resume" style={{ padding: "5rem 1.5rem", background: "var(--navy)", position: "relative" }}>
      <style>{`
        .resume-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3rem; flex-wrap: wrap; gap: 1rem; }
        .resume-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; }
        .res-ht { font-family: var(--font-display); font-weight: 700; font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--amber); margin-bottom: 1.25rem; margin-top: 0; }
        .tl { position: relative; padding-left: 1.75rem; }
        .tl::before { content: ''; position: absolute; left: 6px; top: 8px; bottom: 8px; width: 1px; background: rgba(255,255,255,0.08); }
        .tl-item { position: relative; margin-bottom: 1.75rem; }
        .tl-dot { position: absolute; left: -1.45rem; top: 4px; width: 13px; height: 13px; border-radius: 50%; background: var(--amber); }
        .tl-deg { font-family: var(--font-display); font-weight: 700; font-size: 0.92rem; color: var(--white); margin-bottom: 3px; }
        .tl-inst { font-size: 0.8rem; color: var(--amber); font-weight: 500; margin-bottom: 2px; }
        .tl-per { font-size: 0.72rem; color: var(--slate); margin-bottom: 2px; }
        .tl-det { font-size: 0.78rem; color: var(--slate-light); font-weight: 600; }
        .proj-card { background: var(--navy-3); border: 1px solid rgba(255,255,255,0.07); border-left: 2px solid var(--amber); border-radius: 0 8px 8px 0; padding: 1.1rem 1.25rem; margin-bottom: 1.25rem; }
        .proj-title-r { font-family: var(--font-display); font-weight: 700; font-size: 0.9rem; color: var(--white); margin-bottom: 3px; }
        .proj-tech { font-size: 0.75rem; color: var(--amber); font-weight: 500; margin-bottom: 3px; }
        .proj-year { font-size: 0.68rem; color: var(--slate); margin-bottom: 0.8rem; }
        .proj-bul { margin: 0; padding-left: 1rem; }
        .proj-bul li { font-size: 0.8rem; color: var(--slate-light); line-height: 1.65; margin-bottom: 3px; }
        .skills-table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; }
        .skills-table td { padding: 0.55rem 0.75rem; font-size: 0.8rem; border-bottom: 1px solid rgba(255,255,255,0.05); vertical-align: top; }
        .skills-table td:first-child { font-family: var(--font-display); font-weight: 600; font-size: 0.68rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--amber); width: 38%; white-space: nowrap; }
        .skills-table td:last-child { color: var(--slate-light); }
        .stats-g { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; margin-bottom: 2rem; }
        .stat-c { background: var(--navy-2); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; padding: 0.85rem; text-align: center; }
        .stat-v { font-family: var(--font-display); font-weight: 800; font-size: 1.5rem; color: var(--amber); line-height: 1; }
        .stat-l { font-size: 0.65rem; color: var(--slate); margin-top: 5px; letter-spacing: 0.05em; font-family: var(--font-display); text-transform: uppercase; }
        .course-row { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .course-tag { padding: 4px 14px; background: rgba(245,158,11,0.08); border: 1px solid rgba(245,158,11,0.25); border-radius: 100px; font-size: 0.75rem; color: var(--amber); font-family: var(--font-display); font-weight: 500; }
        @media (max-width: 768px) {
          .resume-cols { grid-template-columns: 1fr; gap: 2.5rem; }
          .stats-g { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div className="resume-header">
          <div>
            <div className="section-label" style={{ marginBottom: "0.75rem" }}><span className="amber-line" />Resume</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>
              Experience & Education
            </h2>
          </div>
          <a
            href="/resume.pdf" download
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "0.65rem 1.5rem", background: "var(--amber)", color: "var(--navy)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.05em", textDecoration: "none", borderRadius: 6, whiteSpace: "nowrap", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--amber-light)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--amber)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            ↓ Download PDF
          </a>
        </div>

        {/* Quick stats */}
        <div className="stats-g">
          {stats.map(s => (
            <div key={s.label} className="stat-c">
              <div className="stat-v">{s.value}</div>
              <div className="stat-l">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="resume-cols">
          {/* Left — Education + Skills */}
          <div>
            <h3 className="res-ht">Education</h3>
            <div className="tl">
              {education.map((e, i) => (
                <div key={i} className="tl-item">
                  <div className="tl-dot" />
                  <div className="tl-deg">{e.degree}</div>
                  <div className="tl-inst">{e.institution}</div>
                  <div className="tl-per">{e.period} · {e.location}</div>
                  <div className="tl-det">{e.detail}</div>
                </div>
              ))}
            </div>

            <h3 className="res-ht" style={{ marginTop: "2rem" }}>Core Courses</h3>
            <div className="course-row" style={{ marginBottom: "2rem" }}>
              {courses.map(c => <span key={c} className="course-tag">{c}</span>)}
            </div>

            <h3 className="res-ht">Technical Skills</h3>
            <table className="skills-table">
              <tbody>
                {skillGroups.map(g => (
                  <tr key={g.label}>
                    <td>{g.label}</td>
                    <td>{g.items.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right — Projects */}
          <div>
            <h3 className="res-ht">Featured Projects</h3>
            {projects.map((p, i) => (
              <div key={i} className="proj-card">
                <div className="proj-title-r">{p.title}</div>
                <div className="proj-tech">{p.tech}</div>
                <div className="proj-year">{p.year}</div>
                <ul className="proj-bul">
                  {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;