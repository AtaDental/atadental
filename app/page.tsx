"use client";
import { useState, useEffect, useRef } from "react";

const LOGO_URL = "/ATADental_Logo_Horizontal_POS.png";

const SERVICES = [
  { icon: "👑", title: "Dental Crowns", desc: "Restore damaged teeth in a single visit using advanced 3Shape TRIOS scanners and CAD/CAM technology." },
  { icon: "🦷", title: "Dental Implants", desc: "Replace missing teeth with implant-supported restorations — the gold standard in restorative care, performed entirely in-house." },
  { icon: "✨", title: "Cosmetic Dentistry", desc: "Porcelain veneers, cosmetic crowns, clear aligners, and complete smile makeovers tailored to you." },
  { icon: "🚨", title: "Emergency Dental", desc: "Urgent care when you need it most — with a dedicated after-hours phone line so you can reach us anytime." },
  { icon: "😁", title: "Invisalign", desc: "Straighten your smile discreetly with clear aligner therapy for teens and adults." },
  { icon: "💎", title: "Veneers", desc: "Custom porcelain veneers to correct chips, gaps, discoloration, and uneven teeth." },
  { icon: "🔬", title: "Root Canal Therapy", desc: "Eliminate tooth infection and preserve your natural teeth with gentle, effective endodontic treatment." },
  { icon: "🌟", title: "KOR Whitening", desc: "Professional-grade teeth whitening for dramatically brighter, longer-lasting results." },
  { icon: "🖥️", title: "3D Imaging", desc: "State-of-the-art digital scanners and 3D imaging for precise diagnostics and treatment planning." },
  { icon: "🏗️", title: "All-on-4 Implants", desc: "Full-arch restoration on just four implants — a life-changing solution for extensive tooth loss." },
  { icon: "⚡", title: "Same-Day Crowns", desc: "Walk in with a damaged tooth and leave with a permanent, custom-milled crown the same day." },
  { icon: "😴", title: "Sedation Dentistry", desc: "Nitrous oxide and oral conscious sedation options to keep you comfortable and anxiety-free." },
];

const DOCTORS = [
  { name: "Omar Ata, DDS", role: "Original Founder", bio: "Practicing in Greater South Orlando since 1981, Dr. Omar Ata was among the first in the region to adopt CAD/CAM restorative technology. He continually seeks new ways to elevate patient care.", photo: "/DrOmar.jpg" },
  { name: "Joseph A. Ata, DMD", role: "Practice Owner and Implant Expert", bio: "A graduate of Nova Southeastern University, Dr. Joseph Ata joined the family practice in 2008 and has completed over 400 hours of advanced continuing education in implant dentistry.", photo: "/DrJoe.jpg" },
  { name: "Ireni Mikhail, DDS", role: "Complex Comprehensive Care and Endodontics", bio: "Originally from Egypt, Dr. Mikhail is known for her meticulous attention to detail and dedication to patient education, ensuring every visit is comfortable and pain-free.", photo: "/DrMikhail.jpg" },
  { name: "Matthew Robin, DMD", role: "Orthodontic Aligners, Endodontics and General Care", bio: "An Orlando native and member of the Academy of General Dentistry, Dr. Robin focuses on prevention and long-term systemic health.", photo: "/DrRobin.jpg" },
  { name: "Javier Broche, DMD", role: "Oral Surgery, Endodontics and General Care", bio: "A University of Florida College of Dentistry graduate, Dr. Broche carries on a family tradition as the third dentist in the Broche family, with a focus on endodontics and implants.", photo: "/DrBroche.JPG" },
  { name: "Johana Cobo, DDS", role: "Orthodontic Aligners, Endodontics and Complex Care", bio: "A Howard University graduate, Dr. Cobo is committed to lifelong learning and continually refines her skills through advanced continuing education programs.", photo: "/DrCobo.jpg" },
];

const LOCATIONS = [
  { name: "Orlando Office", address: "13512 S. John Young Pkwy", city: "Orlando, FL 32837", phone: "(407) 857-6501", phoneRaw: "+14078576501" },
  { name: "Kissimmee Office", address: "3192 S. John Young Pkwy, Ste B", city: "Kissimmee, FL 34746", phone: "(407) 870-5151", phoneRaw: "+14078705151" },
];

