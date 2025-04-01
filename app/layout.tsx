import { Hanken_Grotesk, Instrument_Serif, DM_Mono } from "next/font/google";
import { ReactLenis } from "lenis/react";
import { NavBar, Footer, ClientOnly } from "./components/";
import { ScrollToTop } from "./hooks";
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
          <ScrollToTop />
          <ClientOnly>
            <NavBar />
            <main className="grid w-full max-w-7xl grid-cols-4 gap-3 px-3 md:grid-cols-8 md:gap-4 md:px-6 lg:grid-cols-12 lg:px-8">
              {children}
            </main>
            <div className="mask-gradient pointer-events-none fixed bottom-0 left-0 z-50 h-16 w-screen backdrop-blur-2xl" />
            <Footer />
          </ClientOnly>
        </body>
      </ReactLenis>
    </html>
  );
}

export { metadata };
