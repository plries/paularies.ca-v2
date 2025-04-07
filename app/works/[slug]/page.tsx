"use client";
import { WorksHero, Overview, Process, Reflection } from "./components";
import { Button, PageTransition } from "@/app/components";
import { ArrowIcon } from "@/public";
import { PROJECT_PAGE_CONST } from "./const";
import { useProjectPage } from "./useProjectPage";

export default function ProjectPage() {
  const hook = useProjectPage();

  return (
    <PageTransition>
      <Button
        theme="tertiary"
        icon={<ArrowIcon />}
        additionalClasses={{
          container: "col-span-full mb-12",
          icon: "rotate-180",
        }}
        iconRight={false}
        href="/works"
        isLink
      >
        {PROJECT_PAGE_CONST.BUTTONS.BACK}
      </Button>
      <WorksHero PROJECT={hook.constants} />
      <div className="col-span-full flex flex-col gap-16 lg:col-span-10 lg:col-start-2">
        <Overview PROJECT={hook.constants} />
        <Process PROJECT={hook.constants} />
        <Reflection PROJECT={hook.constants} />
      </div>
      <div className="col-span-full mt-12 flex w-full flex-row justify-between">
        <Button
          theme="tertiary"
          onClick={hook.handlePrevious}
          icon={<ArrowIcon />}
          additionalClasses={{ icon: "rotate-180" }}
        >
          {PROJECT_PAGE_CONST.BUTTONS.PREVIOUS}
        </Button>
        <Button
          theme="tertiary"
          onClick={hook.handleNext}
          icon={<ArrowIcon />}
          iconRight
        >
          {PROJECT_PAGE_CONST.BUTTONS.NEXT}
        </Button>
      </div>
    </PageTransition>
  );
}