const AFFILIATIONS = [
  "American Academy of Implant Dentistry",
  "American Dental Association",
  "Central Florida District Dental Association",
  "Florida Dental Association",
  "International Association for Orthodontics",
];

const NAV_ITEMS = ["Home", "About", "Services", "Booking", "Forms", "Contact"];

function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

export default function AtaDentalSite() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [bookingForm, setBookingForm] = useState({ name: "", email: "", phone: "", date: "", time: "", service: "", office: "", notes: "" });
  const [patientForm, setPatientForm] = useState({ firstName: "", lastName: "", dob: "", email: "", phone: "", address: "", insurance: "", allergies: "", medications: "", conditions: "", consent: false });
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", message: "", office: "Orlando" });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [patientSubmitted, setPatientSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const sectionIds = ["home", "about", "services", "booking", "forms", "contact"];
  const activeSection = useScrollSpy(sectionIds);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenu(false);
  };

  const handleBooking = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => setBookingSubmitted(false), 5000);
    setBookingForm({ name: "", email: "", phone: "", date: "", time: "", service: "", office: "", notes: "" });
  };

  const handlePatient = (e) => {
    e.preventDefault();
    setPatientSubmitted(true);
    setTimeout(() => setPatientSubmitted(false), 5000);
    setPatientForm({ firstName: "", lastName: "", dob: "", email: "", phone: "", address: "", insurance: "", allergies: "", medications: "", conditions: "", consent: false });
  };

  const handleContact = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => setContactSubmitted(false), 5000);
    setContactForm({ name: "", email: "", phone: "", message: "", office: "Orlando" });
  };

  return (
    <div style={{ fontFamily: "'Libre Franklin', 'Segoe UI', sans-serif", color: "#1a1a1a", background: "#ffffff", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Libre+Franklin:wght@300;400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        :root {
          --red: #c41230;
          --red-dark: #a00f28;
          --red-light: #fdf0f2;
          --black: #1a1a1a;
          --dark: #2d2d2d;
          --grey: #555555;
          --grey-light: #888888;
          --grey-bg: #f5f5f5;
          --grey-border: #e0e0e0;
          --white: #ffffff;
          --shadow: 0 4px 24px rgba(0,0,0,0.08);
          --shadow-lg: 0 12px 48px rgba(0,0,0,0.12);
        }
        .serif { font-family: 'DM Serif Display', Georgia, serif; }
        .nav-link {
          position: relative; cursor: pointer; font-size: 13px; font-weight: 600;
          letter-spacing: 0.6px; text-transform: uppercase; color: var(--grey);
          transition: color 0.3s; padding: 4px 0; background: none; border: none; font-family: inherit;
        }
        .nav-link:hover, .nav-link.active { color: var(--red); }
        .nav-link.active::after {
          content: ''; position: absolute; bottom: -2px; left: 0; right: 0;
          height: 2px; background: var(--red); border-radius: 1px;
        }
        .btn-primary {
          background: var(--red); color: white; border: none; padding: 14px 36px;
          border-radius: 6px; font-size: 15px; font-weight: 600; cursor: pointer;
          transition: all 0.3s; letter-spacing: 0.3px; font-family: inherit;
        }
        .btn-primary:hover { background: var(--red-dark); transform: translateY(-1px); box-shadow: var(--shadow); }
        .btn-outline {
          background: transparent; color: var(--white); border: 2px solid rgba(255,255,255,0.5);
          padding: 12px 34px; border-radius: 6px; font-size: 15px; font-weight: 600;
          cursor: pointer; transition: all 0.3s; font-family: inherit;
        }
        .btn-outline:hover { background: rgba(255,255,255,0.1); border-color: white; }
        .card {
          background: var(--white); border-radius: 12px; padding: 28px;
          box-shadow: var(--shadow); transition: all 0.35s;
        }
        .card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
        .input-field {
          width: 100%; padding: 12px 16px; border: 1.5px solid var(--grey-border);
          border-radius: 8px; font-size: 15px; font-family: inherit;
          transition: border-color 0.3s, box-shadow 0.3s; background: var(--white); color: var(--black);
        }
        .input-field:focus { outline: none; border-color: var(--red); box-shadow: 0 0 0 3px rgba(196,18,48,0.1); }
        .input-label { display: block; font-size: 13px; font-weight: 600; color: var(--black); margin-bottom: 6px; letter-spacing: 0.3px; }
        .section-pad { padding: 100px 24px; max-width: 1140px; margin: 0 auto; }
        .hero-bg {
          background: #1a1a1a;
          position: relative; overflow: hidden;
        }
        .hero-video {
          position: absolute; top: 50%; left: 50%;
          min-width: 100%; min-height: 100%;
          width: auto; height: auto;
          transform: translate(-50%, -50%);
          z-index: 0; object-fit: cover;
        }
        .hero-overlay {
          position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.55); z-index: 0;
        }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        @media (max-width: 900px) { .doc-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 768px) {
          .grid-2, .grid-3 { grid-template-columns: 1fr; }
          .section-pad { padding: 64px 20px; }
          .desktop-nav { display: none !important; }
          .hero-title { font-size: 34px !important; }
          .doc-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) { .mobile-toggle { display: none !important; } }
        .success-msg {
          background: var(--red-light); border: 1.5px solid var(--red); color: var(--red-dark);
          padding: 16px 24px; border-radius: 8px; font-weight: 500; text-align: center;
          animation: slideIn 0.4s ease;
        }
        @keyframes slideIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        textarea.input-field { resize: vertical; min-height: 80px; }
        .divider { width: 60px; height: 3px; background: var(--red); border-radius: 2px; margin: 16px 0 24px; }
        .hamburger { background: none; border: none; cursor: pointer; padding: 8px; }
        .hamburger span { display: block; width: 24px; height: 2px; background: var(--black); margin: 5px 0; transition: 0.3s; border-radius: 1px; }
        .affil-tag { display: inline-block; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); border-radius: 20px; padding: 6px 16px; font-size: 12px; color: rgba(255,255,255,0.75); font-weight: 500; letter-spacing: 0.3px; }
        .phone-link { color: inherit; text-decoration: none; font-weight: 600; }
        .phone-link:hover { text-decoration: underline; }
      `}</style>

      {/* ─── NAV ─── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--grey-border)", padding: "0 24px",
      }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }} onClick={() => scrollTo("home")}>
            <img src={LOGO_URL} alt="Ata Dental" style={{ height: 42, width: "auto" }} />
          </div>
          <div className="desktop-nav" style={{ display: "flex", gap: 24, alignItems: "center" }}>
            {NAV_ITEMS.map((item) => (
              <button key={item} className={`nav-link ${activeSection === item.toLowerCase() ? "active" : ""}`} onClick={() => scrollTo(item.toLowerCase())}>{item}</button>
            ))}
            <button className="btn-primary" style={{ padding: "10px 24px", fontSize: 13 }} onClick={() => scrollTo("booking")}>Book Now</button>
          </div>
          <button className="mobile-toggle hamburger" onClick={() => setMobileMenu(!mobileMenu)}><span /><span /><span /></button>
        </div>
        {mobileMenu && (
          <div style={{ background: "var(--white)", padding: "12px 24px 20px", borderTop: "1px solid var(--grey-border)" }}>
            {NAV_ITEMS.map((item) => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())} style={{
                display: "block", width: "100%", textAlign: "left", padding: "12px 0",
                border: "none", background: "none", fontSize: 15, fontWeight: 500,
                color: activeSection === item.toLowerCase() ? "var(--red)" : "var(--grey)",
                cursor: "pointer", fontFamily: "inherit",
              }}>{item}</button>
            ))}
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section id="home" className="hero-bg" style={{ paddingTop: 72 }}>
        <video className="hero-video" autoPlay muted loop playsInline poster="">
          <source src="/AtaTrailer.m4v" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div style={{ padding: "120px 24px 100px", maxWidth: 1140, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeIn>
            <p style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>State-of-the-Art Dentistry</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="serif hero-title" style={{ fontSize: 54, color: "white", lineHeight: 1.15, maxWidth: 660, marginBottom: 24 }}>Serving Families in Orlando Since 1989</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.75)", maxWidth: 540, lineHeight: 1.7, marginBottom: 40, fontWeight: 300 }}>
              For over 30 years, our family-owned practice has been focused on a single goal: providing superior, patient-focused dental care with cutting-edge technology.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button className="btn-primary" style={{ fontSize: 16, padding: "16px 40px" }} onClick={() => scrollTo("booking")}>Schedule Appointment</button>
              <button className="btn-outline" onClick={() => scrollTo("services")}>Our Services</button>
            </div>
          </FadeIn>
          <FadeIn delay={0.45}>
            <div style={{ display: "flex", gap: 16, marginTop: 40, flexWrap: "wrap" }}>
              {LOCATIONS.map((loc) => (
                <a key={loc.name} href={`tel:${loc.phoneRaw}`} style={{
                  display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "12px 20px",
                  color: "white", textDecoration: "none", fontSize: 14, transition: "background 0.3s",
                }}>
                  <span style={{ fontSize: 18 }}>📞</span>
                  <span><strong>{loc.name}</strong><br /><span style={{ opacity: 0.75 }}>{loc.phone}</span></span>
                </a>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.55}>
            <div style={{ display: "flex", gap: 48, marginTop: 64, flexWrap: "wrap" }}>
              {[["30+", "Years of Care"], ["700+", "5-Star Reviews"], ["6", "Expert Dentists"], ["2", "Convenient Locations"]].map(([num, label]) => (
                <div key={label}>
                  <div className="serif" style={{ fontSize: 36, color: "white" }}>{num}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", letterSpacing: 0.5, marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── WHAT SETS US APART ─── */}
      <section style={{ background: "var(--white)", borderBottom: "1px solid var(--grey-border)" }}>
        <div style={{ padding: "64px 24px", maxWidth: 1140, margin: "0 auto" }}>
          <div className="grid-3">
            {[
              { icon: "🏥", title: "Comprehensive Services", desc: "Cosmetic, restorative, general, emergency — complete dental care under one roof at both our Orlando and Kissimmee locations." },
              { icon: "🖨️", title: "Cutting-Edge Technology", desc: "Digital scanners, 3D printers, CAD/CAM software, and an in-house dental lab for the highest precision in every treatment." },
              { icon: "💰", title: "Affordable Prices", desc: "We work with a wide range of insurances and accept flexible financing through Cherry and CareCredit to minimize your costs." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div style={{ textAlign: "center", padding: "20px 12px" }}>
                  <div style={{ fontSize: 36, marginBottom: 14 }}>{item.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT / DOCTORS ─── */}
      <section id="about" style={{ background: "var(--grey-bg)" }}>
        <div className="section-pad">
          <FadeIn>
            <p style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>About Our Practice</p>
            <h2 className="serif" style={{ fontSize: 40, marginTop: 8 }}>Meet Our Dentists</h2>
            <div className="divider" />
          </FadeIn>
          <div className="doc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {DOCTORS.map((doc, i) => (
              <FadeIn key={doc.name} delay={i * 0.07}>
                <div className="card" style={{ textAlign: "center", height: "100%" }}>
                  <img src={doc.photo} alt={doc.name} style={{
                    width: 110, height: 110, borderRadius: "50%", margin: "0 auto 16px",
                    objectFit: "cover", objectPosition: "center center",
                    border: "3px solid var(--red)", display: "block",
                  }} />
                  <h3 style={{ fontSize: 17, fontWeight: 700 }}>{doc.name}</h3>
                  <p style={{ fontSize: 12, color: "var(--red)", fontWeight: 600, letterSpacing: 0.4, margin: "4px 0 12px", textTransform: "uppercase" }}>{doc.role}</p>
                  <p style={{ fontSize: 14, color: "var(--grey)", lineHeight: 1.6 }}>{doc.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div style={{ marginTop: 48, textAlign: "center" }}>
              <p style={{ fontSize: 14, fontWeight: 600, color: "var(--grey)", marginBottom: 12, letterSpacing: 0.5, textTransform: "uppercase" }}>Professional Affiliations</p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
                {AFFILIATIONS.map((a) => (
                  <span key={a} style={{
                    background: "var(--red-light)", color: "var(--red-dark)", border: "1px solid rgba(196,18,48,0.15)",
                    borderRadius: 20, padding: "6px 16px", fontSize: 12, fontWeight: 500,
                  }}>{a}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services">
        <div className="section-pad">
          <FadeIn>
            <p style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>Comprehensive Care</p>
            <h2 className="serif" style={{ fontSize: 40, marginTop: 8 }}>Our Services</h2>
            <div className="divider" />
          </FadeIn>
          <div className="grid-3">
            {SERVICES.map((svc, i) => (
              <FadeIn key={svc.title} delay={i * 0.05}>
                <div className="card" style={{ borderLeft: "3px solid var(--red)", height: "100%" }}>
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{svc.icon}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{svc.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--grey)", lineHeight: 1.65 }}>{svc.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2}>
            <div style={{ marginTop: 48, background: "var(--red-light)", borderRadius: 12, padding: 32, border: "1px solid rgba(196,18,48,0.12)" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>😴 Suffer From Dental Anxiety?</h3>
              <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.7, maxWidth: 700 }}>
                We believe all patients should feel comfortable. If nervousness is standing between you and treatment, ask about our sedation options — including nitrous oxide and oral conscious sedation. Contact our offices in <a href="tel:+14078576501" style={{ color: "var(--red)", fontWeight: 600 }}>Orlando</a> or <a href="tel:+14078705151" style={{ color: "var(--red)", fontWeight: 600 }}>Kissimmee</a> to learn more.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── RESOURCES ─── */}
      <section style={{ background: "var(--grey-bg)" }}>
        <div className="section-pad">
          <FadeIn>
            <p style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>Patient Resources</p>
            <h2 className="serif" style={{ fontSize: 40, marginTop: 8 }}>Affordable Care Options</h2>
            <div className="divider" />
            <p style={{ fontSize: 17, color: "var(--grey)", maxWidth: 600, lineHeight: 1.75, marginBottom: 40 }}>
              No insurance? No problem. We offer flexible options to make quality dental care accessible for everyone.
            </p>
          </FadeIn>
          <div className="grid-2">
            <FadeIn delay={0.1}>
              <div className="card" style={{ borderTop: "4px solid var(--red)", height: "100%" }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>🏷️</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Membership Plan</h3>
                <p style={{ fontSize: 14, color: "var(--grey)", lineHeight: 1.65, marginBottom: 16 }}>
                  Our in-house discount membership provides comprehensive preventive care at just <strong style={{ color: "var(--black)" }}>$300/year</strong>. Includes 2 cleanings, 2 exams, routine X-rays, fluoride treatments, and 20% off all other procedures.
                </p>
                <p style={{ fontSize: 13, color: "var(--grey-light)", marginBottom: 20 }}>
                  No insurance headaches. Enroll in 90 seconds with instant access to benefits.
                </p>
                <a href="/membership" style={{ color: "var(--red)", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>Learn More →</a>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="card" style={{ borderTop: "4px solid var(--red)", height: "100%" }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>🍒</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Cherry Financing</h3>
                <p style={{ fontSize: 14, color: "var(--grey)", lineHeight: 1.65, marginBottom: 16 }}>
                  Flexible payment plans with <strong style={{ color: "var(--black)" }}>0% APR options</strong> through Cherry. No hard credit checks, no hidden fees. Split your treatment costs into easy monthly payments.
                </p>
                <p style={{ fontSize: 13, color: "var(--grey-light)", marginBottom: 20 }}>
                  Apply in minutes and get approved for the care you need today.
                </p>
                <a href="/financing" style={{ color: "var(--red)", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>Learn More →</a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── BOOKING ─── */}
      <section id="booking" style={{ background: "var(--grey-bg)" }}>
        <div className="section-pad">
          <FadeIn>
            <p style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>Schedule a Visit</p>
            <h2 className="serif" style={{ fontSize: 40, marginTop: 8 }}>Book an Appointment</h2>
            <div className="divider" />
            <p style={{ fontSize: 17, color: "var(--grey)", maxWidth: 560, lineHeight: 1.75, marginBottom: 40 }}>Choose your preferred office to book online instantly, or use the form below to request an appointment.</p>
          </FadeIn>

          {/* Direct booking cards */}
          <FadeIn delay={0.1}>
            <div className="grid-2" style={{ marginBottom: 48, maxWidth: 700 }}>
              <a href="https://app.nexhealth.com/appt/ATA_Dental?lid=39277" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div className="card" style={{ textAlign: "center", borderTop: "4px solid var(--red)", cursor: "pointer" }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>🏢</div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>Orlando Office</h3>
                  <p style={{ fontSize: 14, color: "var(--grey)", marginBottom: 4 }}>13512 S. John Young Pkwy</p>
                  <p style={{ fontSize: 14, color: "var(--grey)", marginBottom: 16 }}>(407) 857-6501</p>
                  <span className="btn-primary" style={{ width: "100%", textAlign: "center", display: "block" }}>Book Online</span>
                  <a href="/locations/orlando" onClick={(e) => e.stopPropagation()} style={{ display: "block", marginTop: 12, color: "var(--red)", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>View Office Details →</a>
                </div>
              </a>
              <a href="https://app.nexhealth.com/appt/ATA_Dental?lid=39261" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div className="card" style={{ textAlign: "center", borderTop: "4px solid var(--red)", cursor: "pointer" }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>🏢</div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>Kissimmee Office</h3>
                  <p style={{ fontSize: 14, color: "var(--grey)", marginBottom: 4 }}>3192 S. John Young Pkwy, Ste B</p>
                  <p style={{ fontSize: 14, color: "var(--grey)", marginBottom: 16 }}>(407) 870-5151</p>
                  <span className="btn-primary" style={{ width: "100%", textAlign: "center", display: "block" }}>Book Online</span>
                  <a href="/locations/kissimmee" onClick={(e) => e.stopPropagation()} style={{ display: "block", marginTop: 12, color: "var(--red)", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>View Office Details →</a>
                </div>
              </a>
            </div>
          </FadeIn>

          {/* Contact form as alternative */}
          <FadeIn delay={0.2}>
            <p style={{ fontSize: 15, color: "var(--grey)", marginBottom: 20 }}>Or send us a request and we'll confirm your appointment within one business day:</p>
          </FadeIn>
          {bookingSubmitted ? (
            <FadeIn><div className="success-msg" style={{ maxWidth: 700 }}>✓ Thank you! Your appointment request has been submitted. We'll contact you shortly to confirm.</div></FadeIn>
          ) : (
            <FadeIn delay={0.25}>
              <div className="card" style={{ maxWidth: 700 }}>
                <div className="grid-2" style={{ marginBottom: 20 }}>
                  <div><label className="input-label">Full Name *</label><input className="input-field" placeholder="Jane Smith" value={bookingForm.name} onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })} /></div>
                  <div><label className="input-label">Email *</label><input className="input-field" type="email" placeholder="jane@email.com" value={bookingForm.email} onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })} /></div>
                </div>
                <div className="grid-2" style={{ marginBottom: 20 }}>
                  <div><label className="input-label">Phone *</label><input className="input-field" type="tel" placeholder="(407) 555-0000" value={bookingForm.phone} onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })} /></div>
                  <div><label className="input-label">Office *</label>
                    <select className="input-field" value={bookingForm.office} onChange={(e) => setBookingForm({ ...bookingForm, office: e.target.value })}>
                      <option value="">Select an office</option>
                      <option value="Orlando">Orlando — (407) 857-6501</option>
                      <option value="Kissimmee">Kissimmee — (407) 870-5151</option>
                    </select>
                  </div>
                </div>
                <div className="grid-2" style={{ marginBottom: 20 }}>
                  <div><label className="input-label">Service</label>
                    <select className="input-field" value={bookingForm.service} onChange={(e) => setBookingForm({ ...bookingForm, service: e.target.value })}>
                      <option value="">Select a service</option>
                      {SERVICES.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
                    </select>
                  </div>
                  <div><label className="input-label">Preferred Date *</label><input className="input-field" type="date" value={bookingForm.date} onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })} /></div>
                </div>
                <div className="grid-2" style={{ marginBottom: 20 }}>
                  <div><label className="input-label">Preferred Time</label>
                    <select className="input-field" value={bookingForm.time} onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}>
                      <option value="">Select a time</option>
                      {["8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM"].map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div><label className="input-label">Notes (optional)</label><input className="input-field" placeholder="Any concerns or questions" value={bookingForm.notes} onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })} /></div>
                </div>
                <button className="btn-primary" style={{ width: "100%" }} onClick={handleBooking}>Request Appointment</button>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* ─── PATIENT FORMS ─── */}
      <section id="forms">
        <div className="section-pad">
          <FadeIn>
            <p style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>New Patients</p>
            <h2 className="serif" style={{ fontSize: 40, marginTop: 8 }}>Patient Intake Form</h2>
            <div className="divider" />
            <p style={{ fontSize: 17, color: "var(--grey)", maxWidth: 560, lineHeight: 1.75, marginBottom: 40 }}>Save time at your first visit by completing this form online. Your information is kept private and secure.</p>
          </FadeIn>
          {patientSubmitted ? (
            <FadeIn><div className="success-msg" style={{ maxWidth: 700 }}>✓ Your intake form has been submitted. We look forward to welcoming you!</div></FadeIn>
          ) : (
            <FadeIn delay={0.1}>
              <div className="card" style={{ maxWidth: 700 }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 20, color: "var(--red)", letterSpacing: 0.4, textTransform: "uppercase" }}>Personal Information</h3>
                <div className="grid-2" style={{ marginBottom: 20 }}>
                  <div><label className="input-label">First Name *</label><input className="input-field" placeholder="Jane" value={patientForm.firstName} onChange={(e) => setPatientForm({ ...patientForm, firstName: e.target.value })} /></div>
                  <div><label className="input-label">Last Name *</label><input className="input-field" placeholder="Smith" value={patientForm.lastName} onChange={(e) => setPatientForm({ ...patientForm, lastName: e.target.value })} /></div>
                </div>
                <div className="grid-2" style={{ marginBottom: 20 }}>
                  <div><label className="input-label">Date of Birth *</label><input className="input-field" type="date" value={patientForm.dob} onChange={(e) => setPatientForm({ ...patientForm, dob: e.target.value })} /></div>
                  <div><label className="input-label">Email</label><input className="input-field" type="email" placeholder="jane@email.com" value={patientForm.email} onChange={(e) => setPatientForm({ ...patientForm, email: e.target.value })} /></div>
                </div>
                <div className="grid-2" style={{ marginBottom: 20 }}>
                  <div><label className="input-label">Phone *</label><input className="input-field" type="tel" placeholder="(407) 555-0000" value={patientForm.phone} onChange={(e) => setPatientForm({ ...patientForm, phone: e.target.value })} /></div>
                  <div><label className="input-label">Insurance Provider</label><input className="input-field" placeholder="e.g. Delta Dental" value={patientForm.insurance} onChange={(e) => setPatientForm({ ...patientForm, insurance: e.target.value })} /></div>
                </div>
                <div style={{ marginBottom: 24 }}><label className="input-label">Mailing Address</label><input className="input-field" placeholder="123 Main St, City, FL ZIP" value={patientForm.address} onChange={(e) => setPatientForm({ ...patientForm, address: e.target.value })} /></div>
                <h3 style={{ fontSize: 14, fontWeight: 700, margin: "32px 0 20px", color: "var(--red)", letterSpacing: 0.4, textTransform: "uppercase" }}>Medical History</h3>
                <div style={{ marginBottom: 20 }}><label className="input-label">Known Allergies</label><textarea className="input-field" placeholder="List any allergies (medications, latex, etc.)" value={patientForm.allergies} onChange={(e) => setPatientForm({ ...patientForm, allergies: e.target.value })} /></div>
                <div style={{ marginBottom: 20 }}><label className="input-label">Current Medications</label><textarea className="input-field" placeholder="List medications and dosages" value={patientForm.medications} onChange={(e) => setPatientForm({ ...patientForm, medications: e.target.value })} /></div>
                <div style={{ marginBottom: 24 }}><label className="input-label">Medical Conditions</label><textarea className="input-field" placeholder="Any relevant conditions (diabetes, heart conditions, etc.)" value={patientForm.conditions} onChange={(e) => setPatientForm({ ...patientForm, conditions: e.target.value })} /></div>
                <label style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 28, cursor: "pointer", fontSize: 14, color: "var(--grey)", lineHeight: 1.5 }}>
                  <input type="checkbox" checked={patientForm.consent} onChange={(e) => setPatientForm({ ...patientForm, consent: e.target.checked })} style={{ marginTop: 3, accentColor: "var(--red)", width: 18, height: 18 }} />
                  <span>I consent to the collection of my personal and medical information for dental treatment at Ata Dental. I understand this information will be kept confidential.</span>
                </label>
                <button className="btn-primary" style={{ width: "100%", opacity: patientForm.consent ? 1 : 0.5, pointerEvents: patientForm.consent ? "auto" : "none" }} onClick={handlePatient}>Submit Intake Form</button>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" style={{ background: "var(--black)", color: "white" }}>
        <div className="section-pad">
          <FadeIn>
            <p style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>Get in Touch</p>
            <h2 className="serif" style={{ fontSize: 40, marginTop: 8, color: "white" }}>Contact Us</h2>
            <div style={{ width: 60, height: 3, background: "var(--red)", borderRadius: 2, margin: "16px 0 32px" }} />
          </FadeIn>

          <div className="grid-2" style={{ marginBottom: 48 }}>
            {LOCATIONS.map((loc, i) => (
              <FadeIn key={loc.name} delay={i * 0.12}>
                <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: 28, border: "1px solid rgba(255,255,255,0.1)" }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: "var(--red)" }}>{loc.name}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.8, opacity: 0.85 }}>📍 {loc.address}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{loc.city}</p>
                  <p style={{ fontSize: 15, marginTop: 8, opacity: 0.85 }}>📞 <a href={`tel:${loc.phoneRaw}`} className="phone-link" style={{ color: "white" }}>{loc.phone}</a></p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div style={{ maxWidth: 600 }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 20, color: "rgba(255,255,255,0.9)" }}>Send Us a Message</h3>
              {contactSubmitted ? (
                <div className="success-msg" style={{ background: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,255,255,0.2)", color: "white" }}>✓ Message sent! We'll get back to you soon.</div>
              ) : (
                <>
                  <div className="grid-2" style={{ marginBottom: 16 }}>
                    <div><input className="input-field" placeholder="Your Name" value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "white" }} /></div>
                    <div><input className="input-field" type="email" placeholder="Your Email" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "white" }} /></div>
                  </div>
                  <div className="grid-2" style={{ marginBottom: 16 }}>
                    <div><input className="input-field" type="tel" placeholder="Phone Number" value={contactForm.phone} onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "white" }} /></div>
                    <div>
                      <select className="input-field" value={contactForm.office} onChange={(e) => setContactForm({ ...contactForm, office: e.target.value })} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "white" }}>
                        <option value="Orlando" style={{ color: "#1a1a1a" }}>Orlando Office</option>
                        <option value="Kissimmee" style={{ color: "#1a1a1a" }}>Kissimmee Office</option>
                      </select>
                    </div>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <textarea className="input-field" placeholder="Your Message" value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "white", minHeight: 100 }} />
                  </div>
                  <button className="btn-primary" style={{ width: "100%" }} onClick={handleContact}>Send Message</button>
                </>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div style={{ marginTop: 48 }}>
              <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 0.5, textTransform: "uppercase", opacity: 0.5, marginBottom: 12 }}>Professional Affiliations</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {AFFILIATIONS.map((a) => <span key={a} className="affil-tag">{a}</span>)}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: "#111111", color: "rgba(255,255,255,0.4)", padding: "28px 24px", fontSize: 13 }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p>© 2026 Ata Dental. All rights reserved.</p>
          <div style={{ display: "flex", gap: 20 }}>
            <span style={{ cursor: "pointer", textDecoration: "underline" }}>Privacy Policy</span>
            <span style={{ cursor: "pointer", textDecoration: "underline" }}>Accessibility</span>
            <span style={{ cursor: "pointer", textDecoration: "underline" }}>Sitemap</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
