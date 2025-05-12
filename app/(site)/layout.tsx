import { Footer, ClientOnly, PageContent, SmoothScroll } from "../components/";
import { metadata } from "./layoutMetadata";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScroll>
      <div className="bg-greyscale-100 dark:bg-greyscale-900 relative mx-auto grid auto-rows-min grid-cols-1 place-items-center antialiased">
        <ClientOnly>
          <PageContent>{children}</PageContent>
          <Footer />
        </ClientOnly>
      </div>
    </SmoothScroll>
  );
}

export { metadata };
