import React, { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled || menuOpen ? "rgba(10,14,26,0.97)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
          borderBottom: scrolled || menuOpen ? "1px solid rgba(245,158,11,0.15)" : "none",
          transition: "all 0.4s ease",
          padding: "0 1.5rem",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          {/* Logo */}
          <a href="#home" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.25rem", color: "var(--white)", letterSpacing: "-0.02em" }}>
              Ayush<span style={{ color: "var(--amber)" }}>.</span>
            </span>
          </a>

          {/* Desktop Links — hidden on mobile via media query class */}
          <ul className="nav-desktop-links" style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0, alignItems: "center" }}>
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="nav-link">{l.label}</a>
              </li>
            ))}
            <li><DarkModeToggle /></li>
          </ul>

          {/* Hamburger — visible on mobile */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              background: "transparent",
              border: "1px solid rgba(245,158,11,0.3)",
              borderRadius: 6,
              color: "var(--amber)",
              width: 40, height: 40,
              cursor: "pointer",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              padding: 0,
            }}
          >
            <span style={{ width: 18, height: 1.5, background: "var(--amber)", display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(4.5px, 4.5px)" : "none" }} />
            <span style={{ width: 18, height: 1.5, background: "var(--amber)", display: "block", opacity: menuOpen ? 0 : 1, transition: "all 0.3s" }} />
            <span style={{ width: 18, height: 1.5, background: "var(--amber)", display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none" }} />
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div style={{
            borderTop: "1px solid rgba(245,158,11,0.1)",
            padding: "1rem 0 1.5rem",
          }}>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={closeMenu}
                style={{
                  display: "block",
                  padding: "0.75rem 1.5rem",
                  color: "var(--slate-light)",
                  textDecoration: "none",
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "1rem",
                  letterSpacing: "0.05em",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--amber)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--slate-light)"}
              >
                {l.label}
              </a>
            ))}
            <div style={{ padding: "0.75rem 1.5rem" }}>
              <DarkModeToggle />
            </div>
          </div>
        )}
      </nav>

      {/* Responsive style injection */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}

export default Navbar;