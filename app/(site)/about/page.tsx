import { FileUser } from "lucide-react";
import { ActionBar, Heading, Button } from "@/app/components";
import { AboutHero, Experience, Skills, Values, Facts } from "./components";
import { ABOUT_CONST } from "./const";

export default function About() {
  return (
    <>
      <Heading level="h1">{ABOUT_CONST.HEADING}</Heading>
      <AboutHero />
      <Skills />
      <Values />
      <Experience />
      <Facts />
      <ActionBar>
        <Button
          theme="primary"
          href={ABOUT_CONST.BUTTON.HREF}
          isLink
          noBlur
          target="_blank"
          icon={<FileUser width={20} height={20} />}
          iconRight
        >
          {ABOUT_CONST.BUTTON.TEXT}
        </Button>
      </ActionBar>
    </>
  );
}
