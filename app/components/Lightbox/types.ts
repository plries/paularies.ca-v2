export type LightboxPropTypes = {
  isOpen: boolean;
  toggleLightbox: () => void;
  media: MediaType
  code: string | null
  lightboxRef?: React.RefObject<HTMLDivElement | null>
  closeButtonRef?: React.RefObject<HTMLButtonElement | null>
}

export type MediaType = {
  src: string;
  type: "image" | "video";
  alt?: string;
} | null;