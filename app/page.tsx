import { Hero, Intro, SelectedWorks, Testimonials } from "./home";
import { ScrollToTop } from "./hooks";

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
