import {
  EYLCSSProperties,
  YLCSSProperties,
} from "@/components/yl-utils/yl-global-enums";
import {
  IFlex,
  IStateStyles,
  IYLMediaQuery,
} from "@/components/yl-utils/yl-global-interfaces";
import {
  IYLContainerHTMLProps,
  IYLContainerStyle,
  IYLContainerStyleBaseProps,
} from "../yl-container/types";

export const YL_FLEX_CONTAINER_NAME = "--yl-flex-container";

export type YLFlexContainerName = "--yl-flex-container";

export type YLFlexContainerStyle = `${YLFlexContainerName}-${Extract<
  YLCSSProperties,
  | `${EYLCSSProperties.flexDirection}`
  | `${EYLCSSProperties.flexWrap}`
  | `${EYLCSSProperties.alignItems}`
  | `${EYLCSSProperties.justifyContent}`
  | `${EYLCSSProperties.gap}`
>}`;

export interface IYLFlexContainerStyle
  extends Partial<Record<YLFlexContainerStyle, string>>,
    IYLContainerStyle {}

export interface IYLFlexContainerProps
  extends IYLFlexContainerStyleProps,
    IYLContainerHTMLProps {}

export interface IYLFlexContainerStyleProps
  extends IYLFlexContainerStyleBaseProps,
    IYLMediaQuery<IYLFlexContainerStyleProps>,
    IStateStyles<IYLFlexContainerStyleProps> {
  display?: "flex" | "inline-flex";
}

export interface IYLFlexContainerStyleBaseProps
  extends Omit<IYLContainerStyleBaseProps, "display">,
    IFlex {
  display?: "flex" | "inline-flex";
}
