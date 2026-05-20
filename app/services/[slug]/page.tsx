import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { notFound } from "next/navigation";

const BOOKING_URL = "https://app.nexhealth.com/appt/ATA_Dental?lid=39277";

const SERVICES: Record<string, {
  title: string;
  kicker: string;
  icon: string;
  heroDesc: string;
  sections: { heading: string; body: string }[];
  highlights: string[];
  faq: { q: string; a: string }[];
  related: { title: string; slug: string }[];
}> = {
  "dental-implants": {
    title: "Dental Implants",
    kicker: "Restorative Dentistry",
    icon: "🔩",
    heroDesc: "The gold standard for replacing missing teeth — performed entirely in-house by our experienced team. From extraction to final crown, every step happens right here at Ata Dental.",
    sections: [
      {
        heading: "What Are Dental Implants?",
        body: "Dental implants are titanium posts surgically placed in the jawbone to serve as artificial tooth roots. Once the implant integrates with the bone (a process called osseointegration), it provides a permanent, stable foundation for a crown, bridge, or full-arch restoration. Unlike dentures, implants look, feel, and function like natural teeth — and they preserve the jawbone that would otherwise deteriorate after tooth loss.",
      },
      {
        heading: "Our In-House Approach",
        body: "Many dental offices refer implant patients to outside oral surgeons. At Ata Dental, Dr. Joseph Ata and Dr. Javier Broche handle every phase of implant treatment under one roof — from 3D imaging and surgical placement to the final custom crown. This means fewer appointments, better coordination, and a more comfortable experience for you.",
      },
      {
        heading: "Who Is a Candidate?",
        body: "Most adults with adequate jawbone density are candidates for dental implants. If bone loss has occurred, bone grafting may be recommended first. During your consultation, we'll take a CBCT 3D scan to evaluate your bone structure and create a precise surgical plan.",
      },
    ],
    highlights: ["Full in-house procedure", "Preserves jawbone health", "Lifetime durability with proper care", "Single tooth, bridge, or full arch options", "3D-guided surgical placement"],
    faq: [
      { q: "How long do dental implants last?", a: "With proper care and regular checkups, dental implants can last a lifetime. The crown on top may need replacement after 10–15 years due to normal wear." },
      { q: "Is the procedure painful?", a: "The surgery is performed under local anesthesia and sedation options are available. Most patients report that the discomfort is less than they expected and manageable with over-the-counter pain relievers." },
      { q: "How long is the recovery?", a: "Initial healing takes 1–2 weeks. Full osseointegration (bone fusing to the implant) takes 3–6 months, after which the permanent crown is placed." },
    ],
    related: [
      { title: "All-on-4 Implants", slug: "all-on-4-implants" },
      { title: "Dental Crowns", slug: "dental-crowns" },
      { title: "3D Imaging", slug: "3d-imaging" },
    ],
  },
  "all-on-4-implants": {
    title: "All-on-4 Dental Implants",
    kicker: "Restorative Dentistry",
    icon: "🏗️",
    heroDesc: "A revolutionary full-arch restoration that replaces an entire set of teeth using just four strategically placed implants. A life-changing alternative to traditional dentures.",
    sections: [
      {
        heading: "What Is All-on-4?",
        body: "All-on-4 is a technique that supports a complete arch of fixed replacement teeth on only four dental implants. Two implants are placed vertically in the front of the jaw, and two are angled in the back to maximize contact with available bone — often eliminating the need for bone grafting.",
      },
      {
        heading: "Who Is It For?",
        body: "All-on-4 is ideal for patients with significant tooth loss, failing teeth, or those who are tired of ill-fitting removable dentures. If you've been told you don't have enough bone for traditional implants, All-on-4's angled placement may still be an option.",
      },
      {
        heading: "The Ata Dental Difference",
        body: "Our team handles the entire All-on-4 process in-house — from the initial 3D scan and surgical plan to implant placement and the final prosthesis. Many patients receive a temporary set of teeth the same day as surgery, so they never have to go without a smile.",
      },
    ],
    highlights: ["Full arch on just 4 implants", "Often same-day temporary teeth", "No removable dentures", "May avoid bone grafting", "Performed entirely in-house"],
    faq: [
      { q: "How is All-on-4 different from traditional implants?", a: "Traditional implants typically use 6–8 implants per arch and may require bone grafting. All-on-4 uses only four implants with two placed at an angle, often avoiding the need for grafts and reducing treatment time." },
      { q: "How long does the process take?", a: "Surgery is typically completed in one day. A temporary prosthesis is placed immediately. The final permanent prosthesis is fitted after 3–6 months of healing." },
    ],
    related: [
      { title: "Dental Implants", slug: "dental-implants" },
      { title: "Dental Crowns", slug: "dental-crowns" },
    ],
  },
  "dental-crowns": {
    title: "Dental Crowns",
    kicker: "Restorative Dentistry",
    icon: "👑",
    heroDesc: "Restore a damaged or weakened tooth with a custom-fitted porcelain crown — often completed in a single visit with our in-office CAD/CAM technology.",
    sections: [
      {
        heading: "What Is a Dental Crown?",
        body: "A dental crown is a tooth-shaped cap that fits over a damaged, weakened, or cosmetically imperfect tooth. Crowns restore the tooth's shape, strength, and appearance while protecting it from further damage. They're one of the most common and versatile restorations in dentistry.",
      },
      {
        heading: "Same-Day Crowns at Ata Dental",
        body: "Using our 3Shape TRIOS digital scanner and in-office CAD/CAM milling system, we can design, fabricate, and place your permanent porcelain crown in a single visit — typically about 90 minutes. No messy impression trays, no temporary crowns, no second appointment.",
      },
      {
        heading: "When Do You Need a Crown?",
        body: "Crowns are recommended after root canal therapy, for teeth with large fillings that have weakened the structure, for cracked or fractured teeth, and as part of a dental bridge. They're also used cosmetically to improve the appearance of misshapen or severely discolored teeth.",
      },
    ],
    highlights: ["Same-day in most cases", "All-porcelain or PFM options", "Digital impressions — no messy trays", "Custom color-matched to your teeth", "In-office CAD/CAM milling"],
    faq: [
      { q: "How long do crowns last?", a: "A well-maintained porcelain crown typically lasts 10–15 years or longer. Our Guarantee of Workmanship covers crowns for 5 years." },
      { q: "Does getting a crown hurt?", a: "The tooth is numbed with local anesthesia, so you won't feel pain during the procedure. Some sensitivity is normal for a few days afterward." },
    ],
    related: [
      { title: "Root Canal Therapy", slug: "root-canal" },
      { title: "Porcelain Veneers", slug: "veneers" },
      { title: "Dental Implants", slug: "dental-implants" },
    ],
  },
  "root-canal": {
    title: "Root Canal Therapy",
    kicker: "Restorative Dentistry",
    icon: "🔬",
    heroDesc: "Save your natural tooth and eliminate infection with gentle, effective endodontic treatment. Our specialists make the procedure far more comfortable than its reputation suggests.",
    sections: [
      {
        heading: "What Is a Root Canal?",
        body: "When decay or trauma reaches the inner pulp of a tooth — the soft tissue containing nerves and blood vessels — a root canal removes the infected tissue, disinfects the canal system, fills it with a biocompatible material, and seals it. This saves your natural tooth from extraction and eliminates the source of pain.",
      },
      {
        heading: "Our Endodontic Specialists",
        body: "Dr. Ireni Mikhail and Dr. Javier Broche have extensive experience in endodontic care. They use advanced techniques, rotary instrumentation, and digital imaging to perform root canals efficiently and comfortably. Sedation options are available for anxious patients.",
      },
      {
        heading: "What to Expect",
        body: "Most root canals are completed in one visit lasting 60–90 minutes. The area is numbed with local anesthesia, and sedation is available. After the procedure, a crown is recommended to protect the treated tooth — ideally within 30 days. Our Guarantee of Workmanship covers root canals for 3 years when a crown is placed within that window.",
      },
    ],
    highlights: ["Preserves your natural tooth", "Relieves severe toothache", "Completed in 1–2 visits", "Sedation available", "Covered by our Guarantee of Workmanship"],
    faq: [
      { q: "Is a root canal painful?", a: "Modern root canals are performed with effective anesthesia. Most patients say it feels similar to getting a filling. The procedure relieves the pain caused by infection — it doesn't cause it." },
      { q: "Do I need a crown after a root canal?", a: "Yes, a crown is strongly recommended to protect the treated tooth. Our guarantee requires a crown within 30 days for the 3-year warranty to apply." },
    ],
    related: [
      { title: "Dental Crowns", slug: "dental-crowns" },
      { title: "Emergency Dental Care", slug: "emergency-dentist" },
      { title: "Sedation Dentistry", slug: "sedation-dentistry" },
    ],
  },
  "veneers": {
    title: "Porcelain Veneers",
    kicker: "Cosmetic Dentistry",
    icon: "💎",
    heroDesc: "Transform your smile with ultra-thin, custom porcelain shells that correct chips, gaps, discoloration, and minor misalignment for a natural, lasting result.",
    sections: [
      {
        heading: "What Are Porcelain Veneers?",
        body: "Veneers are wafer-thin porcelain facings bonded to the front surface of your teeth. They require minimal tooth reduction and produce dramatic cosmetic improvements — correcting chips, stains, gaps, and uneven teeth in as few as two appointments.",
      },
      {
        heading: "The Design Process",
        body: "Your veneers are custom-designed to complement your facial features, skin tone, and lip line for a completely natural look. We start with a digital preview so you can see your new smile before any work begins. Our in-house dental lab gives us full control over shade, shape, and translucency.",
      },
      {
        heading: "Longevity and Care",
        body: "With proper care, porcelain veneers last 10–20 years. They resist staining better than natural enamel and maintain their appearance over time. Normal brushing, flossing, and regular checkups are all that's needed to keep them looking great.",
      },
    ],
    highlights: ["Corrects chips, stains, and gaps", "Minimal tooth removal", "Natural-looking translucency", "Lasts 10–20 years", "Covered by our 5-year Guarantee"],
    faq: [
      { q: "How many teeth need veneers?", a: "Most patients get 6–8 veneers on the upper front teeth for a balanced smile, but you can veneer as few as one tooth or as many as needed." },
      { q: "Can veneers fix crooked teeth?", a: "Veneers can correct the appearance of mildly crooked or overlapping teeth. For more significant misalignment, we may recommend clear aligners first." },
    ],
    related: [
      { title: "Cosmetic Dentistry", slug: "cosmetic-dentistry" },
      { title: "KOR Whitening", slug: "kor-whitening" },
      { title: "Clear Aligners / SureSmile", slug: "clear-aligners" },
    ],
  },
  "cosmetic-dentistry": {
    title: "Cosmetic Dentistry",
    kicker: "Cosmetic Dentistry",
    icon: "✨",
    heroDesc: "Full smile makeovers tailored to your unique goals — combining veneers, crowns, whitening, and more into one coordinated treatment plan.",
    sections: [
      {
        heading: "What Is a Smile Makeover?",
        body: "A smile makeover combines multiple cosmetic treatments to address all aspects of your smile in a coordinated plan. Rather than fixing one issue at a time, we design a comprehensive roadmap that may include veneers, crowns, whitening, gum contouring, and more.",
      },
      {
        heading: "Our Approach",
        body: "Every makeover begins with a detailed consultation. We discuss what you love and don't love about your smile, take digital scans, and create a preview of your results. With our in-house lab and same-day crown technology, we can often reduce total treatment time significantly.",
      },
    ],
    highlights: ["Comprehensive smile design", "Combines multiple treatments", "Personalized to your face", "Digital preview available", "In-house lab for quality control"],
    faq: [
      { q: "How long does a smile makeover take?", a: "Depending on the complexity, a full makeover can take 2–6 weeks. Some treatments like whitening and crowns can be done in a single visit." },
    ],
    related: [
      { title: "Porcelain Veneers", slug: "veneers" },
      { title: "KOR Whitening", slug: "kor-whitening" },
      { title: "Dental Crowns", slug: "dental-crowns" },
    ],
  },
  "kor-whitening": {
    title: "KOR Whitening",
    kicker: "Cosmetic Dentistry",
    icon: "🌟",
    heroDesc: "Professional-grade teeth whitening that tackles even the deepest, most stubborn stains — including tetracycline and fluorosis discoloration that other systems can't treat.",
    sections: [
      {
        heading: "Why KOR?",
        body: "KOR Whitening is widely regarded as one of the most effective professional whitening systems available. It uses a unique refrigerated gel delivery system that maintains maximum potency, achieving results that standard bleaching products simply cannot match.",
      },
      {
        heading: "How It Works",
        body: "Treatment includes custom-fitted whitening trays for at-home use followed by an in-office whitening session. The KOR system conditions the teeth to absorb the whitening gel more effectively, which is why it succeeds on stains that have resisted other treatments.",
      },
    ],
    highlights: ["Works on tetracycline stains", "Refrigerated gel for maximum potency", "Longer-lasting than over-the-counter", "In-office and take-home options", "Covered by our 2-year Guarantee"],
    faq: [
      { q: "How white will my teeth get?", a: "Results vary, but most patients see a dramatic improvement — often 8+ shades whiter. KOR is particularly effective on deep stains that other systems leave behind." },
      { q: "Is whitening safe for my teeth?", a: "Yes. Professional whitening under dental supervision is safe for enamel. Some temporary sensitivity is normal and resolves within a few days." },
    ],
    related: [
      { title: "Cosmetic Dentistry", slug: "cosmetic-dentistry" },
      { title: "Porcelain Veneers", slug: "veneers" },
    ],
  },
  "clear-aligners": {
    title: "Clear Aligners / SureSmile",
    kicker: "Cosmetic Dentistry",
    icon: "😁",
    heroDesc: "Straighten your teeth discreetly with clear, removable aligner trays — no metal braces required. Dr. Robin and Dr. Cobo offer SureSmile and other leading aligner systems for teens and adults.",
    sections: [
      {
        heading: "How Clear Aligners Work",
        body: "Clear aligner therapy uses a series of custom-fabricated, removable plastic trays to gradually shift your teeth into proper alignment. Each set of trays is worn for about two weeks before moving to the next in the series, progressively improving your smile over several months.",
      },
      {
        heading: "Why SureSmile?",
        body: "SureSmile aligners use advanced digital planning and robotically-bent wire technology for precise, predictable results. The system is designed for efficiency — many cases finish faster than traditional aligner brands. Our orthodontic-trained doctors monitor your progress at regular check-ins.",
      },
      {
        heading: "Teens and Adults Welcome",
        body: "Clear aligners are available for both teens and adults. Teen aligners include compliance indicators and replacement policies for lost trays. Adults appreciate the virtually invisible appearance and the ability to remove aligners for meals and brushing.",
      },
    ],
    highlights: ["Virtually invisible", "Removable for eating and cleaning", "No metal wires or brackets", "Teen and adult options", "SureSmile precision technology"],
    faq: [
      { q: "How long does treatment take?", a: "Most cases take 6–18 months depending on complexity. Minor crowding can sometimes be corrected in as few as 3–4 months." },
      { q: "How much do clear aligners cost?", a: "Cost varies by case complexity. We offer Cherry financing with 0% APR options and accept most dental insurance with orthodontic coverage." },
    ],
    related: [
      { title: "Cosmetic Dentistry", slug: "cosmetic-dentistry" },
      { title: "Porcelain Veneers", slug: "veneers" },
    ],
  },
  "emergency-dentist": {
    title: "Emergency Dental Care",
    kicker: "Emergency Services",
    icon: "🚨",
    heroDesc: "Dental emergencies don't follow a schedule. Whether it's a sudden toothache, a cracked tooth, or a knocked-out filling — we're here for you, even after hours.",
    sections: [
      {
        heading: "When to Call",
        body: "Call us immediately if you experience a severe toothache, a knocked-out or loose tooth, a cracked or fractured tooth, a lost filling or crown, swelling or abscess, or any dental injury from trauma. We maintain a dedicated after-hours emergency phone line so you can always reach us.",
      },
      {
        heading: "Same-Day Emergency Care",
        body: "We prioritize emergency patients and do our best to see you the same day you call. Our office is equipped to handle urgent procedures on the spot — from pain relief and temporary repairs to extractions and emergency root canals.",
      },
      {
        heading: "Hablamos Espanol",
        body: "Our bilingual staff can assist Spanish-speaking patients during emergencies. We want every patient to feel comfortable and understood, especially during a stressful dental crisis.",
      },
    ],
    highlights: ["Dedicated after-hours phone line", "Same-day appointments when possible", "Toothaches, chips, lost crowns", "Bilingual staff — Hablamos Espanol", "Sedation options available"],
    faq: [
      { q: "What should I do if a tooth gets knocked out?", a: "Handle the tooth by the crown only (not the root). If possible, gently place it back in the socket. If not, store it in milk or saliva. Call us immediately — reimplantation is most successful within 30 minutes." },
      { q: "Do you charge extra for emergency visits?", a: "We do not charge a premium for emergency appointments. Standard exam and treatment fees apply." },
    ],
    related: [
      { title: "Root Canal Therapy", slug: "root-canal" },
      { title: "Dental Crowns", slug: "dental-crowns" },
      { title: "Sedation Dentistry", slug: "sedation-dentistry" },
    ],
  },
  "3d-imaging": {
    title: "3D Imaging & Digital Scanning",
    kicker: "Technology",
    icon: "🖥️",
    heroDesc: "State-of-the-art digital scanners and cone beam CT imaging for precise diagnostics, implant planning, and treatment — no messy impression trays required.",
    sections: [
      {
        heading: "Cone Beam CT (CBCT)",
        body: "Our CBCT scanner captures a full 3D image of your teeth, jawbone, nerves, and sinuses in a single scan. This detailed view is essential for implant planning, evaluating bone density, diagnosing complex cases, and identifying issues that standard 2D X-rays can miss.",
      },
      {
        heading: "3Shape TRIOS Intraoral Scanner",
        body: "The 3Shape TRIOS scanner replaces traditional impression trays with a comfortable, handheld digital wand. In minutes, it creates a precise 3D model of your teeth that feeds directly into our CAD/CAM system for same-day crowns, aligners, and other restorations.",
      },
    ],
    highlights: ["CBCT 3D scanning", "3Shape TRIOS digital impressions", "No messy trays", "Precise implant planning", "Same-day crown workflow"],
    faq: [
      { q: "Is 3D imaging safe?", a: "Yes. CBCT scans use significantly less radiation than a medical CT scan. A single CBCT scan exposes you to less radiation than a standard set of dental X-rays." },
    ],
    related: [
      { title: "Dental Implants", slug: "dental-implants" },
      { title: "Dental Crowns", slug: "dental-crowns" },
      { title: "All-on-4 Implants", slug: "all-on-4-implants" },
    ],
  },
  "sedation-dentistry": {
    title: "Sedation Dentistry",
    kicker: "Comfort & Care",
    icon: "😴",
    heroDesc: "Nitrous oxide and oral conscious sedation options to keep you comfortable and anxiety-free during any dental procedure.",
    sections: [
      {
        heading: "Nitrous Oxide (Laughing Gas)",
        body: "Nitrous oxide is a mild sedative inhaled through a small nose mask during treatment. It produces a calm, relaxed feeling while you remain fully conscious and responsive. The effects wear off within minutes after the mask is removed, so you can drive yourself home.",
      },
      {
        heading: "Oral Conscious Sedation",
        body: "For patients with more significant dental anxiety or those undergoing longer procedures, oral conscious sedation offers deeper relaxation. You take a prescribed medication before your appointment and remain awake but deeply relaxed throughout the procedure. You'll need someone to drive you home.",
      },
    ],
    highlights: ["Nitrous oxide available", "Oral conscious sedation", "Great for dental anxiety", "Wears off quickly", "Safe and closely monitored"],
    faq: [
      { q: "Will I be asleep?", a: "No. With both nitrous and oral sedation, you remain awake and can respond to questions. You'll simply feel relaxed and may not remember much of the procedure afterward." },
      { q: "Is sedation dentistry safe?", a: "Yes. Our team monitors your vital signs throughout the procedure. We review your medical history carefully to ensure sedation is safe for you." },
    ],
    related: [
      { title: "Emergency Dental Care", slug: "emergency-dentist" },
      { title: "Root Canal Therapy", slug: "root-canal" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const svc = SERVICES[slug];
  if (!svc) return {};
  return {
    title: `${svc.title} | Ata Dental — Orlando & Kissimmee`,
    description: svc.heroDesc,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const svc = SERVICES[slug];
  if (!svc) notFound();

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
        .card { background: var(--white); border-radius: 12px; padding: 32px; box-shadow: var(--shadow); }
        .svc-hero { padding: 96px 24px; }
        .svc-hero-h1 { font-size: 48px; }
        .svc-section { padding: 72px 24px; }
        .svc-faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .svc-related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        @media (max-width: 768px) {
          .svc-hero { padding: 64px 20px !important; }
          .svc-hero-h1 { font-size: 32px !important; }
          .svc-section { padding: 48px 20px !important; }
          .svc-faq-grid { grid-template-columns: 1fr !important; }
          .svc-related-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Nav activePage="services" />

      {/* Hero */}
      <section className="svc-hero" style={{
        position: "relative",
        backgroundImage: "linear-gradient(rgba(15,15,15,0.75), rgba(15,15,15,0.75)), url('/Oproom.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <a href="/services" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, textDecoration: "none", fontWeight: 500, display: "inline-block", marginBottom: 16 }}>← All Services</a>
          <p style={{ color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>{svc.kicker}</p>
          <h1 className="serif svc-hero-h1" style={{ color: "white", marginBottom: 16, textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>
            {svc.icon} {svc.title}
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.9)", lineHeight: 1.75, maxWidth: 620, textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>
            {svc.heroDesc}
          </p>
          <div style={{ marginTop: 32 }}>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Book a Consultation</a>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="svc-section">
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {svc.sections.map((s, i) => (
            <div key={i} style={{ marginBottom: 48 }}>
              <h2 className="serif" style={{ fontSize: 28, marginBottom: 12 }}>{s.heading}</h2>
              <div style={{ width: 48, height: 3, background: "var(--red)", borderRadius: 2, marginBottom: 20 }} />
              <p style={{ fontSize: 16, color: "var(--grey)", lineHeight: 1.85 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section style={{ background: "var(--grey-bg)", padding: "56px 24px", borderTop: "1px solid var(--grey-border)", borderBottom: "1px solid var(--grey-border)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24, textAlign: "center" }}>Key Benefits</h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {svc.highlights.map((h) => (
              <span key={h} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", background: "var(--white)", borderRadius: 50, fontSize: 14, fontWeight: 500, boxShadow: "0 2px 8px rgba(0,0,0,0.04)", border: "1px solid var(--grey-border)" }}>
                <span style={{ color: "var(--red)", fontSize: 16 }}>✓</span> {h}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {svc.faq.length > 0 && (
        <section className="svc-section">
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 className="serif" style={{ fontSize: 28, marginBottom: 8 }}>Frequently Asked Questions</h2>
            <div style={{ width: 48, height: 3, background: "var(--red)", borderRadius: 2, marginBottom: 32 }} />
            <div className="svc-faq-grid">
              {svc.faq.map((f, i) => (
                <div key={i} className="card" style={{ borderTop: "3px solid var(--red)" }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{f.q}</h3>
                  <p style={{ fontSize: 14, color: "var(--grey)", lineHeight: 1.7 }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      {svc.related.length > 0 && (
        <section style={{ background: "var(--grey-bg)", padding: "56px 24px", borderTop: "1px solid var(--grey-border)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24, textAlign: "center" }}>Related Services</h2>
            <div className="svc-related-grid">
              {svc.related.map((r) => (
                <a key={r.slug} href={`/services/${r.slug}`} style={{ display: "block", background: "var(--white)", borderRadius: 10, padding: "20px 24px", textDecoration: "none", color: "var(--black)", fontWeight: 600, fontSize: 15, textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", border: "1px solid var(--grey-border)", transition: "all 0.2s" }}>
                  {r.title} →
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Visit Us — Location cross-links */}
      <section style={{ padding: "56px 24px", borderTop: "1px solid var(--grey-border)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, textAlign: "center" }}>Available at Both Locations</h2>
          <p style={{ fontSize: 15, color: "var(--grey)", textAlign: "center", marginBottom: 24, lineHeight: 1.6 }}>
            {svc.title} is offered at our Orlando and Kissimmee offices. Choose the location most convenient for you.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 560, margin: "0 auto" }}>
            <a href="/locations/orlando" style={{ display: "block", background: "var(--grey-bg)", borderRadius: 10, padding: "20px 24px", textDecoration: "none", color: "var(--black)", textAlign: "center", border: "1px solid var(--grey-border)", transition: "all 0.2s" }}>
              <span style={{ fontWeight: 700, fontSize: 16, display: "block", marginBottom: 4 }}>Orlando Office</span>
              <span style={{ fontSize: 13, color: "var(--grey)" }}>(407) 857-6501</span>
            </a>
            <a href="/locations/kissimmee" style={{ display: "block", background: "var(--grey-bg)", borderRadius: 10, padding: "20px 24px", textDecoration: "none", color: "var(--black)", textAlign: "center", border: "1px solid var(--grey-border)", transition: "all 0.2s" }}>
              <span style={{ fontWeight: 700, fontSize: 16, display: "block", marginBottom: 4 }}>Kissimmee Office</span>
              <span style={{ fontSize: 13, color: "var(--grey)" }}>(407) 870-5151</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--black)", padding: "60px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", color: "white" }}>
          <h2 className="serif" style={{ fontSize: 32, marginBottom: 12 }}>Ready to Get Started?</h2>
          <p style={{ fontSize: 16, opacity: 0.75, marginBottom: 28, lineHeight: 1.6 }}>
            Book a consultation at either our Orlando or Kissimmee location.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Online</a>
            <a href="tel:+14078576501" style={{ color: "white", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "14px 24px", border: "2px solid rgba(255,255,255,0.3)", borderRadius: 6, display: "inline-block" }}>
              Call (407) 857-6501
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
