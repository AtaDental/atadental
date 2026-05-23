"use client";
import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";

const DOCTORS = [
  { name: "Dr. Omar Ata", credentials: "DDS", initials: "OA", slug: "dr-omar-ata" },
  { name: "Dr. Joseph A. Ata", credentials: "DMD", initials: "JA", slug: "dr-joseph-ata" },
  { name: "Dr. Ireni Mikhail", credentials: "DDS", initials: "IM", slug: "dr-ireni-mikhail" },
  { name: "Dr. Matthew Robin", credentials: "DMD", initials: "MR", slug: "dr-matthew-robin" },
  { name: "Dr. Javier Broche", credentials: "DMD", initials: "JB", slug: "dr-javier-broche" },
  { name: "Dr. Johana Cobo", credentials: "DDS", initials: "JC", slug: "dr-johana-cobo" },
];

const FAQS = [
  {
    q: "Is the membership plan for me?",
    a: "If you are a patient at our practice and do not have dental insurance, a membership plan is a perfect fit for you. Plans include preventive care and discounts on other procedures.",
  },
  {
    q: "How do I schedule an appointment?",
    a: "Please call our Orlando office at (407) 857-6501 or our Kissimmee office at (407) 870-5151 and we would be happy to set up an appointment for you.",
  },
  {
    q: "What forms of payment are accepted?",
    a: "We accept all major credit and debit cards, including Visa, MasterCard, and American Express, as well as ACH bank transfers.",
  },
  {
    q: "How do I edit my billing details?",
    a: "Just login to the Member Portal and click \"Billing\" to update any information.",
  },
  {
    q: "Can I add my family to my membership plan?",
    a: "Yes! You can easily add dependents to your membership account. Family members also receive 10% off additional memberships.",
  },
  {
    q: "Can I transfer my membership to another dentist?",
    a: "Your membership plan is between our practice and you. You unfortunately cannot transfer it to another dentist, but you can cancel auto-renewal at any time.",
  },
];

