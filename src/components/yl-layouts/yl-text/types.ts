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
  IStateStyles,
  ITag,
  IText,
  IYLMediaQuery,
  TagText,
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
  | `${EYLCSSProperties.textDecoration}`
>}`;

export interface IYLTextStyle extends Partial<Record<YLTextStyle, string>> {}

export interface IYLTextProps
  extends IYLTextStyleProps,
    IClassName,
    Partial<IChildren> {
  tag?: TagText;
}

export interface IYLTextStyleProps
  extends Partial<IDimension>,
    IPadding,
    IMargin,
    IText,
    IYLMediaQuery<IYLTextStyleProps>,
    IStateStyles<IYLTextStyleProps> {}
