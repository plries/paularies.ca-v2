import { DotPropTypes } from "./types";

export const Dot = ({ discipline }: DotPropTypes) => {
  return (
    <div
      className={`h-2.5 w-2.5 rounded-full border ${discipline === "design" ? "border-sky-700 bg-sky-600" : "bg-grass-600 border-grass-700"} `}
    ></div>
  );
};
