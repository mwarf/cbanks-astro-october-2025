// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Coalbanks - Documentary-Style Films for Brands";
export const SITE_DESCRIPTION =
  "Transform corporate messaging into authentic stories using documentary filmmaking techniques and cinema-quality production.";

export const GITHUB_URL =
  "https://github.com/shadcnblocks/mainline-astro-template";

export const SITE_METADATA = {
  title: {
    default: "Coalbanks - Documentary-Style Films for Brands",
    template: "%s | Coalbanks",
  },
  description:
    "Transform corporate messaging into authentic stories using documentary filmmaking techniques and cinema-quality production.",
  keywords: [
    "documentary filmmaking",
    "brand films",
    "corporate video",
    "video production",
    "Southern Alberta",
    "Lethbridge",
    "authentic storytelling",
    "cinema quality",
    "business storytelling",
  ],
  authors: [{ name: "Coalbanks" }],
  creator: "Coalbanks",
  publisher: "Coalbanks",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "Coalbanks - Documentary-Style Films for Brands",
    description:
      "Transform corporate messaging into authentic stories using documentary filmmaking techniques and cinema-quality production.",
    siteName: "Coalbanks",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coalbanks - Documentary-Style Films for Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coalbanks - Documentary-Style Films for Brands",
    description:
      "Transform corporate messaging into authentic stories using documentary filmmaking techniques and cinema-quality production.",
    images: ["/og-image.jpg"],
    creator: "@coalbanks",
  },
};
