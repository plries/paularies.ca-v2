export type IconButtonThemesEnum = "primary" | "secondary" | "tertiary";

export type IconButtonPropTypes = {
  theme: IconButtonThemesEnum;
  onClick?: () => void;
  additionalClasses?: string[];
  icon: React.ReactNode;
  name: string;
};
