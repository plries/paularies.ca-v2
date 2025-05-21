import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://paularies.ca"),
  alternates: {
    canonical: "https://www.paularies.ca/about/",
  },
  title: "about · paul aries",
  publisher: "Paul Aries",
  description:
    "hey there, i'm paul aries! learn more about me, my background, and why i love to create things. explore my portfolio, view my work, and get in touch!",
  keywords: [
    "paul aries",
    "paul aries web developer",
    "paul aries front-end",
    "paul aries design",
    "paul aries portfolio site",
    "paul aries projects",
    "paul aries work",
    "paul aries about",
    "paul aries portfolio",
    "developer portfolio",
    "web design portfolio",
    "interactive portfolio",
    "portfolio",
    "front-end developer",
    "creative developer",
    "modern web developer",
    "frontend engineer",
    "digital designer",
    "web development",
    "web designer",
    "web design",
  ],
  openGraph: {
    title: "about · paul aries",
    description:
      "hey there, i'm paul aries! learn more about me, my background, and why i love to create things. explore my portfolio, view my work, and get in touch!",
    images: [
      {
        url: "https://www.paularies.ca/opengraph-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "about · paul aries",
    url: "https://www.paularies.ca/about/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}
