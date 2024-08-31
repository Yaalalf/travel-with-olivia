import {
  EYLCSSProperties,
  YLCSSProperties,
} from "@/components/yl-utils/yl-global-enums";
import {
  IChildren,
  IClassName,
  IDimension,
  IFlex,
  IMargin,
  IPadding,
  IYLMediaQuery,
  IZIndex,
  YLMediaQueryBreakPoints,
} from "@/components/yl-utils/yl-global-interfaces";

export const YL_FLEX_CONTAINER_NAME = "--yl-flex-container";

export type YLFlexContainerName = "--yl-flex-container";

export type YLFlexContainerStyle = `${YLFlexContainerName}-${Extract<
  YLCSSProperties,
  | `${EYLCSSProperties.inlineSize}`
  | `${EYLCSSProperties.blockSize}`
  | `${EYLCSSProperties.padding}`
  | `${EYLCSSProperties.paddingInline}`
  | `${EYLCSSProperties.paddingInlineStart}`
  | `${EYLCSSProperties.paddingInlineEnd}`
  | `${EYLCSSProperties.paddingBlock}`
  | `${EYLCSSProperties.paddingBlockStart}`
  | `${EYLCSSProperties.paddingBlockEnd}`
  | `${EYLCSSProperties.margin}`
  | `${EYLCSSProperties.marginInline}`
  | `${EYLCSSProperties.marginInlineStart}`
  | `${EYLCSSProperties.marginInlineEnd}`
  | `${EYLCSSProperties.marginBlock}`
  | `${EYLCSSProperties.marginBlockStart}`
  | `${EYLCSSProperties.marginBlockEnd}`
  | `${EYLCSSProperties.flexDirection}`
  | `${EYLCSSProperties.flexWrap}`
  | `${EYLCSSProperties.alignItems}`
  | `${EYLCSSProperties.justifyContent}`
  | `${EYLCSSProperties.gap}`
  | `${EYLCSSProperties.zIndex}`
>}`;

export interface IYLFlexContainerStyle
  extends Partial<Record<YLFlexContainerStyle, string>> {}

export interface IYLFlexContainerProps
  extends IYLFlexContainerStyleProps,
    IClassName,
    IChildren {}

export interface IYLFlexContainerStyleProps
  extends Partial<IDimension>,
    IPadding,
    IMargin,
    IFlex,
    IZIndex,
    IYLMediaQuery<IYLFlexContainerStyleProps> {}
