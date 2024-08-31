import { MouseEvent, ReactNode } from "react";
import { EYLMediaQueryBreakPoints } from "./yl-global-enums";

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
}

/*******************************ClassName*****************************************/
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
}

/*******************************Dimension*****************************************/
export interface IDimension {
  inlineSize: string;
  blockSize: string;
}

/*******************************Position*****************************************/
export interface IPosition {
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

/*******************************Background*****************************************/
export interface IBackgroundColor {
  backgroundColor?: string;
}
export interface IBackgroundImage {
  backgroundImage?: string;
  backgroundRepeat?: EBackgroundRepeat;
  backgroundPosition?: string;
  backgroundPositionX?: string;
  backgroundPositionY?: string;
  backgroundSize?: string;
}

export enum EBackgroundRepeat {
  repeat = "repeat",
  repeatX = "repeat-x",
  repeatY = "repeat-y",
  space = "space",
  round = "round",
  noRepeat = "no-repeat",
}

/*******************************Background*****************************************/
export interface IBoxShadow {
  boxShadow?: string;
}

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

/*******************************Flex*****************************************/
export interface IFlex {
  flexDirection?: string;

  alignItems?: string;
  justifyContent?: string;

  gap?: string;

  flexWrap?: string;
}

/*******************************BorderRadius*****************************************/
export interface IBorderRadius {
  borderRadius?: string;
  borderStartStartRadius?: string;
  borderStartEndRadius?: string;
  borderEndStartRadius?: string;
  borderEndEndRadius?: string;
}

/*******************************IBorder*****************************************/
export interface IBorder {
  border?: string;

  borderBlock?: string;
  borderBlockStart?: string;
  borderBlockEnd?: string;

  borderInline?: string;
  borderInlineStart?: string;
  borderInlineEnd?: string;
}

/*******************************Overflow*****************************************/
export interface IOverflow {
  overflow?: string;
}

/*******************************zIndex*****************************************/
export interface IZIndex {
  zIndex?: string;
}

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

/*******************************ExtendsMechanics*****************************************/
export interface IExtendedStyle {
  extendedStyles?: Partial<Record<string, string>>;
}
