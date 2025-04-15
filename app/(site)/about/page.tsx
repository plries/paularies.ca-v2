import { ActionBar, Heading, Button } from "@/app/components";
import { AboutHero, Experience, Skills, Values } from "./components";
import { ArrowIcon } from "@/public";
import { ABOUT_CONST } from "./const";
import { ScrollToTop } from "@/app/hooks";

export default function About() {
  return (
    <>
      <ScrollToTop />
      <Heading level="h1">{ABOUT_CONST.HEADING}</Heading>
      <AboutHero />
      <Skills />
      <Values />
      <Experience />
      <ActionBar>
        <Button
          theme="primary"
          href={ABOUT_CONST.BUTTON.HREF}
          isLink
          noBlur
          target="_blank"
          icon={<ArrowIcon />}
          additionalClasses={{
            icon: "-rotate-45 transition-[rotate] duration-300 ease-in-out-circ group-hover:rotate-0",
          }}
          iconRight
        >
          {ABOUT_CONST.BUTTON.TEXT}
        </Button>
      </ActionBar>
    </>
  );
}
