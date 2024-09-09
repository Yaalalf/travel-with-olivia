/********************************CSSValues************************************************* */
export enum ETextTransform {
  capitalize = "capitalize",
  lowercase = "lowercase",
  uppercase = "uppercase",
  none = "none",
}

export enum ETextAlign {
  center = "center",
  left = "left",
  right = "right",
}

/********************************MediaQueryBreakPoints************************************************* */

export enum EYLMediaQueryBreakPoints {
  mobileFull = "360-1024",
  mobile360 = "360-480",
  mobile480 = "480-600",
  mobile600 = "600-900",
  mobile900 = "900-1024",
  desktopFull = "1024-1920",
  desktop1024 = "1024-1280",
  desktop1280 = "1280-1440",
  desktop1440 = "1440-1600",
  desktop1600 = "1600-1920",
}
/********************************CSSProperties************************************************* */

export type YLCSSProperties =
  | "inline-size"
  | "block-size"
  | "padding"
  | "padding-inline"
  | "padding-inline-start"
  | "padding-inline-end"
  | "padding-block"
  | "padding-block-start"
  | "padding-block-end"
  | "margin"
  | "margin-inline"
  | "margin-inline-start"
  | "margin-inline-end"
  | "margin-block"
  | "margin-block-start"
  | "margin-block-end"
  | "display"
  | "flex-direction"
  | "align-items"
  | "justify-content"
  | "gap"
  | "flex-wrap"
  | "order"
  | "color"
  | "font-size"
  | "line-height"
  | "font-weight"
  | "font-family"
  | "text-transform"
  | "text-shadow"
  | "text-align"
  | "background-color"
  | "background-image"
  | "background-repeat"
  | "background-position"
  | "background-position-x"
  | "background-position-y"
  | "background-size"
  | "background-blend-mode"
  | "mask-image"
  | "mask-repeat"
  | "mask-position"
  | "mask-size"
  | "box-shadow"
  | "border-radius"
  | "border-start-start-radius"
  | "border-start-end-radius"
  | "border-end-start-radius"
  | "border-end-end-radius"
  | "border"
  | "border-block"
  | "border-block-start"
  | "border-block-end"
  | "border-inline"
  | "border-inline-start"
  | "border-inline-end"
  | "position"
  | "top"
  | "left"
  | "right"
  | "bottom"
  | "opacity"
  | "overflow"
  | "transform-style"
  | "transform-origin"
  | "transform"
  | "translate"
  | "rotate"
  | "scale"
  | "transition"
  | "transition-property"
  | "list-style"
  | "z-index"
  | "cursor"
  | "backdrop-filter"
  | "user-select"
  | "filter";

export enum EYLCSSProperties {
  inlineSize = "inline-size",
  blockSize = "block-size",

  padding = "padding",
  paddingInline = "padding-inline",
  paddingInlineStart = "padding-inline-start",
  paddingInlineEnd = "padding-inline-end",
  paddingBlock = "padding-block",
  paddingBlockStart = "padding-block-start",
  paddingBlockEnd = "padding-block-end",

  margin = "margin",
  marginInline = "margin-inline",
  marginInlineStart = "margin-inline-start",
  marginInlineEnd = "margin-inline-end",
  marginBlock = "margin-block",
  marginBlockStart = "margin-block-start",
  marginBlockEnd = "margin-block-end",

  display = "display",

  flexDirection = "flex-direction",
  alignItems = "align-items",
  justifyContent = "justify-content",
  gap = "gap",
  flexWrap = "flex-wrap",

  color = "color",
  fontSize = "font-size",
  lineHeight = "line-height",
  fontWeight = "font-weight",
  fontFamily = "font-family",
  textTransform = "text-transform",
  textShadow = "text-shadow",
  textAlign = "text-align",

  backgroundColor = "background-color",
  backgroundImage = "background-image",
  backgroundRepeat = "background-repeat",
  backgroundPosition = "background-position",
  backgroundPositionX = "background-position-x",
  backgroundPositionY = "background-position-y",
  backgroundSize = "background-size",
  backgroundBlendMode = "background-blend-mode",

