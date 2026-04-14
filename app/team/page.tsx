import Nav from "../components/Nav";
import Footer from "../components/Footer";

const DOCTORS = [
  {
    name: "Omar Ata", credentials: "DDS", role: "Original Founder",
    photo: "/DrOmar.jpg", slug: "dr-omar-ata",
    bio: "Practicing in Greater South Orlando since 1981, Dr. Omar Ata was among the first in the region to adopt CAD/CAM restorative technology. He continually seeks new ways to elevate patient care.",
    specialties: ["Restorative Dentistry", "CAD/CAM Technology", "General & Family Dentistry"],
  },
  {
    name: "Joseph A. Ata", credentials: "DMD", role: "Practice Owner & Implant Expert",
    photo: "/DrJoe.jpg", slug: "dr-joseph-ata",
    bio: "A graduate of Nova Southeastern University, Dr. Joseph Ata joined the family practice in 2008 and has completed over 400 hours of advanced continuing education in implant dentistry.",
    specialties: ["Dental Implants", "All-on-4 Implants", "Same-Day Crowns"],
  },
  {
    name: "Ireni Mikhail", credentials: "DDS", role: "Complex Comprehensive Care & Endodontics",
    photo: "/DrMikhail.jpg", slug: "dr-ireni-mikhail",
    bio: "Originally from Egypt, Dr. Mikhail is known for her meticulous attention to detail and dedication to patient education, ensuring every visit is comfortable and pain-free.",
    specialties: ["Endodontics", "Root Canal Therapy", "Comprehensive Care"],
  },
  {
    name: "Matthew Robin", credentials: "DMD", role: "Orthodontic Aligners, Endodontics & General Care",
    photo: "/DrRobin.jpg", slug: "dr-matthew-robin",
    bio: "An Orlando native and member of the Academy of General Dentistry, Dr. Robin focuses on prevention and long-term systemic health through the latest techniques and technology.",
    specialties: ["Clear Aligners", "Endodontics", "Preventive Care"],
  },
  {
    name: "Javier Broche", credentials: "DMD", role: "Oral Surgery, Endodontics & General Care",
    photo: "/DrBroche.JPG", slug: "dr-javier-broche",
    bio: "A University of Florida College of Dentistry graduate, Dr. Broche carries on a family tradition as the third dentist in the Broche family, with a focus on endodontics and implants.",
    specialties: ["Oral Surgery", "Endodontics", "Dental Implants"],
  },
  {
    name: "Johana Cobo", credentials: "DDS", role: "Orthodontic Aligners, Endodontics & Complex Care",
    photo: "/DrCobo.jpg", slug: "dr-johana-cobo",
    bio: "A Howard University graduate, Dr. Cobo is committed to lifelong learning and continually refines her skills through advanced continuing education programs.",
    specialties: ["Clear Aligners", "Endodontics", "Complex Restorative"],
  },
];

const AFFILIATIONS = [
  "American Academy of Implant Dentistry",
  "American Dental Association",
  "Central Florida District Dental Association",
  "Florida Dental Association",
  "International Association for Orthodontics",
];

export default function TeamPage() {
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
        .doctor-card {
          background: var(--white); border-radius: 14px;
          box-shadow: var(--shadow); overflow: hidden;
          transition: all 0.3s; display: flex; flex-direction: column;
        }
        .doctor-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
        .specialty-tag {
          display: inline-block; background: var(--red-light); color: var(--red-dark);
          border: 1px solid rgba(196,18,48,0.15); border-radius: 20px;
          padding: 4px 12px; font-size: 12px; font-weight: 500;
        }
        .btn-primary {
          background: var(--red); color: white; border: none; padding: 16px 40px;
          border-radius: 6px; font-size: 16px; font-weight: 600; cursor: pointer;
          transition: all 0.3s; font-family: inherit; text-decoration: none; display: inline-block;
        }
        .btn-primary:hover { background: var(--red-dark); transform: translateY(-1px); }
        .team-hero-h1 { font-size: 50px; }
        .doctor-photo { height: 260px; }
        @media (max-width: 1000px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .doctor-photo { height: 300px; }
        }
        @media (max-width: 768px) {
          .team-grid { grid-template-columns: 1fr !important; }
          .team-hero-h1 { font-size: 34px !important; }
          .doctor-photo { height: 320px; }
        }
      `}</style>

      <Nav activePage="team" />

      {/* Hero */}
      <section style={{ background: "var(--black)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Our Practice</p>
          <h1 className="serif team-hero-h1" style={{ color: "white", marginBottom: 16 }}>Meet Our Dentists</h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, maxWidth: 620 }}>
            Six experienced specialists under one roof — covering everything from implants and cosmetics to orthodontics, endodontics, and emergency care.
          </p>
        </div>
      </section>

      {/* Doctor grid */}
      <section style={{ padding: "80px 24px", background: "var(--grey-bg)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="team-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {DOCTORS.map((doc) => (
              <div key={doc.slug} className="doctor-card">
                <img
                  src={doc.photo} alt={`${doc.name}, ${doc.credentials}`}
                  className="doctor-photo"
                  style={{ width: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
                />
                <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <p style={{ color: "var(--red)", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 4 }}>{doc.role}</p>
                  <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{doc.name}, {doc.credentials}</h2>
                  <p style={{ fontSize: 14, color: "var(--grey)", lineHeight: 1.7, marginBottom: 16, flex: 1 }}>{doc.bio}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                    {doc.specialties.map(s => <span key={s} className="specialty-tag">{s}</span>)}
                  </div>
                  <a href={`/team/${doc.slug}`} style={{
                    color: "var(--red)", fontWeight: 700, fontSize: 14, textDecoration: "none",
                    display: "flex", alignItems: "center", gap: 6,
                  }}>
                    Full Bio & Background →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section style={{ padding: "64px 24px", background: "var(--white)", borderTop: "1px solid var(--grey-border)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "var(--grey)", fontWeight: 600, fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 20 }}>Professional Affiliations</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            {AFFILIATIONS.map(a => (
              <span key={a} style={{
                background: "var(--red-light)", color: "var(--red-dark)", border: "1px solid rgba(196,18,48,0.15)",
                borderRadius: 20, padding: "8px 18px", fontSize: 13, fontWeight: 500,
              }}>{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--red)", padding: "60px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", color: "white" }}>
          <h2 className="serif" style={{ fontSize: 32, marginBottom: 12 }}>Ready to Meet Us In Person?</h2>
          <p style={{ fontSize: 16, opacity: 0.9, marginBottom: 28, lineHeight: 1.6 }}>
            Schedule your first appointment at either our Orlando or Kissimmee location.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://app.nexhealth.com/appt/ATA_Dental?lid=39277" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "14px 32px", border: "2px solid white", borderRadius: 6 }}>Book — Orlando</a>
            <a href="https://app.nexhealth.com/appt/ATA_Dental?lid=39261" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "14px 32px", border: "2px solid white", borderRadius: 6 }}>Book — Kissimmee</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
