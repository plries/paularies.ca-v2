"use client";
import { Note } from "@phosphor-icons/react";
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
          icon={
            <Note
              size={20}
              className="ease-in-out-circ mt-0.5 rotate-12 transition-transform duration-300 group-hover:rotate-0"
            />
          }
          iconRight
        >
          {ABOUT_CONST.BUTTON.TEXT}
        </Button>
      </ActionBar>
    </>
  );
}
