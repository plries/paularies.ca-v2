import { Hero, Intro, SelectedWorks } from "./home";

export default function Home() {
  return (
    <section className="contents">
      <Hero />
      <Intro />
      <SelectedWorks />
    </section>
  );
}
