import Image from "next/image";
import { ViewToggle } from "@/app/components";
import { useViewToggle } from "@/app/hooks";
import Highlight from "react-highlight";

export const ProcessMedia = ({
  PROCESS,
}: {
  PROCESS: {
    HEADING: string;
    DESCRIPTION: string[];
    IMAGE?: { SRC: string; ALT: string };
    VIDEO?: string;
    CODE?: string;
  };
}) => {
  const hook = useViewToggle();

  return (
    <div className="flex w-full flex-col gap-2">
      {!hook.isCode && PROCESS.IMAGE && (
        <Image
          src={PROCESS.IMAGE.SRC}
          alt={PROCESS.IMAGE.ALT}
          width={1920}
          height={1080}
          className="border-greyscale-950/10 dark:border-greyscale-50/10 bg-greyscale-100 dark:bg-greyscale-800 aspect-video h-full w-full rounded-lg border object-cover transition-[opacity,filter] duration-500"
        />
      )}
      {!hook.isCode && PROCESS.VIDEO && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="border-greyscale-950/10 dark:border-greyscale-50/10 bg-greyscale-100 dark:bg-greyscale-800 aspect-video h-full w-full rounded-lg border object-cover transition-[opacity,filter] duration-500"
        >
          <source src={PROCESS.VIDEO} type="video/mp4" />
        </video>
      )}
      {hook.isCode && PROCESS.CODE && (
        <div className="border-greyscale-950/10 dark:border-greyscale-50/10 bg-greyscale-100 dark:bg-greyscale-800 aspect-video w-full overflow-y-auto rounded-lg border p-4">
          <Highlight className="text-greyscale-800 dark:text-greyscale-200">
            {PROCESS.CODE}
          </Highlight>
        </div>
      )}
      {PROCESS.CODE && (
        <ViewToggle isCode={hook.isCode} toggleView={hook.toggleView} />
      )}
    </div>
  );
};
