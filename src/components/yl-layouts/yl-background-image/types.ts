import {
  EYLCSSProperties,
  YLCSSProperties,
} from "@/components/yl-utils/yl-global-enums";
import {
  IBackgroundImage,
  IClassName,
  IDimension,
  IPosition,
  IYLMediaQuery,
  IZIndex,
} from "@/components/yl-utils/yl-global-interfaces";

export const YL_BACKGROUND_IMAGE_NAME = "--yl-background-image";

export type YLBackgroundImageName = "--yl-background-image";

export type YLBackgroundImageStyle = `${YLBackgroundImageName}-${Extract<
  YLCSSProperties,
  | `${EYLCSSProperties.inlineSize}`
  | `${EYLCSSProperties.blockSize}`
  | `${EYLCSSProperties.backgroundImage}`
  | `${EYLCSSProperties.backgroundRepeat}`
  | `${EYLCSSProperties.backgroundPosition}`
  | `${EYLCSSProperties.backgroundPositionX}`
  | `${EYLCSSProperties.backgroundPositionY}`
  | `${EYLCSSProperties.backgroundSize}`
  | `${EYLCSSProperties.position}`
  | `${EYLCSSProperties.top}`
  | `${EYLCSSProperties.left}`
  | `${EYLCSSProperties.right}`
  | `${EYLCSSProperties.bottom}`
  | `${EYLCSSProperties.zIndex}`
>}`;

export interface IYLBackgroundImageStyle
  extends Partial<Record<YLBackgroundImageStyle, string>> {}

export interface IYLBackgroundImageProps
  extends IYLBackgroundImageStyleProps,
    IClassName {}

export interface IYLBackgroundImageStyleProps
  extends Partial<IDimension>,
    IPosition,
    IBackgroundImage,
    IZIndex,
    IYLMediaQuery<IYLBackgroundImageStyleProps> {}
