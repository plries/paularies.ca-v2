    "use client";
import { useParams } from "next/navigation";
import { Button, InsetBlock } from "@/app/components";
import { ArrowIcon } from "@/public";
import { WORKS_PAGE_CONST, PROJECTS } from "./const";

export default function ProjectPage() {
    const params = useParams();
  const slug = params.slug as string;

  const constants = PROJECTS[slug] ?? null;

if (!constants) return <p>Loading...</p>;
    
    return (
        <>
        <Button
            theme="tertiary"
            icon={<ArrowIcon />}
            additionalClasses={{ container: "col-span-full", icon: "rotate-180"}} iconRight={false} onClick={() => {}}>
            {WORKS_PAGE_CONST.BUTTONS.BACK}
            </Button> 
            <InsetBlock>
                <h1>{constants.TITLE}</h1>
            </InsetBlock>
        </>
    );
  }
