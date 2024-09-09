import {
  EYLCSSProperties,
  YLCSSProperties,
} from "@/components/yl-utils/yl-global-enums";
import {
  IChildren,
  IClassName,
} from "@/components/yl-utils/yl-global-interfaces";
import { MouseEvent } from "react";

export const YL_BUTTON_NAME = "--yl-button";

export type YLButtonName = "--yl-button";

export type YLButtonStyle = `${YLButtonName}-${Extract<
  YLCSSProperties,
  `${EYLCSSProperties.inlineSize}`
>}`;

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
