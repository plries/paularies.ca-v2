import { Hanken_Grotesk, Instrument_Serif, DM_Mono } from "next/font/google";
import { ReactLenis } from "lenis/react";
import { NavBar, Footer, ClientOnly, PageContent } from "./components/";
import { metadata } from "./layoutMetadata";
import "./globals.css";

export const hankenGrotesk = Hanken_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
});

export const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  subsets: ["latin"],
});

export const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              const theme = localStorage.getItem("theme") || 
                (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
              if (theme === "dark") {
                document.documentElement.classList.add("dark");
              } else {
                document.documentElement.classList.remove("dark");
              }
            })();
          `,
          }}
        />
      </head>
      <ReactLenis root>
        <body
          className={`${hankenGrotesk.variable} ${instrumentSerif.variable} ${dmMono.variable} bg-greyscale-100 dark:bg-greyscale-900 relative mx-auto grid auto-rows-min grid-cols-1 place-items-center antialiased`}
        >
          <ClientOnly>
            <NavBar />
            <PageContent>{children}</PageContent>
            <div className="mask-gradient bg-greyscale-50/50 dark:bg-greyscale-950/50 pointer-events-none fixed bottom-0 left-0 z-40 h-24 w-screen backdrop-blur-md" />
            <Footer />
          </ClientOnly>
        </body>
      </ReactLenis>
    </html>
  );
}

export { metadata };