  maskImage = "mask-image",
  maskRepeat = "mask-repeat",
  maskPosition = "mask-position",
  maskSize = "mask-size",

  boxShadow = "box-shadow",
  backdropFilter = "backdrop-filter",
  filter = "filter",

  borderRadius = "border-radius",
  borderStartStartRadius = "border-start-start-radius",
  borderStartEndRadius = "border-start-end-radius",
  borderEndStartRadius = "border-end-start-radius",
  borderEndEndRadius = "border-end-end-radius",

  border = "border",

  borderBlock = "border-block",
  borderBlockStart = "border-block-start",
  borderBlockEnd = "border-block-end",

  borderInline = "border-inline",
  borderInlineStart = "border-inline-start",
  borderInlineEnd = "border-inline-end",

  position = "position",
  top = "top",
  left = "left",
  right = "right",
  bottom = "bottom",

  transformStyle = "transform-style",
  transformOrigin = "transform-origin",
  transform = "transform",
  translate = "translate",
  rotate = "rotate",
  scale = "scale",

  transition = "transition",
  transitionProperty = "transition-property",

  overflow = "overflow",
  opacity = "opacity",

  listStyle = "list-style",

  userSelect = "user-select",
  cursor = "cursor",
  zIndex = "z-index",
}

/********************************EmptyTextPlaceholder**************************************************/

export enum ETextPlaceholder {
  SMALL = "Lorem ipsum",
  MEDIUM = "Lorem ipsum dolor sit amet",
  LONG = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
}

/********************YLComponentsNames********************/
export type YLComponentName =
  | "yl-text-header"
  | "yl-text"
  | "yl-decorator-image"
  | "yl-background-image"
  | "yl-background-color"
  | "yl-flex-container"
  | "yl-flex-item"
  | "yl-backdrop-filter"
  | "yl-container"
  | "yl-card";

export enum EYLComponentsNames {
  YL_TEXT_HEADER = "yl-text-header",
  YL_TEXT = "yl-text",
  YL_DECORATOR_IMAGE = "yl-decorator-image",
  YL_MASKED_IMAGE = "yl-masked-image",
  YL_BACKGROUND_IMAGE = "yl-background-image",
  YL_BACKGROUND_COLOR = "yl-background-color",
  YL_BACKDROP_FILTER = "yl-backdrop-filter",
  YL_CONTAINER = "yl-container",
  YL_FLEX_CONTAINER = "yl-flex-container",
  YL_FLEX_ITEM = "yl-flex-item",
  YL_CARD = "yl-card",
  YL_LIST = "yl-list",
}
/********************YLStateStylesNames********************/
export type YLStateStylesName = "hover" | "parent-hover";

export enum EYLStateStylesNames {
  HOVER = "hover",
  PARENT_HOVER = "parent-hover",
}
/********************YLColorSwatch**********************/

export type blueSwatch =
  | "#b6c0e1"
  | "#808bb0"
  | "#576389"
  | "#3f4f86"
  | "#1e3068";

export enum EBlueSwath {
  blue1 = "#b6c0e1",
  blue2 = "#808bb0",
  blue3 = "#576389",
  blue4 = "#3f4f86",
  blue5 = "#1e3068",
}

export type whiteSwatch =
  | "#ffffff"
  | "#f7f7f7"
  | "#f1f1f1"
  | "#dcdcdc"
  | "#cfcfcf";

export enum EWhiteSwatch {
  white1 = "#ffffff",
  white2 = "#f7f7f7",
  white3 = "#f1f1f1",
  white4 = "#dcdcdc",
  white5 = "#cfcfcf",
}

export type greySwatch =
  | "#ffffff"
  | "#f7f7f7"
  | "#f1f1f1"
  | "#dcdcdc"
  | "#cfcfcf";

export enum EGreySwatch {
  grey1 = "#a3a3a3",
  grey2 = "#9e9e9e",
  grey3 = "#848484",
  grey4 = "#7c7c7c",
  grey5 = "#545454",
}

export type ColorSwatch = blueSwatch | whiteSwatch | greySwatch;
