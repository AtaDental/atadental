"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function FinancingPage() {
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
        .card {
          background: var(--white); border-radius: 12px; padding: 36px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08); transition: all 0.35s; text-align: center;
        }
        .card:hover { transform: translateY(-4px); box-shadow: 0 12px 48px rgba(0,0,0,0.12); }
        .fin-hero-h1 { font-size: 44px; }
        .fin-hero { padding: 80px 24px; }
        .fin-section { padding: 80px 24px; }
        .fin-section-h2 { font-size: 32px; }
        .benefits-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .apply-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .step-row { display: flex; gap: 24px; align-items: flex-start; }
        .step-circle { min-width: 48px; height: 48px; border-radius: 50%; background: var(--red); color: white; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 700; }
        .step-title { font-size: 20px; font-weight: 700; margin-bottom: 6px; }
        .step-desc { font-size: 15px; color: var(--grey); line-height: 1.6; }
        .cta-h2 { font-size: 28px; }
        .cta-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        .cta-btn { color: white; text-decoration: none; font-weight: 600; font-size: 16px; padding: 12px 24px; border: 2px solid rgba(255,255,255,0.5); border-radius: 6px; }
        @media (max-width: 900px) {
          .benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .fin-hero { padding: 56px 20px !important; }
          .fin-hero-h1 { font-size: 30px !important; }
          .fin-section { padding: 56px 20px !important; }
          .fin-section-h2 { font-size: 26px !important; }
          .benefits-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .apply-grid { grid-template-columns: 1fr !important; }
          .card { padding: 24px !important; }
          .step-row { gap: 16px !important; }
          .step-circle { min-width: 40px !important; height: 40px !important; font-size: 17px !important; }
          .step-title { font-size: 17px !important; }
          .step-desc { font-size: 14px !important; }
          .cta-h2 { font-size: 24px !important; }
          .cta-btns { flex-direction: column; gap: 10px !important; }
          .cta-btn { width: 100%; padding: 14px 16px !important; font-size: 15px !important; text-align: center; box-sizing: border-box; }
        }
      `}</style>

      <Nav activePage="financing" />

      {/* Hero */}
      <section className="fin-hero" style={{ background: "var(--black)", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Patient Resources</p>
          <h1 className="serif fin-hero-h1" style={{ color: "white", marginBottom: 16 }}>Cherry Financing</h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
            Flexible payment plans so you can get the dental care you need today and pay over time.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="fin-section">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 className="serif fin-section-h2" style={{ marginBottom: 8, textAlign: "center" }}>Why Choose Cherry?</h2>
          <div style={{ width: 60, height: 3, background: "var(--red)", borderRadius: 2, margin: "0 auto 48px" }} />

          <div className="benefits-grid">
            {[
              { icon: "✅", title: "No Hard Credit Checks", desc: "Apply without impacting your credit score. Quick approval process that takes just minutes." },
              { icon: "💳", title: "0% APR Options", desc: "Affordable monthly payments with zero interest financing options available on qualifying plans." },
              { icon: "⚡", title: "Instant Approval", desc: "Find out if you're approved in seconds so you can start your treatment right away." },
              { icon: "📱", title: "Easy Application", desc: "Apply online or in our office. The process is simple, fast, and completely digital." },
              { icon: "🔒", title: "No Hidden Fees", desc: "Transparent terms with no surprises. What you see is what you pay." },
              { icon: "🦷", title: "Use for Any Treatment", desc: "Cherry can be used for any dental procedure — from routine cleanings to major restorative work." },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: "center", padding: 20 }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "var(--grey)", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="fin-section" style={{ background: "var(--grey-bg)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 className="serif fin-section-h2" style={{ marginBottom: 8, textAlign: "center" }}>How It Works</h2>
          <div style={{ width: 60, height: 3, background: "var(--red)", borderRadius: 2, margin: "0 auto 48px" }} />

          {[
            { step: "1", title: "Apply Online or In-Office", desc: "Choose your office location below and complete a quick application. No hard credit check required." },
            { step: "2", title: "Get Approved Instantly", desc: "Receive your approval in seconds with your available credit amount and payment plan options." },
            { step: "3", title: "Start Your Treatment", desc: "Use your Cherry plan to pay for your dental care and enjoy easy monthly payments." },
          ].map((item, i) => (
            <div key={i} className="step-row" style={{ marginBottom: i < 2 ? 32 : 0 }}>
              <div className="step-circle">{item.step}</div>
              <div>
                <h3 className="step-title">{item.title}</h3>
                <p className="step-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Apply */}
      <section className="fin-section">
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h2 className="serif fin-section-h2" style={{ marginBottom: 16 }}>Apply for Cherry Financing</h2>
          <p style={{ fontSize: 17, color: "var(--grey)", lineHeight: 1.7, marginBottom: 40 }}>
            Select your office location to begin the application process. You'll know if you're approved in just minutes.
          </p>
          <div className="apply-grid">
            <div className="card">
              <div style={{ fontSize: 32, marginBottom: 12 }}>🏢</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Orlando Office</h3>
              <p style={{ fontSize: 14, color: "var(--grey)", marginBottom: 6 }}>13512 S. John Young Pkwy</p>
              <p style={{ fontSize: 14, color: "var(--grey)", marginBottom: 20 }}>(407) 857-6501</p>
              <a href="https://www.atadental.com/cherry-financing/orlando/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: "100%", textAlign: "center" }}>
                Apply — Orlando
              </a>
            </div>
            <div className="card">
              <div style={{ fontSize: 32, marginBottom: 12 }}>🏢</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Kissimmee Office</h3>
              <p style={{ fontSize: 14, color: "var(--grey)", marginBottom: 6 }}>3192 S. John Young Pkwy, Ste B</p>
              <p style={{ fontSize: 14, color: "var(--grey)", marginBottom: 20 }}>(407) 870-5151</p>
              <a href="https://www.atadental.com/cherry-financing/kissimmee/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: "100%", textAlign: "center" }}>
                Apply — Kissimmee
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--red)", padding: "60px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", color: "white" }}>
          <h2 className="serif cta-h2" style={{ marginBottom: 12 }}>Questions About Financing?</h2>
          <p style={{ fontSize: 16, opacity: 0.9, marginBottom: 24, lineHeight: 1.6 }}>
            Our team is happy to help you understand your options. Call us or visit either location.
          </p>
          <div className="cta-btns">
            <a href="tel:+14078576501" className="cta-btn">
              📞 Orlando: (407) 857-6501
            </a>
            <a href="tel:+14078705151" className="cta-btn">
              📞 Kissimmee: (407) 870-5151
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
