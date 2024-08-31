import {
  EYLCSSProperties,
  YLCSSProperties,
} from "@/components/yl-utils/yl-global-enums";
import {
  IBackgroundColor,
  IBorder,
  IBorderRadius,
  IChildren,
  IClassName,
  IDimension,
  IMargin,
  IPadding,
  ITag,
  IYLMediaQuery,
  IZIndex,
} from "@/components/yl-utils/yl-global-interfaces";

export const YL_CARD_NAME = "--yl-card";

export type YLCardName = "--yl-card";

export type YLCardStyle = `${YLCardName}-${Extract<
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
  | `${EYLCSSProperties.backgroundColor}`
  | `${EYLCSSProperties.border}`
  | `${EYLCSSProperties.borderBlock}`
  | `${EYLCSSProperties.borderBlockStart}`
  | `${EYLCSSProperties.borderBlockEnd}`
  | `${EYLCSSProperties.borderInline}`
  | `${EYLCSSProperties.borderInlineStart}`
  | `${EYLCSSProperties.borderInlineEnd}`
  | `${EYLCSSProperties.borderRadius}`
  | `${EYLCSSProperties.borderStartStartRadius}`
  | `${EYLCSSProperties.borderStartEndRadius}`
  | `${EYLCSSProperties.borderEndStartRadius}`
  | `${EYLCSSProperties.borderEndEndRadius}`
  | `${EYLCSSProperties.zIndex}`
>}`;

export interface IYLCardStyle extends Partial<Record<YLCardStyle, string>> {}

export interface IYLCardProps
  extends IYLCardStyleProps,
    IClassName,
    IChildren {}

export interface IYLCardStyleProps
  extends Partial<IDimension>,
    IPadding,
    IMargin,
    IBackgroundColor,
    IBorder,
    IBorderRadius,
    IZIndex,
    IYLMediaQuery<IYLCardStyleProps> {}
