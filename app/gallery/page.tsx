"use client";
import { useState } from "react";

const LOGO_URL = "/ATADental_Logo_Horizontal_POS.png";

const CATEGORIES = [
  {
    name: "Porcelain Crowns and Veneers",
    cases: [
      { id: 1, before: null, after: null, description: "Coming soon" },
      { id: 2, before: null, after: null, description: "Coming soon" },
      { id: 3, before: null, after: null, description: "Coming soon" },
    ],
  },
  {
    name: "Dental Implants",
    cases: [
      { id: 1, before: null, after: null, description: "Coming soon" },
      { id: 2, before: null, after: null, description: "Coming soon" },
      { id: 3, before: null, after: null, description: "Coming soon" },
    ],
  },
  {
    name: "Cleanings",
    cases: [
      { id: 1, before: null, after: null, description: "Coming soon" },
    ],
  },
  {
    name: "Clear Aligners",
    cases: [
      { id: 1, before: null, after: null, description: "Coming soon" },
    ],
  },
];

function Placeholder({ label }) {
  return (
    <div style={{
      width: "100%", aspectRatio: "4/3", background: "#e8e8e8", borderRadius: 8,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      color: "#999", fontSize: 14, fontWeight: 500,
    }}>
      <span style={{ fontSize: 32, marginBottom: 8 }}>📷</span>
      {label}
    </div>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].name);

  return (
    <div style={{ fontFamily: "'Libre Franklin', 'Segoe UI', sans-serif", color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Libre+Franklin:wght@300;400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
          --red: #c41230; --red-dark: #a00f28; --red-light: #fdf0f2;
          --black: #1a1a1a; --grey: #555555; --grey-light: #888888;
          --grey-bg: #f5f5f5; --grey-border: #e0e0e0; --white: #ffffff;
          --shadow: 0 4px 24px rgba(0,0,0,0.08);
        }
        .serif { font-family: 'DM Serif Display', Georgia, serif; }
        .btn-primary {
          background: var(--red); color: white; border: none; padding: 16px 40px;
          border-radius: 6px; font-size: 16px; font-weight: 600; cursor: pointer;
          transition: all 0.3s; font-family: inherit; text-decoration: none; display: inline-block;
        }
        .btn-primary:hover { background: var(--red-dark); transform: translateY(-1px); }
        .cat-btn {
          padding: 10px 24px; border-radius: 30px; font-size: 14px; font-weight: 600;
          cursor: pointer; transition: all 0.3s; font-family: inherit; border: 2px solid var(--grey-border);
          background: var(--white); color: var(--grey);
        }
        .cat-btn:hover { border-color: var(--red); color: var(--red); }
        .cat-btn.active { background: var(--red); color: white; border-color: var(--red); }
        .case-card {
          background: var(--white); border-radius: 12px; overflow: hidden;
          box-shadow: var(--shadow); transition: all 0.35s;
        }
        .case-card:hover { transform: translateY(-4px); box-shadow: 0 12px 48px rgba(0,0,0,0.12); }
      `}</style>

      {/* Nav */}
      <nav style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--grey-border)", padding: "0 24px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img src={LOGO_URL} alt="Ata Dental" style={{ height: 42 }} />
          </a>
          <a href="/" style={{ color: "var(--grey)", textDecoration: "none", fontWeight: 600, fontSize: 14 }}>← Back to Home</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "var(--black)", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Our Results</p>
          <h1 className="serif" style={{ fontSize: 48, color: "white", marginBottom: 16 }}>Before & After Gallery</h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
            See the transformative results our team delivers. From crowns and veneers to implants and aligners — real patients, real results.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section style={{ padding: "40px 24px 0", background: "var(--grey-bg)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              className={`cat-btn ${activeCategory === cat.name ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.name)}
            >
              {cat.name} ({cat.cases.length})
            </button>
          ))}
        </div>
      </section>

      {/* Gallery grid */}
      <section style={{ padding: "48px 24px 80px", background: "var(--grey-bg)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {CATEGORIES.filter((cat) => cat.name === activeCategory).map((cat) => (
            <div key={cat.name}>
              <h2 className="serif" style={{ fontSize: 28, marginBottom: 32, textAlign: "center" }}>{cat.name}</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380, 1fr))", gap: 32 }}>
                {cat.cases.map((c, i) => (
                  <div key={i} className="case-card">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                      <div style={{ padding: 4 }}>
                        <div style={{ position: "relative" }}>
                          {c.before ? (
                            <img src={c.before} alt="Before" style={{ width: "100%", display: "block", borderRadius: "8px 0 0 0" }} />
                          ) : (
                            <Placeholder label="Before" />
                          )}
                          <span style={{
                            position: "absolute", bottom: 8, left: 8, background: "rgba(0,0,0,0.7)",
                            color: "white", fontSize: 11, fontWeight: 700, padding: "4px 10px",
                            borderRadius: 4, letterSpacing: 0.5, textTransform: "uppercase",
                          }}>Before</span>
                        </div>
                      </div>
                      <div style={{ padding: 4 }}>
                        <div style={{ position: "relative" }}>
                          {c.after ? (
                            <img src={c.after} alt="After" style={{ width: "100%", display: "block", borderRadius: "0 8px 0 0" }} />
                          ) : (
                            <Placeholder label="After" />
                          )}
                          <span style={{
                            position: "absolute", bottom: 8, right: 8, background: "var(--red)",
                            color: "white", fontSize: 11, fontWeight: 700, padding: "4px 10px",
                            borderRadius: 4, letterSpacing: 0.5, textTransform: "uppercase",
                          }}>After</span>
                        </div>
                      </div>
                    </div>
                    <div style={{ padding: "16px 20px" }}>
                      <p style={{ fontSize: 14, color: "var(--grey)", fontStyle: "italic" }}>{c.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{ marginTop: 48, textAlign: "center", padding: 32, background: "var(--white)", borderRadius: 12, boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
            <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.6, marginBottom: 4 }}>
              <em>Results are not guaranteed, may not be permanent, and can vary per individual. Some images are of models, not actual patients.</em>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--red)", padding: "60px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", color: "white" }}>
          <h2 className="serif" style={{ fontSize: 32, marginBottom: 12 }}>Ready for Your Transformation?</h2>
          <p style={{ fontSize: 16, opacity: 0.9, marginBottom: 28, lineHeight: 1.6 }}>
            Schedule a consultation to discuss how we can help you achieve your best smile.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://app.nexhealth.com/appt/ATA_Dental?lid=39277" target="_blank" rel="noopener noreferrer" style={{
              color: "white", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "14px 32px",
              border: "2px solid white", borderRadius: 6, transition: "all 0.3s",
            }}>Book — Orlando</a>
            <a href="https://app.nexhealth.com/appt/ATA_Dental?lid=39261" target="_blank" rel="noopener noreferrer" style={{
              color: "white", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "14px 32px",
              border: "2px solid white", borderRadius: 6, transition: "all 0.3s",
            }}>Book — Kissimmee</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#111111", color: "rgba(255,255,255,0.4)", padding: "28px 24px", fontSize: 13, textAlign: "center" }}>
        <p>© 2026 Ata Dental. All rights reserved. | <a href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "underline" }}>Back to Home</a></p>
      </footer>
    </div>
  );
}
