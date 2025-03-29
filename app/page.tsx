import Image from "next/image";
import { INDEX_CONST } from "./const";
import { Dot } from "./components/";

export default function Home() {
  return (
    <section className="contents">
      <div className="bg-greyscale-100 shadow-inset-light col-span-full grid grid-cols-4 gap-3 rounded-3xl p-3 md:grid-cols-8 md:gap-4 md:px-6 md:py-24 lg:grid-cols-12 lg:py-36">
        <Image
          src={INDEX_CONST.HEADSHOT.SRC}
          alt={INDEX_CONST.HEADSHOT.ALT}
          height={1056}
          width={1056}
          className="col-span-2 col-start-2 aspect-square rounded-full md:col-start-4 lg:col-start-6"
        />
        <div className="contents h-full md:col-span-6 md:col-start-2 md:flex md:flex-row md:justify-center md:gap-4 lg:col-span-8 lg:col-start-3">
          <div className="col-span-2 col-start-2">
            <INDEX_CONST.LOGO />
          </div>
          <h1 className="col-span-full inline-flex h-fit flex-col gap-x-2 text-center text-2xl text-nowrap md:w-fit md:text-left md:text-[1.75rem] lg:text-[2rem]">
            {INDEX_CONST.INTRO[0]}
            <span className="inline-flex flex-row justify-center gap-x-2 md:justify-start">
              <span className="font-instrument-serif inline-flex h-fit flex-row items-center gap-1 italic">
                <Dot discipline="design" />
                {INDEX_CONST.INTRO[1]}
              </span>
              {INDEX_CONST.INTRO[2]}
              <span className="font-instrument-serif inline-flex h-fit flex-row items-center gap-1 italic">
                <Dot discipline="development" />
                {INDEX_CONST.INTRO[3]}
              </span>
            </span>
            <span className="inline-flex flex-row justify-center gap-x-2 md:justify-start">
              {INDEX_CONST.INTRO[4]}
              <span className="font-instrument-serif italic">
                {INDEX_CONST.INTRO[5]}
              </span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
