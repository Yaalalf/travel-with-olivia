import {
  EYLCSSProperties,
  YLCSSProperties,
} from "@/components/yl-utils/yl-global-enums";
import {
  IBackgroundColor,
  IClassName,
  IDimension,
  IMaskImage,
  IPosition,
  IYLMediaQuery,
  IZIndex,
} from "@/components/yl-utils/yl-global-interfaces";

export const YL_MASKED_IMAGE_NAME = "--yl-masked-image";

export type YLMaskedImageName = "--yl-masked-image";

export type YLMaskedImageStyle = `${YLMaskedImageName}-${Extract<
  YLCSSProperties,
  | `${EYLCSSProperties.inlineSize}`
  | `${EYLCSSProperties.blockSize}`
  | `${EYLCSSProperties.backgroundColor}`
  | `${EYLCSSProperties.maskImage}`
  | `${EYLCSSProperties.maskPosition}`
  | `${EYLCSSProperties.maskRepeat}`
  | `${EYLCSSProperties.maskSize}`
  | `${EYLCSSProperties.position}`
  | `${EYLCSSProperties.top}`
  | `${EYLCSSProperties.left}`
  | `${EYLCSSProperties.right}`
  | `${EYLCSSProperties.bottom}`
  | `${EYLCSSProperties.zIndex}`
>}`;

export interface IYLMaskedImageStyle
  extends Partial<Record<YLMaskedImageStyle, string>> {}

export interface IYLMaskedImageProps
  extends IYLMaskedImageStyleProps,
    IClassName {}

export interface IYLMaskedImageStyleProps
  extends Partial<IDimension>,
    IPosition,
    IMaskImage,
    IBackgroundColor,
    IZIndex,
    IYLMediaQuery<IYLMaskedImageStyleProps> {}
