import React, { useRef } from "react";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    import("emailjs-com").then((emailjs) => {
      emailjs.sendForm("Ayush-Shukla7", "Ayush-7", form.current, "NaNnZ2qpu4ZOBdVsA")
        .then(() => alert("✅ Message sent successfully!"), () => alert("❌ Failed to send message. Try again."));
    });
  };

  const socials = [
    { label: "GitHub", handle: "@ayush-7-shukla", url: "https://github.com/ayush-7-shukla", icon: "⎇" },
    { label: "Instagram", handle: "@ayushshukla1109", url: "https://www.instagram.com/ayushshukla1109", icon: "◈" },
    { label: "Email", handle: "ayushshukla6393@gmail.com", url: "mailto:ayushshukla6393@gmail.com", icon: "✉" },
    { label: "LinkedIn", handle: "Ayush Shukla", url: "https://www.linkedin.com/in/ayush-shukla-93bb7033b", icon: "in" },
  ];

  const inputStyle = { width: "100%", background: "var(--navy-3)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "0.75rem 1rem", color: "var(--white)", fontSize: "0.9rem", fontFamily: "var(--font-body)", outline: "none", transition: "border-color 0.2s", marginBottom: "1rem", boxSizing: "border-box", display: "block" };

  return (
    <section id="contact" style={{ padding: "5rem 1.5rem", background: "var(--navy-2)", position: "relative" }}>
      <style>{`
        .contact-top-border { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, var(--amber), transparent); }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; margin-top: 3rem; }
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; } }
        .social-item { display: flex; align-items: center; gap: 1rem; padding: 0.9rem 1.1rem; background: var(--navy-3); border: 1px solid rgba(255,255,255,0.07); border-radius: 9px; text-decoration: none; margin-bottom: 0.65rem; transition: all 0.2s; }
        .social-item:hover { border-color: var(--amber); transform: translateX(4px); }
      `}</style>

      <div className="contact-top-border" />
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: "0" }}>
          <div className="section-label" style={{ marginBottom: "0.75rem" }}><span className="amber-line" />Contact</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>Let's Connect</h2>
        </div>

        <div className="contact-grid">
          {/* Form */}
          <div>
            <p style={{ color: "var(--slate)", lineHeight: 1.8, marginBottom: "1.75rem", fontSize: "0.9rem" }}>
              Have a project in mind, an opportunity to discuss, or just want to say hi? Drop me a message — I'll get back to you within 24 hours.
            </p>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" placeholder="Your Name" required style={inputStyle} onFocus={e => e.target.style.borderColor = "var(--amber)"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
              <input type="email" name="user_email" placeholder="Your Email" required style={inputStyle} onFocus={e => e.target.style.borderColor = "var(--amber)"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
              <textarea name="message" placeholder="Your Message" required style={{ ...inputStyle, height: 140, resize: "vertical" }} onFocus={e => e.target.style.borderColor = "var(--amber)"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
              <button type="submit" style={{ width: "100%", padding: "0.85rem", background: "var(--amber)", color: "var(--navy)", border: "none", borderRadius: 8, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em", cursor: "pointer", transition: "all 0.2s" }} onMouseEnter={e => { e.currentTarget.style.background = "var(--amber-light)"; e.currentTarget.style.transform = "translateY(-2px)"; }} onMouseLeave={e => { e.currentTarget.style.background = "var(--amber)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                Send Message →
              </button>
            </form>
          </div>

          {/* Socials */}
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: "var(--white)", marginBottom: "0.4rem" }}>Find me online</div>
            <div style={{ color: "var(--slate)", fontSize: "0.83rem", marginBottom: "1.5rem" }}>Open to internships, collaborations, and interesting projects.</div>
            {socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="social-item">
                <div style={{ width: 38, height: 38, borderRadius: 8, background: "rgba(245,158,11,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--amber)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "0.88rem", flexShrink: 0 }}>{s.icon}</div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.85rem", color: "var(--white)" }}>{s.label}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--slate)" }}>{s.handle}</div>
                </div>
                <span style={{ marginLeft: "auto", color: "var(--slate)", fontSize: "0.82rem" }}>→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;