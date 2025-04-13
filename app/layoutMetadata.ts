import type { Metadata } from "next";
import type { Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://paularies.ca"),
  alternates: {
    canonical: "/",
  },
  title: "portfolio · paul aries",
  publisher: "Paul Aries",
  description:
    "hey there, i'm paul aries! i'm a creative, user-centered designer and developer based in vancouver, canada. explore my portfolio, view my work, and get in touch!",
  keywords: [
    "paul aries",
    "paul aries web developer",
    "paul aries front-end",
    "paul aries design",
    "paul aries portfolio site",
    "paul aries projects",
    "paul aries work",
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
    title: "portfolio · paul aries",
    description:
      "hey there, i'm paul aries! i'm a creative, user-centered designer and developer based in vancouver, canada. explore my portfolio, view my work, and get in touch!",
    images: [
      {
        url: "https://paularies.ca/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "portfolio · paul aries",
    url: "https://paularies.ca",
  },
  robots: {
    index: false,
    follow: false,
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
