"use client";
import {
  WorksHero,
  Details,
  Overview,
  Process,
  Reflection,
} from "./components";
import { Button } from "@/app/components";
import { ArrowIcon } from "@/public";
import { PROJECT_PAGE_CONST } from "./const";
import { useProjectPage } from "./useProjectPage";

export default function ProjectPage() {
  const hook = useProjectPage();

  return (
    <>
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
        <Details PROJECT={hook.constants} />
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
    </>
  );
}
