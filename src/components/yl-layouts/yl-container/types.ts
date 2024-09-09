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
  ICursor,
  IDataSet,
  IDimension,
  IDisplay,
  IEvent,
  IExtendedStyle,
  IFilter,
  IMargin,
  IOpacity,
  IOverflow,
  IPadding,
  IPosition,
  IStateStyles,
  ITagContainer,
  ITransform,
  ITransformStyle,
  ITransition,
  IUserSelect,
  IYLMediaQuery,
  IZIndex,
} from "@/components/yl-utils/yl-global-interfaces";

export const YL_CONTAINER_NAME = "--yl-container";

export type YLContainerName = "--yl-container";

export type YLContainerStyle = `${YLContainerName}-${Extract<
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
  | `${EYLCSSProperties.display}`
  | `${EYLCSSProperties.borderRadius}`
  | `${EYLCSSProperties.borderStartStartRadius}`
  | `${EYLCSSProperties.borderStartEndRadius}`
  | `${EYLCSSProperties.borderEndStartRadius}`
  | `${EYLCSSProperties.borderEndEndRadius}`
  | `${EYLCSSProperties.border}`
  | `${EYLCSSProperties.borderBlock}`
  | `${EYLCSSProperties.borderBlockStart}`
  | `${EYLCSSProperties.borderBlockEnd}`
  | `${EYLCSSProperties.borderInline}`
  | `${EYLCSSProperties.borderInlineStart}`
  | `${EYLCSSProperties.borderInlineEnd}`
  | `${EYLCSSProperties.boxShadow}`
  | `${EYLCSSProperties.position}`
  | `${EYLCSSProperties.top}`
  | `${EYLCSSProperties.left}`
  | `${EYLCSSProperties.bottom}`
  | `${EYLCSSProperties.right}`
  | `${EYLCSSProperties.backgroundColor}`
  | `${EYLCSSProperties.transformStyle}`
  | `${EYLCSSProperties.transform}`
  | `${EYLCSSProperties.translate}`
  | `${EYLCSSProperties.rotate}`
  | `${EYLCSSProperties.scale}`
  | `${EYLCSSProperties.transition}`
  | `${EYLCSSProperties.transitionProperty}`
  | `${EYLCSSProperties.opacity}`
  | `${EYLCSSProperties.filter}`
  | `${EYLCSSProperties.overflow}`
  | `${EYLCSSProperties.cursor}`
  | `${EYLCSSProperties.zIndex}`
>}`;

export interface IYLContainerStyle
  extends Partial<Record<YLContainerStyle, string>> {}

export interface IYLContainerProps
  extends IYLContainerStyleProps,
    IYLContainerHTMLProps {}

export interface IYLContainerHTMLProps
  extends IClassName,
    Partial<IChildren>,
    ITagContainer,
    IEvent,
    IDataSet,
    IExtendedStyle {}

export interface IYLContainerStyleProps
  extends IYLContainerStyleBaseProps,
    IYLMediaQuery<IYLContainerStyleProps>,
    IStateStyles<IYLContainerStyleProps> {}

export interface IYLContainerStyleBaseProps
  extends Partial<IDimension>,
    IPadding,
    IMargin,
    IDisplay,
    IBorderRadius,
    IBorder,
    IBoxShadow,
    IPosition,
    IFilter,
    IBackgroundColor,
    ITransform,
    ITransformStyle,
    ITransition,
    IOverflow,
    IZIndex,
    IOpacity,
    IUserSelect,
    ICursor {}
