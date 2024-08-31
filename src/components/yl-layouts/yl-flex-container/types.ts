import {
  EYLCSSProperties,
  YLCSSProperties,
} from "@/components/yl-utils/yl-global-enums";
import {
  IBackgroundColor,
  IBorder,
  IBorderRadius,
  IBoxShadow,
  IChildren,
  IClassName,
  IDimension,
  IFlex,
  IMargin,
  IOverflow,
  IPadding,
  IYLMediaQuery,
  IZIndex,
} from "@/components/yl-utils/yl-global-interfaces";
import { IYLContainerStyle } from "../yl-container/types";

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
    IClassName,
    Partial<IChildren> {}

export interface IYLFlexContainerStyleProps
  extends Partial<IDimension>,
    IPadding,
    IMargin,
    IBorderRadius,
    IBorder,
    IBoxShadow,
    IBackgroundColor,
    IFlex,
    IOverflow,
    IZIndex,
    IYLMediaQuery<IYLFlexContainerStyleProps> {}
