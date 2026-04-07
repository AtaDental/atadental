const LOGO_URL = "/ATADental_Logo_Horizontal_POS.png";
const BOOKING_URL = "https://app.nexhealth.com/appt/ATA_Dental?lid=39277";

const DOCTORS: Record<string, {
  name: string;
  credentials: string;
  role: string;
  photo: string;
  tagline: string;
  bio: string[];
  education: string[];
  specialties: string[];
  funFact?: string;
}> = {
  "dr-omar-ata": {
    name: "Omar Ata",
    credentials: "DDS",
    role: "Original Founder",
    photo: "/DrOmar.jpg",
    tagline: "Building the foundation of family dentistry in South Orlando since 1981.",
    bio: [
      "Dr. Omar Ata has been a practicing dentist in the Greater South Orlando region since 1981, making him one of the most experienced dental professionals in Central Florida. He founded Ata Dental with a single vision: to provide superior, patient-centered care rooted in trust, precision, and continuous improvement.",
      "Dr. Ata was among the first practitioners in the region to adopt CAD/CAM restorative technology — a then-revolutionary system that allowed for same-day crown fabrication with a level of accuracy that traditional methods couldn't match. His willingness to embrace innovation early set the tone for the tech-forward practice Ata Dental has become today.",
      "More than four decades later, Dr. Ata remains an active presence in the practice. He continues to pursue new ways to elevate patient care, and his legacy lives on through his son Dr. Joseph Ata and the entire Ata Dental team, who carry forward the family tradition of excellence.",
    ],
    education: [
      "Doctor of Dental Surgery (DDS)",
      "Practicing in Greater South Orlando since 1981",
      "Pioneer in CAD/CAM restorative dentistry in the region",
    ],
    specialties: [
      "Restorative Dentistry",
      "CAD/CAM Technology",
      "General & Family Dentistry",
      "Patient-Centered Care",
    ],
  },
  "dr-joseph-ata": {
    name: "Joseph A. Ata",
    credentials: "DMD",
    role: "Practice Owner & Implant Expert",
    photo: "/DrJoe.jpg",
    tagline: "Carrying the family legacy forward with a specialty in implant dentistry.",
    bio: [
      "Dr. Joseph Ata grew up watching his father build one of the most respected dental practices in South Orlando. After earning his Doctor of Medicine in Dentistry from Nova Southeastern University College of Dental Medicine, he joined the family practice in 2008 — and quickly made his own mark.",
      "With over 400 hours of advanced continuing education focused specifically on dental implants, Dr. Joseph Ata has become the practice's lead implant specialist. He oversees every step of the implant process in-house — from the initial consultation and 3D imaging to surgical placement and final crown delivery — giving patients a seamless, high-quality experience without the need for outside referrals.",
      "As Practice Owner, Dr. Joseph has expanded Ata Dental's technology infrastructure significantly, bringing in 3Shape TRIOS® digital scanners, cone beam CT imaging, and in-house CAD/CAM milling. He is deeply committed to raising the standard of care for every patient who walks through the door.",
    ],
    education: [
      "Doctor of Medicine in Dentistry (DMD) — Nova Southeastern University College of Dental Medicine",
      "Joined Ata Dental in 2008",
      "400+ hours of continuing education in implant dentistry",
    ],
    specialties: [
      "Dental Implants",
      "All-on-4 Implants",
      "Same-Day Crowns",
      "Implant-Supported Restorations",
      "Practice Leadership",
    ],
  },
  "dr-ireni-mikhail": {
    name: "Ireni Mikhail",
    credentials: "DDS",
    role: "Complex Comprehensive Care & Endodontics",
    photo: "/DrMikhail.jpg",
    tagline: "Detail-oriented, patient-first care rooted in education and compassion.",
    bio: [
      "Dr. Ireni Mikhail was born in Egypt and immigrated to the United States with her family, eventually making South Florida her home. Her journey to dentistry was shaped by a passion for precision craftsmanship and a genuine desire to make patients feel heard and comfortable — especially those who come in with anxiety or complex dental needs.",
      "Dr. Mikhail is known throughout the practice for her meticulous attention to detail. Whether she is performing a root canal, restoring a worn smile, or managing a challenging restorative case, she approaches each procedure with a thorough, methodical care that patients and colleagues alike have come to rely on.",
      "She places a strong emphasis on patient education — taking the time to explain diagnoses, walk through treatment options, and ensure that every patient fully understands their care plan before any work begins. Her goal is simple: that every visit ends with the patient feeling informed, comfortable, and confident.",
    ],
    education: [
      "Doctor of Dental Surgery (DDS)",
      "Advanced training in endodontics and complex comprehensive care",
    ],
    specialties: [
      "Root Canal Therapy",
      "Endodontics",
      "Complex Restorative Cases",
      "Patient Education",
      "Anxiety-Focused Care",
    ],
  },
  "dr-matthew-robin": {
    name: "Matthew Robin",
    credentials: "DMD",
    role: "Orthodontic Aligners, Endodontics & General Care",
    photo: "/DrRobin.jpg",
    tagline: "An Orlando native committed to prevention, wellness, and lifelong dental health.",
    bio: [
      "Dr. Matthew Robin grew up right here in Orlando, Florida, and has a deep connection to the community he now serves. After earning his Doctor of Medicine in Dentistry, he joined Ata Dental and quickly became known for his warm chairside manner and thorough, prevention-first approach to dentistry.",
      "As a member of the Academy of General Dentistry, Dr. Robin is committed to staying current with the latest advancements in dental science. He believes strongly that good oral health is foundational to overall systemic health — and he makes sure his patients understand that connection at every visit.",
      "Dr. Robin offers clear aligner therapy (including Invisalign) for both teens and adults looking to straighten their smiles discreetly, as well as endodontic treatment and a full range of general dental services. His focus on prevention means he works hard to help patients avoid problems before they start.",
    ],
    education: [
      "Doctor of Medicine in Dentistry (DMD)",
      "Member, Academy of General Dentistry",
      "Continuing education in orthodontic aligners and endodontics",
    ],
    specialties: [
      "Clear Aligners / Invisalign",
      "Endodontics",
      "Preventive Dentistry",
      "General Family Care",
      "Systemic Health & Dentistry",
    ],
  },
  "dr-javier-broche": {
    name: "Javier Broche",
    credentials: "DMD",
    role: "Oral Surgery, Endodontics & General Care",
    photo: "/DrBroche.JPG",
    tagline: "The third Dr. Broche — continuing a family tradition of dental excellence.",
    bio: [
      "Dr. Javier Broche was born and raised in Cuba until the age of eight, after which his family relocated to the United States. He spent most of his young adult life in Miami before pursuing his dental education at the University of Florida College of Dentistry in Gainesville — where he earned his Doctor of Medicine in Dentistry and became the third dentist in the Broche family.",
      "That family legacy shapes how Dr. Broche approaches his work. Dentistry isn't just a career — it's a calling passed down through generations, and he carries that responsibility with pride. He has developed a strong clinical focus on endodontics and implant dentistry, areas where precise technique and a steady hand make all the difference.",
      "Patients appreciate Dr. Broche's directness, his thoroughness, and his ability to make complex procedures feel manageable. Whether it's a surgical extraction, a root canal, or a general care appointment, he brings the same focused professionalism to every chair.",
    ],
    education: [
      "Doctor of Medicine in Dentistry (DMD) — University of Florida College of Dentistry",
      "Third-generation dentist in the Broche family",
      "Advanced continuing education in endodontics and implant dentistry",
    ],
    specialties: [
      "Oral Surgery",
      "Tooth Extractions",
      "Endodontics",
      "Dental Implants",
      "General Dentistry",
    ],
  },
  "dr-johana-cobo": {
    name: "Johana Cobo",
    credentials: "DDS",
    role: "Orthodontic Aligners, Endodontics & Complex Care",
    photo: "/DrCobo.jpg",
    tagline: "A lifelong learner dedicated to delivering top-tier, personalized dental care.",
    bio: [
      "Dr. Johana Cobo earned her Doctor of Dental Surgery from Howard University College of Dentistry in Washington, D.C. — a program renowned for producing clinicians who are not only technically skilled but deeply committed to serving diverse communities with compassion and cultural sensitivity.",
      "Since joining Ata Dental, Dr. Cobo has distinguished herself as a practitioner who never stops learning. She regularly participates in continuing education programs, consistently seeking out new clinical techniques and evidence-based approaches to refine her skills across orthodontic aligner therapy, endodontics, and complex restorative care.",
      "Patients who see Dr. Cobo consistently describe her as thorough, personable, and genuinely invested in their long-term oral health. She takes the time to understand each patient's goals and concerns, then builds a care plan tailored to them specifically — not a one-size-fits-all approach.",
    ],
    education: [
      "Doctor of Dental Surgery (DDS) — Howard University College of Dentistry, Washington, D.C.",
      "Ongoing advanced continuing education in aligners, endodontics, and complex care",
    ],
    specialties: [
      "Clear Aligners / Invisalign",
      "Endodontics",
      "Complex Restorative Care",
      "Patient-Centered Treatment Planning",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(DOCTORS).map((slug) => ({ slug }));
}

export default function DoctorPage({ params }: { params: { slug: string } }) {
  const doc = DOCTORS[params.slug];

  if (!doc) {
    return (
      <div style={{ fontFamily: "sans-serif", padding: 80, textAlign: "center" }}>
        <h1>Doctor not found</h1>
        <a href="/" style={{ color: "#c41230" }}>← Back to Home</a>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Libre Franklin', 'Segoe UI', sans-serif", color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Libre+Franklin:wght@300;400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
          --red: #c41230; --red-dark: #a00f28; --red-light: #fdf0f2;
          --black: #1a1a1a; --grey: #555555; --grey-light: #888888;
          --grey-bg: #f5f5f5; --grey-border: #e0e0e0; --white: #ffffff;
        }
        .serif { font-family: 'DM Serif Display', Georgia, serif; }
        .btn-primary {
          background: var(--red); color: white; border: none; padding: 14px 32px;
          border-radius: 6px; font-size: 15px; font-weight: 600; cursor: pointer;
          transition: all 0.3s; font-family: inherit; text-decoration: none; display: inline-block;
        }
        .btn-primary:hover { background: var(--red-dark); transform: translateY(-1px); }
        .nav-link { color: var(--grey); text-decoration: none; font-weight: 600; font-size: 14px; }
        .nav-link:hover { color: var(--red); }
      `}</style>

      {/* Nav */}
      <nav style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--grey-border)", padding: "0 24px", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img src={LOGO_URL} alt="Ata Dental" style={{ height: 42 }} />
          </a>
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <a href="/#about" className="nav-link">Our Team</a>
            <a href="/services" className="nav-link">Services</a>
            <a href="/" className="nav-link">← Home</a>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "10px 24px", fontSize: 14 }}>Book Appointment</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "var(--black)", padding: "72px 24px 64px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", gap: 56, alignItems: "center", flexWrap: "wrap" }}>
          <img
            src={doc.photo}
            alt={`${doc.name}, ${doc.credentials}`}
            style={{
              width: 200, height: 200, borderRadius: "50%", objectFit: "cover",
              objectPosition: "center top", border: "4px solid var(--red)", flexShrink: 0,
            }}
          />
          <div>
            <p style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
              {doc.role}
            </p>
            <h1 className="serif" style={{ fontSize: 48, color: "white", lineHeight: 1.1, marginBottom: 16 }}>
              {doc.name}, <span style={{ fontStyle: "italic" }}>{doc.credentials}</span>
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, maxWidth: 520, marginBottom: 28 }}>
              {doc.tagline}
            </p>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book with Dr. {doc.name.split(" ").pop()}
            </a>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: "72px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 320px", gap: 60, alignItems: "start" }}>

          {/* Bio */}
          <div>
            <p style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>About</p>
            <h2 className="serif" style={{ fontSize: 32, marginBottom: 8 }}>Meet Dr. {doc.name.split(" ").pop()}</h2>
            <div style={{ width: 56, height: 3, background: "var(--red)", borderRadius: 2, marginBottom: 32 }} />
            {doc.bio.map((para, i) => (
              <p key={i} style={{ fontSize: 16, color: "#444", lineHeight: 1.85, marginBottom: 22 }}>{para}</p>
            ))}
          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            {/* Specialties */}
            <div style={{ background: "var(--grey-bg)", borderRadius: 12, padding: "28px 24px" }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16, color: "var(--black)" }}>Specialties</h3>
              {doc.specialties.map((s) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: "1px solid var(--grey-border)", fontSize: 14 }}>
                  <span style={{ color: "var(--red)", fontWeight: 700, fontSize: 13 }}>✓</span>
                  <span style={{ color: "var(--grey)" }}>{s}</span>
                </div>
              ))}
            </div>

            {/* Education */}
            <div style={{ background: "var(--grey-bg)", borderRadius: 12, padding: "28px 24px" }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16, color: "var(--black)" }}>Education & Training</h3>
              {doc.education.map((e) => (
                <div key={e} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 0", borderBottom: "1px solid var(--grey-border)", fontSize: 14 }}>
                  <span style={{ color: "var(--red)", fontWeight: 700, fontSize: 13, marginTop: 2 }}>◆</span>
                  <span style={{ color: "var(--grey)", lineHeight: 1.5 }}>{e}</span>
                </div>
              ))}
            </div>

            {/* Book card */}
            <div style={{ background: "var(--red)", borderRadius: 12, padding: "28px 24px", textAlign: "center" }}>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 14, marginBottom: 8 }}>Ready to make an appointment?</p>
              <h3 style={{ color: "white", fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Book with Dr. {doc.name.split(" ").pop()}</h3>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{
                background: "white", color: "var(--red)", padding: "12px 24px", borderRadius: 6,
                fontWeight: 700, fontSize: 14, textDecoration: "none", display: "inline-block",
              }}>
                Book Online →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the rest of the team */}
      <section style={{ background: "var(--grey-bg)", padding: "60px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h2 className="serif" style={{ fontSize: 30, marginBottom: 10 }}>Meet the Full Team</h2>
          <p style={{ color: "var(--grey)", fontSize: 15, marginBottom: 28 }}>Ata Dental is home to a team of six experienced dentists across two convenient locations.</p>
          <a href="/#about" style={{ color: "var(--red)", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>View All Dentists →</a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#111111", color: "rgba(255,255,255,0.4)", padding: "28px 24px", fontSize: 13, textAlign: "center" }}>
        <p>© 2026 Ata Dental. All rights reserved. | <a href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "underline" }}>Back to Home</a></p>
      </footer>
    </div>
  );
}
