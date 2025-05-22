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
  icon?: React.ReactNode | null;
  iconRight?: boolean;
  isLink?: boolean;
  noMotion?: boolean;
  noHover?: boolean;
  target?: string;
  disabled?: boolean;
  scroll?: boolean;
  tabIndex?: number;
};
