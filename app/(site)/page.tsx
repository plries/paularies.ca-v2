import { Hero, Intro, SelectedWorks, Testimonials } from "@/app/(site)/home";
import { metadata } from "./home/"

export { metadata };

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <SelectedWorks />
      <Testimonials />
    </>
  );
}
