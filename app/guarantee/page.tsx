import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "Guarantee of Workmanship | Ata Dental",
  description:
    "Ata Dental stands behind our work. Learn about our material defect warranty covering implants, crowns, veneers, root canals, dentures, fillings and more.",
};

const WARRANTIES = [
  { item: "Implant Fixture (Root Portion)", years: "7 years" },
  { item: "Crowns / Veneers / Onlays / Bridgework", years: "5 years" },
  { item: "Root Canal Treatment", years: "3 years", note: "if crown completed within 30 days" },
  { item: "Partial Dentures / Overdentures / Full Dentures", years: "3 years" },
  { item: "Composite Fillings", years: "3 years" },
  { item: "Occlusal Guards / Retainers / Whitening Trays", years: "2 years" },
];

const RESPONSIBILITIES = [
  "Follow the recommended recall schedule for in-office cleanings and home hygiene care.",
  "Have a periodic examination with X-rays at least once every 13 months.",
  "Avoid accidental damage (dropping or physically damaging a removable prosthesis).",
  "Complete your treatment plan within 13 months — decay can re-infect completed work, and missing back teeth can cause front teeth to fail prematurely.",
];

export default function GuaranteePage() {
  return (
    <div>
      <style>{`
        .g-hero-h1 { font-size: 44px; }
        .g-hero { padding: 80px 24px; }
        .g-section { padding: 72px 24px; }
        .g-section-h2 { font-size: 32px; }
        .warranty-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .warranty-card { background: white; border: 1px solid var(--border); border-radius: 8px; padding: 24px; }
        .warranty-years { color: var(--red); font-weight: 700; font-size: 22px; margin-bottom: 6px; }
        .warranty-item { font-size: 16px; font-weight: 600; margin-bottom: 4px; }
        .warranty-note { font-size: 13px; color: var(--grey); font-style: italic; }
        .resp-list { list-style: none; padding: 0; margin: 0; }
        .resp-list li { display: flex; gap: 14px; align-items: flex-start; margin-bottom: 16px; font-size: 16px; line-height: 1.6; }
        .check { color: var(--red); font-weight: 700; font-size: 18px; line-height: 1.6; }
        .void-box { background: var(--grey-bg); border-left: 4px solid var(--red); padding: 24px 28px; border-radius: 4px; }
        @media (max-width: 900px) {
          .warranty-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .g-hero { padding: 56px 20px !important; }
          .g-hero-h1 { font-size: 30px !important; }
          .g-section { padding: 48px 20px !important; }
          .g-section-h2 { font-size: 26px !important; }
          .warranty-card { padding: 20px !important; }
          .warranty-years { font-size: 20px !important; }
          .void-box { padding: 18px 20px !important; }
          .resp-list li { font-size: 15px !important; }
        }
      `}</style>

      <Nav />

      {/* Hero */}
      <section className="g-hero" style={{ background: "var(--black)", textAlign: "center" }}>
        <p style={{ color: "var(--red)", fontWeight: 600, letterSpacing: 2, fontSize: 14, marginBottom: 12, textTransform: "uppercase" }}>
          Our Promise to You
        </p>
        <h1 className="serif g-hero-h1" style={{ color: "white", marginBottom: 16 }}>
          Guarantee of Workmanship
        </h1>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 17, maxWidth: 720, margin: "0 auto", lineHeight: 1.6 }}>
          We stand behind our treatment recommendations and our workmanship. Your dental work is warrantied against material defects from the original completion date.
        </p>
      </section>

      {/* Warranty periods */}
      <section className="g-section">
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 className="serif g-section-h2" style={{ marginBottom: 8, textAlign: "center" }}>Warranty Periods</h2>
          <div style={{ width: 60, height: 3, background: "var(--red)", borderRadius: 2, margin: "0 auto 40px" }} />

          <div className="warranty-grid">
            {WARRANTIES.map((w, i) => (
              <div key={i} className="warranty-card">
                <div className="warranty-years">{w.years}</div>
                <div className="warranty-item">{w.item}</div>
                {w.note && <div className="warranty-note">{w.note}</div>}
              </div>
            ))}
          </div>

          <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.7, marginTop: 32, textAlign: "center", maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
            Should any work we perform fail before the warrantied date, we will — at our discretion — issue a refund or account credit toward future treatment.
          </p>
        </div>
      </section>

      {/* Patient responsibilities */}
      <section className="g-section" style={{ background: "var(--grey-bg)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 className="serif g-section-h2" style={{ marginBottom: 8, textAlign: "center" }}>Patient Responsibilities</h2>
          <div style={{ width: 60, height: 3, background: "var(--red)", borderRadius: 2, margin: "0 auto 32px" }} />
          <p style={{ fontSize: 16, color: "var(--grey)", lineHeight: 1.7, marginBottom: 32, textAlign: "center" }}>
            We make this guarantee in good faith. To keep your warranty active, patients agree to the following:
          </p>
          <ul className="resp-list">
            {RESPONSIBILITIES.map((r, i) => (
              <li key={i}>
                <span className="check">✓</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Additional treatment note */}
      <section className="g-section">
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 className="serif g-section-h2" style={{ marginBottom: 20 }}>Additional Treatment</h2>
          <p style={{ fontSize: 16, color: "var(--grey)", lineHeight: 1.8 }}>
            Sometimes teeth require additional treatment beyond what was originally performed. For example, a tooth may have a crown or filling and later need root canal treatment. While what was already paid for is covered under our guarantee, any additional treatment needed is the patient's responsibility.
          </p>
        </div>
      </section>

      {/* Exclusions */}
      <section className="g-section" style={{ background: "var(--grey-bg)", paddingTop: 0 }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 className="serif g-section-h2" style={{ marginBottom: 20 }}>When the Warranty Does Not Apply</h2>
          <div className="void-box">
            <p style={{ fontSize: 15, color: "var(--text)", lineHeight: 1.7, marginBottom: 14 }}>
              The warranty is void in the event of severe general illness that affects your oral condition, including but not limited to:
            </p>
            <ul style={{ margin: 0, paddingLeft: 20, fontSize: 15, color: "var(--text)", lineHeight: 1.9 }}>
              <li>Severe diabetes</li>
              <li>Uncontrolled epilepsy</li>
              <li>Severe osteoporosis</li>
              <li>Radiation therapy or chemotherapy</li>
              <li>Traumatic injury to the head</li>
            </ul>
            <p style={{ fontSize: 15, color: "var(--text)", lineHeight: 1.7, marginTop: 14 }}>
              The warranty also does not apply if the doctor specifically states that a treatment is not recommended and/or not guaranteed to last the length of the warranty period.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--red)", padding: "60px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", color: "white" }}>
          <h2 className="serif" style={{ fontSize: 28, marginBottom: 12 }}>Questions About Our Guarantee?</h2>
          <p style={{ fontSize: 16, opacity: 0.9, marginBottom: 24, lineHeight: 1.6 }}>
            Our office manager, clinical manager, or your treating doctor are happy to walk you through the details.
          </p>
          <div className="cta-btns" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+14078576501" className="cta-btn" style={{ color: "white", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "12px 24px", border: "2px solid rgba(255,255,255,0.5)", borderRadius: 6 }}>
              📞 Orlando: (407) 857-6501
            </a>
            <a href="tel:+14078705151" className="cta-btn" style={{ color: "white", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "12px 24px", border: "2px solid rgba(255,255,255,0.5)", borderRadius: 6 }}>
              📞 Kissimmee: (407) 870-5151
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
