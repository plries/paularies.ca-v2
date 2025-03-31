import { Hero, Intro, SelectedWorks, Testimonials } from "./home";

export default function Home() {
  return (
    <section className="contents">
      <Hero />
      <Intro />
      <SelectedWorks />
      <Testimonials />
    </section>
  );
}
