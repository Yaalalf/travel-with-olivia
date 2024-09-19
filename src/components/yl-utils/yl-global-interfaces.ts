import { MouseEvent, ReactNode, TransitionEventHandler } from "react";
import { ColorSwatch, EYLMediaQueryBreakPoints } from "./yl-global-enums";

/*********************************LOGIC UTILITY INTERFACES********************/
export interface IStateInput<T> {
  value: T;
  onChange: (value: string) => void;
  placeholder: string;
}

/*********************************DOM UTILITY INTERFACES********************/
/*******************************Children*****************************************/
export interface IChildren {
  children: ReactNode;
}

/*******************************ClassName*****************************************/
export interface IClassName {
  className?: string;
}

/*******************************Key*****************************************/
export interface IKey {
  key?: string;
}

/*******************************IEvent*****************************************/
export interface IEvent {
  onClick?: (event: MouseEvent) => void;
  onTransitionEnd?: TransitionEventHandler;
}

/*******************************ClassName*****************************************/
export interface ITagContainer {
  tag?: TagContainer | ETag;
}
export type TagTextHeader = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type TagText = "p" | "span";
export type TagContainer = "div" | "section" | "article" | "ul" | "button";

export interface ITag {
  tag?: ETag;
}

export enum ETag {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  p = "p",
  span = "span",

  div = "div",
  section = "section",
  article = "article",
  button = "button",
  ul = "ul",
}

/*******************************Dimension*****************************************/
export interface IDimension {
  inlineSize: string;
  minInlineSize: string;
  maxInlineSize: string;

  blockSize: string;
  minBlockSize: string;
  maxBlockSize: string;
}

/*******************************Position*****************************************/
export interface IPosition {
  position?: PositionValues;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

export type PositionValues =
  | "static"
  | "relative"
  | "absolute"
  | "fixed"
  | "sticky";

/*******************************Background*****************************************/
export interface IBackgroundColor {
  backgroundColor?: ColorSwatch | string;
}

export interface IBackgroundImage {
  backgroundImage?: string;
  backgroundRepeat?: BackgroundRepeat;
  backgroundPosition?: string;
  backgroundPositionX?: string;
  backgroundPositionY?: string;
  backgroundSize?: BackgroundSizeValues;
  backgroundBlendMode?: string;
}

export type BackgroundSizeValues = "cover" | "contain" | string;

export type BackgroundRepeat =
  | "repeat"
  | "repeat-x"
  | "repeat-y"
  | "space"
  | "round"
  | "no-repeat";

/*******************************Mask*****************************************/

export interface IMaskImage {
  maskImage?: string;
  maskRepeat?: BackgroundRepeat;
  maskPosition?: string;

  maskSize?: string;
}

/*******************************BoxShadow*****************************************/
export interface IBoxShadow {
  boxShadow?: string;
}
/*******************************Filter*****************************************/
export interface IFilter {
  filter?: string;
}

/*******************************BoxSizing*****************************************/
export interface IBoxSizing {
  boxSizing?: BoxSizing;
}
export type BoxSizing = "border-box" | "content-box";

/*******************************Padding*****************************************/
export interface IPadding {
  padding?: string;
  paddingBlock?: string;
  paddingBlockStart?: string;
  paddingBlockEnd?: string;
  paddingInline?: string;
  paddingInlineStart?: string;
  paddingInlineEnd?: string;
}

/*******************************Margin*****************************************/
export interface IMargin {
  margin?: string;
  marginBlock?: string;
  marginBlockStart?: string;
  marginBlockEnd?: string;
  marginInline?: string;
  marginInlineStart?: string;
  marginInlineEnd?: string;
}
/*******************************Display*****************************************/
export interface IDisplay {
  display?: DisplayValues;
}
export type DisplayValues =
  | "block"
  | "inline"
  | "inline-block"
  | "flex"
  | "inline-flex"
  | "grid"
  | "inline-grid"
  | "flow-root";
/*******************************Flex*****************************************/
export interface IFlex {
  flexDirection?: FlexDirectionValues;

  alignItems?: AlignItemsValues;
  justifyContent?: JustifyContentValues;

  gap?: string;

