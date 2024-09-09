import {
  EYLCSSProperties,
  YLCSSProperties,
} from "@/components/yl-utils/yl-global-enums";
import {
  IBackgroundColor,
  IBackgroundImage,
  IClassName,
  IDimension,
  IPosition,
  IYLMediaQuery,
  IZIndex,
} from "@/components/yl-utils/yl-global-interfaces";

export const YL_BACKGROUND_COLOR_NAME = "--yl-background-color";

export type YLBackgroundColorName = "--yl-background-color";

export type YLBackgroundColorStyle = `${YLBackgroundColorName}-${Extract<
  YLCSSProperties,
  | `${EYLCSSProperties.inlineSize}`
  | `${EYLCSSProperties.blockSize}`
  | `${EYLCSSProperties.backgroundColor}`
  | `${EYLCSSProperties.backgroundImage}`
  | `${EYLCSSProperties.position}`
  | `${EYLCSSProperties.top}`
  | `${EYLCSSProperties.left}`
  | `${EYLCSSProperties.right}`
  | `${EYLCSSProperties.bottom}`
  | `${EYLCSSProperties.opacity}`
  | `${EYLCSSProperties.zIndex}`
>}`;

export interface IYLBackgroundColorStyle
  extends Partial<Record<YLBackgroundColorStyle, string>> {}

export interface IYLBackgroundColorProps
  extends IYLBackgroundColorStyleProps,
    IClassName {}

export interface IYLBackgroundColorStyleProps
  extends Partial<IDimension>,
    IPosition,
    IBackgroundColor,
    IBackgroundImage,
    IZIndex,
    IYLMediaQuery<IYLBackgroundColorStyleProps> {
  opacity?: string;
}
