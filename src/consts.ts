// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Lethbridge Video Production & Videography | Coalbanks";
export const SITE_DESCRIPTION =
  "Lethbridge videographer specializing in documentary-style brand films for Southern Alberta businesses. Recruitment videos, corporate storytelling, and drone videography since 2019.";

export const SITE_URL = "https://coalbanks.com";

export const SITE_METADATA = {
  title: {
    default:
      "Lethbridge Video Production & Videography | Coalbanks",
    template: "%s | Coalbanks",
  },
  description:
    "Lethbridge videographer specializing in documentary-style brand films for Southern Alberta businesses. Recruitment videos, corporate storytelling, and drone videography since 2019.",
  keywords: [
    // Primary service keywords
    "video production Lethbridge",
    "Lethbridge videographer",
    "Lethbridge videography",
    "lethbridge video services",
    "documentary filmmaker Alberta",
    "corporate video production Southern Alberta",

    // Secondary service keywords
    "brand documentary",
    "recruitment video production",
    "business storytelling",
    "drone videography Lethbridge",
    "event videography Alberta",

    // Location keywords
    "Lethbridge video company",
    "Southern Alberta film production",
    "Alberta corporate video",
    "Medicine Hat video production",

    // Long-tail keywords
    "professional video production near me",
    "business video marketing Lethbridge",
    "corporate documentary services",
    "video production company Alberta",
  ],
  authors: [{ name: "Coalbanks Creative Inc." }],
  creator: "Coalbanks Creative Inc.",
  publisher: "Coalbanks Creative Inc.",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      {
        url: "/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "Lethbridge Video Production & Videography | Coalbanks",
    description:
      "Documentary-style brand films for Southern Alberta businesses. Your Lethbridge videographer since 2019 — recruitment videos, corporate storytelling, and drone videography.",
    siteName: "Coalbanks",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coalbanks Creative — Lethbridge Video Production and Videography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lethbridge Video Production & Videography | Coalbanks",
    description:
      "Documentary-style brand films for Southern Alberta businesses. Your Lethbridge videographer since 2019.",
    images: ["/og-image.jpg"],
    creator: "@coalbanksco",
  },
};

export const BUSINESS_INFO = {
  name: "Coalbanks Creative Inc.",
  alternateName: "Coalbanks",
  url: "https://coalbanks.com",
  logo: "https://coalbanks.com/logo-coalbanks.svg",
  image: "https://coalbanks.com/og-image.jpg",
  description:
    "Documentary-style video production for Southern Alberta businesses. Brand films, recruitment videos, and corporate documentaries by a Lethbridge videographer with 27 years of filmmaking experience.",
  telephone: "+15878135950",
  email: "hello@coalbanks.com",
  priceRange: "$$$",
  address: {
    streetAddress: "1401 28 St N",
    addressLocality: "Lethbridge",
    addressRegion: "AB",
    postalCode: "T1H 6H9",
    addressCountry: "CA",
  },
  geo: {
    latitude: 49.6956,
    longitude: -112.8335,
  },
  areaServed: [
    {
      type: "City",
      name: "Lethbridge",
      sameAs: "https://en.wikipedia.org/wiki/Lethbridge",
    },
    {
      type: "City",
      name: "Medicine Hat",
      sameAs: "https://en.wikipedia.org/wiki/Medicine_Hat",
    },
    {
      type: "AdministrativeArea",
      name: "Southern Alberta",
    },
  ],
  knowsAbout: [
    "Documentary filmmaking",
    "Corporate video production",
    "Recruitment video",
    "Brand storytelling",
    "Drone videography",
    "Indigenous video production",
    "Agricultural industry video",
    "Event videography",
  ],
  social: [
    "https://www.instagram.com/coalbanksco",
    "https://www.linkedin.com/company/coalbanks/",
    "https://www.youtube.com/@coalbanksco",
    "https://www.facebook.com/coalbanksco",
  ],
  googleBusinessProfile: "https://g.page/r/CXAmvXpLbBY4EBM",
};