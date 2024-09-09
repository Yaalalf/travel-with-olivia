import {
  EYLCSSProperties,
  YLCSSProperties,
} from "@/components/yl-utils/yl-global-enums";
import {
  IBackgroundImage,
  IClassName,
  IDimension,
  IFilter,
  IPosition,
  ITransform,
  IYLMediaQuery,
  IZIndex,
} from "@/components/yl-utils/yl-global-interfaces";

export const YL_DECORATOR_IMAGE_NAME = "--yl-decorator-image";

export type YLDecoratorImageName = "--yl-decorator-image";

export type YLDecoratorImageStyle = `${YLDecoratorImageName}-${Extract<
  YLCSSProperties,
  | `${EYLCSSProperties.inlineSize}`
  | `${EYLCSSProperties.blockSize}`
  | `${EYLCSSProperties.backgroundImage}`
  | `${EYLCSSProperties.backgroundRepeat}`
  | `${EYLCSSProperties.backgroundPosition}`
  | `${EYLCSSProperties.backgroundPositionX}`
  | `${EYLCSSProperties.backgroundPositionY}`
  | `${EYLCSSProperties.backgroundSize}`
  | `${EYLCSSProperties.filter}`
  | `${EYLCSSProperties.position}`
  | `${EYLCSSProperties.top}`
  | `${EYLCSSProperties.left}`
  | `${EYLCSSProperties.right}`
  | `${EYLCSSProperties.bottom}`
  | `${EYLCSSProperties.transform}`
  | `${EYLCSSProperties.zIndex}`
>}`;

export interface IYLDecoratorImageStyle
  extends Partial<Record<YLDecoratorImageStyle, string>> {}

export interface IYLDecoratorImageProps
  extends IYLDecoratorImageStyleProps,
    IClassName {}

export interface IYLDecoratorImageStyleProps
  extends Partial<IDimension>,
    IPosition,
    IBackgroundImage,
    IZIndex,
    ITransform,
    IFilter,
    IYLMediaQuery<IYLDecoratorImageStyleProps> {}
