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
  IExtendedStyle,
  IFlex,
  IMargin,
  IOverflow,
  IPadding,
  ITag,
  IYLMediaQuery,
  IZIndex,
} from "@/components/yl-utils/yl-global-interfaces";

export const YL_CONTAINER_NAME = "--yl-container";

export type YLContainerName = "--yl-container";

export type YLContainerStyle = `${YLContainerName}-${Extract<
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
  | `${EYLCSSProperties.borderRadius}`
  | `${EYLCSSProperties.borderStartStartRadius}`
  | `${EYLCSSProperties.borderStartEndRadius}`
  | `${EYLCSSProperties.borderEndStartRadius}`
  | `${EYLCSSProperties.borderEndEndRadius}`
  | `${EYLCSSProperties.border}`
  | `${EYLCSSProperties.borderBlock}`
  | `${EYLCSSProperties.borderBlockStart}`
  | `${EYLCSSProperties.borderBlockEnd}`
  | `${EYLCSSProperties.borderInline}`
  | `${EYLCSSProperties.borderInlineStart}`
  | `${EYLCSSProperties.borderInlineEnd}`
  | `${EYLCSSProperties.boxShadow}`
  | `${EYLCSSProperties.backgroundColor}`
  | `${EYLCSSProperties.overflow}`
  | `${EYLCSSProperties.zIndex}`
>}`;

export interface IYLContainerStyle
  extends Partial<Record<YLContainerStyle, string>> {}

export interface IYLContainerProps
  extends IYLContainerStyleProps,
    IClassName,
    Partial<IChildren>,
    ITag,
    IExtendedStyle {}

export interface IYLContainerStyleProps
  extends Partial<IDimension>,
    IPadding,
    IMargin,
    IBorderRadius,
    IBorder,
    IBoxShadow,
    IBackgroundColor,
    IOverflow,
    IZIndex,
    IYLMediaQuery<IYLContainerStyleProps> {}
