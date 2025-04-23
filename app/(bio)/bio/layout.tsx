import { ReactLenis } from "lenis/react";
import { ClientOnly } from "@/app/components";
import { metadata } from "./layoutMetadata";
import "../../globals.css";

export default function BioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root>
      <div className="bg-greyscale-100 dark:bg-greyscale-900 flex h-fit items-center antialiased h-screen">
        <ClientOnly>
          <main className="border-greyscale-950/5 dark:border-greyscale-50/5 relative mx-auto grid w-full max-w-[1440px] grid-cols-4 gap-3 border-x border-dashed px-3 md:grid-cols-8 md:gap-4 md:px-6 lg:grid-cols-12 lg:px-12">
            {children}
          </main>
        </ClientOnly>
      </div>
    </ReactLenis>
  );
}

export { metadata };