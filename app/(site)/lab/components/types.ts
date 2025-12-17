export type MediaPropTypes = {
  src: string;
  alt: string;
  type: "image" | "video";
  setMediaSrc: (src: string, type: "image" | "video", alt?: string) => void;
  index: number;
}

export type SetMediaSrcPropTypes = {
  setMediaSrc: (src: string, type: "image" | "video", alt?: string) => void;
}