  flexWrap?: FlexWrapValues;
}

export type FlexDirectionValues =
  | "column"
  | "column-reverse"
  | "row"
  | "row-reverse";

export type AlignItemsValues = "center" | "flex-end" | "flex-start";
export type JustifyContentValues =
  | "center"
  | "flex-end"
  | "flex-start"
  | "space-between"
  | "space-around"
  | "space-evenly";
export type FlexWrapValues = "nowrap" | "wrap" | "wrap-reverse";

export interface IFlexChild {
  order?: string;
}

/*******************************BorderRadius*****************************************/
export interface IBorderRadius {
  borderRadius?: string;
  borderStartStartRadius?: string;
  borderStartEndRadius?: string;
  borderEndStartRadius?: string;
  borderEndEndRadius?: string;
}

/*******************************Border*****************************************/
export interface IBorder {
  border?: string;

  borderBlock?: string;
  borderBlockStart?: string;
  borderBlockEnd?: string;

  borderInline?: string;
  borderInlineStart?: string;
  borderInlineEnd?: string;
}
/*******************************Text*****************************************/
export interface IText {
  color?: ColorSwatch | string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  lineHeight?: string;
  textTransform?: TextTransform;
  textShadow?: string;
  textAlign?: TextAlign;
  textDecoration?: string;
}

export type TextTransform = "capitalize" | "lowercase" | "uppercase" | "none";
export type TextAlign = "center" | "left" | "right";

/*******************************Transform*****************************************/
export interface ITransform {
  transformOrigin?: string;
  transform?: string;
  translate?: string;
  rotate?: string;
  scale?: string;
}
/*******************************Transform*****************************************/
export interface ITransformStyle {
  transformStyle?: TransformStyle;
}
export type TransformStyle = "flat" | "preserve-3d" | "initial";

/*******************************Transition*****************************************/
export interface ITransition {
  transition?: string;
  transitionProperty?: string;
}

/*******************************Overflow*****************************************/
export interface IOverflow {
  overflow?: Overflow;
}

export type Overflow = "auto" | "visible" | "hidden" | "clip" | "scroll";

/*******************************User Select*****************************************/
export interface IUserSelect {
  userSelect?: string;
}

/*******************************Opacity*****************************************/
export interface IOpacity {
  opacity?: string;
}
/*******************************zIndex*****************************************/
export interface IZIndex {
  zIndex?: string;
}
/*******************************Cursor*****************************************/
export interface ICursor {
  cursor?: string;
}
/*******************************List*****************************************/
export interface IList {
  listStyle?: string;
}

/*******************************data-*****************************************/
export interface IDataSet {
  dataParentHover?: boolean;
  dataParentActive?: boolean;
  dataChildHover?: boolean;
  dataChildActive?: boolean;
}

/*******************************StateStyles*****************************************/
export interface IStateStyles<ComponentStyle> {
  hoverStyle?: ComponentStyle;
  parentHoverStyle?: ComponentStyle;
  childHoverStyle?: ComponentStyle;

