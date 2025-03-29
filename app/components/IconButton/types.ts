export type IconButtonPropTypes = {
  name: string;
  href?: string;
  theme: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
  additionalClasses?: string[];
  icon: React.ReactNode;
  isLink?: boolean;
};
