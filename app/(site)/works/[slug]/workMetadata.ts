import type { Viewport } from "next";
import { Params } from "./types";

export async function workMetadata({ params }: Params) {
  const { slug } = await params;

  const title = (slug as string).replace(/-/g, " ");

  return {
    metadataBase: new URL(`https://paularies.ca`),
    alternates: {
      canonical: `https://paularies.ca/works/${slug}`,
    },
    title: `${title} · paul aries`,
    description: `check out ${title}, a ${title === "afleuries illustrated" ? "stylized" : "modern"} marketing page for ${title === "afleuries illustrated" ? "a live portrait artist" : "a fictional mobile app companion"}.`,
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
      `${title}`,
      `${title} paul aries`,
      `${title} portfolio`,
    ],
    openGraph: {
      title: `${title} · paul aries`,
      description: `check out ${title}, a ${title === "afleuries illustrated" ? " stylized " : " modern "} marketing page for ${title === "afleuries illustrated" ? " a live portrait artist" : " a fictional mobile app companion"}.`,
      images: [
        {
          url: `https://paularies.ca/opengraph-image-${slug}.jpg`,
          width: 1200,
          height: 630,
        },
      ],
      siteName: `${title} · paul aries`,
      url: `https://paularies.ca/works/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-32x32.png",
      apple: "/apple-touch-icon.png",
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};
