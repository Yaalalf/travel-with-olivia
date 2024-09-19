import { useYLComponentStyleMediaQueryVars } from "@/components/yl-hooks/use-style-media-query-vars";
import "./index.css";

import { EYLComponentsNames } from "@/components/yl-utils/yl-global-enums";
import {
  IYLMaskedImageProps,
  IYLMaskedImageStyleProps,
  YLMaskedImageStyle,
} from "./types";
import { splitMediaQueryObject } from "@/components/yl-utils/yl-utils";
import YlContainer from "../yl-container/yl-container";
export function YLMaskedImage({
  className,

  onClick,
  onTransitionEnd,
  tag,
  dataParentHover,
  dataParentActive,

  inlineSize,
  minInlineSize,
  maxInlineSize,
  blockSize,
  minBlockSize,
  maxBlockSize,

  padding,
  paddingBlock,
  paddingBlockEnd,
  paddingBlockStart,
  paddingInline,
  paddingInlineEnd,
  paddingInlineStart,

  margin,
  marginBlock,
  marginBlockEnd,
  marginBlockStart,
  marginInline,
  marginInlineEnd,
  marginInlineStart,

  display,

  border,
  borderBlock,
  borderBlockEnd,
  borderBlockStart,
  borderInline,
  borderInlineEnd,
  borderInlineStart,

  borderRadius,
  borderEndEndRadius,
  borderEndStartRadius,
  borderStartEndRadius,
  borderStartStartRadius,

  backgroundColor,
  boxShadow,

  maskImage,
  maskPosition,
  maskRepeat,
  maskSize,

  position,
  bottom,
  left,
  right,
  top,

  rotate,
  scale,
  transform,
  translate,
  filter,
  transformStyle,
  transition,
  transitionProperty,
  transformOrigin,

  opacity,
  overflow,
  cursor,
  zIndex,
  userSelect,
  mediaQuery = {},
  extendedStyles = {},

  activeStyle,
  hoverStyle,
  parentActiveStyle,
  parentHoverStyle,
}: IYLMaskedImageProps) {
  const [stylesMediaQuery, stylesExtendedMediaQuery] = splitMediaQueryObject(
    mediaQuery,
    ["maskImage", "maskPosition", "maskRepeat", "maskSize"]
  );

  const stylesExtendedProps = {
    inlineSize,
    minInlineSize,
    maxInlineSize,
    blockSize,
    minBlockSize,
    maxBlockSize,

    padding,
    paddingBlock,
    paddingBlockEnd,
    paddingBlockStart,
    paddingInline,
    paddingInlineEnd,
    paddingInlineStart,

    margin,
    marginBlock,
    marginBlockEnd,
    marginBlockStart,
    marginInline,
    marginInlineEnd,
    marginInlineStart,

    display,

    border,
    borderBlock,
    borderBlockEnd,
    borderBlockStart,
    borderInline,
    borderInlineEnd,
    borderInlineStart,

    borderRadius,
    borderEndEndRadius,
    borderEndStartRadius,
    borderStartEndRadius,
    borderStartStartRadius,

    bottom,
    left,
    position,
    right,
    top,

    backgroundColor,
    boxShadow,

    rotate,
    scale,
    transform,
    translate,

    filter,
    transformStyle,

    transition,
    transitionProperty,
    transformOrigin,

    opacity,
    overflow,
    cursor,
    zIndex,
    userSelect,

    activeStyle,
    hoverStyle,
    parentActiveStyle,
    parentHoverStyle,
  };

  const domProps = {
    onClick,
    onTransitionEnd,
    tag,
    dataParentHover,
    dataParentActive,
  };

  const { styles } = useYLComponentStyleMediaQueryVars<
    YLMaskedImageStyle,
    IYLMaskedImageStyleProps
  >({
    name: EYLComponentsNames.YL_MASKED_IMAGE,
    props: {
      maskImage,
      maskPosition,
      maskRepeat,
      maskSize,
    },
    mediaQuery: stylesMediaQuery,
  });

  return (
    <YlContainer
      className={`yl-masked-image ${className || ""}`}
      {...stylesExtendedProps}
      mediaQuery={stylesExtendedMediaQuery}
      {...domProps}
      extendedStyles={{ ...styles, ...extendedStyles }}
    ></YlContainer>
  );
}
