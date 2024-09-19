import {
  EYLCSSProperties,
  YLCSSProperties,
} from "@/components/yl-utils/yl-global-enums";
import {
  IMaskImage,
  IStateStyles,
  IYLMediaQuery,
} from "@/components/yl-utils/yl-global-interfaces";
import {
  IYLContainerHTMLProps,
  IYLContainerStyle,
  IYLContainerStyleBaseProps,
} from "../yl-container/types";

export const YL_MASKED_IMAGE_NAME = "--yl-masked-image";

export type YLMaskedImageName = "--yl-masked-image";

export type YLMaskedImageStyle = `${YLMaskedImageName}-${Extract<
  YLCSSProperties,
  | `${EYLCSSProperties.maskImage}`
  | `${EYLCSSProperties.maskPosition}`
  | `${EYLCSSProperties.maskRepeat}`
  | `${EYLCSSProperties.maskSize}`
>}`;

export interface IYLMaskedImageStyle
  extends Partial<Record<YLMaskedImageStyle, string>>,
    IYLContainerStyle {}

export interface IYLMaskedImageProps
  extends IYLMaskedImageStyleProps,
    IYLContainerHTMLProps {}

export interface IYLMaskedImageStyleProps
  extends IYLMaskedImageStyleBaseProps,
    IYLMediaQuery<IYLMaskedImageStyleProps>,
    IStateStyles<IYLMaskedImageStyleProps> {}

export interface IYLMaskedImageStyleBaseProps
  extends IYLContainerStyleBaseProps,
    IMaskImage {}
