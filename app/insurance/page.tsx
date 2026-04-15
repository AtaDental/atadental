import Nav from "../components/Nav";
import Footer from "../components/Footer";

const BOOKING_URL = "https://app.nexhealth.com/appt/ATA_Dental?lid=39277";

const CARRIERS = [
  { name: "Aetna", status: "In-Network (Direct Contract)" },
  { name: "Always Care", status: "In-Network through Connection Dental (Classic PPO Only)" },
  { name: "Ameritas", status: "In-Network through Connection Dental (Classic PPO Only)" },
  { name: "Anthem / BCBS", status: "In-Network through Connection Dental (300/Complete only)" },
  { name: "Cigna", status: "In-Network through Connection Dental (DPPO Plan only)" },
  { name: "Delta Dental", status: "In-Network Direct Contract" },
  { name: "DNOA / BCBS of TX, IL, NM, OK", status: "In-Network through Connection Dental (DPPO Plan only)" },
  { name: "Florida Blue", status: "In-Network Direct Contract – ACCESS MAX Only" },
  { name: "Florida Combined Life", status: "In-Network Direct Contract – ACCESS MAX Only" },
  { name: "GEHA", status: "In-Network through Connection Dental" },
  { name: "Guardian", status: "In-Network through Connection Dental (DentalGuard Preferred only)" },
  { name: "Humana", status: "In-Network through Connection Dental (Medicare Advantage plans in-network)" },
  { name: "Lincoln Financial", status: "In-Network through United HealthCare (UHC)" },
  { name: "MetLife", status: "In-Network through Connection Dental (PDP Plus Only)" },
  { name: "Principal", status: "In-Network through Connection Dental" },
  { name: "United Concordia (Alliance)", status: "In-Network through Connection Dental (Elite Plus only)" },
  { name: "United HealthCare (UHC)", status: "In-Network Direct Contract on select PPO plans" },
  { name: "Connection Dental", status: "Direct Contract" },
  { name: "DenteMax", status: "In-Network through Connection Dental" },
];

const OUT_OF_NETWORK = [
  "United Concordia (Military Plans)",
  "Zelis (Maverest/Stratose)",
  "DHA (Sunlife/Assurant)",
  "Horizon",
];

