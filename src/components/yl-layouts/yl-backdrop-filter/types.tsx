import {
  EYLCSSProperties,
  YLCSSProperties,
} from "@/components/yl-utils/yl-global-enums";
import {
  IClassName,
  IDimension,
  IPosition,
  IYLMediaQuery,
  IZIndex,
} from "@/components/yl-utils/yl-global-interfaces";

export const YL_BACKDROP_FILTER_NAME = "--yl-background-filter";

export type YLBackdropFilterName = "--yl-background-filter";

export type YLBackdropFilterStyle = `${YLBackdropFilterName}-${Extract<
  YLCSSProperties,
  | `${EYLCSSProperties.inlineSize}`
  | `${EYLCSSProperties.blockSize}`
  | `${EYLCSSProperties.backdropFilter}`
  | `${EYLCSSProperties.position}`
  | `${EYLCSSProperties.top}`
  | `${EYLCSSProperties.left}`
  | `${EYLCSSProperties.right}`
  | `${EYLCSSProperties.bottom}`
  | `${EYLCSSProperties.opacity}`
  | `${EYLCSSProperties.zIndex}`
>}`;

export interface IYLBackdropFilterStyle
  extends Partial<Record<YLBackdropFilterStyle, string>> {}

export interface IYLBackdropFilterProps
  extends IYLBackdropFilterStyleProps,
    IClassName {}

export interface IYLBackdropFilterStyleProps
  extends Partial<IDimension>,
    IPosition,
    IZIndex,
    IYLMediaQuery<IYLBackdropFilterStyleProps> {
  backdropFilter?: string;
  opacity?: string;
}
