import { DotPropTypes } from "./types";

export const Dot = ({ discipline }: DotPropTypes) => {
  return (
    <div
      className={`h-2.5 w-2.5 rounded-full border shadow-sm ${discipline === "design" ? "border-sky-50/10 bg-sky-600 shadow-sky-600" : "bg-grass-600 border-grass-50/10 shadow-grass-600"} `}
    ></div>
  );
};
