"use client";

const LOGO_URL = "/ATADental_Logo_Horizontal_POS.png";
const BOOKING_URL = "https://app.nexhealth.com/appt/ATA_Dental?lid=39261";

const HOURS = [
  { day: "Monday", time: "7:30 AM – 5:00 PM" },
  { day: "Tuesday", time: "7:30 AM – 5:00 PM" },
  { day: "Wednesday", time: "7:30 AM – 5:00 PM" },
  { day: "Thursday", time: "7:30 AM – 5:00 PM" },
  { day: "Friday", time: "8:00 AM – 12:00 PM" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
];

const SERVICES = [
  "3D Imaging", "Same-Day Crowns", "Cosmetic Dentistry", "Dental Crowns",
  "Dental Implants", "Emergency Dental Treatment", "KOR Whitening",
  "Root Canal", "Clear Aligners", "Veneers",
];

export default function KissimmeeOfficePage() {
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
        .btn-outline {
          background: transparent; color: var(--red); border: 2px solid var(--red);
          padding: 14px 38px; border-radius: 6px; font-size: 16px; font-weight: 600;
          cursor: pointer; transition: all 0.3s; font-family: inherit; text-decoration: none; display: inline-block;
        }
        .btn-outline:hover { background: var(--red); color: white; }
        .card { background: var(--white); border-radius: 12px; padding: 32px; box-shadow: var(--shadow); }
      `}</style>

      {/* Nav */}
      <nav style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--grey-border)", padding: "0 24px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img src={LOGO_URL} alt="Ata Dental" style={{ height: 42 }} />
          </a>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <a href="/locations/orlando" style={{ color: "var(--grey)", textDecoration: "none", fontWeight: 600, fontSize: 14 }}>Orlando Office</a>
            <a href="/" style={{ color: "var(--grey)", textDecoration: "none", fontWeight: 600, fontSize: 14 }}>← Home</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "var(--black)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Our Locations</p>
          <h1 className="serif" style={{ fontSize: 48, color: "white", marginBottom: 16 }}>Kissimmee Office</h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, maxWidth: 600 }}>
            Located inside the Grand Oaks Pointe building off South John Young Parkway. Six dentists on staff with varying specialties for the most customized care possible.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Book an Appointment</a>
            <a href="tel:+14078705151" style={{ color: "white", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "16px 24px", border: "2px solid rgba(255,255,255,0.3)", borderRadius: 6, display: "inline-block" }}>
              📞 (407) 870-5151
            </a>
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          {/* Address & Directions */}
          <div className="card">
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>📍 Address</h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, marginBottom: 8 }}>
              3192 S. John Young Pkwy<br />Ste B<br />Kissimmee, FL 34746
            </p>
            <a href="https://www.google.com/maps?cid=7012736600002717895" target="_blank" rel="noopener noreferrer" style={{ color: "var(--red)", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
              Get Directions →
            </a>
            <div style={{ marginTop: 24, padding: 16, background: "var(--grey-bg)", borderRadius: 8, fontSize: 14, color: "var(--grey)", lineHeight: 1.6 }}>
              Plenty of parking available. Look for the Ata Dental sign on the sidewalk at the Grand Oaks Pointe building.
            </div>
          </div>

          {/* Hours */}
          <div className="card">
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>🕐 Hours of Operation</h2>
            {HOURS.map((h) => (
              <div key={h.day} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--grey-border)", fontSize: 15 }}>
                <span style={{ color: "var(--grey)" }}>{h.day}</span>
                <span style={{ fontWeight: 600, color: h.time === "Closed" ? "var(--grey-light)" : "var(--black)" }}>{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency */}
      <section style={{ background: "var(--red-light)", padding: "48px 24px", borderTop: "1px solid rgba(196,18,48,0.12)", borderBottom: "1px solid rgba(196,18,48,0.12)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          <div style={{ fontSize: 36 }}>🚨</div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>Emergency Dental Care</h3>
            <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.6 }}>
              We maintain an after-hours emergency phone line for urgent dental needs. <em>Hablamos Español.</em>
            </p>
          </div>
          <a href="tel:+14078705151" className="btn-primary" style={{ whiteSpace: "nowrap" }}>Call (407) 870-5151</a>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: "var(--grey-bg)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 className="serif" style={{ fontSize: 32, marginBottom: 8 }}>Services at Our Kissimmee Office</h2>
          <div style={{ width: 60, height: 3, background: "var(--red)", borderRadius: 2, marginBottom: 32 }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
            {SERVICES.map((svc) => (
              <div key={svc} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 20px", background: "var(--white)", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <span style={{ color: "var(--red)", fontSize: 18 }}>✓</span>
                <span style={{ fontSize: 15, fontWeight: 500 }}>{svc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affordability */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 className="serif" style={{ fontSize: 32, marginBottom: 8 }}>Affordable Care</h2>
          <div style={{ width: 60, height: 3, background: "var(--red)", borderRadius: 2, marginBottom: 32 }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            <div className="card" style={{ borderTop: "3px solid var(--red)" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Membership Plan</h3>
              <p style={{ fontSize: 14, color: "var(--grey)", lineHeight: 1.6, marginBottom: 16 }}>$300/year covers cleanings, exams, X-rays, fluoride, and 20% off other procedures.</p>
              <a href="/membership" style={{ color: "var(--red)", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>Learn More →</a>
            </div>
            <div className="card" style={{ borderTop: "3px solid var(--red)" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Cherry Financing</h3>
              <p style={{ fontSize: 14, color: "var(--grey)", lineHeight: 1.6, marginBottom: 16 }}>Flexible payment plans with 0% APR options. No hard credit checks.</p>
              <a href="/financing" style={{ color: "var(--red)", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>Learn More →</a>
            </div>
            <div className="card" style={{ borderTop: "3px solid var(--red)" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Zelle Discount</h3>
              <p style={{ fontSize: 14, color: "var(--grey)", lineHeight: 1.6, marginBottom: 16 }}>1% discount for patients who pay with convenient, immediate Zelle digital payment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--black)", padding: "60px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", color: "white" }}>
          <h2 className="serif" style={{ fontSize: 32, marginBottom: 12 }}>Ready to Visit Us?</h2>
          <p style={{ fontSize: 16, opacity: 0.75, marginBottom: 28, lineHeight: 1.6 }}>Book your appointment online or give us a call.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Online — Kissimmee</a>
            <a href="/locations/orlando" className="btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>View Orlando Office</a>
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
