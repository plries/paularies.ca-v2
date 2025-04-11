export type TestimonialCardPropTypes = {
  CLOSE: string;
  EXPAND: string;
  testimonial: {
    ISOPEN: boolean;
    IMAGE: {
      SRC: string;
      ALT: string;
    };
    NAME: string;
    TITLE: string;
    QUOTE: string[];
  };
  isOpen: boolean;
  toggleCard: (name: string) => void;
};
