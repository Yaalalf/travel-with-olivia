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
  | "flex-direction"
  | "align-items"
  | "justify-content"
  | "gap"
  | "flex-wrap"
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
  | "z-index"
  | "backdrop-filter";

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

  boxShadow = "box-shadow",
  backdropFilter = "backdrop-filter",

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

  overflow = "overflow",
  opacity = "opacity",
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
  | "yl-backdrop-filter"
  | "yl-container"
  | "yl-card";

export enum EYLComponentsNames {
  YL_TEXT_HEADER = "yl-text-header",
  YL_TEXT = "yl-text",
  YL_DECORATOR_IMAGE = "yl-decorator-image",
  YL_BACKGROUND_IMAGE = "yl-background-image",
  YL_BACKGROUND_COLOR = "yl-background-color",
  YL_BACKDROP_FILTER = "yl-backdrop-filter",
  YL_CONTAINER = "yl-container",
  YL_FLEX_CONTAINER = "yl-flex-container",
  YL_CARD = "yl-card",
}
