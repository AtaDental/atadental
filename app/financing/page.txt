"use client";

const LOGO_URL = "/ATADental_Logo_Horizontal_POS.png";

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
      `}</style>

      {/* Nav */}
      <nav style={{
        background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--grey-border)", padding: "0 24px",
      }}>
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
          <p style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Patient Resources</p>
          <h1 className="serif" style={{ fontSize: 44, color: "white", marginBottom: 16 }}>Cherry Financing</h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
            Flexible payment plans so you can get the dental care you need today and pay over time.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 className="serif" style={{ fontSize: 32, marginBottom: 8, textAlign: "center" }}>Why Choose Cherry?</h2>
          <div style={{ width: 60, height: 3, background: "var(--red)", borderRadius: 2, margin: "0 auto 48px" }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
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
      <section style={{ background: "var(--grey-bg)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 className="serif" style={{ fontSize: 32, marginBottom: 8, textAlign: "center" }}>How It Works</h2>
          <div style={{ width: 60, height: 3, background: "var(--red)", borderRadius: 2, margin: "0 auto 48px" }} />

          {[
            { step: "1", title: "Apply Online or In-Office", desc: "Choose your office location below and complete a quick application. No hard credit check required." },
            { step: "2", title: "Get Approved Instantly", desc: "Receive your approval in seconds with your available credit amount and payment plan options." },
            { step: "3", title: "Start Your Treatment", desc: "Use your Cherry plan to pay for your dental care and enjoy easy monthly payments." },
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex", gap: 24, alignItems: "flex-start", marginBottom: i < 2 ? 40 : 0,
            }}>
              <div style={{
                minWidth: 48, height: 48, borderRadius: "50%", background: "var(--red)",
                color: "white", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, fontWeight: 700,
              }}>{item.step}</div>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6 }}>{item.title}</h3>
                <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Apply */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h2 className="serif" style={{ fontSize: 32, marginBottom: 16 }}>Apply for Cherry Financing</h2>
          <p style={{ fontSize: 17, color: "var(--grey)", lineHeight: 1.7, marginBottom: 40 }}>
            Select your office location to begin the application process. You'll know if you're approved in just minutes.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
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
          <h2 className="serif" style={{ fontSize: 28, marginBottom: 12 }}>Questions About Financing?</h2>
          <p style={{ fontSize: 16, opacity: 0.9, marginBottom: 24, lineHeight: 1.6 }}>
            Our team is happy to help you understand your options. Call us or visit either location.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+14078576501" style={{ color: "white", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "12px 24px", border: "2px solid rgba(255,255,255,0.5)", borderRadius: 6 }}>
              📞 Orlando: (407) 857-6501
            </a>
            <a href="tel:+14078705151" style={{ color: "white", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "12px 24px", border: "2px solid rgba(255,255,255,0.5)", borderRadius: 6 }}>
              📞 Kissimmee: (407) 870-5151
            </a>
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
