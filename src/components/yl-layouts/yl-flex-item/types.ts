import {
  EYLCSSProperties,
  YLCSSProperties,
} from "@/components/yl-utils/yl-global-enums";
import {
  IBackgroundColor,
  IBorder,
  IBorderRadius,
  IBoxShadow,
  IChildren,
  IClassName,
  IDimension,
  IEvent,
  IFlex,
  IFlexChild,
  IKey,
  IMargin,
  IOverflow,
  IPadding,
  IPosition,
  IYLMediaQuery,
  IZIndex,
} from "@/components/yl-utils/yl-global-interfaces";
import { IYLContainerStyle } from "../yl-container/types";

export const YL_FLEX_ITEM_NAME = "--yl-flex-item";

export type YLFlexItemName = "--yl-flex-item";

export type YLFlexItemStyle = `${YLFlexItemName}-${Extract<
  YLCSSProperties,
  | `${EYLCSSProperties.flexDirection}`
  | `${EYLCSSProperties.flexWrap}`
  | `${EYLCSSProperties.alignItems}`
  | `${EYLCSSProperties.justifyContent}`
  | `${EYLCSSProperties.gap}`
>}`;

export interface IYLFlexItemStyle
  extends Partial<Record<YLFlexItemStyle, string>>,
    IYLContainerStyle {}

export interface IYLFlexItemProps
  extends IYLFlexItemStyleProps,
    IClassName,
    IEvent,
    Partial<IChildren> {}

export interface IYLFlexItemStyleProps
  extends Partial<IDimension>,
    IPadding,
    IMargin,
    IBorderRadius,
    IBorder,
    IBoxShadow,
    IBackgroundColor,
    IPosition,
    IFlexChild,
    IOverflow,
    IZIndex,
    IYLMediaQuery<IYLFlexItemStyleProps> {}
