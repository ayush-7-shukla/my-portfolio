import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--navy)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "2rem 1.5rem" }}>
      <style>{`
        .foot-inner { max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
        .foot-links { display: flex; gap: 1.5rem; flex-wrap: wrap; }
        .foot-links a { font-size: 0.78rem; color: var(--slate); text-decoration: none; font-family: var(--font-display); font-weight: 500; transition: color 0.2s; }
        .foot-links a:hover { color: var(--amber); }
        @media (max-width: 560px) {
          .foot-inner { flex-direction: column; align-items: flex-start; gap: 1.25rem; }
        }
      `}</style>
      <div className="foot-inner">
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.05rem", color: "var(--white)" }}>
            Ayush<span style={{ color: "var(--amber)" }}>.</span>
          </div>
          <div style={{ fontSize: "0.72rem", color: "var(--slate)", marginTop: 3 }}>Built with React & Tailwind CSS</div>
        </div>
        <div className="foot-links">
          <a href="https://github.com/ayush-7-shukla" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/ayush-shukla-93bb7033b" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:ayushshukla6393@gmail.com">Email</a>
        </div>
        <div style={{ fontSize: "0.72rem", color: "var(--slate)" }}>© {year} Ayush Shukla. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;