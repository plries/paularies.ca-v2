export type IconButtonPropTypes = {
  name: string;
  href?: string;
  theme: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
  additionalClasses?: {
    container?: string;
    button?: string;
  };
  icon: React.ReactNode;
  isLink?: boolean;
  target?: string;
};
