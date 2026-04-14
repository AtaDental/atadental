"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const BOOKING_URL_ORLANDO = "https://app.nexhealth.com/appt/ATA_Dental?lid=39277";
const BOOKING_URL_KISSIMMEE = "https://app.nexhealth.com/appt/ATA_Dental?lid=39261";

function ContactForm() {
  const searchParams = useSearchParams();
  const sent = searchParams.get("sent") === "true";
  return (
    <div className="card">
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24 }}>Send Us a Message</h2>
      {sent && (
        <div className="success-msg" style={{ marginBottom: 20 }}>
          ✓ Message received! We'll be in touch shortly.
        </div>
      )}
      <form
        action="https://formsubmit.co/AtaDentalDesign@AtaDental.com"
        method="POST"
        style={{ display: "flex", flexDirection: "column", gap: 18 }}
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://atadental.vercel.app/contact?sent=true" />
        <input type="hidden" name="_subject" value="New message from Ata Dental website" />
        <div>
          <label className="input-label">Full Name *</label>
          <input className="input-field" name="name" required placeholder="Jane Smith" />
        </div>
        <div>
          <label className="input-label">Email Address *</label>
          <input className="input-field" name="email" type="email" required placeholder="jane@email.com" />
        </div>
        <div>
          <label className="input-label">Phone Number</label>
          <input className="input-field" name="phone" type="tel" placeholder="(407) 555-0123" />
        </div>
        <div>
          <label className="input-label">Preferred Office</label>
          <select className="input-field" name="office">
            <option>Orlando</option>
            <option>Kissimmee</option>
            <option>No preference</option>
          </select>
        </div>
        <div>
          <label className="input-label">Message *</label>
          <textarea className="input-field" name="message" required placeholder="How can we help you?" />
        </div>
        <button type="submit" className="btn-primary">Send Message</button>
      </form>
    </div>
  );
}

export default function ContactPage() {

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
        .input-field {
          width: 100%; padding: 12px 16px; border: 1.5px solid var(--grey-border);
          border-radius: 8px; font-size: 15px; font-family: inherit;
          transition: border-color 0.3s; background: var(--white); color: var(--black);
        }
        .input-field:focus { outline: none; border-color: var(--red); box-shadow: 0 0 0 3px rgba(196,18,48,0.08); }
        .input-label { display: block; font-size: 13px; font-weight: 600; color: var(--black); margin-bottom: 6px; }
        textarea.input-field { resize: vertical; min-height: 100px; }
        .btn-primary {
          background: var(--red); color: white; border: none; padding: 14px 36px;
          border-radius: 6px; font-size: 15px; font-weight: 600; cursor: pointer;
          transition: all 0.3s; font-family: inherit; width: 100%;
        }
        .btn-primary:hover { background: var(--red-dark); }
        .success-msg {
          background: var(--red-light); border: 1.5px solid var(--red); color: var(--red-dark);
          padding: 16px 24px; border-radius: 8px; font-weight: 500; text-align: center; margin-bottom: 20px;
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          h1 { font-size: 36px !important; }
        }
      `}</style>

      <Nav activePage="contact" />

      {/* Hero */}
      <section style={{ background: "var(--black)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Get in Touch</p>
          <h1 className="serif" style={{ fontSize: 50, color: "white", marginBottom: 16 }}>Contact Us</h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, maxWidth: 580 }}>
            Have a question or need to reach us? Send a message below or call either office directly. For appointments, use our online booking system.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: "80px 24px" }}>
        <div className="contact-grid" style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>

          {/* Contact form */}
          <Suspense fallback={<div className="card" style={{ minHeight: 400 }} />}>
            <ContactForm />
          </Suspense>

          {/* Office info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div className="card" style={{ borderLeft: "4px solid var(--red)" }}>
              <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 16 }}>📍 Orlando Office</h3>
              <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.8, marginBottom: 8 }}>
                13512 S. John Young Pkwy<br />Orlando, FL 32837
              </p>
              <a href="tel:+14078576501" style={{ color: "var(--red)", fontWeight: 700, fontSize: 17, textDecoration: "none", display: "block", marginBottom: 12 }}>(407) 857-6501</a>
              <p style={{ fontSize: 13, color: "var(--grey-light)", lineHeight: 1.9, marginBottom: 16 }}>
                Mon–Thu: 8:00 AM – 5:00 PM<br />Fri: 8:00 AM – 12:00 PM<br />Sat–Sun: Closed
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="https://www.google.com/maps?cid=7531426336953562544" target="_blank" rel="noopener noreferrer" style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, textDecoration: "none" }}>Get Directions →</a>
                <span style={{ color: "var(--grey-border)" }}>|</span>
                <a href={BOOKING_URL_ORLANDO} target="_blank" rel="noopener noreferrer" style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, textDecoration: "none" }}>Book Online →</a>
              </div>
            </div>

            <div className="card" style={{ borderLeft: "4px solid var(--red)" }}>
              <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 16 }}>📍 Kissimmee Office</h3>
              <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.8, marginBottom: 8 }}>
                3192 S. John Young Pkwy, Ste B<br />Kissimmee, FL 34746
              </p>
              <a href="tel:+14078705151" style={{ color: "var(--red)", fontWeight: 700, fontSize: 17, textDecoration: "none", display: "block", marginBottom: 12 }}>(407) 870-5151</a>
              <p style={{ fontSize: 13, color: "var(--grey-light)", lineHeight: 1.9, marginBottom: 16 }}>
                Mon–Thu: 7:30 AM – 5:00 PM<br />Fri: 8:00 AM – 12:00 PM<br />Sat–Sun: Closed
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="https://www.google.com/maps?cid=7012736600002717895" target="_blank" rel="noopener noreferrer" style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, textDecoration: "none" }}>Get Directions →</a>
                <span style={{ color: "var(--grey-border)" }}>|</span>
                <a href={BOOKING_URL_KISSIMMEE} target="_blank" rel="noopener noreferrer" style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, textDecoration: "none" }}>Book Online →</a>
              </div>
            </div>

            <div className="card" style={{ background: "var(--red-light)", border: "1px solid rgba(196,18,48,0.15)" }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>🚨</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 6 }}>Dental Emergency?</h3>
              <p style={{ fontSize: 14, color: "var(--grey)", lineHeight: 1.6, marginBottom: 12 }}>
                We maintain an after-hours emergency line. Call either number above — don't wait until the next business day.
              </p>
              <p style={{ fontSize: 13, color: "var(--grey)", fontStyle: "italic" }}>Hablamos Español.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