  activeStyle?: ComponentStyle;
  parentActiveStyle?: ComponentStyle;
  childActiveStyle?: ComponentStyle;
}
/*******************************HoverState*****************************************/

export type YLHoverStylePropNames<YLStyles extends string> =
  `${YLStyles}-hover`;

export type IYLHoverState<YLStyles extends string> = Record<
  YLHoverStylePropNames<YLStyles>,
  string
>;

/*******************************ParentHoverState*****************************************/

export type YLParentHoverStylePropNames<YLStyles extends string> =
  `${YLStyles}-parent-hover`;

export type IYLParentHoverState<YLStyles extends string> = Record<
  YLParentHoverStylePropNames<YLStyles>,
  string
>;
/*******************************ParentHoverState*****************************************/

export type YLChildHoverStylePropNames<YLStyles extends string> =
  `${YLStyles}-parent-hover`;

export type IYLChildHoverState<YLStyles extends string> = Record<
  YLParentHoverStylePropNames<YLStyles>,
  string
>;
/*******************************ActiveState*****************************************/

export type YLActiveStylePropNames<YLStyles extends string> =
  `${YLStyles}-active`;

export type IYLActiveState<YLStyles extends string> = Record<
  YLActiveStylePropNames<YLStyles>,
  string
>;

/*******************************ParentActiveState*****************************************/

export type YLParentActiveStylePropNames<YLStyles extends string> =
  `${YLStyles}-parent-active`;

export type IYLParentActiveState<YLStyles extends string> = Record<
  YLParentActiveStylePropNames<YLStyles>,
  string
>;
/*******************************ChildActiveState*****************************************/

export type YLChildActiveStylePropNames<YLStyles extends string> =
  `${YLStyles}-parent-active`;

export type IYLChildActiveState<YLStyles extends string> = Record<
  YLParentActiveStylePropNames<YLStyles>,
  string
>;

/*******************************MediaQueryEndpoints*****************************************/
export interface IYLMediaQuery<IYLComponentStyleProps> {
  mediaQuery?: Partial<
    Record<YLMediaQueryBreakPoints, Partial<IYLComponentStyleProps>>
  >;
}

export type YLMediaQueryBreakPoints =
  | EYLMediaQueryBreakPoints.mobileFull
  | EYLMediaQueryBreakPoints.mobile360
  | EYLMediaQueryBreakPoints.mobile480
  | EYLMediaQueryBreakPoints.mobile600
  | EYLMediaQueryBreakPoints.mobile900
  | EYLMediaQueryBreakPoints.desktopFull
  | EYLMediaQueryBreakPoints.desktop1024
  | EYLMediaQueryBreakPoints.desktop1280
  | EYLMediaQueryBreakPoints.desktop1440
  | EYLMediaQueryBreakPoints.desktop1600;

export interface IYLMediaQueryBreakPoints<RecordKeys extends string> {
  // Indexed
  [index: string]: any;
  //Properties
  [EYLMediaQueryBreakPoints.mobileFull]: Partial<
    Record<`${RecordKeys}-${EYLMediaQueryBreakPoints.mobileFull}`, string>
  >;
  [EYLMediaQueryBreakPoints.mobile360]: Partial<
    Record<`${RecordKeys}-${EYLMediaQueryBreakPoints.mobile360}`, string>
  >;
  [EYLMediaQueryBreakPoints.mobile480]: Partial<
    Record<`${RecordKeys}-${EYLMediaQueryBreakPoints.mobile480}`, string>
  >;
  [EYLMediaQueryBreakPoints.mobile600]: Partial<
    Record<`${RecordKeys}-${EYLMediaQueryBreakPoints.mobile600}`, string>
  >;
  [EYLMediaQueryBreakPoints.mobile900]: Partial<
    Record<`${RecordKeys}-${EYLMediaQueryBreakPoints.mobile900}`, string>
  >;
  [EYLMediaQueryBreakPoints.desktopFull]: Partial<
    Record<`${RecordKeys}-${EYLMediaQueryBreakPoints.desktopFull}`, string>
  >;
  [EYLMediaQueryBreakPoints.desktop1024]: Partial<
    Record<`${RecordKeys}-${EYLMediaQueryBreakPoints.desktop1024}`, string>
  >;
  [EYLMediaQueryBreakPoints.desktop1280]: Partial<
    Record<`${RecordKeys}-${EYLMediaQueryBreakPoints.desktop1280}`, string>
  >;
  [EYLMediaQueryBreakPoints.desktop1440]: Partial<
    Record<`${RecordKeys}-${EYLMediaQueryBreakPoints.desktop1440}`, string>
  >;
  [EYLMediaQueryBreakPoints.desktop1600]: Partial<
    Record<`${RecordKeys}-${EYLMediaQueryBreakPoints.desktop1600}`, string>
  >;
}

export type YLComponentMediaQueryStyle<YLStyles extends string> = Partial<
  Record<`${YLStyles}` | `${YLStyles}-${YLMediaQueryBreakPoints}`, string>
>;
/*******************************StyleStateDelivery*****************************************/
export type StyleState<States extends string> = "default" | States;

export interface IStyleStateDelivery<
  State extends string,
  YLComponentStyleProps
> {
  states: StyleState<State>[];
  delivery: (state: StyleState<State>) => YLComponentStyleProps;
}

/*******************************ExtendsMechanics*****************************************/
export interface IExtendedStyle {
  extendedStyles?: Partial<Record<string, string>>;
}

/*******************************SVG*****************************************/

export type SVGStyleProps = "fill" | "height" | "width" | "strokeWidth";

export interface ISVGStyleProps {
  fill?: string | ColorSwatch;
  size?: string;
}
