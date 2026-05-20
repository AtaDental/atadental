import SchemaMarkup from "./components/SchemaMarkup";

import type { Metadata } from "next";

const SITE_URL = "https://atadental.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ata Dental | Dentist in Orlando & Kissimmee, FL",
    template: "%s | Ata Dental",
  },
  description:
    "Family-owned dental practice serving Orlando & Kissimmee since 1989. Six doctors, two locations. Dental implants, same-day crowns, veneers, emergency care & more.",
  keywords: [
    "dentist Orlando FL",
    "dentist Kissimmee FL",
    "dental implants Orlando",
    "same-day crowns Orlando",
    "emergency dentist Orlando",
    "cosmetic dentist Kissimmee",
    "Ata Dental",
    "family dentist Orlando",
    "veneers Orlando",
    "root canal Orlando",
  ],
  authors: [{ name: "Ata Dental" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ata Dental",
    title: "Ata Dental | Dentist in Orlando & Kissimmee, FL",
    description:
      "Family-owned dental practice serving Orlando & Kissimmee since 1989. Six doctors, two locations. Dental implants, same-day crowns, veneers, emergency care & more.",
    url: SITE_URL,
    images: [
      {
        url: "/TeamPhoto.jpg",
        width: 1200,
        height: 630,
        alt: "Ata Dental team photo — Orlando & Kissimmee dentists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ata Dental | Dentist in Orlando & Kissimmee, FL",
    description:
      "Family-owned dental practice since 1989. Dental implants, same-day crowns, veneers, emergency care & more.",
    images: ["/TeamPhoto.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <SchemaMarkup />
      </head>
      <body style={{ margin: 0 }}>
        {children}
        {/* Cherry Financing sticky widget */}
        <a
          href="/financing"
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 9999,
            background: "#c41230",
            color: "white",
            textDecoration: "none",
            borderRadius: 50,
            padding: "12px 20px",
            fontSize: 13,
            fontWeight: 700,
            fontFamily: "'Libre Franklin', 'Segoe UI', sans-serif",
            boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            lineHeight: 1.3,
          }}
        >
          <span style={{ fontSize: 18 }}>🍒</span>
          <span>Pay over time<br /><span style={{ fontWeight: 400, fontSize: 11, opacity: 0.9 }}>No hard credit checks · 0% APR options</span></span>
        </a>
      </body>
    </html>
  )
}
