export type ButtonLinkPropTypes = {
  children: React.ReactNode;
  href?: string;
  theme: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
  additionalClasses?: {
    container?: string;
    button?: string;
    icon?: string;
    text?: string;
    hover?: string;
  };
  icon?: React.ReactNode;
  iconRight?: boolean;
  isLink?: boolean;
  noBlur?: boolean;
  noHover?: boolean;
  target?: string;
};
