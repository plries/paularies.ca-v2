import Image from "next/image";
import Highlight from "react-highlight";
import { AppWindowMac, CodeXml } from "lucide-react";
import { ViewToggle } from "@/app/components";
import { useViewToggle } from "@/app/hooks";

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
    <div className="flex w-full flex-col gap-2 relative">
      {!hook.isCode && PROCESS.IMAGE && (
        <>
          <div className="absolute -top-2 -right-2 shadow-md bg-greyscale-50 border-greyscale-950/5 dark:border-greyscale-50/5 dark:bg-greyscale-900 text-greyscale-600 dark:text-greyscale-400 mb-6 w-fit rounded-full border p-2">
            <AppWindowMac width={16} height={16} />
          </div>
          <Image
            src={PROCESS.IMAGE.SRC}
            alt={PROCESS.IMAGE.ALT}
            width={1920}
            height={1080}
            className="border-greyscale-950/10 dark:border-greyscale-50/10 bg-greyscale-50 dark:bg-greyscale-800 aspect-video h-full w-full rounded-lg border object-cover transition-[opacity,filter] duration-500 pointer-events-none"
          />
        </>
      )}
      {!hook.isCode && PROCESS.VIDEO && (
        <>
          <div className="absolute -top-2 -right-2 shadow-md bg-greyscale-100 border-greyscale-950/5 dark:border-greyscale-50/5 dark:bg-greyscale-900 text-greyscale-600 dark:text-greyscale-400 mb-6 w-fit rounded-full border p-2 pointer-events-none">
            <AppWindowMac width={16} height={16} />
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="border-greyscale-950/10 dark:border-greyscale-50/10 bg-greyscale-50 dark:bg-greyscale-800 aspect-video h-full w-full rounded-lg border object-cover transition-[opacity,filter] duration-500"
          >
            <source src={PROCESS.VIDEO} type="video/mp4" />
          </video>
        </>
      )}
      {hook.isCode && PROCESS.CODE && (
        <>
          <div className="absolute -top-2 -right-2 shadow-md bg-greyscale-100 border-greyscale-950/5 dark:border-greyscale-50/5 dark:bg-greyscale-900 text-greyscale-600 dark:text-greyscale-400 mb-6 w-fit rounded-full border p-2 pointer-events-none">
              <CodeXml width={16} height={16} />
            </div>
          <div className="border-greyscale-950/10 dark:border-greyscale-50/10 bg-greyscale-100 dark:bg-greyscale-800 aspect-video w-full overflow-y-auto rounded-lg border p-4">
            <Highlight className="text-greyscale-800 dark:text-greyscale-200">
              {PROCESS.CODE}
            </Highlight>
          </div>
        </>
      )}
      {PROCESS.CODE && (
        <ViewToggle isCode={hook.isCode} toggleView={hook.toggleView} />
      )}
    </div>
  );
};
