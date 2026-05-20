import type { MetadataRoute } from "next";

const BASE = "https://atadental.vercel.app";

const SERVICE_SLUGS = [
  "dental-implants",
  "all-on-4-implants",
  "dental-crowns",
  "root-canal",
  "veneers",
  "cosmetic-dentistry",
  "kor-whitening",
  "clear-aligners",
  "emergency-dentist",
  "3d-imaging",
  "sedation-dentistry",
];

const DOCTOR_SLUGS = [
  "dr-omar-ata",
  "dr-joseph-ata",
  "dr-ireni-mikhail",
  "dr-matthew-robin",
  "dr-javier-broche",
  "dr-johana-cobo",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages = [
    { url: `${BASE}/`, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE}/services`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/team`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/locations/orlando`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/locations/kissimmee`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/contact`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/insurance`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/financing`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE}/membership`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE}/new-patients`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE}/gallery`, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${BASE}/guarantee`, changeFrequency: "yearly" as const, priority: 0.4 },
  ];

  const servicePages = SERVICE_SLUGS.map((slug) => ({
    url: `${BASE}/services/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    lastModified: now,
  }));

  const doctorPages = DOCTOR_SLUGS.map((slug) => ({
    url: `${BASE}/team/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    lastModified: now,
  }));

  return [
    ...staticPages.map((p) => ({ ...p, lastModified: now })),
    ...servicePages,
    ...doctorPages,
  ];
}
