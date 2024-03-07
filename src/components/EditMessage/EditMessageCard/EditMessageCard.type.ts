import { ReactElement } from "react";

export interface EditMessageCardProps {
  isRequired: boolean;
  isActive?: boolean;
  title: string;
  changeValue: Function;
  children: ReactElement;
  titleIcon: string;
  titleTooltipMessage?: string;
  changeVisibility: (value: boolean) => void;
}
