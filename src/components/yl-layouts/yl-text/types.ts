import {
  ETextAlign,
  ETextTransform,
  EYLCSSProperties,
  YLCSSProperties,
} from "@/components/yl-utils/yl-global-enums";
import {
  IChildren,
  IClassName,
  IDimension,
  IMargin,
  IPadding,
  ITag,
  IYLMediaQuery,
} from "@/components/yl-utils/yl-global-interfaces";

export const YL_TEXT_NAME = "--yl-text";

export type YLTextName = "--yl-text";

export type YLTextStyle = `${YLTextName}-${Extract<
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
  | `${EYLCSSProperties.color}`
  | `${EYLCSSProperties.fontSize}`
  | `${EYLCSSProperties.lineHeight}`
  | `${EYLCSSProperties.fontWeight}`
  | `${EYLCSSProperties.fontFamily}`
  | `${EYLCSSProperties.textTransform}`
  | `${EYLCSSProperties.textShadow}`
  | `${EYLCSSProperties.textAlign}`
>}`;

export interface IYLTextStyle extends Partial<Record<YLTextStyle, string>> {}

export interface IYLTextProps
  extends IYLTextStyleProps,
    IClassName,
    Partial<IChildren>,
    ITag {}

export interface IYLTextStyleProps
  extends Partial<IDimension>,
    IPadding,
    IMargin,
    IYLMediaQuery<IYLTextStyleProps> {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  lineHeight?: string;
  textTransform?: ETextTransform;
  textShadow?: string;
  textAlign?: ETextAlign;
}
