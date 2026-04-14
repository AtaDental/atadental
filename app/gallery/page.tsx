"use client";
import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const OFFICE_PHOTOS = [
  { src: "/OrlandoExterior.jpg", caption: "Orlando Office — Exterior", location: "Orlando" },
  { src: "/Interior1.jpg", caption: "State-of-the-Art Treatment Suite", location: "Interior" },
  { src: "/Interior2.jpg", caption: "Modern, Welcoming Environment", location: "Interior" },
  { src: "/CBCT.jpg", caption: "CBCT 3D Imaging Machine", location: "Technology" },
  { src: "/DentalLab.jpg", caption: "In-House Dental Lab", location: "Technology" },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"office" | "cases">("office");
  const [lightbox, setLightbox] = useState<null | { src: string; caption: string }>(null);

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
        .tab-btn {
          padding: 12px 32px; border-radius: 6px; font-size: 15px; font-weight: 600;
          cursor: pointer; transition: all 0.25s; font-family: inherit;
          border: 2px solid var(--grey-border); background: var(--white); color: var(--grey);
        }
        .tab-btn:hover { border-color: var(--red); color: var(--red); }
        .tab-btn.active { background: var(--red); color: white; border-color: var(--red); }
        .photo-card {
          border-radius: 12px; overflow: hidden; box-shadow: var(--shadow);
          cursor: pointer; transition: all 0.3s; position: relative;
        }
        .photo-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.15); }
        .photo-card img { width: 100%; height: 280px; object-fit: cover; display: block; }
        .photo-caption {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%);
          color: white; padding: 32px 16px 16px; font-size: 14px; font-weight: 500;
        }
        .lightbox-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.92); z-index: 9999;
          display: flex; align-items: center; justify-content: center; padding: 24px;
          cursor: pointer;
        }
        .lightbox-overlay img { max-width: 90vw; max-height: 85vh; object-fit: contain; border-radius: 8px; }
        .lightbox-close {
          position: absolute; top: 20px; right: 24px; color: white; font-size: 32px;
          cursor: pointer; line-height: 1; opacity: 0.8;
        }
        .lightbox-close:hover { opacity: 1; }
        .lightbox-caption {
          position: absolute; bottom: 24px; left: 0; right: 0; text-align: center;
          color: rgba(255,255,255,0.8); font-size: 15px; font-weight: 500;
        }
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
          .photo-card img { height: 220px !important; }
        }
      `}</style>

      <Nav activePage="gallery" />

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <span className="lightbox-close">✕</span>
          <img src={lightbox.src} alt={lightbox.caption} onClick={(e) => e.stopPropagation()} />
          <div className="lightbox-caption">{lightbox.caption}</div>
        </div>
      )}

      {/* Hero */}
      <section style={{ position: "relative", minHeight: 380, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", textAlign: "center" }}>
        <img src="/Interior1.jpg" alt="Ata Dental Interior" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.62)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto", padding: "100px 24px 80px" }}>
          <p style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Gallery</p>
          <h1 className="serif" style={{ fontSize: 48, color: "white", marginBottom: 16 }}>Inside Ata Dental</h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, maxWidth: 560, margin: "0 auto" }}>
            A look at our modern offices, skilled team, and the life-changing results we help our patients achieve every day.
          </p>
        </div>
      </section>

      {/* Tab switcher */}
      <section style={{ padding: "40px 24px 0", borderBottom: "1px solid var(--grey-border)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", gap: 12, justifyContent: "center", paddingBottom: 40 }}>
          <button className={`tab-btn ${activeTab === "office" ? "active" : ""}`} onClick={() => setActiveTab("office")}>
            🏥 Office & Team
          </button>
          <button className={`tab-btn ${activeTab === "cases" ? "active" : ""}`} onClick={() => setActiveTab("cases")}>
            ✨ Before & After Cases
          </button>
        </div>
      </section>

      {/* Office photos tab */}
      {activeTab === "office" && (
        <section style={{ padding: "64px 24px 80px", background: "var(--grey-bg)" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div className="gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {OFFICE_PHOTOS.map((photo) => (
                <div
                  key={photo.src}
                  className="photo-card"
                  onClick={() => setLightbox({ src: photo.src, caption: photo.caption })}
                >
                  <img src={photo.src} alt={photo.caption} />
                  <div className="photo-caption">{photo.caption}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Before & after tab */}
      {activeTab === "cases" && (
        <section style={{ padding: "64px 24px 80px", background: "var(--grey-bg)" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div style={{ textAlign: "center", padding: "64px 24px", background: "var(--white)", borderRadius: 16, boxShadow: "var(--shadow)" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>📷</div>
              <h2 className="serif" style={{ fontSize: 28, marginBottom: 12 }}>Patient Cases Coming Soon</h2>
              <p style={{ fontSize: 16, color: "var(--grey)", lineHeight: 1.7, maxWidth: 480, margin: "0 auto 28px" }}>
                We're curating our best before-and-after cases to showcase the life-changing results our team delivers. Check back soon.
              </p>
              <a href="/#about" style={{ color: "var(--red)", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>Meet Our Dentists →</a>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ background: "var(--red)", padding: "60px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", color: "white" }}>
          <h2 className="serif" style={{ fontSize: 32, marginBottom: 12 }}>Ready to Visit Us?</h2>
          <p style={{ fontSize: 16, opacity: 0.9, marginBottom: 28, lineHeight: 1.6 }}>
            See our offices in person — schedule your first appointment today.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://app.nexhealth.com/appt/ATA_Dental?lid=39277" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "14px 32px", border: "2px solid white", borderRadius: 6 }}>
              Book — Orlando
            </a>
            <a href="https://app.nexhealth.com/appt/ATA_Dental?lid=39261" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "14px 32px", border: "2px solid white", borderRadius: 6 }}>
              Book — Kissimmee
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
