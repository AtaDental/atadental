export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dentist",
        "@id": "https://atadental.vercel.app/#orlando",
        name: "Ata Dental — Orlando",
        url: "https://atadental.vercel.app/locations/orlando",
        logo: "https://atadental.vercel.app/ATADental_Logo_Horizontal_POS.png",
        image: "https://atadental.vercel.app/OrlandoExterior.jpg",
        telephone: "+1-407-857-6501",
        email: "AtaDentalDesign@AtaDental.com",
        foundingDate: "1989",
        description:
          "Family-owned dental practice serving Orlando since 1989. Six doctors, two locations, comprehensive dental care from routine cleanings to full-arch implants.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "13512 S. John Young Pkwy",
          addressLocality: "Orlando",
          addressRegion: "FL",
          postalCode: "32837",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 28.4261,
          longitude: -81.4227,
        },
        openingHoursSpecification: [
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "08:00", closes: "17:00" },
          { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "08:00", closes: "12:00" },
        ],
        priceRange: "$$",
        paymentAccepted: "Cash, Credit Card, Insurance, Cherry Financing",
        currenciesAccepted: "USD",
        areaServed: [
          { "@type": "City", name: "Orlando" },
          { "@type": "City", name: "Kissimmee" },
          { "@type": "City", name: "Hunter's Creek" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Dental Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dental Implants" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "All-on-4 Dental Implants" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dental Crowns" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Same-Day Crowns" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Root Canal Therapy" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Porcelain Veneers" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "KOR Whitening" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Clear Aligners / SureSmile" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Dental Care" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "3D Imaging" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sedation Dentistry" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cosmetic Dentistry" } },
          ],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "700",
          bestRating: "5",
        },
        sameAs: [
          "https://www.google.com/maps?cid=7531426336953562544",
        ],
      },
      {
        "@type": "Dentist",
        "@id": "https://atadental.vercel.app/#kissimmee",
        name: "Ata Dental — Kissimmee",
        url: "https://atadental.vercel.app/locations/kissimmee",
        logo: "https://atadental.vercel.app/ATADental_Logo_Horizontal_POS.png",
        image: "https://atadental.vercel.app/KissimmeeExterior.jpg",
        telephone: "+1-407-870-5151",
        email: "AtaDentalDesign@AtaDental.com",
        description:
          "Ata Dental's Kissimmee location inside the Grand Oaks Pointe building. Six doctors on staff with varying specialties for the most customized care possible.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "3192 S. John Young Pkwy, Ste B",
          addressLocality: "Kissimmee",
          addressRegion: "FL",
          postalCode: "34746",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 28.2919,
          longitude: -81.4226,
        },
        openingHoursSpecification: [
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "07:30", closes: "17:00" },
          { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "08:00", closes: "12:00" },
        ],
        priceRange: "$$",
        paymentAccepted: "Cash, Credit Card, Insurance, Cherry Financing",
        currenciesAccepted: "USD",
        sameAs: [
          "https://www.google.com/maps?cid=7012736600002717895",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://atadental.vercel.app/#website",
        url: "https://atadental.vercel.app",
        name: "Ata Dental",
        description: "State-of-the-art family dentistry serving Orlando and Kissimmee since 1989.",
        publisher: { "@id": "https://atadental.vercel.app/#orlando" },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
