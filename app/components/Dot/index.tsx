import { DotPropTypes } from "./types";

export const Dot = ({ discipline }: DotPropTypes) => {
  return (
    <div
      className={`h-2.5 w-2.5 rounded-full border-[1px] ${discipline === "design" ? "border-sky-500 bg-sky-600" : "bg-grass-600 border-grass-500"} `}
    ></div>
  );
};
