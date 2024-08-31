import {
  IChildren,
  IClassName,
} from "@/components/yl-utils/yl-global-interfaces";
import { MouseEvent } from "react";

export enum EYLButtonStyle {
  Filled = "FILLED",
  Outlined = "OUTLINED",
  Texted = "TEXTED",
  Elevated = "ELEVATED",
}

export enum EYLButtonSize {
  Small = "SMALL",
  Medium = "MEDIUM",
  Large = "LARGE",
}

export interface YLButtonProps extends IClassName, Partial<IChildren> {
  label?: string;

  style?: EYLButtonStyle;
  size?: EYLButtonSize;

  rounded?: boolean;
  collapsed?: boolean;
  disabled?: boolean;

  icon?: string;
  rightIcon?: string;
  loading?: boolean;

  onClick?: (e: MouseEvent) => void;

  ariaLabel?: any;
}
