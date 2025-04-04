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
  };
  icon?: React.ReactNode;
  iconRight?: boolean;
  isLink?: boolean;
  target?: string;
};
