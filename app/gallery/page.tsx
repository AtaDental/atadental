import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function GalleryPage() {
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
        .gallery-hero-h1 { font-size: 48px; }
        @media (max-width: 768px) {
          .gallery-hero-h1 { font-size: 34px !important; }
        }
      `}</style>

      <Nav activePage="gallery" />

      {/* Hero */}
      <section style={{ background: "var(--black)", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Gallery</p>
          <h1 className="serif gallery-hero-h1" style={{ color: "white", marginBottom: 16 }}>Before & After Cases</h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, maxWidth: 560, margin: "0 auto" }}>
            Real results from real patients — showcasing the life-changing transformations our team delivers every day.
          </p>
        </div>
      </section>

      {/* Coming soon placeholder */}
      <section style={{ padding: "80px 24px", background: "var(--grey-bg)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", padding: "80px 24px", background: "var(--white)", borderRadius: 16, boxShadow: "var(--shadow)" }}>
            <div style={{ fontSize: 56, marginBottom: 20 }}>📷</div>
            <h2 className="serif" style={{ fontSize: 30, marginBottom: 14 }}>Patient Cases Coming Soon</h2>
            <p style={{ fontSize: 16, color: "var(--grey)", lineHeight: 1.75, maxWidth: 480, margin: "0 auto 32px" }}>
              We're curating our best before-and-after cases to showcase the life-changing results our team delivers. Check back soon.
            </p>
            <a href="/team" style={{ color: "var(--red)", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>Meet Our Dentists →</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--red)", padding: "60px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", color: "white" }}>
          <h2 className="serif" style={{ fontSize: 32, marginBottom: 12 }}>Ready to Transform Your Smile?</h2>
          <p style={{ fontSize: 16, opacity: 0.9, marginBottom: 28, lineHeight: 1.6 }}>
            Schedule a consultation at either our Orlando or Kissimmee location.
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