export default function MembershipPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: "'Libre Franklin', 'Segoe UI', sans-serif", color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Libre+Franklin:wght@300;400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
          --red: #c41230; --red-dark: #a00f28; --red-light: #fdf0f2;
          --black: #1a1a1a; --grey: #555555; --grey-light: #888888;
          --grey-bg: #f5f5f5; --grey-border: #e0e0e0; --white: #ffffff;
          --shadow: 0 4px 24px rgba(0,0,0,0.08); --shadow-lg: 0 12px 40px rgba(0,0,0,0.12);
        }
        .serif { font-family: 'DM Serif Display', Georgia, serif; }
        .btn-enroll {
          background: var(--red); color: white; border: none; padding: 16px 44px;
          border-radius: 6px; font-size: 16px; font-weight: 600; cursor: pointer;
          transition: all 0.3s; font-family: inherit; text-decoration: none; display: inline-block;
        }
        .btn-enroll:hover { background: var(--red-dark); transform: translateY(-1px); }
        .pillar-card {
          text-align: center; padding: 36px 24px;
          background: var(--white); border-radius: 14px;
          box-shadow: var(--shadow); transition: all 0.3s;
        }
        .pillar-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
        .pillar-icon {
          width: 56px; height: 56px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 16px; font-size: 26px;
        }
        .plan-card {
          background: var(--white); border: 2px solid var(--grey-border);
          border-radius: 16px; overflow: hidden; max-width: 480px;
          margin: 0 auto; box-shadow: var(--shadow-lg);
          transition: all 0.3s;
        }
        .plan-card:hover { border-color: var(--red); }
        .benefit-row {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 12px 0; border-bottom: 1px solid var(--grey-border);
        }
        .benefit-row:last-child { border-bottom: none; }
        .faq-item {
          background: var(--white); border: 1px solid var(--grey-border);
          border-radius: 10px; overflow: hidden; transition: all 0.2s;
          cursor: pointer;
        }
        .faq-item:hover { border-color: var(--red); }
        .faq-question {
          display: flex; justify-content: space-between; align-items: center;
          padding: 20px 24px; font-size: 15px; font-weight: 600;
          color: var(--black); cursor: pointer; user-select: none;
        }
        .faq-answer {
          padding: 0 24px 20px; font-size: 14px; color: var(--grey);
          line-height: 1.7; border-top: 1px solid var(--grey-border);
          padding-top: 16px;
        }
        .faq-chevron {
          color: var(--red); font-size: 20px; font-weight: 700;
          transition: transform 0.2s; flex-shrink: 0;
        }
        .doctor-avatar {
          width: 48px; height: 48px; border-radius: 50%;
          background: var(--red-light); color: var(--red-dark);
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 14px; flex-shrink: 0;
        }
        .membership-hero-h1 { font-size: 48px; }
        @media (max-width: 768px) {
          .membership-hero-h1 { font-size: 32px !important; }
          .pillars-grid { grid-template-columns: 1fr !important; }
          .faq-grid { grid-template-columns: 1fr !important; }
          .offices-grid { grid-template-columns: 1fr !important; }
          .hero-layout { flex-direction: column !important; text-align: center !important; }
          .hero-image-wrap { max-width: 100% !important; }
        }
      `}</style>

      <Nav activePage="membership" />

      {/* ── Hero ── */}
      <section style={{ background: "var(--black)", padding: "80px 24px" }}>
        <div className="hero-layout" style={{ maxWidth: 1000, margin: "0 auto", display: "flex", alignItems: "center", gap: 48 }}>
          <div style={{ flex: 1 }}>
            <p style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
              Ata Dental Design Discount Membership
            </p>
            <h1 className="serif membership-hero-h1" style={{ color: "white", marginBottom: 16, lineHeight: 1.15 }}>
              Join Our Plan
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
              No dental insurance? Our in-house membership plan is for you! Our plans include preventive care and save you money on other procedures. Enroll in 90 seconds and receive instant access.
            </p>
            <a href="#enroll" className="btn-enroll">Enroll Now</a>
          </div>
          <div className="hero-image-wrap" style={{ flex: "0 0 380px", maxWidth: 380 }}>
            <Image
              src="/Hallway.jpg"
              alt="Smiling patients at Ata Dental — Orlando and Kissimmee membership plan"
              width={380} height={400}
              style={{ width: "100%", height: "auto", borderRadius: 16, objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ── No Dental Benefits? No Problem! ── */}
      <section style={{ padding: "80px 24px", background: "var(--grey-bg)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
          <h2 className="serif" style={{ fontSize: 36, marginBottom: 12 }}>No Dental Benefits? No Problem!</h2>
          <p style={{ fontSize: 16, color: "var(--grey)", lineHeight: 1.7, maxWidth: 600, margin: "0 auto 48px" }}>
            For our loyal patients without dental benefits, we&rsquo;ve launched our own membership program that eliminates the insurance middleman.
          </p>
          <div className="pillars-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            <div className="pillar-card">
              <div className="pillar-icon" style={{ background: "var(--red-light)" }}>⏱</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Easy</h3>
              <p style={{ fontSize: 14, color: "var(--grey)", lineHeight: 1.6 }}>
                Sign up in 90 seconds and instantly access your benefits.
              </p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon" style={{ background: "var(--red-light)" }}>❤️</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Comprehensive</h3>
              <p style={{ fontSize: 14, color: "var(--grey)", lineHeight: 1.6 }}>
                Plans cover your preventive care like cleanings and X-rays.
              </p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon" style={{ background: "var(--red-light)" }}>💰</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Affordable</h3>
              <p style={{ fontSize: 14, color: "var(--grey)", lineHeight: 1.6 }}>
                Simple and transparent pricing with discounts on other procedures.
              </p>
            </div>
          </div>
          <div style={{ marginTop: 40 }}>
            <a href="#enroll" className="btn-enroll">Enroll in 90 Seconds</a>
          </div>
        </div>
      </section>

      {/* ── Plan Card ── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2 className="serif" style={{ fontSize: 36, textAlign: "center", marginBottom: 48 }}>Select Membership Plan</h2>

          <div className="plan-card">
            {/* Card header */}
            <div style={{ background: "var(--red)", padding: "20px 28px", textAlign: "center" }}>
              <p style={{ color: "white", fontWeight: 700, fontSize: 14, letterSpacing: 1.5, textTransform: "uppercase" }}>
                Ata Dental Design Discount Membership
              </p>
            </div>

            <div style={{ padding: "32px 32px 36px" }}>
              <p style={{ textAlign: "center", fontSize: 14, color: "var(--grey)", marginBottom: 8 }}>All Ages</p>
              <p style={{ textAlign: "center", marginBottom: 28 }}>
                <span style={{ fontSize: 52, fontWeight: 700, fontFamily: "'DM Serif Display', serif" }}>$300</span>
                <span style={{ fontSize: 18, color: "var(--grey)", marginLeft: 4 }}>Per Year</span>
              </p>

              {/* Benefits */}
              <div>
                {[
                  { label: "2x Exams", codes: "0150 / 0120 / 0180 / 0140" },
                  { label: "2x Cleanings", codes: "1110 / 1120 / 4346 / 4355 / 4910" },
                  { label: "1x Routine X-Rays", codes: "0272 / 0274 / 0220 / 0230 / 0330" },
                  { label: "2x Topical Application of Fluoride", codes: null },
                  { label: "20% Off All Other Procedures", codes: "10% off orthodontics" },
                  { label: "Family Discount", codes: "10% off additional memberships" },
                ].map((b, i) => (
                  <div key={i} className="benefit-row">
                    <span style={{ color: "var(--red)", fontSize: 18, marginTop: 1, flexShrink: 0 }}>✓</span>
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 600 }}>{b.label}</p>
                      {b.codes && (
                        <p style={{ fontSize: 12, color: "var(--grey-light)", marginTop: 2 }}>{b.codes}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Savings callout */}
              <div style={{ background: "var(--red-light)", borderRadius: 10, padding: "16px 20px", marginTop: 24, border: "1px solid rgba(196,18,48,0.12)" }}>
                <p style={{ fontSize: 14, color: "var(--grey)", lineHeight: 1.6 }}>
                  <strong style={{ color: "var(--black)" }}>Total value: $792</strong> — Save $493 compared to standard fees. Savings are even greater when your 20% discount is applied to additional procedures.
                </p>
              </div>

              <div style={{ textAlign: "center", marginTop: 28 }}>
                <a href="#enroll" className="btn-enroll" style={{ width: "100%", textAlign: "center" }}>Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section style={{ padding: "80px 24px", background: "var(--grey-bg)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 className="serif" style={{ fontSize: 36, textAlign: "center", marginBottom: 40 }}>Frequently Asked Questions</h2>
          <div className="faq-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="faq-item"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="faq-question">
                  <span>{faq.q}</span>
                  <span className="faq-chevron" style={{ transform: openFaq === i ? "rotate(45deg)" : "none" }}>+</span>
                </div>
                {openFaq === i && (
                  <div className="faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Practice ── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Our Practice</p>
            <h2 className="serif" style={{ fontSize: 36, marginBottom: 12 }}>Ata Dental Design</h2>
            <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.7, maxWidth: 500, margin: "0 auto" }}>
              Family-owned dentistry in South Orlando since 1989. Two convenient locations serving Orlando and Kissimmee, FL.
            </p>
          </div>

          {/* Offices */}
          <div className="offices-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 48 }}>
            <div style={{ background: "var(--grey-bg)", borderRadius: 14, padding: "32px 28px", border: "1px solid var(--grey-border)" }}>
              <p style={{ fontWeight: 700, fontSize: 16, marginBottom: 12 }}>Orlando Office</p>
              <p style={{ fontSize: 14, color: "var(--grey)", lineHeight: 1.8, marginBottom: 12 }}>
                13512 S. John Young Pkwy<br />Orlando, FL 32837
              </p>
              <a href="tel:+14078576501" style={{ color: "var(--red)", fontWeight: 600, fontSize: 15, textDecoration: "none", display: "block", marginBottom: 8 }}>
                (407) 857-6501
              </a>
              <p style={{ fontSize: 13, color: "var(--grey-light)", lineHeight: 1.8 }}>
                Mon – Thu: 8:00 AM – 5:00 PM<br />Fri: 8:00 AM – 12:00 PM
              </p>
            </div>
            <div style={{ background: "var(--grey-bg)", borderRadius: 14, padding: "32px 28px", border: "1px solid var(--grey-border)" }}>
              <p style={{ fontWeight: 700, fontSize: 16, marginBottom: 12 }}>Kissimmee Office</p>
              <p style={{ fontSize: 14, color: "var(--grey)", lineHeight: 1.8, marginBottom: 12 }}>
                3192 S. John Young Pkwy, Ste B<br />Kissimmee, FL 34746
              </p>
              <a href="tel:+14078705151" style={{ color: "var(--red)", fontWeight: 600, fontSize: 15, textDecoration: "none", display: "block", marginBottom: 8 }}>
                (407) 870-5151
              </a>
              <p style={{ fontSize: 13, color: "var(--grey-light)", lineHeight: 1.8 }}>
                Mon – Thu: 7:30 AM – 5:00 PM<br />Fri: 8:00 AM – 12:00 PM
              </p>
            </div>
          </div>

          {/* Dentists */}
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <p style={{ fontWeight: 700, fontSize: 14, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--grey)", marginBottom: 20 }}>Our Dentists</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
              {DOCTORS.map((doc) => (
                <a
                  key={doc.slug}
                  href={`/team/${doc.slug}`}
                  style={{
                    display: "flex", alignItems: "center", gap: 10,
                    background: "var(--grey-bg)", borderRadius: 40, padding: "8px 18px 8px 8px",
                    textDecoration: "none", color: "var(--black)", border: "1px solid var(--grey-border)",
                    transition: "all 0.2s",
                  }}
                >
                  <div className="doctor-avatar">{doc.initials}</div>
                  <span style={{ fontSize: 14, fontWeight: 500 }}>{doc.name}, {doc.credentials}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Enroll CTA ── */}
      <section id="enroll" style={{ background: "var(--red)", padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", color: "white" }}>
          <h2 className="serif" style={{ fontSize: 36, marginBottom: 12 }}>Join Our Membership Plan Today</h2>
          <p style={{ fontSize: 16, opacity: 0.9, marginBottom: 32, lineHeight: 1.7 }}>
            Choose your location to get started. Enrollment takes just 90 seconds and you&rsquo;ll have instant access to your benefits.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#" onClick={(e) => e.preventDefault()} style={{
              color: "white", textDecoration: "none", fontWeight: 600, fontSize: 16,
              padding: "16px 36px", border: "2px solid white", borderRadius: 6,
              transition: "all 0.3s", display: "inline-block",
            }}>
              Sign Up — Orlando
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} style={{
              color: "white", textDecoration: "none", fontWeight: 600, fontSize: 16,
              padding: "16px 36px", border: "2px solid white", borderRadius: 6,
              transition: "all 0.3s", display: "inline-block",
            }}>
              Sign Up — Kissimmee
            </a>
          </div>
        </div>
      </section>

      {/* ── Disclosures ── */}
      <section style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: "var(--grey)" }}>Important Disclosures</h3>
          <div style={{ fontSize: 13, color: "var(--grey-light)", lineHeight: 1.8 }}>
            <p style={{ marginBottom: 12 }}>
              Our membership plans are provided only to uninsured patients of our practice and are not insurance, pre-payment for future services, payment for access to discounted services, or a qualified health plan under the Affordable Care Act. Instead, our patients elect to make an annual subscription payment for preventive care versus paying at the time of each service.
            </p>
            <p style={{ marginBottom: 12 }}>
              The membership plan is a direct agreement between the patient and the legal entity of our practice. Membership plan payments must be current in order for the patient to receive the benefits included with their membership plan.
            </p>
            <p style={{ marginBottom: 12 }}>
              Membership plan benefits may not be combined with any other offers or discounts. Payment for additional treatment provided by our practice to the patient is due at the time of service and our membership plans do not cover procedures completed outside of our practice.
            </p>
            <p>
              The term of our membership plans is 12 months from the patient Effective Date and automatically renews on the Renewal Date. Patients can opt out of membership plan renewals by clicking &ldquo;Cancel Auto-Renew&rdquo; in the Member Portal or by contacting our practice directly. Refunds are at the sole discretion of our practice.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
