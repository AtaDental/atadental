import Nav from "../components/Nav";
import Footer from "../components/Footer";

const CASES = [
  {
    id: 1,
    title: "Porcelain Crown — Tooth #10",
    procedure: "Single Crown",
    description:
      "A custom porcelain crown on the upper left lateral incisor (tooth #10) restored both function and appearance. The new crown blends seamlessly with the surrounding teeth for a natural, lifelike result.",
    before: "/Case1-CrownBefore.jpg",
    after: "/Case1-CrownAfter.png",
  },
  {
    id: 2,
    title: "Six-Unit Bridge & Crown — Teeth #6–#11 + #12",
    procedure: "Fixed Bridge + Crown",
    description:
      "A six-unit porcelain bridge spanning the upper front teeth (canine to canine, #6 through #11), paired with a single crown on the upper left first premolar (#12). This full-arch cosmetic restoration rebuilt the patient's smile line and restored bite function.",
    before: "/Case2-BridgeBefore.jpg",
    after: "/Case2-BridgeAfter.jpg",
  },
];

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
        .gallery-hero-h1 { font-size: 48px; }
        .case-card {
          background: var(--white);
          border-radius: 16px;
          box-shadow: var(--shadow);
          overflow: hidden;
          margin-bottom: 56px;
        }
        .case-images {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          background: var(--grey-border);
        }
        .case-image-wrap {
          position: relative;
          background: var(--black);
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }
        .case-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .case-label {
          position: absolute;
          top: 16px;
          left: 16px;
          background: rgba(0,0,0,0.75);
          color: white;
          padding: 6px 14px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }
        .case-label.after { background: var(--red); }
        .case-body { padding: 32px 36px 36px; }
        .case-kicker {
          color: var(--red);
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .case-title { font-size: 24px; margin-bottom: 10px; }
        .case-divider { width: 48px; height: 3px; background: var(--red); border-radius: 2px; margin-bottom: 16px; }
        .case-desc { font-size: 15px; color: var(--grey); line-height: 1.75; }

        @media (max-width: 768px) {
          .gallery-hero-h1 { font-size: 34px !important; }
          .case-images { grid-template-columns: 1fr !important; }
          .case-body { padding: 24px 22px 28px !important; }
          .case-title { font-size: 20px !important; }
          .case-desc { font-size: 14px !important; }
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

      {/* Cases */}
      <section style={{ padding: "72px 24px", background: "var(--grey-bg)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          {CASES.map((c) => (
            <article key={c.id} className="case-card">
              <div className="case-images">
                <div className="case-image-wrap">
                  <img src={c.before} alt={`${c.title} — before`} />
                  <span className="case-label">Before</span>
                </div>
                <div className="case-image-wrap">
                  <img src={c.after} alt={`${c.title} — after`} />
                  <span className="case-label after">After</span>
                </div>
              </div>
              <div className="case-body">
                <p className="case-kicker">{c.procedure}</p>
                <h2 className="serif case-title">{c.title}</h2>
                <div className="case-divider" />
                <p className="case-desc">{c.description}</p>
              </div>
            </article>
          ))}

          <p style={{ textAlign: "center", fontSize: 14, color: "var(--grey-light)", fontStyle: "italic", marginTop: 16 }}>
            Results vary by patient. Photos shared with patient consent.
          </p>
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
