"use client";
import { useState, useEffect, useRef } from "react";

const LOGO_URL = "/ATADental_Logo_Horizontal_POS.png";
const BOOKING_URL = "https://app.nexhealth.com/appt/ATA_Dental?lid=39277";

const MORE_LINKS = [
  { label: "Insurance & Financing", href: "/insurance" },
  { label: "Membership Plan", href: "/membership" },
  { label: "New Patients", href: "/new-patients" },
  { label: "Gallery", href: "/gallery" },
  { label: "Guarantee of Workmanship", href: "/guarantee" },
];

const LOCATION_LINKS = [
  { label: "Orlando Office", href: "/locations/orlando" },
  { label: "Kissimmee Office", href: "/locations/kissimmee" },
];

export default function Nav({ activePage }: { activePage?: string }) {
  const [moreOpen, setMoreOpen] = useState(false);
  const [locOpen, setLocOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const locRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false);
      if (locRef.current && !locRef.current.contains(e.target as Node)) setLocOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Libre+Franklin:wght@300;400;500;600;700&display=swap');
        :root {
          --red: #c41230; --red-dark: #a00f28; --red-light: #fdf0f2;
          --black: #1a1a1a; --grey: #555555; --grey-light: #888888;
          --grey-bg: #f5f5f5; --grey-border: #e0e0e0; --white: #ffffff;
        }
        .nav-link-shared {
          color: var(--grey); text-decoration: none; font-weight: 600;
          font-size: 14px; transition: color 0.2s; background: none;
          border: none; cursor: pointer; font-family: inherit; padding: 0;
          display: flex; align-items: center; gap: 4px;
        }
        .nav-link-shared:hover, .nav-link-shared.active { color: var(--red); }
        .nav-dropdown {
          position: absolute; top: calc(100% + 8px); background: white;
          border: 1px solid var(--grey-border); border-radius: 10px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12); min-width: 200px;
          z-index: 200; overflow: hidden;
        }
        .nav-dropdown a {
          display: block; padding: 12px 18px; font-size: 14px; font-weight: 500;
          color: var(--grey); text-decoration: none; transition: all 0.15s;
          border-bottom: 1px solid var(--grey-border);
        }
        .nav-dropdown a:last-child { border-bottom: none; }
        .nav-dropdown a:hover { background: var(--red-light); color: var(--red); }
        .btn-nav-primary {
          background: var(--red); color: white; border: none; padding: 10px 22px;
          border-radius: 6px; font-size: 14px; font-weight: 600; cursor: pointer;
          transition: all 0.3s; font-family: inherit; text-decoration: none;
          display: inline-block; white-space: nowrap;
        }
        .btn-nav-primary:hover { background: var(--red-dark); }
        .hamburger-line {
          display: block; width: 22px; height: 2px;
          background: var(--grey); border-radius: 2px; transition: all 0.3s;
        }
        .mobile-menu {
          position: fixed; top: 72px; left: 0; right: 0; bottom: 0;
          background: white; z-index: 150; overflow-y: auto;
          border-top: 1px solid var(--grey-border);
          padding: 16px 24px 40px;
        }
        .mobile-menu a, .mobile-menu button {
          display: block; width: 100%; text-align: left; padding: 14px 0;
          border-bottom: 1px solid var(--grey-border); font-size: 16px;
          font-weight: 600; color: var(--grey); text-decoration: none;
          background: none; border-left: none; border-right: none; border-top: none;
          cursor: pointer; font-family: inherit;
        }
        .mobile-menu a:hover, .mobile-menu button:hover { color: var(--red); }
        .mobile-menu .mobile-sub a {
          padding: 10px 0 10px 20px; font-size: 14px; font-weight: 500;
          color: var(--grey-light); border-bottom: 1px solid var(--grey-border);
        }
        .mobile-menu .mobile-section-label {
          font-size: 11px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: var(--red); padding: 20px 0 6px;
          display: block; border-bottom: none;
        }
        @media (min-width: 768px) { .mobile-only { display: none !important; } }
        @media (max-width: 767px) { .desktop-only { display: none !important; } }
      `}</style>

      <nav style={{
        background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--grey-border)", padding: "0 24px",
        position: "sticky", top: 0, zIndex: 100,
        fontFamily: "'Libre Franklin', 'Segoe UI', sans-serif",
      }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>

          {/* Logo */}
          <a href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
            <img src={LOGO_URL} alt="Ata Dental" style={{ height: 42 }} />
          </a>

          {/* Desktop nav */}
          <div className="desktop-only" style={{ display: "flex", gap: 28, alignItems: "center" }}>

            <a href="/" className={`nav-link-shared ${activePage === "home" ? "active" : ""}`}>Home</a>
            <a href="/services" className={`nav-link-shared ${activePage === "services" ? "active" : ""}`}>Services</a>
            <a href="/team" className={`nav-link-shared ${activePage === "team" ? "active" : ""}`}>Our Team</a>

            {/* Locations dropdown */}
            <div ref={locRef} style={{ position: "relative" }}>
              <button className={`nav-link-shared ${activePage === "locations" ? "active" : ""}`} onClick={() => { setLocOpen(!locOpen); setMoreOpen(false); }}>
                Locations <span style={{ fontSize: 10, opacity: 0.7 }}>{locOpen ? "▲" : "▼"}</span>
              </button>
              {locOpen && (
                <div className="nav-dropdown">
                  {LOCATION_LINKS.map(l => <a key={l.href} href={l.href} onClick={() => setLocOpen(false)}>{l.label}</a>)}
                </div>
              )}
            </div>

            {/* More dropdown */}
            <div ref={moreRef} style={{ position: "relative" }}>
              <button className="nav-link-shared" onClick={() => { setMoreOpen(!moreOpen); setLocOpen(false); }}>
                More <span style={{ fontSize: 10, opacity: 0.7 }}>{moreOpen ? "▲" : "▼"}</span>
              </button>
              {moreOpen && (
                <div className="nav-dropdown" style={{ right: 0 }}>
                  {MORE_LINKS.map(l => <a key={l.href} href={l.href} onClick={() => setMoreOpen(false)}>{l.label}</a>)}
                </div>
              )}
            </div>

            <a href="/contact" className={`nav-link-shared ${activePage === "contact" ? "active" : ""}`}>Contact</a>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-nav-primary">Book Appointment</a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-only"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5 }}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line" style={{ transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span className="hamburger-line" style={{ opacity: mobileOpen ? 0 : 1 }} />
            <span className="hamburger-line" style={{ transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu mobile-only">
          <span className="mobile-section-label">Navigate</span>
          <a href="/" onClick={() => setMobileOpen(false)}>Home</a>
          <a href="/services" onClick={() => setMobileOpen(false)}>Services</a>
          <a href="/team" onClick={() => setMobileOpen(false)}>Our Team</a>
          <a href="/contact" onClick={() => setMobileOpen(false)}>Contact</a>

          <span className="mobile-section-label">Locations</span>
          <div className="mobile-sub">
            {LOCATION_LINKS.map(l => <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>{l.label}</a>)}
          </div>

          <span className="mobile-section-label">Resources</span>
          <div className="mobile-sub">
            {MORE_LINKS.map(l => <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>{l.label}</a>)}
          </div>

          <div style={{ marginTop: 24 }}>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-nav-primary" style={{ display: "block", textAlign: "center", padding: "14px 24px", fontSize: 16 }}>
              Book an Appointment
            </a>
          </div>
        </div>
      )}
    </>
  );
}
