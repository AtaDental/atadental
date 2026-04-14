"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function MembershipPage() {
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
      `}</style>

      <Nav activePage="membership" />

      {/* Hero */}
      <section style={{ background: "var(--black)", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Patient Resources</p>
          <h1 className="serif" style={{ fontSize: 44, color: "white", marginBottom: 16 }}>Ata Dental Discount Membership</h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
            No dental insurance? Our in-house membership plan provides easy, comprehensive, and affordable dental care benefits.
          </p>
        </div>
      </section>

      {/* Pricing highlight */}
      <section style={{ background: "var(--red)", padding: "40px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", color: "white" }}>
          <p style={{ fontSize: 48, fontWeight: 700, fontFamily: "'DM Serif Display', serif" }}>$300<span style={{ fontSize: 20, fontWeight: 400 }}>/year</span></p>
          <p style={{ fontSize: 16, opacity: 0.9, marginTop: 8 }}>Enroll in 90 seconds — instant access to benefits</p>
        </div>
      </section>

      {/* What's included */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 className="serif" style={{ fontSize: 32, marginBottom: 8 }}>What's Included</h2>
          <div style={{ width: 60, height: 3, background: "var(--red)", borderRadius: 2, marginBottom: 32 }} />

          {[
            { item: "2 Cleanings", detail: "Additional cleanings available at 20% discount for periodontal disease patients" },
            { item: "2 Comprehensive Exams", detail: "Including periodic, limited, and comprehensive evaluations" },
            { item: "Routine X-Rays", detail: "Bitewings, periapical, and panoramic X-rays included" },
            { item: "2 Fluoride Treatments", detail: "Topical fluoride applications for cavity prevention" },
            { item: "20% Off All Other Procedures", detail: "10% off orthodontics. Discounts vary on full arch implant bundles." },
            { item: "Family Discount", detail: "Family members receive 10% off additional memberships" },
          ].map((benefit, i) => (
            <div key={i} style={{
              display: "flex", gap: 16, padding: "20px 0",
              borderBottom: i < 5 ? "1px solid var(--grey-border)" : "none",
            }}>
              <div style={{ color: "var(--red)", fontSize: 22, marginTop: 2 }}>✓</div>
              <div>
                <p style={{ fontSize: 17, fontWeight: 600, marginBottom: 4 }}>{benefit.item}</p>
                <p style={{ fontSize: 14, color: "var(--grey)", lineHeight: 1.5 }}>{benefit.detail}</p>
              </div>
            </div>
          ))}

          <div style={{ background: "var(--red-light)", borderRadius: 12, padding: 24, marginTop: 32, border: "1px solid rgba(196,18,48,0.12)" }}>
            <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.6 }}>
              <strong style={{ color: "var(--black)" }}>Total value: $792</strong> — Save $493 compared to standard fees. Savings are even greater when your 20% discount is applied to additional procedures.
            </p>
          </div>
        </div>
      </section>

      {/* Enroll */}
      <section style={{ background: "var(--grey-bg)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h2 className="serif" style={{ fontSize: 32, marginBottom: 16 }}>Ready to Enroll?</h2>
          <p style={{ fontSize: 17, color: "var(--grey)", lineHeight: 1.7, marginBottom: 40 }}>
            Choose your location to get started. Enrollment takes just 90 seconds and you'll have instant access to your benefits.
          </p>
          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://member.pearly.co/p370" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Join — Orlando Office
            </a>
            <a href="https://member.pearly.co/p365" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Join — Kissimmee Office
            </a>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "var(--grey)" }}>Terms, Exclusions & Disclosures</h3>
          <div style={{ fontSize: 13, color: "var(--grey-light)", lineHeight: 1.8 }}>
            <p style={{ marginBottom: 12 }}>Our membership plans are provided only to uninsured patients of our practice and are not insurance, pre-payment for future services, or a qualified health plan under the Affordable Care Act.</p>
            <p style={{ marginBottom: 12 }}>The membership plan is a direct agreement between the patient and the legal entity of our practice. Payments must be current to receive benefits.</p>
            <p style={{ marginBottom: 12 }}>Benefits may not be combined with any other offers or discounts. Payment for additional treatment is due at time of service and plans do not cover procedures outside our practice.</p>
            <p>Plans are for 12 months and automatically renew. Patients can opt out by clicking "Cancel Auto-Renew" in the Member Portal or by contacting our practice. Refunds are at the sole discretion of our practice.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
