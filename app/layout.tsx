import { Analytics } from "@vercel/analytics/next";
import { hankenGrotesk, instrumentSerif, dmMono } from "./fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${instrumentSerif.variable} ${dmMono.variable} bg-greyscale-100 dark:bg-greyscale-900`}
      suppressHydrationWarning
    >
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
      <body>
        <div
          className="pointer-events-none fixed z-[9999] h-screen w-screen opacity-30 mix-blend-overlay"
          style={{
            background: "url('https://www.paularies.ca/images/texture.png')",
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
