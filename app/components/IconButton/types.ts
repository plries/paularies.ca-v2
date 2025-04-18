export type IconButtonPropTypes = {
  name: string;
  href?: string;
  theme: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
  additionalClasses?: {
    container?: string;
    button?: string;
    hover?: string;
  };
  icon: React.ReactNode;
  isLink?: boolean;
  noBlur?: boolean;
  noHover?: boolean;
  target?: string;
};
