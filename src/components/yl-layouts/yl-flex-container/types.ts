import {
  EYLCSSProperties,
  YLCSSProperties,
} from "@/components/yl-utils/yl-global-enums";
import {
  DisplayValues,
  IBackgroundColor,
  IBorder,
  IBorderRadius,
  IBoxShadow,
  IChildren,
  IClassName,
  ICursor,
  IDimension,
  IDisplay,
  IEvent,
  IExtendedStyle,
  IFlex,
  IMargin,
  IOverflow,
  IPadding,
  IPosition,
  ITag,
  ITransform,
  ITransition,
  IYLMediaQuery,
  IZIndex,
  TagContainer,
} from "@/components/yl-utils/yl-global-interfaces";
import {
  IYLContainerHTMLProps,
  IYLContainerProps,
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
  extends Omit<IYLFlexContainerStyleBaseProps, "display">,
    IYLMediaQuery<IYLFlexContainerStyleProps> {
  display?: "flex" | "inline-flex";
}

export interface IYLFlexContainerStyleBaseProps
  extends IYLContainerStyleBaseProps,
    IFlex {}
