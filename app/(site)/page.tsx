import { Hero, Intro, SelectedWorks, Testimonials } from "@/app/(site)/home";
import { ScrollToTop } from "../hooks";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <Intro />
      <SelectedWorks />
      <Testimonials />
    </>
  );
}
