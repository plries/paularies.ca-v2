export type ButtonLinkPropTypes = {
  children: React.ReactNode;
  href: string;
  theme: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
  additionalClasses?: string[];
  icon?: React.ReactNode;
  isLink?: boolean;
};
