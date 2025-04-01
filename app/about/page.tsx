import { Heading } from "../components";
import { AboutHero, Experience, Skills, Values } from "./components";
import { HEADING_CONST } from "./const";

export default function About() {
  return (
    <>
      <Heading level="h1">{HEADING_CONST}</Heading>
      <AboutHero />
      <Skills />
      <Values />
      <Experience />
    </>
  );
}
