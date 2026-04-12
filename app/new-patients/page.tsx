import Nav from "../components/Nav";

const BOOKING_URL_ORLANDO = "https://app.nexhealth.com/appt/ATA_Dental?lid=39277";
const BOOKING_URL_KISSIMMEE = "https://app.nexhealth.com/appt/ATA_Dental?lid=39261";

const WHAT_TO_BRING = [
  "Valid photo ID (driver's license or passport)",
  "Insurance card(s), if applicable",
  "List of current medications and dosages",
  "Dental X-rays from previous provider, if available",
  "Completed new patient forms (see below)",
  "Payment method for any co-pays or fees",
];

const WHAT_TO_EXPECT = [
  { step: "1", title: "Check-In & Paperwork", desc: "Arrive 10–15 minutes early to complete any remaining intake forms. Our front desk team will confirm your insurance and answer any questions." },
  { step: "2", title: "Digital X-Rays & 3D Imaging", desc: "We use digital radiography and, when appropriate, our cone beam CT scanner to get a full picture of your oral health with minimal radiation exposure." },
  { step: "3", title: "Comprehensive Exam", desc: "Your dentist will perform a thorough examination of your teeth, gums, bite, and jaw — checking for decay, gum disease, and any areas of concern." },
  { step: "4", title: "Treatment Discussion", desc: "We'll walk you through our findings, explain any recommended treatment, and give you a clear cost estimate before scheduling anything." },
];

export default function NewPatientsPage() {
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
        .card { background: var(--white); border-radius: 12px; padding: 32px; box-shadow: var(--shadow); }
        .btn-primary {
          background: var(--red); color: white; border: none; padding: 16px 40px;
          border-radius: 6px; font-size: 16px; font-weight: 600; cursor: pointer;
          transition: all 0.3s; font-family: inherit; text-decoration: none; display: inline-block;
        }
        .btn-primary:hover { background: var(--red-dark); transform: translateY(-1px); }
        .btn-outline {
          background: transparent; color: var(--red); border: 2px solid var(--red);
          padding: 14px 36px; border-radius: 6px; font-size: 16px; font-weight: 600;
          cursor: pointer; transition: all 0.3s; font-family: inherit; text-decoration: none; display: inline-block;
        }
        .btn-outline:hover { background: var(--red); color: white; }
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; }
          h1 { font-size: 36px !important; }
        }
      `}</style>

      <Nav activePage="new-patients" />

      {/* Hero */}
      <section style={{ background: "var(--black)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Welcome</p>
          <h1 className="serif" style={{ fontSize: 50, color: "white", marginBottom: 16 }}>New Patients</h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, maxWidth: 600 }}>
            We're glad you found us. Here's everything you need to know before your first visit — from what to bring to what to expect when you arrive.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href={BOOKING_URL_ORLANDO} target="_blank" rel="noopener noreferrer" className="btn-primary">Book — Orlando</a>
            <a href={BOOKING_URL_KISSIMMEE} target="_blank" rel="noopener noreferrer" className="btn-primary">Book — Kissimmee</a>
          </div>
        </div>
      </section>

      {/* What to expect steps */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>Your First Visit</p>
          <h2 className="serif" style={{ fontSize: 38, marginBottom: 8 }}>What to Expect</h2>
          <div style={{ width: 60, height: 3, background: "var(--red)", borderRadius: 2, marginBottom: 40 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {WHAT_TO_EXPECT.map((item) => (
              <div key={item.step} style={{ display: "flex", gap: 24, alignItems: "flex-start", padding: "28px 32px", background: "var(--grey-bg)", borderRadius: 12, borderLeft: "4px solid var(--red)" }}>
                <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: "50%", background: "var(--red)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 18 }}>{item.step}</div>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to bring + Insurance */}
      <section style={{ padding: "0 24px 80px" }}>
        <div className="two-col" style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
          <div className="card">
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>📋 What to Bring</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {WHAT_TO_BRING.map((item) => (
                <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ color: "var(--red)", fontWeight: 700, fontSize: 16, flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div className="card" style={{ borderTop: "3px solid var(--red)" }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>🦷 Insurance</h2>
              <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.7, marginBottom: 16 }}>
                We accept most major dental insurance plans including Delta Dental, Cigna, Aetna, MetLife, United Concordia, and more.
              </p>
              <a href="/insurance" style={{ color: "var(--red)", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>View All Accepted Insurances →</a>
            </div>
            <div className="card" style={{ borderTop: "3px solid var(--red)" }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>💳 No Insurance?</h2>
              <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.7, marginBottom: 16 }}>
                We offer our in-house Membership Plan and flexible financing through Cherry and CareCredit to keep care affordable for everyone.
              </p>
              <a href="/membership" style={{ color: "var(--red)", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>View Membership Plan →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Contact */}
      <section style={{ background: "var(--grey-bg)", padding: "64px 24px", borderTop: "1px solid var(--grey-border)" }}>
        <div className="two-col" style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
          <div className="card">
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>📍 Orlando Office</h3>
            <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.8, marginBottom: 4 }}>13512 S. John Young Pkwy<br />Orlando, FL 32837</p>
            <a href="tel:+14078576501" style={{ color: "var(--red)", fontWeight: 700, fontSize: 16, textDecoration: "none", display: "block", marginBottom: 16 }}>(407) 857-6501</a>
            <p style={{ fontSize: 13, color: "var(--grey-light)", lineHeight: 1.8 }}>Mon–Thu: 8:00 AM – 5:00 PM<br />Fri: 8:00 AM – 12:00 PM</p>
          </div>
          <div className="card">
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>📍 Kissimmee Office</h3>
            <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.8, marginBottom: 4 }}>3192 S. John Young Pkwy, Ste B<br />Kissimmee, FL 34746</p>
            <a href="tel:+14078705151" style={{ color: "var(--red)", fontWeight: 700, fontSize: 16, textDecoration: "none", display: "block", marginBottom: 16 }}>(407) 870-5151</a>
            <p style={{ fontSize: 13, color: "var(--grey-light)", lineHeight: 1.8 }}>Mon–Thu: 7:30 AM – 5:00 PM<br />Fri: 8:00 AM – 12:00 PM</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--red)", padding: "60px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", color: "white" }}>
          <h2 className="serif" style={{ fontSize: 32, marginBottom: 12 }}>Ready to Schedule?</h2>
          <p style={{ fontSize: 16, opacity: 0.9, marginBottom: 28, lineHeight: 1.6 }}>Book your first appointment online — it only takes a minute.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={BOOKING_URL_ORLANDO} target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "14px 32px", border: "2px solid white", borderRadius: 6 }}>Book — Orlando</a>
            <a href={BOOKING_URL_KISSIMMEE} target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "14px 32px", border: "2px solid white", borderRadius: 6 }}>Book — Kissimmee</a>
          </div>
        </div>
      </section>

      <footer style={{ background: "#111111", color: "rgba(255,255,255,0.4)", padding: "28px 24px", fontSize: 13, textAlign: "center" }}>
        <p>© 2026 Ata Dental. All rights reserved. | <a href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "underline" }}>Back to Home</a></p>
      </footer>
    </div>
  );
}
