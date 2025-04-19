import { ReactLenis } from "lenis/react";
import { NavBar, Footer, ClientOnly, PageContent } from "../components/";
import { metadata } from "./layoutMetadata";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root>
      <div className="bg-greyscale-100 dark:bg-greyscale-900 relative mx-auto grid auto-rows-min grid-cols-1 place-items-center antialiased">
        <ClientOnly>
          <NavBar />
          <PageContent>{children}</PageContent>
          <div className="mask-gradient bg-greyscale-50/50 dark:bg-greyscale-950/50 pointer-events-none fixed bottom-0 left-0 z-40 h-24 w-screen backdrop-blur-md" />
          <Footer />
        </ClientOnly>
      </div>
    </ReactLenis>
  );
}

export { metadata };
