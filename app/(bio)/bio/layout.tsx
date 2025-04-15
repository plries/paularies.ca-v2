import { hankenGrotesk, instrumentSerif, dmMono } from "@/app/(site)/layout";
import { ReactLenis } from "lenis/react";
import "../../globals.css";
import { ClientOnly } from "@/app/components";

export default function BioLayout({
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
          className={`${hankenGrotesk.variable} ${instrumentSerif.variable} ${dmMono.variable} bg-greyscale-100 dark:bg-greyscale-900 grid h-screen place-items-center overflow-hidden antialiased`}
        >
          <ClientOnly>
            <main className="border-greyscale-950/5 dark:border-greyscale-50/5 relative mx-auto grid w-full max-w-7xl grid-cols-4 gap-3 border-x border-dashed px-3 md:grid-cols-8 md:gap-4 md:px-6 lg:grid-cols-12 lg:px-12">
              {children}
            </main>
          </ClientOnly>
        </body>
      </ReactLenis>
    </html>
  );
}
