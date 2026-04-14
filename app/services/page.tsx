"use client";
import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const LOGO_URL = "/ATADental_Logo_Horizontal_POS.png";
const BOOKING_URL = "https://app.nexhealth.com/appt/ATA_Dental?lid=39277";

const SERVICE_CATEGORIES = [
  {
    id: "restorative",
    label: "Restorative",
    icon: "🦷",
    headline: "Restorative Dentistry",
    tagline: "Rebuild strength, function, and confidence.",
    services: [
      {
        title: "Dental Crowns",
        icon: "👑",
        summary: "Restore a damaged or weakened tooth in a single visit.",
        detail:
          "Dental crowns are one of the most versatile restorations in dentistry — used to protect cracked teeth, cover large fillings, and restore teeth after root canal therapy. At Ata Dental, we use 3Shape TRIOS® digital scanners and in-office CAD/CAM milling so your permanent, custom crown is ready the same day.",
        highlights: ["Same-day in most cases", "All-porcelain or PFM options", "Digital impressions — no messy trays"],
      },
      {
        title: "Same-Day Crowns",
        icon: "⚡",
        summary: "Walk in with a broken tooth. Walk out with a permanent crown.",
        detail:
          "Our CAD/CAM technology allows us to design, mill, and place a custom porcelain crown in a single appointment — typically in about 90 minutes. No temporary crowns, no second visits, no waiting weeks for a lab.",
        highlights: ["Milled in-office in ~90 minutes", "Custom color-matched porcelain", "No temporary crown needed"],
      },
      {
        title: "Dental Implants",
        icon: "🔩",
        summary: "The gold standard for replacing missing teeth — done entirely in-house.",
        detail:
          "Dental implants are titanium posts surgically placed in the jawbone to act as artificial tooth roots. Once healed, they support a crown, bridge, or full arch restoration. Unlike dentures, implants are permanent and preserve jawbone. Every step — from extraction to final crown — is performed right here at Ata Dental.",
        highlights: ["Full in-house procedure", "Preserves jawbone", "Lifetime durability with proper care", "Single tooth or full arch"],
      },
      {
        title: "All-on-4 Implants",
        icon: "🏗️",
        summary: "Full-arch restoration on just four implants.",
        detail:
          "All-on-4 is a revolutionary technique that supports a complete arch of replacement teeth on only four strategically placed implants. It's an ideal solution for patients with significant tooth loss or those who are tired of ill-fitting dentures. The result is a permanent, natural-looking smile.",
        highlights: ["Full arch on 4 implants", "Often same-day teeth", "Alternative to full dentures", "Life-changing results"],
      },
      {
        title: "Root Canal Therapy",
        icon: "🔬",
        summary: "Save your natural tooth and eliminate infection — comfortably.",
        detail:
          "When decay reaches the inner pulp of a tooth, a root canal removes the infected tissue, seals the canal, and saves your tooth from extraction. Modern techniques and anesthesia make the procedure far more comfortable than its reputation suggests. Dr. Mikhail and Dr. Broche specialize in endodontic care.",
        highlights: ["Preserves natural tooth", "Relieves severe toothache", "Completed in 1–2 visits", "Sedation available"],
      },
    ],
  },
  {
    id: "cosmetic",
    label: "Cosmetic",
    icon: "✨",
    headline: "Cosmetic Dentistry",
    tagline: "Enhance your smile with personalized aesthetic treatments.",
    services: [
      {
        title: "Porcelain Veneers",
        icon: "💎",
        summary: "Transform your smile with ultra-thin, custom porcelain shells.",
        detail:
          "Veneers are wafer-thin porcelain facings bonded to the front of your teeth to correct chips, gaps, discoloration, and mild misalignment. They require minimal tooth reduction and produce dramatic, long-lasting results. Our team will design your veneers to complement your facial features for a completely natural look.",
        highlights: ["Corrects chips, stains, gaps", "Minimal tooth removal", "Natural-looking translucency", "Lasts 10–20 years"],
      },
      {
        title: "Cosmetic Dentistry",
        icon: "😁",
        summary: "Full smile makeovers tailored to your goals.",
        detail:
          "A smile makeover combines multiple cosmetic treatments — veneers, crowns, whitening, and more — to address all aspects of your smile in a coordinated treatment plan. We start with a comprehensive consultation to understand what you love (and don't love) about your smile, then design a customized roadmap.",
        highlights: ["Comprehensive smile design", "Combines multiple treatments", "Personalized to your face", "Digital preview available"],
      },
      {
        title: "KOR Whitening",
        icon: "🌟",
        summary: "Professional whitening that tackles even deep, stubborn stains.",
        detail:
          "KOR Whitening is widely regarded as one of the most effective professional whitening systems available. Unlike standard bleaching, KOR uses refrigerated whitening trays and a unique delivery system to achieve dramatic results — even on teeth stained by tetracycline or fluorosis that other systems cannot treat.",
        highlights: ["Works on stubborn stains", "Refrigerated gel for maximum potency", "Longer-lasting than over-the-counter", "In-office and take-home options"],
      },
      {
        title: "Clear Aligners / Invisalign",
        icon: "😴",
        summary: "Straighten your teeth discreetly — no metal braces required.",
        detail:
          "Clear aligner therapy uses a series of custom, removable plastic trays to gradually shift your teeth into alignment. They're virtually invisible, comfortable, and removable for eating and brushing. Dr. Robin and Dr. Cobo offer both Invisalign and other leading aligner systems for teens and adults.",
        highlights: ["Virtually invisible", "Removable for eating & cleaning", "No metal wires or brackets", "Teen and adult options"],
      },
    ],
  },
  {
    id: "general",
    label: "General Care",
    icon: "🩺",
    headline: "General & Preventive Care",
    tagline: "Routine care that keeps your whole family healthy.",
    services: [
      {
        title: "Comprehensive Exams",
        icon: "📋",
        summary: "A thorough head-to-toe assessment of your oral health.",
        detail:
          "Your first visit includes a full dental and periodontal exam, digital X-rays, oral cancer screening, and a detailed treatment plan. We take the time to explain every finding and answer your questions — no rushed appointments.",
        highlights: ["Digital X-rays", "Oral cancer screening", "Personalized treatment plan", "No rushing"],
      },
      {
        title: "Cleanings & Hygiene",
        icon: "🪥",
        summary: "Professional cleanings that go beyond what brushing can do.",
        detail:
          "Our hygienists perform thorough cleanings to remove plaque and tartar buildup, especially in areas that are hard to reach at home. Regular cleanings (typically every 6 months) are the cornerstone of preventing gum disease, cavities, and tooth loss.",
        highlights: ["Removes tartar buildup", "Polishing & fluoride treatment", "Gum disease prevention", "Every 6 months recommended"],
      },
      {
        title: "3D Imaging",
        icon: "🖥️",
        summary: "State-of-the-art digital scans for precise diagnostics.",
        detail:
          "Our office uses digital 3D imaging (CBCT) for implant planning, evaluating bone structure, and diagnosing complex dental issues that standard 2D X-rays can miss. Combined with our 3Shape TRIOS® intraoral scanner, we can take impressions without messy trays — faster and more accurate.",
        highlights: ["Cone beam CT for implants", "3Shape TRIOS® scanner", "No messy impression trays", "More accurate treatment planning"],
      },
      {
        title: "Sedation Dentistry",
        icon: "💤",
        summary: "Nitrous oxide and oral sedation for a calm, anxiety-free visit.",
        detail:
          "Dental anxiety is very common, and we take it seriously. Nitrous oxide (laughing gas) provides mild relaxation during treatment and wears off quickly, while oral conscious sedation offers deeper relaxation for longer procedures. You'll remain awake and responsive, just comfortable and at ease.",
        highlights: ["Nitrous oxide available", "Oral conscious sedation", "Great for dental anxiety", "Wears off quickly"],
      },
    ],
  },
  {
    id: "emergency",
    label: "Emergency",
    icon: "🚨",
    headline: "Emergency Dental Care",
    tagline: "When you need urgent care, we're here — even after hours.",
    services: [
      {
        title: "Emergency Dental Treatment",
        icon: "🚨",
        summary: "Urgent care for toothaches, broken teeth, lost crowns, and more.",
        detail:
          "Dental emergencies don't follow a schedule. Whether it's a sudden severe toothache, a cracked or knocked-out tooth, a lost filling, or a broken crown, Ata Dental has a dedicated after-hours phone line so you can reach us any time. We prioritize emergency patients and do our best to see you the same day.",
        highlights: ["Dedicated after-hours line", "Same-day appointments when possible", "Toothaches, chips, lost crowns", "Hablamos Español"],
      },
    ],
  },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("restorative");
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const currentCategory = SERVICE_CATEGORIES.find((c) => c.id === activeCategory)!;

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
        .tab-btn {
          padding: 12px 24px; border-radius: 8px; border: none; font-family: inherit;
          font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.2s;
          display: flex; align-items: center; gap: 8px;
        }
        .tab-btn.active { background: var(--red); color: white; }
        .tab-btn:not(.active) { background: var(--grey-bg); color: var(--grey); }
        .tab-btn:not(.active):hover { background: var(--grey-border); color: var(--black); }
        .service-card {
          background: var(--white); border-radius: 12px; border: 1px solid var(--grey-border);
          overflow: hidden; transition: all 0.3s; cursor: pointer;
        }
        .service-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.1); border-color: rgba(196,18,48,0.2); }
        .service-card.expanded { box-shadow: 0 8px 32px rgba(0,0,0,0.1); border-color: var(--red); }
        .service-header {
          padding: 28px 32px; display: flex; align-items: flex-start;
          justify-content: space-between; gap: 16px;
        }
        .service-body {
          padding: 0 32px 28px 32px; border-top: 1px solid var(--grey-border);
        }
        .highlight-chip {
          display: inline-flex; align-items: center; gap: 6px;
          background: var(--red-light); color: var(--red);
          padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 600;
        }
        .nav-link { color: var(--grey); text-decoration: none; font-weight: 600; font-size: 14px; transition: color 0.2s; }
        .nav-link:hover { color: var(--red); }
        .chevron { transition: transform 0.3s; font-style: normal; display: inline-block; }
        .chevron.open { transform: rotate(180deg); }
        .tech-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .afford-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .services-hero-h1 { font-size: 52px; }
        @media (max-width: 768px) {
          .tech-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .afford-grid { grid-template-columns: 1fr !important; }
          .services-hero-h1 { font-size: 34px !important; }
          .service-header { padding: 20px 18px !important; }
          .service-body { padding: 0 18px 20px !important; }
          .tab-btn { padding: 10px 16px !important; font-size: 14px !important; }
          .emergency-flex { flex-direction: column !important; text-align: center; }
          .emergency-flex .btn-primary, .emergency-flex .btn-outline { width: 100%; text-align: center; }
          .highlights-bar { gap: 16px !important; }
        }
      `}</style>

      <Nav activePage="services" />

      {/* Hero */}
      <section style={{ background: "var(--black)", padding: "80px 24px 72px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Comprehensive Dental Care</p>
          <h1 className="serif services-hero-h1" style={{ color: "white", lineHeight: 1.15, marginBottom: 20, maxWidth: 700 }}>
            Every Service You Need, Under One Roof
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.75, maxWidth: 620, marginBottom: 36 }}>
            From routine cleanings to full-arch implants, Ata Dental's team of specialists covers the full spectrum of dental care — with advanced technology and a patient-first approach.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Book an Appointment</a>
            <a href="tel:+14078576501" style={{ color: "white", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "16px 24px", border: "2px solid rgba(255,255,255,0.25)", borderRadius: 6, display: "inline-flex", alignItems: "center", gap: 8 }}>
              📞 (407) 857-6501
            </a>
          </div>
        </div>
      </section>

      {/* Quick highlights bar */}
      <section style={{ background: "var(--red)", padding: "20px 24px" }}>
        <div className="highlights-bar" style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 40, flexWrap: "wrap", justifyContent: "center" }}>
          {["In-House CAD/CAM Lab", "Same-Day Crowns Available", "Sedation Options", "Hablamos Español", "After-Hours Emergency Line"].map((item) => (
            <span key={item} style={{ color: "white", fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 12 }}>✓</span> {item}
            </span>
          ))}
        </div>
      </section>

      {/* Services Explorer */}
      <section style={{ padding: "72px 24px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Section header */}
          <div style={{ marginBottom: 48 }}>
            <p style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>What We Offer</p>
            <h2 className="serif" style={{ fontSize: 38, marginBottom: 12 }}>Our Services</h2>
            <div style={{ width: 60, height: 3, background: "var(--red)", borderRadius: 2 }} />
          </div>

          {/* Category tabs */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`tab-btn ${activeCategory === cat.id ? "active" : ""}`}
                onClick={() => { setActiveCategory(cat.id); setExpandedService(null); }}
              >
                <span>{cat.icon}</span> {cat.label}
              </button>
            ))}
          </div>

          {/* Category intro */}
          <div style={{ background: "var(--grey-bg)", borderRadius: 12, padding: "28px 32px", marginBottom: 32, borderLeft: "4px solid var(--red)" }}>
            <h3 className="serif" style={{ fontSize: 26, marginBottom: 6 }}>{currentCategory.headline}</h3>
            <p style={{ color: "var(--grey)", fontSize: 16 }}>{currentCategory.tagline}</p>
          </div>

          {/* Service cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {currentCategory.services.map((svc) => {
              const isExpanded = expandedService === svc.title;
              return (
                <div
                  key={svc.title}
                  className={`service-card ${isExpanded ? "expanded" : ""}`}
                  onClick={() => setExpandedService(isExpanded ? null : svc.title)}
                >
                  <div className="service-header">
                    <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                      <span style={{ fontSize: 32, lineHeight: 1 }}>{svc.icon}</span>
                      <div>
                        <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6 }}>{svc.title}</h3>
                        <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.6 }}>{svc.summary}</p>
                      </div>
                    </div>
                    <span style={{ fontSize: 20, color: "var(--grey-light)", flexShrink: 0, marginTop: 4 }}>
                      <i className={`chevron ${isExpanded ? "open" : ""}`}>▾</i>
                    </span>
                  </div>

                  {isExpanded && (
                    <div className="service-body" onClick={(e) => e.stopPropagation()}>
                      <p style={{ fontSize: 15, color: "#444", lineHeight: 1.8, margin: "20px 0 24px" }}>{svc.detail}</p>
                      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 24 }}>
                        {svc.highlights.map((h) => (
                          <span key={h} className="highlight-chip">✓ {h}</span>
                        ))}
                      </div>
                      <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ padding: "12px 28px", fontSize: 14 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Book a Consultation
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section style={{ background: "var(--red-light)", padding: "52px 24px", borderTop: "1px solid rgba(196,18,48,0.15)", borderBottom: "1px solid rgba(196,18,48,0.15)" }}>
        <div className="emergency-flex" style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap" }}>
          <div style={{ fontSize: 44 }}>🚨</div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Dental Emergency?</h3>
            <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.7 }}>
              We maintain a dedicated after-hours phone line for dental emergencies. Don't wait — call us anytime. <em>Hablamos Español.</em>
            </p>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="tel:+14078576501" className="btn-primary" style={{ whiteSpace: "nowrap" }}>Orlando: (407) 857-6501</a>
            <a href="tel:+14078705151" className="btn-outline" style={{ whiteSpace: "nowrap" }}>Kissimmee: (407) 870-5151</a>
          </div>
        </div>
      </section>

      {/* Technology section */}
      <section style={{ background: "var(--grey-bg)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="tech-grid">
            <div>
              <p style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Advanced Technology</p>
              <h2 className="serif" style={{ fontSize: 36, marginBottom: 16, lineHeight: 1.2 }}>State-of-the-Art In-House Capabilities</h2>
              <div style={{ width: 60, height: 3, background: "var(--red)", borderRadius: 2, marginBottom: 24 }} />
              <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.8, marginBottom: 28 }}>
                Most dental offices send crowns, implant components, and other restorations to external labs — adding days or weeks to your treatment. Ata Dental's in-house lab means we control quality, timeline, and fit at every step.
              </p>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Schedule a Visit</a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: "🖥️", title: "3Shape TRIOS® Intraoral Scanner", desc: "Digital impressions — no messy putty trays, faster and more accurate." },
                { icon: "🧊", title: "In-Office CAD/CAM Milling", desc: "Custom crowns milled on-site in about 90 minutes." },
                { icon: "📡", title: "Cone Beam 3D Imaging (CBCT)", desc: "Full 3D view of bone structure for precise implant planning." },
                { icon: "🧪", title: "In-House Dental Lab", desc: "Full lab on premises for quality control and faster turnaround." },
              ].map((tech) => (
                <div key={tech.title} style={{ display: "flex", gap: 16, padding: "20px 24px", background: "var(--white)", borderRadius: 10, boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
                  <span style={{ fontSize: 26, flexShrink: 0 }}>{tech.icon}</span>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{tech.title}</p>
                    <p style={{ fontSize: 14, color: "var(--grey)", lineHeight: 1.6 }}>{tech.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Affordability */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Making Care Accessible</p>
          <h2 className="serif" style={{ fontSize: 36, marginBottom: 8 }}>Flexible Payment Options</h2>
          <div style={{ width: 60, height: 3, background: "var(--red)", borderRadius: 2, marginBottom: 36 }} />
          <div className="afford-grid">
            {[
              { icon: "🏥", title: "Insurance", desc: "We work with a wide range of dental insurance plans. Our front desk team will help you maximize your benefits.", link: null },
              { icon: "💳", title: "Cherry Financing", desc: "Flexible payment plans with 0% APR options. No hard credit pull, quick approval, and no hidden fees.", link: "/financing" },
              { icon: "🌟", title: "Membership Plan", desc: "No insurance? Our in-house plan covers cleanings, exams, X-rays, fluoride, and 20% off other treatments for just $300/year.", link: "/membership" },
            ].map((item) => (
              <div key={item.title} style={{ background: "var(--white)", border: "1px solid var(--grey-border)", borderRadius: 12, padding: "32px 28px", borderTop: "3px solid var(--red)" }}>
                <span style={{ fontSize: 32, display: "block", marginBottom: 14 }}>{item.icon}</span>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "var(--grey)", lineHeight: 1.7, marginBottom: 16 }}>{item.desc}</p>
                {item.link && (
                  <a href={item.link} style={{ color: "var(--red)", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>Learn More →</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--black)", padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", color: "white" }}>
          <h2 className="serif" style={{ fontSize: 36, marginBottom: 14 }}>Ready to Get Started?</h2>
          <p style={{ fontSize: 17, opacity: 0.72, marginBottom: 32, lineHeight: 1.7 }}>
            Book an appointment online, give us a call, or visit either of our two convenient locations in Orlando and Kissimmee.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Online</a>
            <a href="/locations/orlando" style={{ color: "white", borderColor: "rgba(255,255,255,0.35)", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "16px 28px", border: "2px solid rgba(255,255,255,0.3)", borderRadius: 6, display: "inline-block" }}>Our Locations</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
