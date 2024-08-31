import {
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

export const YL_TEXT_HEADER_NAME = "--yl-text-header";

export type YLTextHeaderName = "--yl-text-header";

export type YLTextHeaderStyle = `${YLTextHeaderName}-${Extract<
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

export interface IYLTextHeaderStyle
  extends Partial<Record<YLTextHeaderStyle, string>> {}

export interface IYLTextHeaderProps
  extends IYLTextHeaderStyleProps,
    IClassName,
    Partial<IChildren>,
    ITag {}

export interface IYLTextHeaderStyleProps
  extends Partial<IDimension>,
    IPadding,
    IMargin,
    IYLMediaQuery<IYLTextHeaderStyleProps> {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  lineHeight?: string;
  textTransform?: EYLTextHeaderTransform;
  textShadow?: string;
  textAlign?: EYLTextHeaderTextAlign;
}

export enum EYLTextHeaderTransform {
  capitalize = "capitalize",
  lowercase = "lowercase",
  uppercase = "uppercase",
  none = "none",
}

export enum EYLTextHeaderTextAlign {
  center = "center",
  left = "left",
  right = "right",
}
