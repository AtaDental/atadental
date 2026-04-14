const LOGO_URL = "/ATADental_Logo_Horizontal_POS.png";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "New Patients", href: "/new-patients" },
  { label: "Insurance & Financing", href: "/insurance" },
  { label: "Membership Plan", href: "/membership" },
  { label: "Contact", href: "/contact" },
];

const BOOKING_URL_ORLANDO = "https://app.nexhealth.com/appt/ATA_Dental?lid=39277";
const BOOKING_URL_KISSIMMEE = "https://app.nexhealth.com/appt/ATA_Dental?lid=39261";

export default function Footer() {
  return (
    <footer style={{ background: "#111111", color: "rgba(255,255,255,0.75)", fontFamily: "'Libre Franklin', 'Segoe UI', sans-serif" }}>
      <style>{`
        .footer-link {
          color: rgba(255,255,255,0.6); text-decoration: none; font-size: 14px;
          transition: color 0.2s; display: block; padding: 4px 0;
        }
        .footer-link:hover { color: #c41230; }
        .footer-heading {
          color: white; font-size: 13px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          margin-bottom: 20px; padding-bottom: 10px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .footer-divider { border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 0; }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 1000px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* Main footer content */}
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "64px 24px 48px" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48 }}>

          {/* Column 1 — Brand */}
          <div>
            <img src={LOGO_URL} alt="Ata Dental" style={{ height: 38, marginBottom: 20, filter: "brightness(0) invert(1)", opacity: 0.9 }} />
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 24, maxWidth: 240 }}>
              Family-owned dentistry in South Orlando since 1989. Two convenient locations serving Orlando and Kissimmee, FL.
            </p>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>After-Hours Emergency Line</p>
            <a href="tel:+14078576501" style={{ color: "#c41230", fontWeight: 700, fontSize: 16, textDecoration: "none", display: "block", marginBottom: 4 }}>
              (407) 857-6501
            </a>
            <a href="tel:+14078705151" style={{ color: "#c41230", fontWeight: 700, fontSize: 16, textDecoration: "none", display: "block" }}>
              (407) 870-5151
            </a>
          </div>

          {/* Column 2 — Orlando */}
          <div>
            <p className="footer-heading">Orlando Office</p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.9, marginBottom: 12 }}>
              13512 S. John Young Pkwy<br />Orlando, FL 32837
            </p>
            <a href="tel:+14078576501" className="footer-link" style={{ fontWeight: 600, marginBottom: 16 }}>(407) 857-6501</a>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.9, marginBottom: 16 }}>
              Mon – Thu: 8:00 AM – 5:00 PM<br />
              Fri: 8:00 AM – 12:00 PM<br />
              Sat – Sun: Closed
            </p>
            <a href="https://www.google.com/maps?cid=7531426336953562544" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ marginBottom: 6 }}>Get Directions →</a>
            <a href={BOOKING_URL_ORLANDO} target="_blank" rel="noopener noreferrer" className="footer-link">Book Appointment →</a>
          </div>

          {/* Column 3 — Kissimmee */}
          <div>
            <p className="footer-heading">Kissimmee Office</p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.9, marginBottom: 12 }}>
              3192 S. John Young Pkwy, Ste B<br />Kissimmee, FL 34746
            </p>
            <a href="tel:+14078705151" className="footer-link" style={{ fontWeight: 600, marginBottom: 16 }}>(407) 870-5151</a>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.9, marginBottom: 16 }}>
              Mon – Thu: 7:30 AM – 5:00 PM<br />
              Fri: 8:00 AM – 12:00 PM<br />
              Sat – Sun: Closed
            </p>
            <a href="https://www.google.com/maps?cid=7012736600002717895" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ marginBottom: 6 }}>Get Directions →</a>
            <a href={BOOKING_URL_KISSIMMEE} target="_blank" rel="noopener noreferrer" className="footer-link">Book Appointment →</a>
          </div>

          {/* Column 4 — Quick Links */}
          <div>
            <p className="footer-heading">Quick Links</p>
            {QUICK_LINKS.map(l => (
              <a key={l.href} href={l.href} className="footer-link">{l.label}</a>
            ))}
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Bottom bar */}
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
          © {new Date().getFullYear()} Ata Dental. All rights reserved.
        </p>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
          <em>Hablamos Español</em>
        </p>
      </div>
    </footer>
  );
}
