export type LightboxPropTypes = {
  isOpen: boolean;
  toggleLightbox: () => void;
  media: MediaType
}

export type MediaType = {
  src: string;
  type: "image" | "video";
  alt?: string;
} | null;