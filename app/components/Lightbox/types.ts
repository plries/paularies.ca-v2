export type LightboxPropTypes = {
  isOpen: boolean;
  toggleLightbox: () => void;
  media: MediaType
  code?: string
  lightboxRef?: React.RefObject<HTMLDivElement | null>
  closeButtonRef?: React.RefObject<HTMLButtonElement | null>
  additionalClasses?: {
    container?: string;
    media?: string;
  }
}

export type MediaType = {
  src: string;
  type: "image" | "video";
  alt?: string;
} | null;