export default function InsurancePage() {
  return (
    <div style={{ fontFamily: "'Libre Franklin', 'Segoe UI', sans-serif", color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .serif { font-family: 'DM Serif Display', Georgia, serif; }
        .btn-primary {
          background: var(--red); color: white; border: none; padding: 14px 32px;
          border-radius: 6px; font-size: 15px; font-weight: 600; cursor: pointer;
          transition: all 0.3s; font-family: inherit; text-decoration: none; display: inline-block;
        }
        .btn-primary:hover { background: var(--red-dark); transform: translateY(-1px); }
        .btn-outline {
          background: transparent; color: var(--red); border: 2px solid var(--red);
          padding: 12px 28px; border-radius: 6px; font-size: 15px; font-weight: 600;
          cursor: pointer; transition: all 0.3s; font-family: inherit; text-decoration: none; display: inline-block;
        }
        .btn-outline:hover { background: var(--red); color: white; }
        .carrier-row:nth-child(even) { background: var(--grey-bg); }
        .carrier-row:nth-child(odd) { background: white; }

        /* Responsive layout classes */
        .ins-hero { padding: 80px 24px 72px; }
        .ins-hero-h1 { font-size: 52px; }
        .ins-hero-sub { font-size: 18px; }
        .ins-section { padding: 72px 24px; }
        .ins-section-h2 { font-size: 38px; }
        .ins-kicker { font-size: 13px; letter-spacing: 2px; }
        .ways-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        .cc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
        .cc-h2 { font-size: 34px; }
        .cc-card { background: white; border-radius: 14px; padding: 36px 32px; box-shadow: 0 4px 24px rgba(0,0,0,0.07); }
        .carrier-grid { display: grid; grid-template-columns: 1fr 2fr; }
        .hmo-row { display: flex; gap: 32px; align-items: center; flex-wrap: wrap; }
        .cta-h2 { font-size: 36px; }

        @media (max-width: 900px) {
          .ways-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          .cc-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 768px) {
          .ins-hero { padding: 56px 20px !important; }
          .ins-hero-h1 { font-size: 32px !important; line-height: 1.2 !important; }
          .ins-hero-sub { font-size: 15px !important; }
          .ins-section { padding: 56px 20px !important; }
          .ins-section-h2 { font-size: 26px !important; }
          .cc-h2 { font-size: 24px !important; }
          .cc-card { padding: 24px 22px !important; }
          .carrier-grid { padding: 14px 16px !important; }
          .carrier-grid span { font-size: 13px !important; }
          .hmo-row { gap: 20px !important; }
          .hmo-row h3 { font-size: 19px !important; }
          .cta-h2 { font-size: 26px !important; }
          .btn-primary, .btn-outline { padding: 12px 22px !important; font-size: 14px !important; }
        }
      `}</style>

      <Nav activePage="insurance" />

      {/* Hero */}
      <section className="ins-hero" style={{ background: "var(--black)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p className="ins-kicker" style={{ color: "var(--red)", fontWeight: 600, textTransform: "uppercase", marginBottom: 16 }}>Making Care Accessible</p>
          <h1 className="serif ins-hero-h1" style={{ color: "white", lineHeight: 1.15, marginBottom: 20, maxWidth: 700 }}>
            Insurance & Affordable Care Options
          </h1>
          <p className="ins-hero-sub" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.75, maxWidth: 620, marginBottom: 36 }}>
            We accept most major insurance plans and offer flexible financing and membership options to make sure cost never stands between you and a healthy smile.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Book an Appointment</a>
            <a href="tel:+14078576501" style={{ color: "white", textDecoration: "none", fontWeight: 600, fontSize: 15, padding: "14px 24px", border: "2px solid rgba(255,255,255,0.25)", borderRadius: 6, display: "inline-block" }}>
              📞 Call Us With Questions
            </a>
          </div>
        </div>
      </section>

      {/* Options overview */}
      <section className="ins-section">
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p className="ins-kicker" style={{ color: "var(--red)", fontWeight: 600, textTransform: "uppercase", marginBottom: 12 }}>Your Options</p>
          <h2 className="serif ins-section-h2" style={{ marginBottom: 8 }}>Ways to Pay</h2>
          <div style={{ width: 56, height: 3, background: "var(--red)", borderRadius: 2, marginBottom: 40 }} />

          <div className="ways-grid">
            {/* Insurance */}
            <div style={{ background: "white", border: "1px solid var(--grey-border)", borderRadius: 14, padding: "36px 28px", borderTop: "4px solid var(--red)" }}>
              <span style={{ fontSize: 36, display: "block", marginBottom: 16 }}>🏥</span>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>Dental Insurance</h3>
              <p style={{ fontSize: 14, color: "var(--grey)", lineHeight: 1.75, marginBottom: 20 }}>
                We accept most PPO and indemnity plans. Our front desk team will verify your benefits and maximize your coverage before your appointment.
              </p>
              <a href="#insurance" style={{ color: "var(--red)", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>View accepted plans ↓</a>
            </div>

            {/* Cherry */}
            <div style={{ background: "white", border: "1px solid var(--grey-border)", borderRadius: 14, padding: "36px 28px", borderTop: "4px solid var(--red)" }}>
              <span style={{ fontSize: 36, display: "block", marginBottom: 16 }}>🍒</span>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>Cherry Financing</h3>
              <p style={{ fontSize: 14, color: "var(--grey)", lineHeight: 1.75, marginBottom: 20 }}>
                Flexible monthly payment plans with 0% APR options. No hard credit check, fast approval, and no hidden fees. Split any treatment into easy payments.
              </p>
              <a href="/financing" style={{ color: "var(--red)", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>Learn more →</a>
            </div>

            {/* Membership */}
            <div style={{ background: "white", border: "1px solid var(--grey-border)", borderRadius: 14, padding: "36px 28px", borderTop: "4px solid var(--red)" }}>
              <span style={{ fontSize: 36, display: "block", marginBottom: 16 }}>🌟</span>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>Membership Plan</h3>
              <p style={{ fontSize: 14, color: "var(--grey)", lineHeight: 1.75, marginBottom: 20 }}>
                No insurance? Our in-house plan is $300/year and covers 2 cleanings, 2 exams, X-rays, fluoride, and 20% off all other treatments. No waiting periods.
              </p>
              <a href="/membership" style={{ color: "var(--red)", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>Learn more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CareCredit */}
      <section className="ins-section" style={{ background: "var(--grey-bg)" }}>
        <div className="cc-grid" style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div>
            <p className="ins-kicker" style={{ color: "var(--red)", fontWeight: 600, textTransform: "uppercase", marginBottom: 12 }}>Also Accepted</p>
            <h2 className="serif cc-h2" style={{ marginBottom: 16 }}>CareCredit Healthcare Financing</h2>
            <div style={{ width: 56, height: 3, background: "var(--red)", borderRadius: 2, marginBottom: 24 }} />
            <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.8, marginBottom: 20 }}>
              CareCredit is a healthcare credit card designed specifically for medical and dental expenses. It offers promotional financing options including extended payment plans with low monthly payments — making larger procedures much more manageable.
            </p>
            <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.8, marginBottom: 28 }}>
              Apply directly through CareCredit's website for either of our office locations. Approval is typically fast, and you can use it right away.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="https://www.carecredit.com/apply" target="_blank" rel="noopener noreferrer" className="btn-primary">Apply — Orlando</a>
              <a href="https://www.carecredit.com/apply" target="_blank" rel="noopener noreferrer" className="btn-outline">Apply — Kissimmee</a>
            </div>
          </div>
          <div className="cc-card">
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>CareCredit Benefits</h3>
            {[
              "Extended payment plans available",
              "Promotional 0% APR periods on qualifying purchases",
              "Use for any treatment, any amount",
              "Accepted at both Orlando and Kissimmee offices",
              "Apply online in minutes",
              "Reusable — use it again for future visits",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: "1px solid var(--grey-border)", fontSize: 14 }}>
                <span style={{ color: "var(--red)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={{ color: "var(--grey)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance section */}
      <section id="insurance" className="ins-section">
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p className="ins-kicker" style={{ color: "var(--red)", fontWeight: 600, textTransform: "uppercase", marginBottom: 12 }}>Coverage Details</p>
          <h2 className="serif ins-section-h2" style={{ marginBottom: 8 }}>Accepted Insurance Plans</h2>
          <div style={{ width: 56, height: 3, background: "var(--red)", borderRadius: 2, marginBottom: 24 }} />
          <p style={{ fontSize: 16, color: "var(--grey)", lineHeight: 1.8, maxWidth: 760, marginBottom: 40 }}>
            We accept all indemnity (PPO) insurance plans — meaning you can choose <strong>any dentist</strong> you want. We are not in-network providers with HMO/DMO plans, but we welcome those patients as self-pay and highly recommend our <a href="/membership" style={{ color: "var(--red)", fontWeight: 600 }}>Membership Plan</a> to help reduce costs. If you don't see your carrier below, call us — most out-of-network plans still have benefits we can work with.
          </p>

          {/* Carrier table */}
          <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid var(--grey-border)", marginBottom: 40 }}>
            <div className="carrier-grid" style={{ background: "var(--black)", padding: "14px 24px" }}>
              <span style={{ color: "white", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1 }}>Carrier</span>
              <span style={{ color: "white", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1 }}>Network Status</span>
            </div>
            {CARRIERS.map((c) => (
              <div key={c.name} className="carrier-row carrier-grid" style={{ padding: "14px 24px", alignItems: "center" }}>
                <span style={{ fontWeight: 600, fontSize: 14 }}>{c.name}</span>
                <span style={{ fontSize: 14, color: "var(--grey)" }}>{c.status}</span>
              </div>
            ))}
          </div>

          {/* Out of network */}
          <div style={{ background: "var(--grey-bg)", borderRadius: 12, padding: "28px 32px", marginBottom: 16 }}>
            <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 16 }}>Out-of-Network Carriers</h3>
            <p style={{ fontSize: 14, color: "var(--grey)", lineHeight: 1.7, marginBottom: 16 }}>
              For the following carriers, we are out of network but will still honor their fee schedules where possible. We encourage patients with these plans to call us to discuss their options.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {OUT_OF_NETWORK.map((c) => (
                <span key={c} style={{ background: "white", border: "1px solid var(--grey-border)", borderRadius: 20, padding: "6px 16px", fontSize: 13, fontWeight: 600, color: "var(--grey)" }}>{c}</span>
              ))}
            </div>
          </div>

          <p style={{ fontSize: 14, color: "var(--grey-light)", lineHeight: 1.7 }}>
            * Insurance network status is subject to change. Please call our office to confirm your current coverage before your appointment.
          </p>
        </div>
      </section>

      {/* HMO/No Insurance callout */}
      <section className="ins-section" style={{ background: "var(--red-light)", padding: "56px 24px", borderTop: "1px solid rgba(196,18,48,0.15)", borderBottom: "1px solid rgba(196,18,48,0.15)" }}>
        <div className="hmo-row" style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Have an HMO, DMO, or No Insurance?</h3>
            <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.75 }}>
              We still want to see you. Our <strong>Membership Plan</strong> is specifically designed for patients without insurance — providing preventive care and significant discounts on all treatments for just $300/year.
            </p>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="/membership" className="btn-primary">View Membership Plan</a>
            <a href="tel:+14078576501" className="btn-outline">Call to Learn More</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ins-section" style={{ background: "var(--black)", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 className="serif cta-h2" style={{ color: "white", marginBottom: 14 }}>Have Questions About Your Coverage?</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: 32 }}>
            Our front desk team is happy to verify your insurance, explain your benefits, and help you choose the best payment option before your visit.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+14078576501" className="btn-primary">Orlando: (407) 857-6501</a>
            <a href="tel:+14078705151" style={{ color: "white", fontWeight: 600, fontSize: 15, padding: "14px 28px", border: "2px solid rgba(255,255,255,0.3)", borderRadius: 6, textDecoration: "none", display: "inline-block" }}>
              Kissimmee: (407) 870-5151
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
